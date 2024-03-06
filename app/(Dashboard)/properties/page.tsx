import { ServerImage } from '@/components/shared/ServerImage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const page = async () => {
  // const res = await fetch(`${process.env.NETX_PUBLIC_URL}/api/properties`, {
  //   headers: {
  //     Accept: 'application/json',
  //     method: 'GET',
  //   },
  // });

  // const properties = await res.json();

  // console.log(properties);

  const properties: {}[] = [
    {
      id: 1,
      name: '23 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        city: 'Miami',
        state: 'florida',
        country: 'united states',
      },
    },
    {
      id: 2,
      name: '24 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        city: 'sikar',
        state: 'rajasthan',
        country: 'india',
      },
    },
    {
      id: 3,
      name: '25 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        state: 'rajasthan',
        city: 'sikar',
        country: 'india',
      },
    },
    {
      id: 4,
      name: '26 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        state: 'rajasthan',
        city: 'sikar',
        country: 'india',
      },
    },
    {
      id: 5,
      name: '26 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        state: 'rajasthan',
        city: 'sikar',
        country: 'india',
      },
    },
    {
      id: 6,
      name: '26 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        state: 'rajasthan',
        city: 'sikar',
        country: 'india',
      },
    },
  ];

  return (
    <div className="p-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-full">
      {properties.map((property: any) => {
        const address = `${property.address.city},${property.address.state},${property.address.country}`;
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
      })}
    </div>
  );
};

export default page;