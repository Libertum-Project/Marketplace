'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import PropertyCard from '../shared/PropertyCard';
import { GemsCard } from '../shared/GemsCards/GemsCard';
import { SecurityCard } from '../shared/SecurityCards/SecurityCard';
import ArtCard from '../shared/ArtCards/ArtCard';

import { Button } from '../ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent } from '../ui/card';
import { Filters } from '@/app/(Home)/(Main Page)/Filters';
import { filterProperties } from '@/app/utils/fetchProperties';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

import { gems } from './gems';
import { securityListings } from './security';
import { artPieces } from './art';

interface Props {
  showFilters?: boolean;
}

export const AllItems = ({ showFilters = false }: Props) => {
  const serverURL = process.env.NEXT_PUBLIC_SERVER_URL;

  const [viewType, setViewType] = useState('grid');
  const [properties, setProperties] = useState<any>([]);
  const [filteredProperties, setFilteredProperties] = useState<any>([]);
  const [showNoPropertiesMessage, setShowNoPropertiesMessage] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSubCategory, setSelectedSubCategory] = useState('All');


  const handleViewType = (type: string) => {
    setViewType(type);
  };

  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

  const fetchProperties = async () => {
    const data = await fetch(`${serverURL}/properties`, {
      method: 'GET',
      cache: 'no-store',
      headers: {
        authorization: `Bearer ${secretKey}`,
      },
    });
    const properties = await data.json();
    setProperties(properties);
    setFilteredProperties([...properties, ...gems, ...securityListings, ...artPieces]); // Mostrar todo inicialmente
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const propertyWrapperClassName =
    viewType == 'grid'
      ? 'py-5 px-4 grid md:px-0 grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1200px] m-auto'
      : 'flex flex-col py-5 max-w-[75rem] m-auto gap-8';

      const propertyFilter = (categoryFilter: string, subCategoryFilter: string) => {
        setSelectedCategory(categoryFilter); 
        setSelectedSubCategory(subCategoryFilter); 
    
        if (categoryFilter === 'Real Estate') {
          const filteredProperties = filterProperties(properties, subCategoryFilter);
          setFilteredProperties(filteredProperties);
          setShowNoPropertiesMessage(filteredProperties.length === 0);
        } else if (categoryFilter === 'Gems and Metals') {
          setFilteredProperties(gems); 
          setShowNoPropertiesMessage(gems.length === 0);
        } else if (categoryFilter === 'Security') {
          setFilteredProperties(securityListings);
          setShowNoPropertiesMessage(securityListings.length === 0);
        } else if (categoryFilter === 'Art') {
          setFilteredProperties(artPieces);
          setShowNoPropertiesMessage(artPieces.length === 0);
        } else {          
          setFilteredProperties([...properties, ...gems, ...securityListings, ...artPieces]);
          setShowNoPropertiesMessage(false);
        }
      };
    

  // const sortProperties = (sortOrder: string) => {
  //   const sortedProperties = [...properties];
  //   sortedProperties.sort((a, b) => {
  //     const dateA = new Date(a.createdAt);
  //     const dateB = new Date(b.createdAt);
  //     if (sortOrder === 'new') {
  //       return +dateB - +dateA;
  //     } else {
  //       return +dateA - +dateB;
  //     }
  //   });

  //   setProperties(sortedProperties);
  // };

  const getCards = () => {
    if (selectedCategory === 'All') {
      return (
        <>
          {properties.map((property: any) => (
            <PropertyCard key={property.id} property={property} viewType={viewType} btnLink="/details" />
          ))}
          {gems.map((gem) => (
            <GemsCard key={gem.id} viewType={viewType} investmentDetail={false} gem={gem} />
          ))}
          {securityListings.map((security) => (
            <SecurityCard key={security.id} viewType={viewType} investmentDetail={false} security={security} />
          ))}
          {artPieces.map((artPiece) => (
            <ArtCard key={artPiece.id} viewType={viewType} investmentDetail={false} artPiece={artPiece} />
          ))}
        </>
      );
    }
    if (selectedCategory === 'Real Estate') {
      const filteredPropertiesToShow = selectedSubCategory === 'All'
      ? properties
      : filterProperties(properties, selectedSubCategory);

    return (
      <>
        {filteredPropertiesToShow.map((property: any) => (
          <PropertyCard key={property.id} property={property} viewType="grid" btnLink="/details" />
        ))}
      </>
    );
    }
    if (selectedCategory === 'Gems and Metals') {
      return gems.map((gem) => <GemsCard key={gem.id} viewType={viewType} investmentDetail={false} gem={gem} />);
    }
    if (selectedCategory === 'Security') {
      return securityListings.map((security) => <SecurityCard key={security.id} viewType={viewType} investmentDetail={false} security={security} />);
    }
    if (selectedCategory === 'Art') {
      return artPieces.map((artPiece) => <ArtCard key={artPiece.id} viewType={viewType} investmentDetail={false} artPiece={artPiece} />);
    }
    if (showNoPropertiesMessage) {
      return (
        <p className="bg-[#000041] border border-[#00B3B5] text-white font-space_grotesk font-bold text-xl px-6 py-3 rounded-md flex justify-center items-center">
          No properties to show.
        </p>
      );
    }
    return (
      <>
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
      </>
    );
  };

  return (
    <>
      {showFilters && <Filters filterFunction={propertyFilter} />}
      <div>
        <div className="flex justify-center md:justify-between items-center">
          {/* <Select
            onValueChange={(newValue) => {
              // sortProperties(newValue);
            }}
            value=""
          >
            <SelectTrigger className="w-[95%] md:w-[360px] px-3 py-2 bg-slate-900 bg-opacity-5 rounded-[5px] border border-black border-opacity-10 cursor-pointer">
              <SelectValue placeholder="Sort by: Newest first" className="font-montserrat text-xs" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="new" className="cursor-pointer">
                Sort by: <span className="font-montserrat text-xs font-bold">Newest first</span>
              </SelectItem>
              <SelectItem value="old" className="cursor-pointer">
                Sort by: <span className="font-montserrat text-xs font-bold">Old first</span>
              </SelectItem>
            </SelectContent>
          </Select> */}
          <div className="hidden md:flex items-center bg-neutral-100 rounded-[5px] gap-2 px-2 py-[5px]">
            <Button className="p-0" onClick={() => handleViewType('grid')}>
              <Image
                src={`${viewType == 'grid' ? '/assets/gridActive.svg' : '/assets/gridInactive.svg'}`}
                alt="Grid"
                width="32"
                height="32"
              />
            </Button>
            <Button className="p-0" onClick={() => handleViewType('list')}>
              <Image
                src={`${viewType == 'list' ? '/assets/filesActive.svg' : '/assets/filesInactive.svg'}`}
                alt="List"
                width="32"
                height="32"
              />
            </Button>
          </div>
        </div>
        <div className={propertyWrapperClassName}>
          {getCards()}
        </div>
      </div>
    </>
  );
};
