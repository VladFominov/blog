import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";
import { connectionString } from "../../../../lib/mongo";
import { User } from "../../../../lib/model/user";
import { hashPassword } from "../../../../lib/hash";
const JWT_SECRET = process.env.JWT_SECRET as string;
try {
  await mongoose
    .connect(connectionString)
    .then(() => console.log("connected to MongoDB"));
} catch (err) {
  throw new Error();
}

// export async function GET() {
//   const res = await Post.find();
//   return NextResponse.json({ res });
// }

export async function POST(req: NextRequest, res: NextResponse) {
  const { nickName, email, password } = await req.json();
  if (!nickName || !email || !password)
    return NextResponse.json({ message: "pls fill in all fields" });
  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json(
      { message: "Користувач з таким email вже існує" },
      { status: 500 }
    );
  }
  try {
    const newUser = await User.create({
      nickName,
      email,
      password: hashPassword(password),
    });

    await User.findOneAndUpdate(
      {
        _id: newUser._id,
      },
      {
        jwtToken: jwt.sign({ _id: newUser._id }, JWT_SECRET, {
          expiresIn: "1d",
        }),
      },
      { new: true }
    ).select("-password");
  } catch (err) {
    console.log("User create error: ", err);
  }
  const userJwt = await User.findOne({ email });

  return NextResponse.json({ token: userJwt.jwtToken }, { status: 200 });
}
