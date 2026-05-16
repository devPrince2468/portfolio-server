import { z } from "zod";

/** Body for POST /contact — status is always "new" for new submissions (not taken from client). */
export const contactMessageSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z.string().email().max(320),
  message: z.string().min(1, "Message is required").max(5000),
});
