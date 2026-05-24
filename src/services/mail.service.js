import { resend } from "../config/mail.js";
import { env } from "../config/env.js";

export const sendMail = async ({ to, subject, html, replyTo }) => {
  const { data, error } = await resend.emails.send({
    from: env.RESEND_FROM,
    to,
    subject,
    html,
    ...(replyTo ? { replyTo } : {}),
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
};
