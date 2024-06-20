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
      <ServerImage src={farm.image} alt={farm.name} width={250} height={166} className="w-auto" />
      <div className="py-4 px-12 w-full flex gap-8 justify-between divide-x">
        <div className="flex flex-col py-6 justify-center items-center">
          <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">{farm.name}</p>
          <p className="px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-xs font-bold flex items-center justify-center w-fit whitespace-nowrap">
            ${farm.valuation.toLocaleString('en-US')}
          </p>
        </div>
        <div className="flex flex-col justify-between py-4 pl-8 gap-2">
          <section className="max-h-14 overflow-y-scroll">
            {farm.description.map((desc, index) => (
              <p key={index} className="text-slate-600 text-sm mb-1">
                {desc}
              </p>
            ))}
          </section>
          <section className="flex justify-between items-end gap-1">
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk h-10 items-center overflow-hidden w-full">
              <input
                type="number"
                min={1}
                max={farm.totalTokens}
                value={quantity}
                onChange={handleChange}
                className="w-full focus:outline-none flex flex-col justify-between text-right px-2 font-space_grotesk h-10 items-center text-sm"
              />
              <p className="h-full flex items-center">
                <span className="px-1 text-xs text-start">tokens</span>
              </p>
            </article>
            <p className="mb-3">=</p>
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk h-10 items-center text-sm overflow-hidden bg-gray-200 w-full">
              <p className="px-2 w-full text-center"> $ {calculatedPrice}</p>
            </article>
          </section>
        </div>
        <div className="flex justify-end items-center pl-8 max-w-32">
          <Button
            variant="outline"
            className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500
                    hover:text-white
                    bg-[#00062F] text-white cursor-not-allowed"
            style={{
              justifyContent: 'center',
            }}
          >
            Buy {farm.name}
          </Button>
        </div>
      </div>
    </CardContent>
  );
};
