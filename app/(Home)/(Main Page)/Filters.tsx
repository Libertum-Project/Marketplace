'use client';
import { useState, type ReactElement } from 'react';
import { ServerImage } from '@/components/shared/ServerImage';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface Props {
  filterFunction: any;
}

export function Filters({ filterFunction }: Props): ReactElement {
  const [categoryFilter, setCategoryFilter] = useState('');
  const [countryFilter, setCountryFilter] = useState('');
  const [annualYieldFilter, setAnnualYieldFilter] = useState('');

  const selectOptions: {
    imageURL: string;
    label: string;
    options: string[];
  }[] = [
    {
      imageURL: '/assets/filter1.svg',
      label: 'Property Type',
      options: [
        'All',
        'Commercial',
        'Residential',
        'Commercial',
        'Farm',
        'Restaurant',
        'Office',
      ],
    },
    {
      imageURL: '/assets/filter2.svg',
      label: 'Location',
      options: [
        'Worldwide',
        'France',
        'USA',
        'Spain',
        'Canada',
        'Japan',
        'United Kingdom',
        'Netherlands',
        'Brazil',
      ],
    },
    {
      imageURL: '/assets/filter3.svg',
      label: 'Rental Yield',
      options: ['Up to  5%', '5% to 10%', '10% to 15 %'],
    },
  ];

  const handleCategoryChange = (event: any) => {
    setCategoryFilter(event.target.value);
  };

  const handleCountryChange = (event: any) => {
    setCountryFilter(event.target.value);
  };

  const handleAnnualYieldChange = (event: any) => {
    setAnnualYieldFilter(event.target.value);
  };

  return (
    <div className="flex flex-col align-start gap-2 self-stretch max-w-[95%] relative top-[-3rem] mb-[-1rem] p-2 z-[999] shadow-sm bg-white border lg:top-[-1.8rem] lg:flex-row lg:px-8 lg:py-6 justify-between lg:align-center lg:max-w-[75rem] m-auto rounded-[5px]">
      {selectOptions.map((option, index) => (
        <div
          key={index}
          className="w-full justify-between flex align-center md:gap-4 md:justify-center md:w-none"
        >
          <div className="flex font-space_grotesk text-base font-bold justify-center items-center">
            <ServerImage
              src={option.imageURL}
              alt="N"
              width="18"
              height="18"
              className="mr-3"
            />
            <p className="w-fit whitespace-nowrap">{option.label}</p>
          </div>

          <select
            className="flex w-[200px] cursor-pointer px-4 py-3 bg-white rounded-[5px] border border-black border-opacity-10"
            onChange={
              option.label === 'Property Type'
                ? handleCategoryChange
                : option.label === 'Location'
                ? handleCountryChange
                : handleAnnualYieldChange
            }
          >
            {option.options.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div className="flex bg-libertumGreen rounded-[5px] px-4 justify-center gap-4">
        <p className="md:hidden text-white font-space_grotesk font-bold py-4">
          Search Properties{' '}
        </p>
        <ServerImage
          src="/assets/magnifying.svg"
          alt="N"
          width="30"
          height="30"
          className="md:w-[60px] md:h-[50px] cursor-pointer"
          onClick={() =>
            filterFunction(categoryFilter, countryFilter, annualYieldFilter)
          }
        />
      </div>
    </div>
  );
}
