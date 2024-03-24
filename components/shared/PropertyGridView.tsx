import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '../ui/accordion';
import { Button } from '../ui/button';
import { CardContent } from '../ui/card';
import { TableBody, TableRow, TableCell, Table } from '../ui/table';
import { ServerImage } from './ServerImage';
import Link from 'next/link';

interface Props {
  property: any;
  btnTitle?: string;
  btnLink?: string;
}

const PropertyGridView = ({
  property,
  btnTitle = 'View Property',
  btnLink,
}: Props) => {
  return (
    <CardContent className="p-0 relative">
      <Button className="absolute right-4 top-4 bg-transparent hover:bg-transparent p-0">
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
      <ServerImage
        className="w-full max-h-[255px]"
        src={property.image}
        alt="like"
        width={310}
        height={250}
      />
      <div className="py-6 px-4">
        <div className="flex justify-between">
          <div className="flex flex-col">
            <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">
              {property.location.address}
            </p>
            <p className="text-black text-opacity-30 text-[13px] font-normal capitalize block">
              {property.location.city} • {property.location.country}
            </p>
          </div>

          <p className="px-4 py-1 bg-teal-500 bg-opacity-10 rounded-[50px] border border-teal-500 font-space_grotesk text-teal-500 text-xs font-bold flex items-center justify-center">
            $ {property.total_valuation}
          </p>
        </div>

        <div className="flex justify-between py-4">
          <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
            <ServerImage
              src="/assets/hotel.svg"
              width={14}
              height={14}
              alt="image"
            />
            {property.category}
          </div>
          <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
            <ServerImage
              src="/assets/filter2.svg"
              width={14}
              height={14}
              alt="image"
            />
            {property.location.country}
          </div>
          <div className="bg-neutral-100 rounded-[48px] text-black text-opacity-50 text-xs font-light capitalize p-3 flex items-center gap-[6px]">
            <ServerImage
              src="/assets/filter3.svg"
              width={14}
              height={14}
              alt="image"
            />
            {property.annual_yield}%
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value={`item-${property.id}`}>
            <AccordionContent>
              <Table className="border border-slate-500 border-opacity-20">
                <TableBody>
                  <TableRow className="odd:bg-[#F5F5F5]">
                    <TableCell className="font-medium">Token Price:</TableCell>
                    <TableCell className="text-opacity-80">$50</TableCell>
                  </TableRow>
                  <TableRow className="odd:bg-[#F5F5F5]">
                    <TableCell className="font-medium">Total Tokens:</TableCell>
                    <TableCell className="text-opacity-80">4500</TableCell>
                  </TableRow>
                  <TableRow className="odd:bg-[#F5F5F5]">
                    <TableCell className="font-medium">Market Value:</TableCell>
                    <TableCell className="text-opacity-80">$1,500,00</TableCell>
                  </TableRow>
                  <TableRow className="odd:bg-[#F5F5F5]">
                    <TableCell className="font-medium ">
                      Income per Token:
                    </TableCell>
                    <TableCell className="text-opacity-80">$2,50</TableCell>
                  </TableRow>
                  <TableRow className="odd:bg-[#F5F5F5]">
                    <TableCell className="font-medium">
                      Capital Repayment:
                    </TableCell>
                    <TableCell className="text-opacity-80">3.33%</TableCell>
                  </TableRow>
                  <TableRow className="odd:bg-[#F5F5F5]">
                    <TableCell className="font-medium">
                      Repayment Term:
                    </TableCell>
                    <TableCell className="text-opacity-80">30 years</TableCell>
                  </TableRow>
                  <TableRow className="odd:bg-[#F5F5F5]">
                    <TableCell className="font-medium">Rental Yield:</TableCell>
                    <TableCell className="text-opacity-80">7.58%</TableCell>
                  </TableRow>
                  <TableRow className="odd:bg-[#F5F5F5]">
                    <TableCell className="font-medium">
                      Annual Return:
                    </TableCell>
                    <TableCell className="text-opacity-80">$458</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>

            {btnLink ? (
              <Link href={btnLink} className="text-center">
                <Button
                  variant="outline"
                  className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500
                    hover:text-white
                    bg-[#00062F] text-white"
                  style={{
                    justifyContent: 'center',
                  }}
                >
                  {btnTitle}
                </Button>
              </Link>
            ) : (
              <AccordionTrigger asChild className="text-center">
                <Button
                  variant="outline"
                  className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500
                    hover:text-white
                    bg-[#00062F] text-white"
                  style={{
                    justifyContent: 'center',
                  }}
                >
                  {btnTitle}
                </Button>
              </AccordionTrigger>
            )}
          </AccordionItem>
        </Accordion>
      </div>
    </CardContent>
  );
};

export default PropertyGridView;
