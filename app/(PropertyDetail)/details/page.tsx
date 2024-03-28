import PropertyDetail from '@/components/PropertyDetail/PropertyDetail';
import SimilarListings from './SimilarListings';
import { getProperties, getPropertyDetails } from '@/app/utils/fetchProperties';

interface Params {
  id: number;
}

const page = async ({
  searchParams,
}: {
  searchParams: {
    id: number;
  };
}) => {
  const properties = await getProperties();

  const property = await getPropertyDetails(searchParams.id);

  return (
    <div className="relative w-full">
      <div
        className="hidden md:block absolute inset-0 bg-gradient-to-b from-[#0E0E1E] to-[#000041]"
        style={{ height: '24.5rem', zIndex: '-1' }}
      />
      <div
        className="md:hidden absolute inset-0 bg-gradient-to-b from-[#0E0E1E] to-[#000041]"
        style={{ height: '100vh', zIndex: '-1' }}
      />
      <PropertyDetail property={property} />
      <SimilarListings properties={properties} />
    </div>
  );
};

export default page;
