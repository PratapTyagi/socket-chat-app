import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;

const roomSchema = mongoose.Schema({
  name: String,
  pic: {
    type: String,
    default:
      "https://res.cloudinary.com/dark-01/image/upload/v1623783636/pixlr-bg-result_sa4w7l.png",
  },
  members: [
    {
      type: ObjectId,
      ref: "usercontents",
    },
  ],
  messages: [
    {
      type: ObjectId,
      ref: "messagecontents",
    },
  ],
});

export default mongoose.model("roomcontents", roomSchema);
