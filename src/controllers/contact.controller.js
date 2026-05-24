import { asyncHandler } from "../utils/asyncHandler.js";
import { createContactService } from "../services/contact.service.js";
import { successResponse } from "../utils/response.js";

export const createContact = asyncHandler(async (req, res) => {
  const { savedMessage, emailDelivered } = await createContactService(req.body);

  return res.status(201).json({
    ...successResponse({
      message: emailDelivered
        ? "Message submitted successfully"
        : "Message saved; email notification could not be sent",
      data: savedMessage,
    }),
    emailDelivered,
  });
});
