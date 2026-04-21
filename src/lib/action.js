import { revalidatePath } from "next/cache";
import { postTask } from "./tasks";

export const createATask=async(formData)=>{
    'use server'
    const newTask=Object.fromEntries(formData.entries())
    const res=await postTask(newTask);
    if(res.success){
        revalidatePath('/tasks')
    }
}