import express from "express";
const router = express.Router();

import authentication from "../middlewares/authentication.js";
import { createMessage, getMessages } from "../controllers/messages.js";

router.post("/", authentication, getMessages);
router.post("/new", authentication, createMessage);

export default router;
