export async function fetchInvestments(userWalletAddress: string | undefined) {
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

  const response = await fetch(
    `${serverURL}/api/users/investments?userWalletAddress=${userWalletAddress}`,
    {
      method: 'GET',
      cache: 'no-store'
    }
  );
  if (!response.ok) {
    console.error('Failed to fetch properties');
    return null;
  }

  const data = await response.json();
  return data.responseData;
}
