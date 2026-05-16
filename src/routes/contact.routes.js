import { Router } from "express";
import { createContact } from "../controllers/contact.controller.js";
import { validate } from "../middlewares/validate.middleware.js";
import { contactSchema } from "../validations/contact.validation.js";
import { contactLimiter } from "../middlewares/rateLimit.middleware.js";

export const contactRouter = Router();

contactRouter.post(
  "/",
  contactLimiter,
  validate(contactSchema),
  createContact
);
