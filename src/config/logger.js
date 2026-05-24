import pino from "pino";
import { env } from "./env.js";

const isHostedRuntime = Boolean(
  process.env.RAILWAY_ENVIRONMENT_NAME ||
    process.env.RENDER ||
    process.env.RENDER_SERVICE_ID
);

const usePrettyLogs =
  env.NODE_ENV === "development" && !isHostedRuntime;

export const logger = usePrettyLogs
  ? pino({
      transport: {
        target: "pino-pretty",
      },
    })
  : pino();
