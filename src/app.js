import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

import { router } from "./routes/index.js";
import { requestLogger } from "./middlewares/requestLogger.middleware.js";
import { notFoundMiddleware } from "./middlewares/notFound.middleware.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { API_PREFIX } from "./utils/constants.js";
import { env } from "./config/env.js";

export const app = express();

app.use(helmet());

app.use(
  cors({
    origin: env.CLIENT_URL,
    credentials: true,
  })
);

app.use(express.json({ limit: "10kb" }));

app.use(compression());

app.use(requestLogger);

app.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
  });
});

app.use(API_PREFIX, router);

app.use(notFoundMiddleware);

app.use(errorMiddleware);
