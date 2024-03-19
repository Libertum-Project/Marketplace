import React from 'react';
import Link from 'next/link';
import { ServerImage } from '@/components/shared/ServerImage';

const Hero: React.FC<{ location: { country: string; region: string; city: string; address: string; }; category: string; price: string; totalShares: number; annualYield: string; }> = ({ location, category, price, totalShares, annualYield }) => {
  return (
        <div className="max-sm:bg-primary-gradient flex flex-col items-center text-center md:text-left md:items-stretch md:w-[39rem]">
          <div className='flex flex-col text-white gap-4'>
            <section className="w-full flex justify-between items-stretch">
              <h2 className="font-bold font-space_grotesk text-5xl">
              {location.address}
              </h2>
              <h5 className="px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-lg font-bold flex items-center justify-center">
                ${price}
              </h5>
            </section>

            <h5 className="font-ubuntu text-base">
            {location.city}, {location.region}, {location.country}
            </h5>
          </div>
          
          <div className="grid grid-cols-3 gap-x-6  mt-6">
          {/* Fila 1 */}
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Token Price: </p>
            <p className="text-white text-lg font-normal">123.45</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-white text-sm font-bold">Market Value: </p>
            <p className="text-white text-lg font-normal">567.89</p>
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


          <div className="flex justify-start py-4 gap-6">
              <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
                <ServerImage
                  src="/assets/hotel.svg"
                  width={14}
                  height={14}
                  alt="image"
                />
                {/* {property.category} */}
                Property: Residential
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
                Rental Yield: 3 %
              </div>
            </div>







        </div>

  );
};

export default Hero;
