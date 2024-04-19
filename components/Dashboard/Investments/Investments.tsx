'use client';
import { useAddress } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';
import PropertyCard from '@/components/shared/PropertyCard';
import { CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';

const Investments = () => {
  const userWalletAddress: string | undefined = useAddress();
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      const response = await fetch(
        `/api/users/investments?userWalletAddress=${userWalletAddress}`,
        {
          method: 'GET'
        }
      );
      if (!response.ok) {
        console.error('Failed to fetch properties');
        return null;
      }

      setLoading(false);
      const data = await response.json();
      setProperties(data.responseData);
    }
    fetchProperties();
  }, [userWalletAddress]);

  return (
    <>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-full sm:investment-page-width justify-start items-start">
        {loading
          ? // Show skeleton cards when loading
            [...Array(3)].map((_, index) => (
              <Card key={`skeleton-${index}`}>
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
            ))
          : // Render property cards when properties are available
            properties.map((property: any) => (
              <PropertyCard
                property={property}
                key={property.id}
                btnTitle="View Investment Details"
                investmentDetail={true}
              />
            ))}
      </div>
    </>
  );
};
export default Investments;
