import z from "zod"

export const userSchema = z.object({
    email:
        z
            .string()
            .min(4, "email should be longer")
            .max(50, "email maximum characters limit reached")
            .email({ message: "Invalid Email Address" }),

    password:
        z
            .string()
            .min(2, "Password must be atleast six characters"),



    username:
        z
            .string()
            .min(2, "username must be atleast 2 characters")
            .max(20, "username must not be more than 20 chracters")
            .regex(/^[a-zA-Z0-9]+$/, "username must not contain special characters")
})

