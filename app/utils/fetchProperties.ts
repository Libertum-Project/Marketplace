const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
//const serverURL = 'http://localhost:5432'

export async function getProperties() {
  const data = await fetch(
    'https://libertum--marketplace.azurewebsites.net/properties'
  );
  const properties = await data.json();

  return properties;
}

export async function fetchFilteredProperties(filters: any) {
  const newUrl = `${serverURL}/properties/filter?${filters}`;
  const response = await fetch(newUrl);
  return await response.json();
}
