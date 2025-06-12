"use server";
import { LoginSchema } from "@/schemas/auth";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields) {
    return { error: "Invalid Fields!" };
  }
  return { success: "Email sent!" };
};
