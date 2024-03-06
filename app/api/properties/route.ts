import { NextResponse } from 'next/server';

export async function GET() {
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
  try {
    const res = await fetch(`${serverURL}/properties/`, {
      headers: {
        Accept: 'application/json',
        method: 'GET',
      },
    });
    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ message: 'Server Error' });
  }
}
