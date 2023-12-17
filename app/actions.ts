"use server"
import { revalidatePath } from "next/cache"
import prisma from "./utils/db"

    
export async function create(formData:FormData) {
"use server"    
try {
    const title=formData.get("title") as string
    const desc=formData.get("description") as string
    const img=formData.get("image_path") as string
    const cat=formData.get("category") as string
    const userEmail=formData.get("email") as string
  

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
} catch (error) {
    return "Faild to create."
}
}