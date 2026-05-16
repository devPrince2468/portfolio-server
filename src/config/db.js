import dns from "node:dns";
import mongoose from "mongoose";
import { env } from "./env.js";
import { logger } from "./logger.js";

const configureDnsForMongoSrv = () => {
  if (!env.MONGO_URI.startsWith("mongodb+srv://")) {
    return;
  }

  const servers =
    process.env.DNS_SERVERS?.split(",")
      .map((server) => server.trim())
      .filter(Boolean) ?? ["8.8.8.8", "1.1.1.1"];

  dns.setServers(servers);
};

export const connectDB = async () => {
  configureDnsForMongoSrv();

  const connection = await mongoose.connect(env.MONGO_URI);

  logger.info(`MongoDB connected: ${connection.connection.host}`);
};
