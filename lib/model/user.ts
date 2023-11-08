import mongoose from "mongoose";
const { Schema } = mongoose;

interface IUser {
  nickName: string;
  email: string;
  password: string;
  jwtToken: string;
}

const userModel = new Schema<IUser>({
  nickName: { type: String, unique: true, default: null }, // String is shorthand for {type: String}
  email: { type: String, unique: true, default: null },
  password: { type: String, default: null },
  jwtToken: { type: String, default: null },
});

export const User = mongoose.models.Users ?? mongoose.model("Users", userModel);
