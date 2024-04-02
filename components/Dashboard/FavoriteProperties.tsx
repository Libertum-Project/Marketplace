'use client';
import { useEffect, useState } from 'react';
import PropertyCard from '../shared/PropertyCard';
import { useAddress } from '@thirdweb-dev/react';

const FavoriteProperties = () => {
  const [properties, setProperties] = useState<any>([]);
  const address = useAddress();

  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

  const requestOptions = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${secretKey}`,
    },
  };

  const fetchProperties = async () => {
    const data = await fetch(
      `https://libertum--marketplace.azurewebsites.net/users/${address}`,
      requestOptions
    );
    const info = await data.json();

    setProperties(info.favoriteProperties);
  };
  useEffect(() => {
    fetchProperties();
  }, []);
  return (
    <>
      {properties.length > 0 &&
        properties.map((property: any) => {
          return <PropertyCard property={property} key={property.id} />;
        })}
    </>
  );
};

export default FavoriteProperties;
