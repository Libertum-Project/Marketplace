import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const sellToken = url.searchParams.get('srcToken');
    const buyToken = url.searchParams.get('destToken');
    const sellAmount = url.searchParams.get('sellAmount');

    const response = await fetch(
      `https://api.zcx.com/trade/v1/8453/quote/single?fromTokenAddress=${sellToken}&toTokenAddress=${buyToken}&amount=${sellAmount}`,
      {
        headers: {
          'X-Api-Key': process.env.NEXT_PUBLIC_UNIZEN_API_KEY as string,
        },
      },
    );
    const data = await response.json();

    return NextResponse.json(data);
  } catch (err) {
    throw err;
  }
}
