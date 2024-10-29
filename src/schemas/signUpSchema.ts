import {z} from 'zod';

export const usernameValidation= z.string().min(3, "Username must be atleast 3 characters").max(20 , "username must be atmost 20 characters")
.regex(/^[a-zA-Z0-9_]*$/, "Username must contain only alphabets, numbers and underscore");

export const signUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message :"Invalid Email"}),
    password : z.string().min(8, {message : "Password must be atleast 8 characters"}),
})