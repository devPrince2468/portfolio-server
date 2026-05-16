import { transporter } from "../config/mail.js";
import { env } from "../config/env.js";
import { logger } from "../config/logger.js";

export const sendMail = async ({ to, subject, html, text, from }) => {
  try {
    const info = await transporter.sendMail({
      from: from ?? env.MAIL_FROM ?? env.SMTP_USER,
      to,
      subject,
      text,
      html,
    });

    logger.info({ messageId: info.messageId }, "Email sent");

    return info;
  } catch (error) {
    logger.error({ err: error }, "Email sending failed");

    throw error;
  }
};
