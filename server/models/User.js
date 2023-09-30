import mongoose from "mongoose";
import { v4 as uuid } from "uuid";

const UserSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      default: uuid,
      required: true,
      index: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 5,
    },
    picturePath: {
      type: String,
      default: "",
    },
    friends: {
      tpye: Array,
      default: [],
    },
    location: {
      type: String,
    },
    occupation: {
      type: String,
    },
    viewedProfile: {
      type: Number,
    },
    impressions: {
      type: Number,
    },
  },
  { timestamps: { updatedAt: "lastModifiedAt", createdAt: "createdAt" } }
);

const User = mongoose.model("User", UserSchema);
export default User;
