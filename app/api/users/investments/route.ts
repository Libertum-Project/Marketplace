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
