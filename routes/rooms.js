import express from "express";
const router = express.Router();

import authentication from "../middlewares/authentication.js";
import { createRoom, getRooms, getRoomWithId } from "../controllers/rooms.js";

router.post("/new", authentication, createRoom);
router.get("/", authentication, getRooms);
router.get("/:id", authentication, getRoomWithId);

export default router;
