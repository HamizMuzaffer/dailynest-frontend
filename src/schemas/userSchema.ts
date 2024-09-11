import z from "zod"

export const userSchema =  z.object({
    email : 
        z
        .string()
        .min(4)
        .max(50)
         
})