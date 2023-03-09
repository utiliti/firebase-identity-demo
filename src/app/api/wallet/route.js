import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name");
  const response = await fetch("https://api.utiliti.ai/wallets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-key": process.env.UTILITI_API_KEY,
    },
    body: JSON.stringify({
      name: name,
      network_id: "80001", //mumbai testnet
    }),
  });

  const data = await response.json();

  return NextResponse.json(data);
}
