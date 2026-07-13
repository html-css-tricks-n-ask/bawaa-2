import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate request body
    if (!body.name || !body.mobile || !body.email || !body.subject || !body.message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    const { name, mobile, email, subject, message } = body;

    // Load SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpTo = process.env.SMTP_TO || smtpUser;

    // If SMTP is not configured, fall back to console logging with instructions
    if (!smtpHost || !smtpUser || !smtpPass) {
      console.warn(
        "SMTP settings are not configured in environment variables. Please set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in your .env.local file."
      );
      console.log("Simulating email send for enquiry:", {
        from: `${name} <${email}>`,
        to: smtpTo || "Not configured",
        subject,
        message,
      });

      return NextResponse.json({
        success: true,
        message: "Enquiry logged to server console (SMTP not configured).",
      });
    }

    // Configure the SMTP transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for port 465 (SSL), false for other ports (TLS/STARTTLS)
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Prepare email message
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: smtpTo,
      subject: `[Ejaas House] New Contact Enquiry: ${subject}`,
      text: `You have received a new enquiry from the Ejaas House website contact form.

Name: ${name}
Mobile: ${mobile}
Email: ${email}
Subject: ${subject}

Message:
${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0; border-radius: 8px;">
          <h2 style="color: #1F6F50; border-bottom: 2px solid #1F6F50; padding-bottom: 10px; margin-top: 0;">New Contact Enquiry</h2>
          <p>You have received a new message from the contact form at <strong>Ejaas House</strong>.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Mobile:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${mobile}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Email:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #1F6F50;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0; font-weight: bold;">Subject:</td>
              <td style="padding: 8px; border-bottom: 1px solid #f0f0f0;">${subject}</td>
            </tr>
          </table>
          <div style="margin-top: 25px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #FF7A3D; border-radius: 4px;">
            <h4 style="margin-top: 0; color: #333;">Message:</h4>
            <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #999; margin-top: 30px; text-align: center; border-top: 1px solid #f0f0f0; padding-top: 10px; margin-bottom: 0;">
            This email was sent automatically from the Ejaas House website.
          </p>
        </div>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    console.log(`Enquiry successfully sent via SMTP to: ${smtpTo}`);

    return NextResponse.json({
      success: true,
      message: "Enquiry sent successfully via SMTP.",
    });
  } catch (error) {
    console.error("SMTP Mail Send Error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please verify your SMTP settings." },
      { status: 500 }
    );
  }
}
