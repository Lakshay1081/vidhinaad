import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(8, "Phone number must be at least 8 digits."),
  subject: z.string().min(3, "Subject must be at least 3 characters."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    // Validate request body
    const formData = contactSchema.parse(req.body);

    // Send email
    const { data, error } = await resend.emails.send({
      from: "VIDHINAAD <onboarding@resend.dev>",
      to: process.env.RECEIVER_EMAIL,
      replyTo: formData.email,
      subject: `New Consultation Request • ${formData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height:1.6;">
          <h2>New Consultation Request</h2>

          <p><strong>Name:</strong> ${formData.name}</p>

          <p><strong>Email:</strong> ${formData.email}</p>

          <p><strong>Phone:</strong> ${formData.phone}</p>

          <p><strong>Subject:</strong> ${formData.subject}</p>

          <hr>

          <h3>Client Message</h3>

          <p>${formData.message}</p>
        </div>
      `,
    });

    console.log("========== RESEND ==========");
    console.log("Data:", data);
    console.log("Error:", error);
    console.log("============================");

    if (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
        error,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Email sent successfully.",
      emailId: data.id,
    });
  } catch (err) {
    console.error("SERVER ERROR:", err);

    return res.status(500).json({
      success: false,
      message: err.message || "Internal Server Error",
    });
  }
}