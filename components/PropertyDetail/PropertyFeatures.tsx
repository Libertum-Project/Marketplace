// PropertyFeatures.tsx
import React from 'react';
import Documents from './Documents';
import Financials from './Financials';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const PropertyFeatures: React.FC<{
  propertyPrice: number;
  totalShares: number;
  annualYield: number;
  repaymentDuration: number;
  description: string;
  selectedTokens: number;
  setSelectedTokens: React.Dispatch<React.SetStateAction<number>>;
}> = ({
  propertyPrice,
  totalShares,
  annualYield,
  repaymentDuration,
  description,
  selectedTokens,
  setSelectedTokens
}) => {
  return (
    <div className="property-features">
      <Accordion type="multiple" defaultValue={['item-1']}>
        <AccordionItem value="item-1">
          <AccordionTrigger className="font-space_grotesk text-xl font-bold">
            {' '}
            Financials
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-w-[624px]">
              <Financials
                propertyPrice={propertyPrice}
                totalShares={totalShares}
                annualYield={annualYield}
                repaymentDuration={repaymentDuration}
                selectedTokens={selectedTokens}
                setSelectedTokens={setSelectedTokens}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="font-space_grotesk text-xl font-bold">
            {' '}
            Description
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-w-[624px]">
              <p>{description}</p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="font-space_grotesk text-xl font-bold">
            {' '}
            Documents
            <ChevronDownIcon className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
          </AccordionTrigger>
          <AccordionContent>
            <div className="max-w-[624px]">
              <Documents />
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default PropertyFeatures;
