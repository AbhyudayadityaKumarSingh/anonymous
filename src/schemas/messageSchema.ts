import {z} from 'zod';

export const MessageSchema = z.object({
    content : z.string().min(10, {message:"Message must be atleast 10 characters"})
    .max(300, {message:"Message must be atmost 300 characters"}),
})