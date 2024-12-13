// schema/useLoginSchema.ts
import { z } from "zod";

const useLoginSchema = z.object({
  email: z.string().email("Invalid email address").nonempty("Email is required"),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .nonempty("Password is required"),
  rememberPassword: z.boolean(),
});

export default useLoginSchema;
