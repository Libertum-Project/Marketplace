import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import { AccordionTrigger } from '../ui/accordion';

interface Props {
  btnLink?: string;
  btnTitle?: string;
}

const PropertyCardButton = ({ btnLink, btnTitle = 'View Property' }: Props) => {
  return (
    <>
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
    </>
  );
};

export default PropertyCardButton;
