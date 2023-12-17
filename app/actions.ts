"use server"
import { revalidatePath } from "next/cache"
import prisma from "./utils/db"

    
export async function createPost(formData:FormData) {  

    const title=formData.get("title") as string
    const desc=formData.get("description") as string
    const img=formData.get("image") as string
    const cat=formData.get("category") as string
    const userEmail=formData.get("email") as string
    console.log(formData);

    await prisma.blog.create({
        data:{
            title:title,
            desc:desc,
            img:img,
            category:cat,
            userEmail:userEmail,
        }
    })
    revalidatePath("/create")
        
}

export async function deletePost(formData:FormData) {

    "use server"

    const id = formData.get("postId") as string

    await prisma.blog.delete({
        where:{
            id: id
        }
    })
    revalidatePath("/userposts")
}
