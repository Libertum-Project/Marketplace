import React from 'react';
import css from "./page.module.css";
import { PropertyCard } from './PropertyCard/PropertyCards';
import { Hero } from './Hero/hero';
import { Filters } from './Filters/Filters';

interface MarketplaceHomeProps {
}

const MarketplaceHome: React.FC<MarketplaceHomeProps> = ({}) => {

  return (
    <div>
      <Hero />
      <Filters />
      <PropertyCard />
    </div>
  );
}

export default MarketplaceHome;
