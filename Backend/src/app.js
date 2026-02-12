import express from "express";
import cors from "cors";
import AuthRouter from "./routes/auth.routes.js";
import clinicRouter from "./routes/clinic.routes.js";
import doctorRouter from "./routes/doctor.routes.js";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", AuthRouter);
app.use("/api/clinic", clinicRouter);
app.use("/api/doctor", doctorRouter);


export default app;