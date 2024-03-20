import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ServerImage } from '@/components/shared/ServerImage';

const Hero: React.FC<{ location: { country: string; region: string; city: string; address: string; }; category: string; price: string; totalShares: number; annualYield: string;   property: any;
}> = ({ location, category, price, totalShares, annualYield, property }) => {
  return (
        <div className="max-sm:bg-primary-gradient flex flex-col items-center text-center md:text-left md:items-stretch md:w-[39rem] pt-16 md:p-0">
          <div className='flex flex-col text-white gap-4 w-full '>
            <section className="w-full flex justify-between items-stretch">
              <h2 className="font-bold font-space_grotesk text-3xl md:text-5xl">
              {location.address}
              </h2>
              <h5 className="hidden md:flex px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-lg font-bold items-center justify-center">
                $50 per token
              </h5>

              <Button className="md:hidden  hover:bg-transparent p-0">
                <ServerImage
                  src={`${
                    property.favourite
                      ? '/assets/icons/property-liked.svg'
                      : '/assets/icons/property-unliked.svg'
                  }`}
                  alt="like"
                  width={49}
                  height={48}
                />
              </Button>

            </section>

            <h5 className="font-ubuntu text-base text-left">
            {location.city}, {location.region}, {location.country}
            </h5>
          </div>
          <div className="md:hidden w-full items-start justify-start py-5">
            <h5 className="md:hidden px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-lg font-bold w-fit">
              $50 per token
            </h5>
          </div>

          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 mt-6 w-full">
          {/* Fila 1 */}
          <div className="hidden md:flex items-center justify-between ">
            <p className="text-white text-sm font-bold">Min Invesment: </p>
            <p className="text-white text-lg font-normal">$50</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Market Value: </p>
            <p className="text-white text-lg font-normal">${price}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Repayment Term: </p>
            <p className="text-white text-lg font-normal">5 years</p>
          </div>

          {/* Fila 2 */}
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Total Tokens: </p>
            <p className="text-white text-lg font-normal">1000</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Income per Token: </p>
            <p className="text-white text-lg font-normal">0.5</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Rental Yield: </p>
            <p className="text-white text-lg font-normal">5%</p>
          </div>

          {/* Fila 3 */}
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Tokens Available: </p>
            <p className="text-white text-lg font-normal">500</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Capital Repayment: </p>
            <p className="text-white text-lg font-normal">250</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Annual Return: </p>
            <p className="text-white text-lg font-normal">2%</p>
          </div>
          </div>


          <div className="flex justify-between md:justify-start py-4 gap-6 w-full">
              <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
                <ServerImage
                  src="/assets/hotel.svg"
                  width={14}
                  height={14}
                  alt="image"
                />
                {/* {property.category} */}
                <span className='hidden md:block'> Property:</span>Residential
              </div>
              <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
                <ServerImage
                  src="/assets/filter2.svg"
                  width={14}
                  height={14}
                  alt="image"
                />
                {/* {property.location.country} */}
              United States
              </div>
              <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
                <ServerImage
                  src="/assets/filter3.svg"
                  width={14}
                  height={14}
                  alt="image"
                />
                {/* {property.annual_yield}% */}
                Rental Yield:3 %
              </div>
          </div>







        </div>

  );
};

export default Hero;
