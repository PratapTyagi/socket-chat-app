import express from "express";
import db from "./config/db.js";
import cors from "cors";

import messages from "./routes/messages.js";
import rooms from "./routes/rooms.js";
import users from "./routes/users.js";

const app = express();

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

// App listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running on PORT ${PORT}`));
