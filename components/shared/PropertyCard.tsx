import { ServerImage } from '@/components/shared/ServerImage';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface Props {
  property: any;
  viewType?: string;
  btnTitle?: string;
  handleCardClick?: (location: string) => void;
}

const PropertyCard = ({
  property,
  viewType = 'grid',
  btnTitle = 'View Property',
  handleCardClick,
}: Props) => {
  return (
    <Card
      className={`bg-white h-fit rounded-[5px] shadow border border-black border-opacity-10 ${
        viewType === 'grid' && 'min-h-0'
      } ${viewType !== 'grid' ? 'max-h-[168px]' : ''} overflow-hidden`}
    >
      {viewType == 'grid' ? (
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
                        <TableCell className="font-medium">
                          Token Price:
                        </TableCell>
                        <TableCell className="text-opacity-80">$50</TableCell>
                      </TableRow>
                      <TableRow className="odd:bg-[#F5F5F5]">
                        <TableCell className="font-medium">
                          Total Tokens:
                        </TableCell>
                        <TableCell className="text-opacity-80">4500</TableCell>
                      </TableRow>
                      <TableRow className="odd:bg-[#F5F5F5]">
                        <TableCell className="font-medium">
                          Market Value:
                        </TableCell>
                        <TableCell className="text-opacity-80">
                          $1,500,00
                        </TableCell>
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
                        <TableCell className="text-opacity-80">
                          30 years
                        </TableCell>
                      </TableRow>
                      <TableRow className="odd:bg-[#F5F5F5]">
                        <TableCell className="font-medium">
                          Rental Yield:
                        </TableCell>
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
              </AccordionItem>
            </Accordion>
          </div>
        </CardContent>
      ) : (
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
                  <span className="font-semibold">Capital Repayment:</span>{' '}
                  3.33%{' '}
                </p>
                <p>
                  <span className="font-semibold"> Repayment Term:</span> 30
                  years
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
                  <p className="font-semibold">Yield:</p>{' '}
                  {property.annual_yield}%
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
      )}
    </Card>
  );
};

export default PropertyCard;
