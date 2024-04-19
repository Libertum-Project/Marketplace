const serverURL = process.env.SERVER_URL;
const secretKey = process.env.SECRET_KEY;

import { NextRequest } from 'next/server';

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;

  const userWalletAddress: string = searchParams.get('userWalletAddress')!;
  const propertyContractAddress: string = searchParams.get('propertyContractAddress')!;
  const response = await fetch(
    `${serverURL}/users/${userWalletAddress}/investment/${propertyContractAddress}`,
    {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
  );
  return Response.json({ response });
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const userWalletAddress: string = searchParams.get('userWalletAddress')!;

    const response = await fetch(`${serverURL}/users/${userWalletAddress}/investment`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch user investments. Status: ${response.status}`);
    }

    const responseData = await response.json();

    return Response.json({ responseData });
  } catch (error) {
    console.error('Error fetching user investments:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
