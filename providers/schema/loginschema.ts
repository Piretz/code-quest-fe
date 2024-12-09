import * as yup from "yup";

const loginSchema = yup.object().shape({
  username: yup
    .string()
    .email("Please enter a valid email address")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});
