import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServerImage } from '../ServerImage';
import { FarmCardProps } from '@/types';
import { useFarmLogic } from './useFarmLogic';
import React from 'react';

export const FarmListCard: React.FC<FarmCardProps> = ({ farm }) => {
  const { quantity, handleChange, calculatedPrice, calculatedGuarantee } = useFarmLogic(farm);

  return (
    <CardContent className="p-0 flex w-full max-h-[176px]">
      <ServerImage src={farm.image} alt={farm.name} width={250} height={166} className='w-auto'/>
      <div className="py-4 px-12 w-full flex gap-8 justify-between divide-x">
        <div className="flex flex-col py-6 justify-center items-center">
          <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">{farm.name}</p>
          <p className="px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-xs font-bold flex items-center justify-center w-fit whitespace-nowrap">
          ${farm.valuation.toLocaleString('en-US')}
          </p>
        </div>
        <div className="flex flex-col justify-between py-4 px-2">
          <div className="flex gap-4 justify-between items-end w-full">
            <div className="flex flex-col w-full h-fit">
              <article className="flex justify-center border rounded-[.5rem] font-space_grotesk w-full h-10 items-center overflow-hidden">
                <input
                  type="text"
                  min="1"
                  value={quantity}
                  onChange={handleChange}
                  className="w-full focus:outline-none flex flex-col justify-end text-center px-2 font-space_grotesk h-10 items-center text-sm"
                />
                <p className="h-full flex items-center">
                  <span className="px-1 text-xs">tokens</span>
                </p>
              </article>
              <p className="text-right text-xs py-1">Guaranteed Buyback Price:</p>
            </div>
            <p className="mb-3">=</p>
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-full h-10 items-center text-sm overflow-hidden bg-gray-200">
              <p className="px-4 w-full text-end">$ {calculatedPrice}</p>
            </article>
          </div>
          <p className='text-right text-sm'>$ {calculatedGuarantee}</p>
        </div>
        <div className='py-8 px-4'>
          <Button className='border border-teal-500 text-teal-500 font-space_grotesk font-bold px-10'>
            Invest
          </Button>
        </div>
      </div>
    </CardContent>
  );
};
