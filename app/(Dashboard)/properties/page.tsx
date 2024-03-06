import { Card, CardContent } from '@/components/ui/card';
import { Key } from 'react';

const page = async () => {
  const res = await fetch(`${process.env.NETX_PUBLIC_URL}/api/properties`, {
    headers: {
      Accept: 'application/json',
      method: 'GET',
    },
  });

  const properties = await res.json();

  console.log(properties);

  return (
    <div className="flex flex-col gap-2">
      {properties?.data?.map((property: any) => {
        return (
          <Card key={property.ID_Property}>
            <CardContent>{property.ID_Property}</CardContent>
          </Card>
        );
      })}
    </div>
  );
};

export default page;
