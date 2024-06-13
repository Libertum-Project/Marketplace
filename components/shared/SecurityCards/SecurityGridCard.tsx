'use client';

import { CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableRow, TableCell } from '@/components/ui/table';
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from '@/components/ui/accordion';
import { ServerImage } from '../ServerImage';

import { SecurityCardProps } from '@/types';
import { useSecurityLogic } from './useSecurityLogic';

export const SecurityGridCard: React.FC<SecurityCardProps> = ({ security }) => {
  const { quantity, isExpanded, handleChange, handleToggle, calculatedPrice, calculatedGuarantee } =
    useSecurityLogic(security);

  const handleCloseAccordion = () => {
    handleToggle();
  };

  return (
    <>
      <CardContent className="p-0 relative">
        <div className="h-[255px] flex justify-center">
          <ServerImage
            src={security.image}
            alt={security.name}
            width={200}
            height={250}
            className="h-full w-auto p-1"
          />
        </div>

        <div className="py-6 px-4 h-[167.5px]">
          <section className="flex justify-between">
            <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">{security.name}</p>

            <p className="px-4 py-1 bg-libertumGreen bg-opacity-10 rounded-[50px] border border-libertumGreen font-space_grotesk text-libertumGreen text-xs font-bold flex items-center justify-center h-fit whitespace-nowrap">
              ${security.valuation.toLocaleString('en-US')}
            </p>
          </section>

          <section className="flex justify-between items-end py-2 gap-4">
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
            <p className="mb-3">=</p>
            <article className="flex justify-between border rounded-[.5rem] font-space_grotesk w-full h-10 items-center text-sm overflow-hidden bg-gray-200">
              <p className="px-4 w-full text-end"> $ {calculatedPrice}</p>
            </article>
          </section>
          <section className="flex justify-between border rounded-[.5rem] font-space_grotesk w-full h-10 items-center text-sm overflow-hidden bg-gray-200 px-4">
            <p className="text-sm">Guaranteed Buyback Price:</p>
            <p>$ {calculatedGuarantee}</p>
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
          <Accordion type="single" collapsible className="w-full" value={`item-${security.id}`}>
            <AccordionItem value={`item-${security.id}`}>
              <AccordionContent>
                {security.description.map((desc, index) => (
                  <p key={index} className="text-slate-600 text-sm mb-1">
                    {desc}
                  </p>
                ))}
                <Table className="border border-slate-500 border-opacity-20 mt-2">
                  <TableBody>
                    <TableRow className="odd:bg-[#F5F5F5]">
                      <TableCell className="font-medium">Guaranteed Token Buyback Price:</TableCell>
                      <TableCell className="flex text-opacity-80 justify-end">
                        <p>$ {security.guaranteed}</p>
                      </TableCell>
                    </TableRow>
                    <TableRow className="odd:bg-[#F5F5F5]">
                      <TableCell className="font-medium">Insurance Report:</TableCell>
                      <TableCell className="flex text-opacity-80 justify-end">
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
                      <TableCell className="flex text-opacity-80 justify-end">
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
                      <TableCell className="flex text-opacity-80 justify-end">
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
                <AccordionTrigger>
                  <Button
                    onClick={handleCloseAccordion}
                    className="w-full items-center justify-center font-bold hover:text-libertumGreen text-xl cursor-pointer"
                  >
                    ︿
                  </Button>
                </AccordionTrigger>
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
                Buy {security.name}
              </Button>
            </AccordionItem>
          </Accordion>
        )}
      </CardFooter>
    </>
  );
};
