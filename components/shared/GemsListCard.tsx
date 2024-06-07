'use client';
import { useState, ChangeEvent } from 'react';

import { Gem } from '@/types/index';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { ServerImage } from './ServerImage';
import { Button } from '@/components/ui/button';

interface Props {
  gem: Gem;
  investmentDetail?: boolean;
}

const GemsListCard: React.FC<Props> = ({ gem, investmentDetail }) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };

  return (
    <CardContent className="p-0 flex w-full max-h-[186px]">
      <ServerImage src={gem.image} alt={gem.name} width={250} height={166} />
      <div className="py-4 px-12 w-full flex gap-8 justify-between divide-x">
        <div className="flex flex-col py-6 justify-center items-center">
          <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">{gem.name}</p>
          <p className="px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-xs font-bold flex items-center justify-center w-fit whitespace-nowrap">
            ${gem.pricePerGram} /gr
          </p>
        </div>
        <div className="flex flex-col justify-between pl-8">
          <p>{gem.description}</p>
          <section className="flex justify-between items-end py-4 gap-1">
            <div className="flex flex-col justify-between w-24">
              <label className="ml-2 text-xs text-slate-400">tokens</label>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleChange}
                className="w-full focus:outline-none flex flex-col justify-between border rounded-[.5rem] px-2 font-space_grotesk h-10 items-center"
              />
            </div>
            <p className="mb-3">=</p>
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-24 h-10 items-center">
              <p className="bg-gray-200 h-full flex items-center">
                <span className="px-2">$ </span>
              </p>
              <p>{(quantity * 50).toFixed(2)}</p>
            </article>
            <p className="mb-3">=</p>
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-24 px-1 h-10 items-center">
              <p>{(quantity * gem.tokenGrams).toFixed(4)} gr.</p>
            </article>
          </section>

          <div className="flex justify-between items-end"></div>
        </div>
        <div className="flex justify-end items-center pl-8 max-w-32">
          <Button
            variant="outline"
            className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500
                    hover:text-white
                    bg-[#00062F] text-white"
            style={{
              justifyContent: 'center',
            }}
          >
            Buy {gem.name}
          </Button>
        </div>
      </div>
    </CardContent>
  );
};

export default GemsListCard;
