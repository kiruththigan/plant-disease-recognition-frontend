"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/auth/route";
import { signinFormSchema, SigninFormSchema } from "@/types/schema";
import { AuthError } from "next-auth";

export const authenticate = async (values: SigninFormSchema) => {
  console.log(values);
  const validatedFields = signinFormSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invallid fields!" };
  }

  const { username, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      username,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          console.log("Invalid credentials.");

          return { success: false, error: "Invalid credentials." };
        default:
          return { success: false, error: "Something went wrong." };
      }
    }
    throw error;
  }
};
