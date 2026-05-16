import { ContactMessage } from "../models/ContactMessage.js";
import { sendMail } from "./mail.service.js";
import { contactNotificationTemplate } from "../templates/contactNotification.template.js";
import { autoReplyTemplate } from "../templates/autoReply.template.js";
import { env } from "../config/env.js";
import { sanitizeInput } from "../utils/sanitize.js";

export const createContactService = async (payload) => {
  const sanitizedPayload = {
    name: sanitizeInput(payload.name),
    email: sanitizeInput(payload.email),
    message: sanitizeInput(payload.message),
  };

  const savedMessage = await ContactMessage.create(sanitizedPayload);

  await sendMail({
    to: env.RECEIVER_EMAIL,
    from: sanitizedPayload.email,
    subject: `Portfolio Contact From ${sanitizedPayload.name}`,
    html: contactNotificationTemplate(sanitizedPayload),
  });

  await sendMail({
    to: sanitizedPayload.email,
    from: env.MAIL_FROM ?? env.SMTP_USER,
    subject: "Thanks for contacting me",
    html: autoReplyTemplate(sanitizedPayload.name),
  });

  return savedMessage;
};
