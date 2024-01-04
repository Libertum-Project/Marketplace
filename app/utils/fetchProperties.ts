const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
//const serverURL = 'http://localhost:5432'

export async function getProperties() {
  const res = await fetch(`${serverURL}/properties/`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function fetchFilteredProperties(filters: any) {
  const newUrl = `${serverURL}/properties/filter?${filters}`;
  const response = await fetch(newUrl);
  return await response.json();
}
