import mongoose from "mongoose";

import { NextResponse, NextRequest } from "next/server";
import { connectionString } from "../../../../lib/mongo";
import { User } from "../../../../lib/model/user";
import { comparePassword } from "../../../../lib/hash";

try {
  await mongoose
    .connect(connectionString)
    .then(() => console.log("connected to MongoDB"));
} catch (err) {
  throw new Error();
}

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = await req.json();
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json(
      { message: "Такого користувача не існує, будь-ласка, авторизуйтесь" },
      { status: 401 }
    );
  }
  const isPasswordValid = comparePassword(password, user.password);
  if (!isPasswordValid) {
    return NextResponse.json(
      { message: "Такого користувача не існує, будь-ласка, авторизуйтесь" },
      { status: 401 }
    );
  }
  return NextResponse.json({ token: user.jwtToken }, { status: 200 });
}
