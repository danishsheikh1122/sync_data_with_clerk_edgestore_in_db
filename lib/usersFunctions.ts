import prisma from "@/prisma/client";
import { User } from "@prisma/client";

export async function createUser(data: User) {
  if (!data) return "error";
  try {
    const user = await prisma.user.create({ data });
  } catch (err) {
    return err;
  }
}
