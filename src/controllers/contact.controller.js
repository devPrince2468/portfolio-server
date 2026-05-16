import { asyncHandler } from "../utils/asyncHandler.js";
import { createContactService } from "../services/contact.service.js";
import { successResponse } from "../utils/response.js";

export const createContact = asyncHandler(async (req, res) => {
  const result = await createContactService(req.body);

  return res.status(201).json(
    successResponse({
      message: "Message submitted successfully",
      data: result,
    })
  );
});
