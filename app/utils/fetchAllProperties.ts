export async function fetchAllProperties() {
  try {
    const response = await fetch("/api/properties", { method: "GET" });
    if (!response.ok) {
      throw new Error("Failed to fetch properties");
    }
    const result = await response.json();
    return result.data;
  } catch (error: any) {
    throw new Error(
      error.message || "An error occurred while fetching properties",
    );
  }
}
