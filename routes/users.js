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
router.post("/", authentication, getAllUsers);
router.post("/add", authentication, addUser);

export default router;
