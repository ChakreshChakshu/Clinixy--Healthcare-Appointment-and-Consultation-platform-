import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./config/db.js";
import User from "./models/User.model.js";
dotenv.config();
connectDB();
await User.create({
  name: "Dummy",
  email: "dummy@test.com",
  password: "123456",
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
