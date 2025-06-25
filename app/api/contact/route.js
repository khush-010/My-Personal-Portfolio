import nodemailer from 'nodemailer';
import { NextResponse } from 'next/server';

export const POST = async (req) => {
    const { firstName, lastName, email, message, subject } = await req.json();

    if (!firstName || !lastName || !email || !message || !subject) {
        return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: process.env.NEXT_PUBLIC_EMAIL,
            pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD, // Use environment variables for security
        },
    });

    const mailOptions = {
        from: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        to: process.env.NEXT_PUBLIC_EMAIL,
        subject: `New message from ${firstName} ${lastName}: ${subject}`,
        text: `
            You have received a new message from your portfolio contact form.

            Name: ${firstName} ${lastName}
            Email: ${email}
            Subject: ${subject}

            Message:
            ${message}
        `,
    };

    await transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error sending email:", error);
            return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
        } else {
            console.log("Email sent successfully:", info.response);
        }
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
}