export async function fetchInvestments(userWalletAddress: string | undefined) {
  const response = await fetch(
    `http://localhost:3000/api/users/investments?userWalletAddress=${userWalletAddress}`,
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
