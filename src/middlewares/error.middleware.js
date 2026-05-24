import { logger } from "../config/logger.js";
import { env } from "../config/env.js";

export const errorMiddleware = (err, req, res, next) => {
  logger.error(
    {
      err,
      method: req.method,
      path: req.originalUrl,
      stack: err.stack,
    },
    "Request failed"
  );

  const statusCode = err.statusCode || 500;
  const message =
    statusCode === 500 && env.NODE_ENV === "production"
      ? "Internal Server Error"
      : err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    message,
  });
};
