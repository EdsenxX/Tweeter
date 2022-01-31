import { Schema, model, models } from "mongoose";
const mongooseBcrypt = require("mongoose-bcrypt");

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
    trimStrings: true,
  }
);

userSchema.plugin(mongooseBcrypt);

export default models.User || model("User", userSchema);
