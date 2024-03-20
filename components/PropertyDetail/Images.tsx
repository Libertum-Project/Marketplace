import React from 'react';
import { ServerImage } from '@/components/shared/ServerImage';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carrousel"

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const firstFourImages = images.slice(0, 4);

  return (
    <div className="max-w-screen-lg mx-auto space-y-2">
        <div className="relative max-w-screen-lg">
          <ServerImage 
            src={firstFourImages[0]} 
            alt="Main Image" 
            width={509}
            height={339}
            className="w-full h-auto md:col-span-2 rounded-[5px]" 
          />

          <Dialog>
            <DialogTrigger>
              <div className="absolute bottom-9 right-4 flex items-center gap-2 z-30 bg-white rounded-[56px] p-2 backdrop-blur-[5px]">
                <ServerImage 
                  src="/assets/icons/gallery.svg"
                  alt="gallery"
                  width={16}
                  height={16}         
                  />
                  <p>View photo gallery</p>
              </div>
            </DialogTrigger>
            <DialogContent>
            <Carousel>
            <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem key={index}>
                    <ServerImage 
                      src={image} 
                      alt={`Image ${index}`} 
                      width={509}
                      height={339}
                      className="w-full h-auto" 
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            </DialogContent>
          </Dialog>

        </div>


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
  );
};

export default ImageGallery;
