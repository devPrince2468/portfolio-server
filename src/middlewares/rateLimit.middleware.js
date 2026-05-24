import rateLimit from "express-rate-limit";

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },
  // Trust proxy is configured in app.js; disable throws on Railway's X-Forwarded-For
  validate: {
    trustProxy: false,
    xForwardedForHeader: false,
  },
});
