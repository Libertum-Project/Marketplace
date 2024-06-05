import { NextRequest } from 'next/server';

import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, code } = reqBody;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Your Verification Code',
    text: `Your verification code is ${code}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return Response.json({ message: 'Verification code sent' });
  } catch (error) {
    return Response.json({ error: 'Failed to send verification code' });
  }
}
