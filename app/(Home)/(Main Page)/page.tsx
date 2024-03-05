import { PropertyCard } from './PropertyCard/PropertyCards';
import { Hero } from './Hero/hero';
import { Filters } from './Filters/Filters';

const MarketplaceHome = () => {
  return (
    <div>
      <Hero />
      <Filters />
      <PropertyCard />
    </div>
  );
};

export default MarketplaceHome;
