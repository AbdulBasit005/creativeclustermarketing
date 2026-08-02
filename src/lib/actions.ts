"use server";

import { contactSchema, type ContactFormData } from "@/schemas/contact";

export async function submitContactForm(data: ContactFormData) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) {
    return { ok: false as const, error: "Invalid form data" };
  }

  // TODO: plug in an email service here (e.g. Resend):
  //   await resend.emails.send({ to: site.email, subject: parsed.data.subject, ... })
  console.log("Contact form submission:", parsed.data);

  return { ok: true as const };
}
