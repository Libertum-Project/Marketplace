'use client'
import { properties } from '@/constants';
import PropertyCard from '@/components/shared/PropertyCard';
import React from 'react';
import { Property } from '@/constants';

const SimilarListings: React.FC = () => {

  const propertiesToShow: Property[] = properties.slice(0, 3);

  return (
    <div className='bg-gradient-to-b  from-[#F5F5F5] to-white py-10'>
      <div className='md:max-w-[75rem] m-auto text-4xl px-4 md:px-0'>
        <h3 className='text-[#020219] font-space_grotesk text-semibold '>Similar Listings</h3>
        <div className="py-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6">
          {propertiesToShow.map((property) => {
            const location = `${property.location.city},${property.location.state},${property.location.country}`;
            return (
              <PropertyCard
                property={property}
                key={property.id}
              />
            );
          })}
        </div>

      </div>

    </div>

  );
};

export default SimilarListings;
