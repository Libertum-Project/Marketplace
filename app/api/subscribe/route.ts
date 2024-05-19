import { NextRequest, NextResponse } from 'next/server';
import { resend } from '@/lib/resend';

interface Props {
  email: string;
  firstName?: string;
  lastName?: string;
  unsubscribe: false;
  audienceId: string;
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email, firstName, lastName, unsubscribe, audienceId }: Props = body;

  if (!email) {
    return NextResponse.json({
      status: 422,
      message: 'Unprocessable',
    });
  }
  try {
    const response = await resend.contacts.create({
      email,
      firstName,
      lastName,
      unsubscribe,
      audienceId,
    });
    return NextResponse.json({ status: 200, response });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
