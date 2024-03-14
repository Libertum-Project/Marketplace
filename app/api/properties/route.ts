import { NextResponse } from "next/server";

export async function GET() {
  const serverURL = process.env.SERVER_URL;
  try {
    const res = await fetch(`${serverURL}/properties/`, {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    });

    if (!res.ok) {
      let errorMessage = "Unknown Error";
      if (res.status === 404) {
        errorMessage = "Resource not found";
      } else if (res.status === 500) {
        errorMessage = "Internal Server Error";
      }
      return NextResponse.json({ error: errorMessage }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: "Server Error" }, { status: 500 });
  }
}
