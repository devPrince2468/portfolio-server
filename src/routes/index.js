import { Router } from "express";
import { contactRouter } from "./contact.routes.js";

export const router = Router();

router.use("/contact", contactRouter);
