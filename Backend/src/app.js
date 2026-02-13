import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser"
import { authRouter } from "./routes/auth.routes.js";
import { ErrorMiddleware } from "./middlewares/error.middleware.js";

import clinicRouter from "./routes/clinic.routes.js";
import doctorRouter from "./routes/doctor.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth",authRouter)

app.use("/api/clinic", clinicRouter);
app.use("/api/doctor", doctorRouter);
app.use(ErrorMiddleware)


export default app;