// import "dotenv/config";
// import cors from "cors";
// import express from "express";
// import { connectDB } from "./db.js";
// import { contactRouter } from "./routes/contact.js";
// import { sendRouter } from "./routes/send.js";

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("API is running");
// });

// app.use("/contact", contactRouter);

// const port = process.env.PORT ?? 8080;

// async function main() {
//   await connectDB();
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// }

// main().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });

import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";

import { contactRouter } from "./src/routes/contact.routes.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";

export const app = express();

// security
app.use(helmet());

// cors
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// body parser
app.use(express.json({ limit: "10kb" }));

// compression
app.use(compression());

// health check
app.get("/health", (_, res) => {
  res.status(200).json({
    success: true,
    status: "ok",
  });
});

// routes
app.use("/api/contact", contactRouter);

// 404 handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: `Route not found: ${req.originalUrl}`,
  });
});

// global error middleware
app.use(errorMiddleware);