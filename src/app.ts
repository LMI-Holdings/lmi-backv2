import express, { Application, Response, Request, NextFunction } from "express";
import dotenv from "dotenv";
import http from "http";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import specs from "./config/swaggerConfig";
import { CustomError } from "./dtos/CustomError";
import { syncDatabase } from "./config/db.config";

import authRouter from "./routers/auth.router";
import servicesRouter from "./routers/services.router";
import managementRouter from "./routers/management.router";

import * as docs from "./swagger-output.json";

dotenv.config();

const app: Application = express();
const port = process.env.PORT;
const server = http.createServer(app);

app.use(express.json());
app.use(cors());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/service", servicesRouter);
app.use("/api/v1/management", managementRouter);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(docs, { explorer: true })
);

/* Global handler */
app.use(
  (err: CustomError, _req: Request, _res: Response, _next: NextFunction) => {
    _res.status(err.status || 500).send({
      message: err.message,
      stack: process.env.NODE_ENV === "production" ? "🔥" : err.stack,
    }); // Hide stack trace in production
  }
);

server.listen(2000, () => syncDatabase());
