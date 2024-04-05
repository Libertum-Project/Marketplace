import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ServerImage } from '@/components/shared/ServerImage';
import LikeProperty from '../shared/LikeProperty';

const Hero: React.FC<{
  location: { country: string; region: string; city: string; address: string };
  category: string;
  propertyPrice: number;
  totalShares: number;
  annualYield: number;
  property: any;
  repaymentDuration: number;
}> = ({
  location,
  category,
  propertyPrice,
  totalShares,
  annualYield,
  repaymentDuration,
  property,
}) => {
  const proyectedRentalYield = annualYield / 100;
  const tokenPrice = propertyPrice / totalShares;
  const investment = 1 * tokenPrice;
  const rentalIncomePerToken = tokenPrice * proyectedRentalYield;
  const annualRentalIncome = investment * rentalIncomePerToken;
  const monthlyRentalIncome = annualRentalIncome / 12;
  const annualCapitalRepayment = investment / (repaymentDuration / 12);
  const monthlyCapitalRepaymentPerToken =
    investment / totalShares / repaymentDuration;
  const monthlyCapitalRepayment = annualCapitalRepayment / 12;
  const annualRepayment = annualCapitalRepayment + annualRentalIncome;
  const monthlyRepayment = annualRepayment / 12;


  return (
    <div className="max-sm:bg-primary-gradient flex flex-col items-center text-center md:text-left md:items-stretch md:w-[39rem] pt-16 md:p-0">
      <div className="flex flex-col text-white gap-4 w-full ">
        <section className="w-full flex justify-between items-stretch">
          <h2 className="font-bold font-space_grotesk text-3xl md:text-5xl overflow-hidden overflow-ellipsis whitespace-nowrap">
            {location.address}
          </h2>
          <h5 className="hidden md:flex px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-lg font-bold items-center justify-center whitespace-nowrap h-10">
            ${tokenPrice}/ token
          </h5>

          <div className="md:hidden  hover:bg-transparent p-0 flex">
            <LikeProperty property={property} position="center" />
          </div>
        </section>

        <h5 className="font-ubuntu text-base text-left">
          {location.city}, {location.region}, {location.country}
        </h5>
      </div>
      <div className="md:hidden w-full items-start justify-start py-5">
        <h5 className="md:hidden px-4 py-1 bg-libertumGreen bg-opacity-10 rounded-[50px] border border-libertumGreen font-space_grotesk text-libertumGreen text-lg font-bold w-fit">
          ${tokenPrice} per token
        </h5>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 mt-4 w-full gap-y-1"> 
        {/* Fila 1 */}
        <div className="hidden md:flex justify-between ">
          <p className="text-white text-sm font-bold text-left">Min Invesment: </p>
          <p className="text-white text-sm font-normal">${tokenPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold text-left">Market Value: </p>
          <p className="text-white text-sm font-normal">${propertyPrice}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold text-left">Repayment Term: </p>
          <p className="text-white text-sm font-normal">{repaymentDuration} months</p>
        </div>

        {/* Fila 2 */}
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold text-left">Total Tokens: </p>
          <p className="text-white text-sm font-normal">{totalShares}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold text-left">Income per Token: </p>
          <p className="text-white text-sm font-normal">$ {rentalIncomePerToken}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold text-left">Rental Yield: </p>
          <p className="text-white text-sm font-normal">{annualYield} %</p>
        </div>

        {/* Fila 3 */}
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold text-left">Tokens Available: </p>
          <p className="text-white text-sm font-normal">{totalShares}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold text-left">Monthly Capital Repayment: </p>
          <p className="text-white text-sm font-normal">{monthlyCapitalRepayment}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-white text-sm font-bold text-left">Annual Repayment: </p>
          <p className="text-white text-sm font-normal">{annualRepayment}</p>
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
          <span className="hidden md:block"> Property:</span>Residential
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
        <div className="hidden md:flex">
          <LikeProperty property={property} position="center" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
