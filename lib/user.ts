const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

export const likeProperty = async (address: string, pathname: string, id: number) => {
  if (address) {
    await fetch(` https://libertum--marketplace.azurewebsites.net/users/${address}/favorite-properties/${id}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8',
      },
    });
  }
};
