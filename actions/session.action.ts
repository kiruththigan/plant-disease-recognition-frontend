"use server";

import { auth } from "@/auth";

export async function getServerSession() {
  try {
    const session = await auth();
    return session;
  } catch (error) {
    console.error("Failed to get session:", error);
    return null;
  }
}