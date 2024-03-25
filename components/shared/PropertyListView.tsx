import React from 'react';
import { Button } from '../ui/button';
import { CardContent } from '../ui/card';
import { ServerImage } from './ServerImage';

interface Props {
  property: any;
}

const PropertyListView = ({ property }: Props) => {
  return (
    <CardContent className="p-0 flex w-full max-h-[168px]">
      <ServerImage
        src={property.image}
        alt={property.location.city}
        width={250}
        height={166}
      />
      <div className="py-4 px-16 w-full flex gap-10 justify-between divide-x">
        <div className="flex flex-col py-6 justify-between">
          <div>
            <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">
              {property.location.address}
            </p>
            <p className="text-black text-opacity-30 text-[13px] font-normal capitalize block">
              {property.location.city} • {property.location.country}
            </p>
          </div>
          <p className="px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-xs font-bold flex items-center justify-center w-fit">
            $ {property.total_valuation}
          </p>
        </div>
        <div className="flex flex-col justify-between py-6 pl-8">
          <div className="grid grid-cols-2 gap-2">
            <p>
              <span className="font-semibold">Capital Repayment:</span> 3.33%{' '}
            </p>
            <p>
              <span className="font-semibold"> Repayment Term:</span> 30 years
            </p>
            <p>
              <span className="font-semibold">Icome per token:</span> $2.75
            </p>
            <p>
              <span className="font-semibold">Price per Token:</span> $50
            </p>
          </div>
          <div className="flex justify-between items-end">
            <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
              <ServerImage
                src="/assets/hotel.svg"
                width={14}
                height={14}
                alt="image"
              />
              <p className="font-semibold">Property:</p> {property.category}
            </div>
            <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
              <ServerImage
                src="/assets/hotel.svg"
                width={14}
                height={14}
                alt="image"
              />
              {property.location.country}
            </div>
            <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
              <ServerImage
                src="/assets/hotel.svg"
                width={14}
                height={14}
                alt="image"
              />
              <p className="font-semibold">Yield:</p> {property.annual_yield}%
            </div>
          </div>
        </div>
        <div className="flex justify-end items-center pl-8">
          <Button className="bg-transparent hover:bg-transparent p-0">
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
        </div>
      </div>
    </CardContent>
  );
};

export default PropertyListView;
