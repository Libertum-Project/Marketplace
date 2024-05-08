'use client';
import { useState } from 'react';
import { useContract, useContractRead } from '@thirdweb-dev/react';
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
  description: string[];
  category: string;
  image_gallery: string[];
  owner_id: number;
  contract_address: string;
  property_creation_time: string;
  total_shares: number;
  total_valuation: number;
  annual_yield: number;
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
  const contractAddress = property.contract_address;
  const { contract } = useContract(contractAddress);
  const { data: mintedTokens, isLoading } = useContractRead(
    contract,
    'totalSupply'
  );
  const tokens_sold = isLoading ? 0 : mintedTokens.toNumber();
  const remainingTokens = property.total_shares - tokens_sold;
  const [selectedTokens, setSelectedTokens] = useState<number>(10);

  return (
    <div className="md:mx-auto md:flex md:max-w-[75rem] md:px-0 pt-36 pb-12 md:justify-between gap-20 ">
      <div className="space-y-4 relative md:order-2 px-3 md:px-0">
        <ImageGallery images={property.image_gallery} />
        <div className="hidden md:block sticky top-0 z-10 ">
          <Invest
            title={property.location.address}
            price={property.total_valuation / property.total_shares}
            annual_yield={property.annual_yield}
            subtitle={`Completa los siguientes campos para comenzar tu inversión en ${property.location.city}, ${property.location.region}, ${property.location.country}`}
            buttonText="Invest Now"
            remainingTokens={remainingTokens}
            contractAddress={contractAddress}
            selectedTokens={selectedTokens}
            setSelectedTokens={setSelectedTokens}
          />
        </div>
      </div>
      <div className="md:w-5/8 space-y-4 md:order-1">
        <div className="bg-gradient-to-b from-[#0E0E1E] to-[#000041] md:bg-none">
          <div className="px-3 md:px-0">
            <Hero
              location={property.location}
              category={property.category}
              propertyPrice={property.total_valuation}
              totalShares={property.total_shares}
              annualYield={property.annual_yield}
              property={property}
              repaymentDuration={property.token_duration_months}
              remainingTokens={remainingTokens}
            />
          </div>
        </div>
        <div className="px-3 md:px-0">
          <TokenProgress
            total_tokens={property.total_shares}
            tokens_sold={tokens_sold}
          />
          <Amenities />
          <PropertyFeatures
            propertyPrice={property.total_valuation}
            totalShares={property.total_shares}
            annualYield={property.annual_yield}
            repaymentDuration={property.token_duration_months}
            description={property.description}
            selectedTokens={selectedTokens}
            setSelectedTokens={setSelectedTokens}
          />
        </div>

        <div className="md:hidden px-3 md:px-0">
          <Invest
            price={property.total_valuation / property.total_shares}
            annual_yield={property.annual_yield}
            title={property.location.address}
            subtitle={`Completa los siguientes campos para comenzar tu inversión en ${property.location.city}, ${property.location.region}, ${property.location.country}`}
            buttonText="Invest Now"
            remainingTokens={remainingTokens}
            contractAddress={property.contract_address}
            selectedTokens={selectedTokens}
            setSelectedTokens={setSelectedTokens}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
