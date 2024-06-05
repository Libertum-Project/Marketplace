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
    postalCode: string;
  };
  amenities: string[];
  description: string[];
  documents: string[];
  category: string;
  imageGallery: string[];
  ownerId: number;
  contractAddress: string;
  propertyCreationTime: string;
  totalShares: number;
  totalValuation: number;
  annualYield: number;
  tokenDurationMonths: number;
  listingDurationMonths: number;
  savedBy: null | any;
  features: string;
  totalTokens: number;
  tokensSold: number;
  repaymentDuration: number;
}

interface PropertyDetailProps {
  property: Property;
}

const PropertyDetail: React.FC<PropertyDetailProps> = ({ property }) => {
  const contractAddress = property.contractAddress;
  const { contract } = useContract(contractAddress);
  const { data: mintedTokens, isLoading } = useContractRead(contract, 'totalSupply');
  const tokensSold = isLoading ? 0 : mintedTokens.toNumber();
  const remainingTokens = property.totalShares - tokensSold;
  const [selectedTokens, setSelectedTokens] = useState<number>(10);

  return (
    <div className="md:mx-auto md:flex md:max-w-[75rem] md:px-0 pt-36 pb-12 md:justify-between gap-20 ">
      <div className="space-y-4 relative md:order-2 px-3 md:px-0">
        <ImageGallery images={property.imageGallery} />
        <div className="hidden md:block sticky top-0 z-10 ">
          <Invest
            title={property.location.address}
            price={property.totalValuation / property.totalShares}
            annualYield={property.annualYield}
            subtitle={`Completa los siguientes campos para comenzar tu inversión en ${property.location.city}, ${property.location.region}, ${property.location.country}`}
            buttonText="Invest Now"
            remainingTokens={remainingTokens}
            contractAddress={contractAddress}
            selectedTokens={selectedTokens}
            setSelectedTokens={setSelectedTokens}
            propertyPrice={property.totalValuation}
            totalShares={property.totalShares}
            repaymentDuration={property.tokenDurationMonths}
          />
        </div>
      </div>
      <div className="md:w-5/8 space-y-4 md:order-1">
        <div className="bg-gradient-to-b from-[#0E0E1E] to-[#000041] md:bg-none">
          <div className="px-3 md:px-0">
            <Hero
              location={property.location}
              category={property.category}
              propertyPrice={property.totalValuation}
              totalShares={property.totalShares}
              annualYield={property.annualYield}
              property={property}
              repaymentDuration={property.tokenDurationMonths}
              remainingTokens={remainingTokens}
            />
          </div>
        </div>
        <div className="px-3 md:px-0">
          <TokenProgress totalTokens={property.totalShares} tokensSold={tokensSold} />
          <Amenities />
          <PropertyFeatures
            propertyPrice={property.totalValuation}
            totalShares={property.totalShares}
            annualYield={property.annualYield}
            repaymentDuration={property.tokenDurationMonths}
            description={property.description}
            documents={property.documents}
            selectedTokens={selectedTokens}
            setSelectedTokens={setSelectedTokens}
          />
        </div>

        <div className="md:hidden px-3 md:px-0">
          <Invest
            price={property.totalValuation / property.totalShares}
            annualYield={property.annualYield}
            title={property.location.address}
            subtitle={`Completa los siguientes campos para comenzar tu inversión en ${property.location.city}, ${property.location.region}, ${property.location.country}`}
            buttonText="Invest Now"
            remainingTokens={remainingTokens}
            contractAddress={property.contractAddress}
            selectedTokens={selectedTokens}
            setSelectedTokens={setSelectedTokens}
            propertyPrice={property.totalValuation}
            totalShares={property.totalShares}
            repaymentDuration={property.tokenDurationMonths}
          />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
