import express from "express";
import cors from "cors";

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "Clinixy backend running" });

    
});
app.get("/api/health", (req, res) => {
  res.json({
    status: "Clinixy backend is running",
  });
});

export default app;