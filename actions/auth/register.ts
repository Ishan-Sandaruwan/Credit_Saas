"use server";
import db from "@/lib/db";
import { RegisterSchema } from "@/schemas/auth";
import * as z from "zod";
import bcrypt from "bcryptjs";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid Fields!" };
  }
  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    return { error: "Email already in use!" };
  }

  await db.user.create({ data: { name, email, password: hashedPassword } });

  // TODO: Send verification token email

  return { success: "User created!" };
};
