'use client';
import { useState, ChangeEvent } from 'react';
import { Gem, GemsCardProps } from '@/types/index';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableRow, TableCell } from '../ui/table';
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '../ui/accordion';
import { ServerImage } from './ServerImage';

const GemsGridCard: React.FC<GemsCardProps> = ({ gem }) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [unit, setUnit] = useState<'gr' | 'oz'>('gr');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'gr' | 'oz';
    setUnit(value);
  };

  const getConversionFactor = () => {
    return unit === 'gr' ? 1 : 0.035274; // 1 gr = 0.035274 oz
  };

  return (
    <>
      <CardContent className="p-0 relative">
        <div className="h-[255px]">
          <ServerImage
            className="w-full"
            src={gem.image}
            alt={gem.name}
            width={310}
            height={250}
            style={{
              height: '100%',
            }}
          />
        </div>

        <div className="py-6 px-4 max-h-[167.5px]">
          <section className="flex justify-between">
            <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">{gem.name}</p>

            <p className="px-4 py-1 bg-libertumGreen bg-opacity-10 rounded-[50px] border border-libertumGreen font-space_grotesk text-libertumGreen text-xs font-bold flex items-center justify-center h-fit whitespace-nowrap">
              ${gem.pricePerGram} /gr
            </p>
          </section>

          <section className="flex justify-between items-end py-4 gap-1">
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-24 h-10 items-center overflow-hidden">
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={handleChange}
                className="w-full focus:outline-none flex flex-col justify-between px-2 font-space_grotesk h-10 items-center text-sm"
              />
              <p className="h-full flex items-center">
                <span className="px-1 text-xs">tokens</span>
              </p>
            </article>
            <p className="mb-3">=</p>
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-24 h-10 items-center text-sm overflow-hidden">
              <p className="bg-gray-200 h-full flex items-center">
                <span className="px-2">$ </span>
              </p>
              <p className="px-2">{(quantity * 50).toFixed(2)}</p>
            </article>
            <p className="mb-3">=</p>
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-24 h-10 items-center text-sm overflow-hidden">
              <p className='px-1'>{(quantity * gem.tokenGrams * getConversionFactor()).toFixed(4)}</p>
              <select value={unit} onChange={handleUnitChange} className="bg-gray-200 h-full flex items-center">
              <option value="gr">gr</option>
              <option value="oz">oz</option>
            </select>
            </article>
          </section>
        </div>
      </CardContent>
      <CardFooter className="w-full px-4 h-fit">
        {!isExpanded ? (
          <Button
            variant="outline"
            className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20 text-center font-bold font-space_grotesk py-6 hover:bg-teal-500 hover:text-white bg-[#00062F] text-white"
            style={{
              justifyContent: 'center',
            }}
            onClick={handleToggle}
          >
            More
          </Button>
        ) : (
          <Accordion type="single" collapsible className="w-full" value={`item-${gem.id}`}>
            <AccordionItem value={`item-${gem.id}`}>
              <AccordionContent>
                <p className="text-slate-600 text-sm">{gem.description}</p>
                <Table className="border border-slate-500 border-opacity-20 mt-2">
                  <TableBody>
                    <TableRow className="odd:bg-[#F5F5F5]">
                      <TableCell className="font-medium">Insurance Report:</TableCell>
                      <TableCell className="text-opacity-80 flex">
                        <ServerImage
                          src="/assets/icons/download.svg"
                          alt="download document"
                          width={18}
                          height={18}
                          className="cursor-pointer"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow className="odd:bg-[#F5F5F5]">
                      <TableCell className="font-medium">Custodial Report:</TableCell>
                      <TableCell className="text-opacity-80">
                        <ServerImage
                          src="/assets/icons/download.svg"
                          alt="download document"
                          width={18}
                          height={18}
                          className="cursor-pointer"
                        />
                      </TableCell>
                    </TableRow>
                    <TableRow className="odd:bg-[#F5F5F5]">
                      <TableCell className="font-medium">Insurance Document:</TableCell>
                      <TableCell className="text-opacity-80">
                        <ServerImage
                          src="/assets/icons/download.svg"
                          alt="download document"
                          width={18}
                          height={18}
                          className="cursor-pointer"
                        />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </AccordionContent>
              <Button
                variant="outline"
                className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500
                    hover:text-white
                    bg-[#00062F] text-white cursor-not-allowed"
                style={{
                  justifyContent: 'center',
                }}
              >
                Buy {gem.name}
              </Button>
            </AccordionItem>
          </Accordion>
        )}
      </CardFooter>
    </>
  );
};

export default GemsGridCard;
