import React from 'react';

import { ServerImage } from '../shared/ServerImage';

const Amenities = () => {
  const amenities = ['Square Foot', 'On-site Parking', 'Swimming Pool', 'Gymnasium'];

  const amenityIcons: Record<string, string> = {
    'Square Foot': '/assets/amenities/squarefoot.svg',
    'On-site Parking': '/assets/amenities/parking.svg',
    'Swimming Pool': '/assets/amenities/pool.svg',
    Gymnasium: '/assets/amenities/gymnasium.svg',
  };

  const getIcon = (amenity: string) => {
    return amenityIcons[amenity] || '';
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-space_grotesk text-xl font-bold">Amenities</h2>
      <div className="grid grid-cols-2 space-y-2 md:space-y-0 md:flex md:justify-between">
        {amenities.map((amenity) => (
          <div key={amenity} className="flex justify-start md:justify-center items-center gap-2">
            <ServerImage src={getIcon(amenity)} alt={amenity} width={32} height={32} />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
