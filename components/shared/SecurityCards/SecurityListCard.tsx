import { useSecurityLogic } from './useSecurityLogic';
import { SecurityCardProps } from '@/types';
import { CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ServerImage } from '../ServerImage';
import React from 'react';

const SecurityListCard: React.FC<SecurityCardProps> = ({ security }) => {
  const { quantity, isExpanded, handleChange, handleToggle, calculatedPrice, calculatedGuarantee } =
    useSecurityLogic(security);

  return (
    <CardContent className="p-0 flex w-full max-h-[176px]">
      <ServerImage src={security.image} alt={security.name} width={250} height={166} />
      <div className="py-4 px-12 w-full flex gap-8 justify-between divide-x">
        <div className="flex flex-col py-6 justify-center items-center">
          <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">{security.name}</p>
          <p className="px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-xs font-bold flex items-center justify-center w-fit whitespace-nowrap">
            ${security.valuation.toLocaleString('en-US')}
          </p>
        </div>
        <div className="flex flex-col justify-between py-4 pl-8 gap-2">
          <section className="max-h-14 overflow-y-scroll">
            {security.description.map((desc, index) => (
              <p key={index} className="text-slate-600 text-sm mb-1">
                {desc}
              </p>
            ))}
          </section>
          <section className="flex justify-between items-end gap-1">
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-28 h-10 items-center overflow-hidden">
              <input
                type="text"
                min="1"
                value={quantity}
                onChange={handleChange}
                className="w-full focus:outline-none flex flex-col justify-between text-right px-2 font-space_grotesk h-10 items-center text-sm"
              />
              <p className="h-full flex items-center">
                <span className="px-1 text-xs text-start">tokens</span>
              </p>
            </article>
            <p className="mb-3">=</p>
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-28 h-10 items-center text-sm overflow-hidden bg-gray-200">
              <p className="px-2 w-full text-center"> $ {calculatedPrice}</p>
            </article>

            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-fit h-10 items-center text-sm gap-2 overflow-hidden bg-gray-200 px-4">
              <p className="text-sm">Guaranteed Buyback Price: </p>
              <p> $ {calculatedGuarantee}</p>
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
            Buy {security.name}
          </Button>
        </div>
      </div>
    </CardContent>
  );
};

export default SecurityListCard;
