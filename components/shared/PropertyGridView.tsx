import InvestmentDetail from '../Dashboard/InvestmentDetail';
import { Accordion, AccordionItem, AccordionContent } from '../ui/accordion';
import { Button } from '../ui/button';
import { CardContent } from '../ui/card';
import PropertyCardButton from './PropertyCardButton';
import PropertyDetailTable from './PropertyDetailTable';
import { ServerImage } from './ServerImage';

interface Props {
  property: any;
  btnTitle?: string;
  btnLink?: string;
  investmentDetail?: boolean;
}

const PropertyGridView = ({
  property,
  btnTitle,
  btnLink,
  investmentDetail = false,
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

        {investmentDetail ? (
          <InvestmentDetail property={property} />
        ) : (
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value={`item-${property.id}`}>
              <AccordionContent>
                <PropertyDetailTable />
              </AccordionContent>

              <PropertyCardButton btnTitle={btnTitle} btnLink={btnLink} />
            </AccordionItem>
          </Accordion>
        )}
      </div>
    </CardContent>
  );
};

export default PropertyGridView;
