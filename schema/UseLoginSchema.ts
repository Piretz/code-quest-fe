import { z } from "zod";


export const  UseLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  rememberPassword: z.boolean().default(true), // Add this line for rememberPassword
});

export default UseLoginSchema;
