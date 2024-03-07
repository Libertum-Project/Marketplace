import { ServerImage } from '@/components/shared/ServerImage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Props {
  property: any;
  address: string;
}

const PropertyCard = ({ property, address }: Props) => {
  return (
    <Card
      key={property.id}
      className="bg-white rounded-[5px] shadow border border-black border-opacity-10"
    >
      <CardContent className="p-0">
        <ServerImage
          className="w-full"
          src={property.image}
          alt={property.name}
          width={310}
          height={250}
        />
        <div className="py-6 px-4">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">
                {property.name}
              </p>
              <p className="text-black text-opacity-30 text-[13px] font-normal capitalize block">
                {address}
              </p>
            </div>

            <p className="px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-xs font-bold flex items-center justify-center">
              {property.price}
            </p>
          </div>

          <div className="flex justify-between py-6">
            <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
              <ServerImage
                src="/assets/hotel.svg"
                width={14}
                height={14}
                alt="image"
              />
              {property.type}
            </div>
            <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
              <ServerImage
                src="/assets/hotel.svg"
                width={14}
                height={14}
                alt="image"
              />
              {property.address.country}
            </div>
            <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
              <ServerImage
                src="/assets/hotel.svg"
                width={14}
                height={14}
                alt="image"
              />
              {property.percentage}%
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full rounded-[5px] border border-teal-500 border-opacity-20 text-gray-950 text-base font-bold font-space_grotesk py-6"
          >
            View Property
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;
