"use server";
// import { auth } from "@clerk/nextjs/server"
import { createSupabaseClient } from "../supabase"

export const createCompanion = async(formData:CreateCompanion)=>{


  
    const supabase = createSupabaseClient();
    const {data,error}=await supabase.
    from('users')
    .insert({...formData})
    .select()

    if(error ||  !data) throw new Error(error.message);
    return data[0];
} 
