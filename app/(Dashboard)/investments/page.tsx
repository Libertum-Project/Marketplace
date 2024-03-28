import { getProperties } from '@/app/utils/fetchProperties';
import RightSidebar from '@/components/Dashboard/RightSidebar';
import PropertyCard from '@/components/shared/PropertyCard';

const page = async () => {
  const properties = await getProperties();
  return (
    <div className="flex w-full max-sm:flex-col-reverse">
      <div className="p-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-2 gap-6 w-full sm:investment-page-width">
        {properties.map((property: any) => {
          return (
            <PropertyCard
              property={property}
              key={property.id}
              btnTitle="View Investment Details"
              investmentDetail={true}
            />
          );
        })}
      </div>
      <RightSidebar />
    </div>
  );
};

export default page;
