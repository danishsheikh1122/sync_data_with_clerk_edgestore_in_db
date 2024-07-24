import prisma from "@/prisma/client";
interface Props{
    url:string;
    userId:string;
}
export async function checkUserandPost ({ url, userId }: { url: string; userId: string | undefined }){
    ""
//   const isUserPresent = await prisma.user.findUnique({ where: {clerkId:id } });;
}
