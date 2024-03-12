'use client';
import { useState } from 'react';
import PropertyCard from '../shared/PropertyCard';
import Image from 'next/image';
import { Button } from '../ui/button';

interface Props {
  properties: {}[];
}

const AllProperties = ({ properties }: Props) => {
  const [viewType, setViewType] = useState('grid');

  const handleViewType = (type: string) => {
    setViewType(type);
  };

  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const handleCardClick = (location: string) => {
    console.log('Before handleCardClick:', expandedCard);
    if (expandedCard === location) {
      setExpandedCard(null);
    } else {
      setExpandedCard(location);
    }
    console.log('After handleCardClick:', expandedCard);
  };

  const propertyWrapperClassName =
    viewType == 'grid'
      ? 'py-5 px-4 grid md:px-0 grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1200px] m-auto'
      : 'flex flex-col py-5 max-w-[75rem] m-auto gap-8';

  return (
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
        {properties.map((property: any) => {
          const location = `${property.location.city},${property.location.region},${property.location.country}`;
          return (
            <PropertyCard
              key={property.id}
              property={property}
              location={location}
              viewType={viewType}
              expandedCard={expandedCard}
              handleCardClick={handleCardClick}
            />
          );
        })}
      </div>
    </div>
  );
};

export default AllProperties;
