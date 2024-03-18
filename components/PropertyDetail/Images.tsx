import React from 'react';
import { ServerImage } from '@/components/shared/ServerImage';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  // Filtrar las primeras cuatro imágenes del array
  const firstFourImages = images.slice(0, 4);

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <ServerImage 
          src={firstFourImages[0]} 
          alt="Main Image" 
          width={509}
          height={339}
          className="w-full h-auto md:col-span-2 rounded-[5px]" 
        />

        <div className="grid grid-cols-3 gap-4 md:col-span-2">
          {firstFourImages.slice(1).map((image, index) => (
            <ServerImage 
              key={index} 
              src={image} 
              alt={`Image ${index}`}
              width={163}
              height={109}
              className="w-full h-auto rounded-[5px]" 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
