import RightSidebar from '@/components/Dashboard/RightSidebar';
import PropertyCard from '@/components/shared/PropertyCard';
import { properties } from '@/constants';

const page = () => {
  return (
    <div className="flex w-full">
      <div className="p-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-2 gap-6 w-full sm:investment-page-width">
        {properties.map((property: any) => {
          const address = `${property.address.city},${property.address.state},${property.address.country}`;
          return (
            <PropertyCard
              property={property}
              address={address}
              key={property.id}
              btnTitle="View Investment Details"
            />
          );
        })}
      </div>
      <RightSidebar />
    </div>
  );
};

export default page;
