import { ContactMessage } from "../models/ContactMessage.js";
import { sendMail } from "./mail.service.js";
import { contactNotificationTemplate } from "../templates/contactNotification.template.js";
import { autoReplyTemplate } from "../templates/autoReply.template.js";
import { env } from "../config/env.js";
import { logger } from "../config/logger.js";
import { sanitizeInput } from "../utils/sanitize.js";

const sendContactEmails = async (payload) => {
  let notificationSent = false;
  let autoReplySent = false;

  try {
    await sendMail({
      to: env.RECEIVER_EMAIL,
      replyTo: payload.email,
      subject: `Portfolio Contact From ${payload.name}`,
      html: contactNotificationTemplate(payload),
    });
    notificationSent = true;
  } catch (error) {
    logger.warn({ err: error }, "Contact notification email failed");
  }

  try {
    await sendMail({
      to: payload.email,
      subject: "Thanks for contacting me",
      html: autoReplyTemplate(payload.name),
    });
    autoReplySent = true;
  } catch (error) {
    logger.warn(
      { err: error },
      "Contact auto-reply email failed (verify a domain on Resend to send to visitors)"
    );
  }

  return { notificationSent, autoReplySent };
};

export const createContactService = async (payload) => {
  const sanitizedPayload = {
    name: sanitizeInput(payload.name),
    email: sanitizeInput(payload.email),
    message: sanitizeInput(payload.message),
  };

  const savedMessage = await ContactMessage.create(sanitizedPayload);
  const { notificationSent, autoReplySent } = await sendContactEmails(payload);

  return {
    savedMessage,
    emailDelivered: notificationSent,
    autoReplySent,
  };
};
