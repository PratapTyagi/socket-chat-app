import express from "express";
const router = express.Router();

import authentication from "../middlewares/authentication.js";
import {
  registerUser,
  loginUser,
  getAllUsers,
  addUser,
} from "../controllers/users.js";

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", authentication, getAllUsers);
router.get("/add", authentication, addUser);

export default router;
