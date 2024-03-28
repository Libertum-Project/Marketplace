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
  image_gallery: string[];
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
  repayment_duration: number;
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {

  const propertyPrice = parseFloat(property.total_valuation)

  const annualYield = parseFloat(property.annual_yield)

  return (
    <div className="md:mx-auto md:flex md:max-w-[75rem] px-3 md:px-0 pt-32 pb-12 md:justify-between gap-20">
      <div className="space-y-4 relative md:order-2">
        <ImageGallery images={property.image_gallery} />
        <div className="hidden md:block sticky top-0 z-10 ">
          <Invest
            title={property.location.address}
            subtitle={`Completa los siguientes campos para comenzar tu inversión en ${property.location.city}, ${property.location.region}, ${property.location.country}`}
            buttonText="Invest Now"
          />
        </div>
      </div>
      <div className="md:w-5/8 space-y-4 md:order-1">
        <Hero
          location={property.location}
          category={property.category}
          propertyPrice={propertyPrice}
          totalShares={property.total_shares}
          annualYield={annualYield}
          property={property}
        />
        <TokenProgress
          total_tokens={property.total_tokens}
          tokens_sold={property.tokens_sold}
        />
        <Amenities />
        <PropertyFeatures
          propertyPrice={propertyPrice}
          totalShares={property.total_shares}
          annualYield={annualYield}
          repaymentDuration={property.token_duration_months}
        />

        <div className="md:hidden">
          <Invest
            title={property.location.address}
            subtitle={`Completa los siguientes campos para comenzar tu inversión en ${property.location.city}, ${property.location.region}, ${property.location.country}`}
            buttonText="Invest Now"
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
