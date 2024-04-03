import { getProperties } from '@/app/utils/fetchProperties';
import RightSidebar from '@/components/Dashboard/RightSidebar';
import PropertyCard from '@/components/shared/PropertyCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

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
      {/* <div className="w-full flex flex-col gap-2 justify-center items-center min-h-screen">
          <h3 className="text-lg font-bold">No investment at the moment</h3>

          <Link href="/">
            <Button className="bg-teal-500 rounded-[5px] text-white text-center hover:bg-teal-500 min-w-[164px] max-sm:w-full">
              Return to marketplace
            </Button>
          </Link>
        </div> */}
      <RightSidebar />
    </div>
  );
};

export default page;
