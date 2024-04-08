import { getProperties } from '@/app/utils/fetchProperties';
import RightSidebar from '@/components/Dashboard/RightSidebar';
import PropertyCard from '@/components/shared/PropertyCard';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const page = async () => {
  const properties = await getProperties();
  return (
    <div className="flex w-full max-sm:flex-col-reverse">
      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-full sm:investment-page-width">
       
        {properties.slice(0, 1).map((property: any) => (
          <PropertyCard
            property={property}
            key={property.id}
            btnTitle="View Investment Details"
            investmentDetail={true}
          />
        ))}

        {[...Array(3)].map((_, index) => (
          <Card key={`skeleton-${index}`}>
            <CardContent className="h-480 p-0">
              <div className="flex flex-col space-y-3 w-full">
                <Skeleton className="h-[255px] bg-[#929191] w-full" />
                <div className="space-y-4 p-4">
                  <Skeleton className="h-10 w-full bg-black bg-opacity-5 rounded-[48px]" />

                  <div className="flex items-center justify-between">
                    <div className="pr-4 w-full">
                      <Skeleton className="h-7 w-full bg-black bg-opacity-5 rounded-[48px]" />
                    </div>
                    <div className="w-full">
                      <Skeleton className="h-7 w-full bg-black bg-opacity-5 rounded-[48px]" />
                    </div>
                    <div className="pl-4 w-full">
                      <Skeleton className="h-7 w-full bg-black bg-opacity-5 rounded-[48px]" />
                    </div>
                  </div>

                  <Skeleton className="h-10 w-full bg-black bg-opacity-5 rounded-[48px]" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
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
