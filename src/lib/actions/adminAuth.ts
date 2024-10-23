"use server"

import { redirect } from "next/navigation"
import { cookies } from "next/headers"

import { createAdminClient, createSessionClient } from "../appwrite"
import { AdminLoginProps } from "../types"

async function loginAdmin(data: AdminLoginProps) {
  const { email, password } = data

  try {
    const { account } = await createAdminClient()
    const session = await account.createEmailPasswordSession(email, password);

    if (!session.secret) {
      return { error: "Invalid email or password" };
    }

    cookies().set("auth-session", session.secret, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    console.log("Admin user logged in successfully")

  } catch (error) {
    console.error("Failed to login admin user", error)
  }

  return redirect("/blog/create-blog")
}

async function logoutAdmin() {
  const { account } = await createSessionClient();

  cookies().delete("auth-session");
  await account.deleteSession("current");

  redirect("/blog");
}

export { loginAdmin, logoutAdmin }