import React from 'react';
import Hero from './Hero';
import TokenProgress from './TokenProgress';
import Amenities from './Amenities';
import PropertyFeatures from './PropertyFeatures';
import ImageGallery from './Images';
import Invest from './Invest';

interface Property {
  id: number;
  location: {
    country: string;
    region: string;
    city: string;
    address: string;
    postal_code: string;
  };
  amenities: string[];
  description: string;
  category: string;
  images: string[];
  owner_id: number;
  contract_address: string;
  property_creation_time: string;
  total_shares: number;
  total_valuation: string;
  annual_yield: string;
  token_duration_months: number;
  listing_duration_months: number;
  savedBy: null | any; 
  features: string;
  total_tokens: number;
  tokens_sold: number;
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  return (
    <div className="mx-auto md:flex md:max-w-[75rem] pt-32 pb-12 md:justify-between gap-20">
      <div className="md:w-5/8 space-y-4">
        <Hero
          location={property.location}
          category={property.category}
          price={property.total_valuation}
          totalShares={property.total_shares}
          annualYield={property.annual_yield}
        />
        <TokenProgress 
        total_tokens={property.total_tokens} 
        tokens_sold={property.tokens_sold} 
        />

        <Amenities />
        <PropertyFeatures  />
      </div>
      <div className="space-y-4">
          <ImageGallery images={property.images} />
          <Invest
            title={property.location.address}
            subtitle={`Completa los siguientes campos para comenzar tu inversión en ${property.location.city}, ${property.location.region}, ${property.location.country}`}
            buttonText="Invest Now"
          />
      </div>
    </div>
  );
};

export default PropertyDetail;
