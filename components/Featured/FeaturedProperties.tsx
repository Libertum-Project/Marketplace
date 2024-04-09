'use client'

import { useEffect, useState } from 'react';
import PropertyCard from '../shared/PropertyCard';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '../ui/card';

interface Props {
  showFilters?: boolean;
}

const FeaturedProperties = ({ showFilters = false }: Props) => {
  const [properties, setProperties] = useState<any>([]);
  const [showNoPropertiesMessage, setShowNoPropertiesMessage] = useState<boolean>(false);

  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

  const fetchProperties = async () => {
    const requestOptions = {
      method: 'GET',
      headers: {
        authorization: `Bearer ${secretKey}`
      }
    };

    try {
      const data = await fetch('https://libertum--marketplace.azurewebsites.net/properties', requestOptions);
      const allProperties = await data.json();
      const filteredProperties = allProperties.filter((property: any) => [2, 6, 8].includes(property.id));
      setProperties(filteredProperties);
    } catch (error) {
      console.error('Error fetching properties:', error);
      setProperties([]);
      setShowNoPropertiesMessage(true);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div className="py-5 px-4 grid md:px-0 grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1200px] m-auto">
      {showNoPropertiesMessage ? (
        <p className="bg-[#000041] border border-[#00B3B5] text-white font-space_grotesk font-bold text-xl px-6 py-3 rounded-md flex justify-center items-center">
          No properties to show.
        </p>
      ) : (
        properties.map((property: any) => (
          <PropertyCard
            key={property.id}
            property={property}
            viewType="grid"
            btnLink="/details"
          />
        ))
      )}

      {!properties.length && (
        <>
          {[1, 2, 3].map((_, index) => (
            <Card key={index}>
              <CardContent className="h-480 p-0">
                <div className="flex flex-col space-y-3 w-full">
                  <Skeleton className="h-[255px] bg-[#929191] w-full" />
                  <div className="space-y-4 p-4">
                    <Skeleton className="h-10 w-full bg-black bg-opacity-5 rounded-[48px]" />
                    <div className="flex items-center justify-between">
                      <div className="pr-4 w-full">
                        <Skeleton className="h-7 w-full bg-black bg-opacity-5 rounded-[48px]" />
                      </div>
                      <div className="w-full">
                        <Skeleton className="h-7 w-full bg-black bg-opacity-5 rounded-[48px]" />
                      </div>
                      <div className="pl-4 w-full">
                        <Skeleton className="h-7 w-full bg-black bg-opacity-5 rounded-[48px]" />
                      </div>
                    </div>
                    <Skeleton className="h-10 w-full bg-black bg-opacity-5 rounded-[48px]" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
