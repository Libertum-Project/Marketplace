const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
const requestOptions:any = {
  method: 'GET',
  cache: 'no-store',
  headers: {
    Authorization: `Bearer ${secretKey}`
  }
};

export async function getProperties() {
  const data = await fetch(
    'https://libertum--marketplace.azurewebsites.net/properties',
    requestOptions
  );
  const properties = await data.json();
  return properties;
}

export async function getFavouriteProperties(address: string) {
  const data = await fetch(
    `https://libertum--marketplace.azurewebsites.net/users/${address}`,
    requestOptions
  );
  const properties = await data.json();
  return properties;
}

export async function getPropertyDetails(id: number) {
  const data = await fetch(
    `https://libertum--marketplace.azurewebsites.net/properties/${id}`,
    requestOptions
  );
  const property = await data.json();
  return property;
}

export const filterProperties = (
  properties: any,
  categoryFilter: string,
  countryFilter: string,
  annualYieldFilter: string
) => {
  return properties.filter((property: any) => {
    const categoryMatch =
      categoryFilter === '' ||
      property.category.toLowerCase() === categoryFilter.toLowerCase() ||
      categoryFilter.toLowerCase() === 'all';
    const countryMatch =
      countryFilter === '' ||
      property.location.country.toLowerCase() === countryFilter.toLowerCase() ||
      countryFilter.toLowerCase() === 'worldwide';
    const annualYieldMatch =
      annualYieldFilter === '' ||
      parseFloat(property.annual_yield) >= parseFloat(annualYieldFilter);

    return categoryMatch && countryMatch && annualYieldMatch;
  });
};
