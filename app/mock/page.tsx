"use client";
import Link from "next/link";
import css from "./mock.module.css";
import { type ReactElement, useEffect, useState } from "react";
import { Property } from "../../types/index";

export default function page(): ReactElement {
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch("/api/properties", { method: "GET" });
        if (!response.ok) {
          throw new Error("Failed to fetch properties");
        }
        const result = await response.json();
        setProperties(result.data);
      } catch (error: any) {
        setError(
          error.message || "An error occurred while fetching properties",
        );
      } finally {
        setLoading(false);
      }
    }

    fetchProperties();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <div className={css.container}>
      {properties?.length > 0 &&
        properties.map((property: Property) => (
          <Link
            href={`/mock/${property.id}`}
            className={css.card}
            key={property.id}
          >
            <p>{property.contract_address}</p>
          </Link>
        ))}
    </div>
  );
}
