import { asyncHandler } from "../utils/asyncHandler.js";
import { createContactService } from "../services/contact.service.js";
import { successResponse } from "../utils/response.js";

export const createContact = asyncHandler(async (req, res) => {
  const { savedMessage, emailDelivered, autoReplySent } =
    await createContactService(req.body);

  const message = emailDelivered
    ? autoReplySent
      ? "Message submitted successfully"
      : "Message submitted successfully (confirmation email could not be sent)"
    : "Message saved; email notification could not be sent";

  return res.status(201).json({
    ...successResponse({
      message,
      data: savedMessage,
    }),
    emailDelivered,
    autoReplySent,
  });
});
