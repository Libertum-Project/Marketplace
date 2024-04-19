'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { AccordionTrigger } from '../ui/accordion';

interface Props {
  btnTitle?: string;
  propertyId?: number;
}

const PropertyCardButton = ({ propertyId }: Props) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const handleOpenAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  return (
    <>
      {isAccordionOpen ? (
        <Link
          href={{
            pathname: '/details',
            query: {
              id: propertyId
            }
          }}
          className="text-center"
        >
          <Button
            variant="outline"
            className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500
                    hover:text-white
                    bg-[#00062F] text-white"
            style={{
              justifyContent: 'center'
            }}
          >
            View Property
          </Button>
        </Link>
      ) : (
        <AccordionTrigger asChild className="text-center">
          <Button
            onClick={handleOpenAccordion}
            variant="outline"
            className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500
                    hover:text-white
                    bg-[#00062F] text-white"
            style={{
              justifyContent: 'center'
            }}
          >
            Quick View
          </Button>
        </AccordionTrigger>
      )}
    </>
  );
};

export default PropertyCardButton;
