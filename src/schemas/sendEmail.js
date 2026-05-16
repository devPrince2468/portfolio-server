import { z } from "zod";

export const sendEmailSchema = z
  .object({
    to: z.email(),
    subject: z.string().min(1, "Subject is required"),
    text: z.string().optional(),
    html: z.string().optional(),
  })
  .refine((data) => !!(data.text?.trim() || data.html?.trim()), {
    message: "Either text or html must be provided",
    path: ["text"],
  });
