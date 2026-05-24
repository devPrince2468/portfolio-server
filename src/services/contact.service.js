import { ContactMessage } from "../models/ContactMessage.js";
import { sendMail } from "./mail.service.js";
import { contactNotificationTemplate } from "../templates/contactNotification.template.js";
import { autoReplyTemplate } from "../templates/autoReply.template.js";
import { env } from "../config/env.js";
import { logger } from "../config/logger.js";
import { sanitizeInput } from "../utils/sanitize.js";

const sendContactEmails = async (payload) => {
  await sendMail({
    to: env.RECEIVER_EMAIL,
    subject: `Portfolio Contact From ${payload.name}`,
    html: contactNotificationTemplate(payload),
  });

  await sendMail({
    to: payload.email,
    subject: "Thanks for contacting me",
    html: autoReplyTemplate(payload.name),
  });
};

export const createContactService = async (payload) => {
  const sanitizedPayload = {
    name: sanitizeInput(payload.name),
    email: sanitizeInput(payload.email),
    message: sanitizeInput(payload.message),
  };

  const savedMessage = await ContactMessage.create(sanitizedPayload);

  try {
    await sendContactEmails(payload);
    return { savedMessage, emailDelivered: true };
  } catch (error) {
    logger.warn(
      { err: error, code: error.code },
      "Contact saved but email delivery failed (SMTP is often blocked on Railway/Render free tiers)"
    );
    return { savedMessage, emailDelivered: false };
  }
};
