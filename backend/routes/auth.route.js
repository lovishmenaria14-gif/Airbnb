import express from "express";
import {
  signUp,
  login,
  logOut,
} from "../controllers/auth.controller.js";
import isAuth from "../middleware/isAuth.js";

const authRouter = express.Router();

authRouter.post("/signup", signUp);
authRouter.post("/login", login);
authRouter.post("/logout", logOut);

authRouter.get("/me", isAuth, (req, res) => {
  res.status(200).json(req.user);
});

export default authRouter;