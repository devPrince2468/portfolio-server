import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production"]).default("development"),
  PORT: z.string().default("5000"),
  MONGO_URI: z.string(),
  CLIENT_URL: z
    .string()
    .transform((url) => url.replace(/\/$/, "")),
  SMTP_HOST: z.string(),
  SMTP_PORT: z.string(),
  SMTP_USER: z.string(),
  SMTP_PASS: z
    .string()
    .transform((pass) => pass.replace(/^["']|["']$/g, "")),
  RECEIVER_EMAIL: z.string(),
});

export const env = envSchema.parse(process.env);
