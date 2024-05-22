'use client';
import { useAddress } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';

import { getProperties } from '@/app/utils/fetchProperties';
import PropertyCard from '@/components/shared/PropertyCard';
import { CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Card } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Property } from '@/types/index';

const Investments = () => {
  const userWalletAddress: string | undefined = useAddress();
  const [properties, setProperties] = useState([]);
  const [demoProperties, setDemoProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProperties() {
      const demoProperties = await getProperties();
      setDemoProperties(demoProperties);
      const response = await fetch(`/api/users/investments?userWalletAddress=${userWalletAddress}`, {
        method: 'GET',
      });
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
      <div className="p-5 grid max-[768px]:grid-cols-1 max-[1200px]:grid-cols-1 min-[1201px]:grid-cols-2 max-[1499px]:grid-cols-2 min-[1500px]:grid-cols-3 gap-6 w-full sm:investment-page-width justify-start items-start">
        {loading ? (
          // Show skeleton cards when loading
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
        ) : // Render property cards when properties are available
        properties.length > 0 ? (
          properties.map((property: Property) => (
            <PropertyCard
              property={property}
              key={property.id}
              btnTitle="View Investment Details"
              investmentDetail={true}
            />
          ))
        ) : (
          // Show example properties when the user has no properties
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {demoProperties.slice(0, 2).map((property: Property) => (
                  <PropertyCard
                    property={property}
                    key={property.id}
                    btnTitle="View Investment Details"
                    investmentDetail={true}
                    isTest={true}
                  />
                ))}
              </TooltipTrigger>
              <TooltipContent side="bottom" className="bg-libertumOrange rounded-[5px]">
                <p className="text-white font-space_grotesk font-semibold text-sm py-2">
                  This is an example of how you will see your investments.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </>
  );
};
export default Investments;
