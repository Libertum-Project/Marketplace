export async function fetchFilteredProperties(filter: string) {
  try {
    const response = await fetch(
      `http://localhost:8080/properties/filter?${filter}`,
      {
        method: 'GET',
      }
    );
    if (!response.ok) {
      throw new Error('Failed to fetch properties');
    }
    const result = await response.json();

    return result;
  } catch (error: any) {
    throw new Error(
      error.message || 'An error occurred while fetching properties'
    );
  }
}
