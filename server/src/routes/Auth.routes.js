import express from "express";
import auth from "../middleware/auth.js";
import User from "../models/user.model.js";
import { register, login } from "../controllers/Auth.Controller.js";

const router = express.Router();
router.get("/me", auth, async (req, res) => {
  try {
  
    const user = await User.findById(req.user.userId).select("-password");
    res.json(user);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});
router.post("/register", register);
router.post("/login", login);

export default router;
