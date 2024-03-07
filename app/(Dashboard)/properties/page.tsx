import PropertyCard from '@/components/shared/PropertyCard';

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
          <PropertyCard
            property={property}
            address={address}
            key={property.id}
          />
        );
      })}
    </div>
  );
};

export default page;
