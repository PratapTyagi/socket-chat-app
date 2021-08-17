import express from "express";
import db from "./config/db.js";
import mongoose from "mongoose";
import cors from "cors";
import { Server } from "socket.io";
import { createServer } from "http";

const app = express();
const server = createServer(app);

import messages from "./routes/messages.js";
import rooms from "./routes/rooms.js";
import users from "./routes/users.js";

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Test Route
app.get("/", (req, res) => res.send("Hello World"));

//Routes
app.use("/api/messages", messages);
app.use("/api/rooms", rooms);
app.use("/api/users", users);

// Socket setup
const io = new Server(server);
io.on("connection", function (socket) {
  socket.on("disconnect", (reason) => {
    console.log(reason);
  });
});

const database = mongoose.connection;

database.once("open", () => {
  const msg = database.collection("messagecontents");
  const changeStream = msg.watch();
  changeStream.on("change", (change) => {
    if (change.operationType === "insert") {
      io.emit("messages", change.fullDocument);
    }
  });
});

// App listening
const PORT = process.env.PORT || 5000;
server.listen(PORT, console.log(`Server running on PORT ${PORT}`));
