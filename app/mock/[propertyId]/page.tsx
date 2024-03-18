"use client";
import { Property } from "../../../types/index";
import { useState, useEffect } from "react";
import { fetchPropertyById } from "../../utils/fetchPropertyById";

export default function Page({ params }: { params: { propertyId: number } }) {
  const propertyId: number = params.propertyId;
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProperty() {
      try {
        const property = await fetchPropertyById(propertyId);
        setProperty(property);
        console.log(property);
      } catch (error: any) {
        setError(
          error.message || "An error occurred while fetching properties",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProperty();
  }, [propertyId]);

  if (error) {
    return <p>{error}</p>;
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return property ? (
    <div>
      <p>Property Address: {property.location.address}</p>
      <p>Token Price: ${property.total_valuation / property.total_shares}</p>
    </div>
  ) : null;
}
