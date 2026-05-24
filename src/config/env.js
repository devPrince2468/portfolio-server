import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.string().default("5000"),
  MONGO_URI: z.string(),
  CLIENT_URL: z.string().transform((value) =>
    value
      .split(",")
      .map((url) => url.trim().replace(/\/$/, ""))
      .filter(Boolean),
  ),
  RESEND_API_KEY: z.string().min(1),
  RESEND_FROM: z
    .string()
    .min(3)
    .refine(
      (value) =>
        z.email().safeParse(value).success ||
        /^.+\s<[^@\s]+@[^@\s]+\.[^@\s]+>$/.test(value),
      { message: "Must be email@domain.com or Name <email@domain.com>" },
    ),
  RECEIVER_EMAIL: z.string().email(),
});

export const env = envSchema.parse(process.env);
