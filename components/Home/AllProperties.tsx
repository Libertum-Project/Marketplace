'use client';
import { useEffect, useState } from 'react';
import PropertyCard from '../shared/PropertyCard';
import Image from 'next/image';
import { Button } from '../ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardFooter } from '../ui/card';
import { Filters } from '@/app/(Home)/(Main Page)/Filters';
import { filterProperties } from '@/app/utils/fetchProperties';

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

  const fetchProperties = async () => {
    const data = await fetch(
      'https://libertum--marketplace.azurewebsites.net/properties'
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

  return (
    <>
      {showFilters && <Filters filterFunction={propertyFilter} />}

      <div>
        <div className="flex justify-center md:justify-between items-center">
          <select
            defaultValue="Select"
            className="min-w-[95%] md:min-w-0 px-3 py-2 bg-slate-900 bg-opacity-5 rounded-[5px] border border-black border-opacity-10 cursor-pointer"
          >
            <option value="Newest first">Sort by: Newest first</option>
            <option value="Old First">Sort by: Old first</option>
          </select>

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
                    <Skeleton className="h-[255px] bg-black bg-opacity-5 w-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="h-480 p-0">
                  <div className="flex flex-col space-y-3 w-full">
                    <Skeleton className="h-[255px] bg-black bg-opacity-5 w-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="h-480 p-0">
                  <div className="flex flex-col space-y-3 w-full">
                    <Skeleton className="h-[255px] bg-black bg-opacity-5 w-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[250px] bg-black bg-opacity-5" />
                      <Skeleton className="h-4 w-[200px] bg-black bg-opacity-5" />
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
