'use client';
import { useEffect, useState } from 'react';
import PropertyCard from '../shared/PropertyCard';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '../ui/card';
import { Filters } from '@/app/(Home)/(Main Page)/Filters';
import { filterProperties } from '@/app/utils/fetchProperties';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  showFilters?: boolean;
}

const AllProperties = ({ showFilters = false }: Props) => {
  const [viewType, setViewType] = useState('grid');
  const [properties, setProperties] = useState<any>([]);
  const [filteredProperties, setFilteredProperties] = useState<any>([]);

  const handleViewType = (type: string) => {
    setViewType(type);
  };
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

  const requestOptions = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${secretKey}`,
    },
  };
  const fetchProperties = async () => {
    const data = await fetch(
      'https://libertum--marketplace.azurewebsites.net/properties',
      requestOptions
    );
    const properties = await data.json();

    setProperties(properties);
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const propertyWrapperClassName =
    viewType == 'grid'
      ? 'py-5 px-4 grid md:px-0 grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1200px] m-auto'
      : 'flex flex-col py-5 max-w-[75rem] m-auto gap-8';

  const propertyFilter = (
    categoryFilter: string,
    countryFilter: string,
    annualYieldFilter: string
  ) => {
    const filteredProperties = filterProperties(
      properties,
      categoryFilter,
      countryFilter,
      annualYieldFilter
    );
    setFilteredProperties(filteredProperties);
  };

  const sortProperties = (sortOrder: string) => {
    const sortedProperties = [...properties];
    sortedProperties.sort((a, b) => {
      const dateA = new Date(a.createdAt);
      const dateB = new Date(b.createdAt);
      if (sortOrder === 'new') {
        return +dateB - +dateA;
      } else {
        return +dateA - +dateB;
      }
    });

    setProperties(sortedProperties);
  };

  return (
    <>
      {showFilters && <Filters filterFunction={propertyFilter} />}

      <div>
        <div className="flex justify-center md:justify-between items-center">
          <Select
            onValueChange={(newValue) => {
              sortProperties(newValue);
            }}
            value=""
          >
            <SelectTrigger className="w-[95%] md:w-[360px] px-3 py-2 bg-slate-900 bg-opacity-5 rounded-[5px] border border-black border-opacity-10 cursor-pointer">
              <SelectValue
                placeholder="Sort by: Newest first"
                className="font-montserrat text-xs"
              />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="new" className="cursor-pointer">
                Sort by:{' '}
                <span className="font-montserrat text-xs font-bold">
                  Newest first
                </span>
              </SelectItem>
              <SelectItem value="old" className="cursor-pointer">
                Sort by:{' '}
                <span className="font-montserrat text-xs font-bold">
                  Old first
                </span>
              </SelectItem>
            </SelectContent>
          </Select>

          <div className="hidden md:flex items-center bg-neutral-100 rounded-[5px] gap-2 px-2 py-[5px]">
            <Button className="p-0" onClick={() => handleViewType('grid')}>
              <Image
                src={`${
                  viewType == 'grid'
                    ? '/assets/gridActive.svg'
                    : '/assets/gridInactive.svg'
                }`}
                alt="Grid"
                width="32"
                height="32"
              />
            </Button>
            <Button className="p-0" onClick={() => handleViewType('list')}>
              <Image
                src={`${
                  viewType == 'list'
                    ? '/assets/filesActive.svg'
                    : '/assets/filesInactive.svg'
                }`}
                alt="List"
                width="32"
                height="32"
              />
            </Button>
          </div>
        </div>
        <div className={propertyWrapperClassName}>
          {(filteredProperties.length > 0
            ? filteredProperties
            : properties
          )?.map((property: any) => {
            return (
              <PropertyCard
                key={property.id}
                property={property}
                viewType={viewType}
                btnLink="/details"
              />
            );
          })}
          {!properties?.length && !filteredProperties?.length && (
            <>
              <Card>
                <CardContent className="h-480 p-0">
                  <div className="flex flex-col space-y-3 w-full">
                    <Skeleton className="h-[255px] bg-black bg-opacity-5 w-ful" />
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
                    <Skeleton className="h-[255px] bg-black bg-opacity-5 w-ful" />
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
                    <Skeleton className="h-[255px] bg-black bg-opacity-5 w-ful" />
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
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AllProperties;
