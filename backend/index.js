import express from "express";
import dotenv from "dotenv";
import connectDb from "./config/db.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT || 6000;

connectDb();

app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
       "https://airbnb-vlbv.vercel.app",
    ],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log("server started");
});