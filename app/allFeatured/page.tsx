import Hero from './Hero/Hero';
import FeaturedProperties from '@/components/Featured/FeaturedProperties';

const AllFeatured = () => {
  return (
    <div>
      <Hero />
      <div className="md:max-w-[75rem] m-auto">
        <FeaturedProperties showFilters={false} /> 
      </div>
    </div>
  );
};

export default AllFeatured;
