import { z } from "zod"

export const RequestAQuoteSchema = z.object({
    firstName: z.string().min(1, "Name is required"),
    lastName: z.string(),
    phone: z.string().optional(),
    email: z.string().email("Please enter a valid email address"),
    services: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "Select at least one service.",
    }).optional(),
    message: z.string(),
    attachments: z.instanceof(FileList).optional()
})