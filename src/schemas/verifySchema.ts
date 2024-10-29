import {z} from 'zod';

export const verifySchema = z.object({
    code : z.string().length(1, "Verification code must be atleast 1 character")
})


