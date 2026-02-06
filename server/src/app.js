import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import mongoSanitize from "express-mongo-sanitize";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin: process.env.ALLOWED_ORIGINS,
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  }),
);

const limiter = rateLimit({
  max: 200,
  windowMs: 60 * 60 * 1000,
  message: "Too many request from this IP, please try Again in an hour",
  standardHeaders: true,
  legacyHeaders: false,
});
app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));

app.use(mongoSanitize());



app.all("*", (req, res, next) => {
  res
    .status(404)
    .json({ status: "fall", message: `cant't find ${req.originalUrl} ` });
});

app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
  err.statusCode = err.statusCode || 'error';

  res.status(statusCode).json({
    status: err.status,
    message: err.message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
});

export default app;
