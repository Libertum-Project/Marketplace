import React from 'react';
import { ServerImage } from '../shared/ServerImage';

const Amenities: React.FC = () => {
  const amenities = [
    "Square Foot",
    "On-site Parking",
    "Swimming Pool",
    "Gymnasium"
  ];

  // Objeto que mapea nombres de amenidades a sus respectivos íconos
  const amenityIcons: Record<string, string> = {
    "Square Foot": "/assets/amenities/squarefoot.svg",
    "On-site Parking": "/assets/amenities/parking.svg",
    "Swimming Pool": "/assets/amenities/pool.svg",
    "Gymnasium": "/assets/amenities/gymnasium.svg"
    // Agrega más amenidades e íconos aquí según sea necesario
  };

  // Función para obtener el ícono de una amenidad
  const getIcon = (amenity: string) => {
    return amenityIcons[amenity] || '';  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-space_grotesk text-xl font-bold">Amenities</h2>
      <div className="flex justify-between">
        {amenities.map(amenity => (
          <div key={amenity} className="flex justify-center items-center gap-2">
            <ServerImage src={getIcon(amenity)} alt={amenity} width={32} height={32} />
            <span>{amenity}</span>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Amenities;
