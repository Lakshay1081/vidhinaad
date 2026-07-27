import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(8),
  subject: z.string().min(3),
  message: z.string().min(10),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const data = contactSchema.parse(req.body);

    await resend.emails.send({
      from: "VIDHINAAD <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      replyTo: data.email,
      subject: `New Consultation Request • ${data.subject}`,
      html: `
        <h2>New Consultation Request</h2>

        <p><strong>Name:</strong> ${data.name}</p>

        <p><strong>Email:</strong> ${data.email}</p>

        <p><strong>Phone:</strong> ${data.phone}</p>

        <p><strong>Subject:</strong> ${data.subject}</p>

        <hr />

        <p>${data.message}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
}