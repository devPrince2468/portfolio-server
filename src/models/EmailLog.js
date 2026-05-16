import mongoose from "mongoose";

const emailLogSchema = new mongoose.Schema(
  {
    to: { type: String, required: true },
    subject: { type: String, required: true },
    text: { type: String },
    html: { type: String },
    status: { type: String, enum: ["sent", "failed"], required: true },
    messageId: { type: String },
    error: { type: String },
  },
  { timestamps: true }
);

export const EmailLog = mongoose.model("EmailLog", emailLogSchema);
