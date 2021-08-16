import mongoose from "mongoose";
import keys from "./keys.js";

mongoose.connect(keys.CONNECTION_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", () => console.log("Mongo Db connected"));

db.on("error", () => console.error("error"));

export default mongoose;
