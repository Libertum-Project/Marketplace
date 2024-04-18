import { getProperties } from '@/app/utils/fetchProperties';
import PropertyCard from '@/components/shared/PropertyCard';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

const DemoInvestments = async () => {
  const properties = await getProperties();
  return (
    <>
      <div className="p-5 grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 w-full sm:investment-page-width justify-start items-start">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              {properties.slice(0, 1).map((property: any) => (
                <PropertyCard
                  property={property}
                  key={property.id}
                  btnTitle="View Investment Details"
                  investmentDetail={true}
                />
              ))}
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="bg-libertumOrange rounded-[5px] "
            >
              <p className="text-white font-space_grotesk font-semibold text-sm py-2">
                This is an example of how you will see your investments.
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  );
};
export default DemoInvestments;
