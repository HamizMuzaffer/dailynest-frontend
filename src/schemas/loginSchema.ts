import z from "zod"

export const loginSchema = z.object({
    email:
        z
            .string()
            .min(4, "Email should be longer")
            .max(50, "Email maximum characters limit reached")
            .email({ message: "Invalid Email Address" }),

    password:
        z
            .string()
            .min(6, "Password must be atleast six characters"),

})