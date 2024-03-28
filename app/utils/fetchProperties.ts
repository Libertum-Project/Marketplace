const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;
//const serverURL = 'http://localhost:5432'

export async function getProperties() {
  const data = await fetch(
    'https://libertum--marketplace.azurewebsites.net/properties'
  );
  const properties = await data.json();
  return properties;
}

export async function getPropertyDetails(id: number) {
  const data = await fetch(
    `https://libertum--marketplace.azurewebsites.net/properties/${id}`
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
