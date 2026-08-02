import { z } from "zod";

import { serviceCategories } from "@/content/services";

/** Category options come straight from services.md via services.ts. */
export const contactCategories = serviceCategories.map((c) => c.name);

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Please enter a valid email address"),
  subject: z.string().min(3, "Please enter a subject"),
  category: z
    .string()
    .refine((v) => contactCategories.includes(v), "Please choose a category"),
  fieldOfWork: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
