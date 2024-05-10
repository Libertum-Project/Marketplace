'use client';
import { useLayoutEffect, useState } from 'react';
import { useAddress } from '@thirdweb-dev/react';
import Link from 'next/link';

import PropertyCard from '../shared/PropertyCard';
import { Button } from '../ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '../ui/card';

const FavoriteProperties = () => {
  const [isLoading, setLoading] = useState(true);
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
    setLoading(true);
    const data = await fetch(`https://libertum--marketplace.azurewebsites.net/users/${address}`, requestOptions);
    const info = await data.json();

    setProperties(info.favoriteProperties);
    setLoading(false);
  };
  useLayoutEffect(() => {
    fetchProperties();
  }, []);
  return (
    <>
      {properties.length > 0 ? (
        <div className="flex flex-row flex-wrap justify-start items-center gap-6 max-w-full p-6 mb-32 md:mb-0 ">
          {properties.map((property: any) => {
            return (
              <div className="w-[382px]" key={property.id}>
                <PropertyCard property={property} key={property.id} />
              </div>
            );
          })}
        </div>
      ) : isLoading ? (
        <div className="p-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-full">
          <Card>
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

          <Card>
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

          <Card>
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
        </div>
      ) : (
        <div className="w-full flex flex-col gap-2 justify-center items-center min-h-screen">
          <h3 className="text-lg font-bold">There are no saved properties</h3>

          <Link href="/">
            <Button className="bg-teal-500 rounded-[5px] text-white text-center hover:bg-teal-500 min-w-[164px] max-sm:w-full">
              Return to marketplace
            </Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default FavoriteProperties;
