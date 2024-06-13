'use client';
import { useState, useEffect, type ReactElement } from 'react';

import { ServerImage } from '@/components/shared/ServerImage';

interface Props {
  filterFunction: any;
}

export function Filters({ filterFunction }: Props): ReactElement {
  const [assetFilter, setAssetFilter] = useState('All');
  const [subCategoryFilter, setSubCategoryFilter] = useState('All');

  const selectOptions: {
    imageURL: string;
    label: string;
    options: string[];
  }[] = [
    {
      imageURL: '/assets/filter1.svg',
      label: 'Asset',
      options: ['All', 'Real Estate', 'Gems and Metals', 'Security', 'Art'],
    },
    {
      imageURL: '/assets/filter2.svg',
      label: 'Subcategory',
      options:
        assetFilter === 'Real Estate'
          ? ['All', 'Residential', 'Commercial', 'Farm', 'Restaurant', 'Office']
          : assetFilter === 'Gems and Metals'
            ? ['All', 'Gold', 'Emeralds', 'Diamonds']
            : ['All'],
    },
  ];

  useEffect(() => {
    filterFunction(assetFilter, subCategoryFilter);
  }, [assetFilter, subCategoryFilter]);

  const handleAssetChange = (event: any) => {
    setAssetFilter(event.target.value);
    setSubCategoryFilter('All');
  };

  const handleSubCategoryChange = (event: any) => {
    setSubCategoryFilter(event.target.value);
  };

  const resetFilters = () => {
    setAssetFilter('All');
    setSubCategoryFilter('All');
  };

  return (
    <div className="flex flex-col align-start gap-8 self-stretch max-w-[95%] relative top-[-3rem] mb-[-1rem] p-2 z-[999] shadow-sm bg-white border lg:top-[-1.8rem] lg:flex-row lg:px-8 lg:py-6 justify-between lg:align-center lg:max-w-[75rem] m-auto rounded-[5px]">
      {selectOptions.map((option, index) => (
        <div key={index} className="w-full justify-between flex align-center md:gap-4 md:justify-center md:w-none">
          <div className="flex font-space_grotesk text-base font-bold justify-center items-center">
            <ServerImage src={option.imageURL} alt="N" width="18" height="18" className="mr-3" />
            <p className="w-fit whitespace-nowrap">{option.label}</p>
          </div>

          <select
            className="flex w-full cursor-pointer px-4 py-3 bg-white rounded-[5px] border border-black border-opacity-10"
            onChange={option.label === 'Asset' ? handleAssetChange : handleSubCategoryChange}
            value={option.label === 'Asset' ? assetFilter : subCategoryFilter}
            disabled={option.label === 'Subcategory' && selectOptions[1].options.length === 0}
          >
            {option.options.map((opt, idx) => (
              <option key={idx} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      ))}

      <button className="flex bg-libertumGreen rounded-[5px] px-4 justify-center gap-4 py-4" onClick={resetFilters}>
        <p className="md:hidden text-white font-space_grotesk font-bold">Reset Filters</p>
        <ServerImage src="/assets/reset.svg" alt="Reset" width="30" height="30" className="md:w-[70px]" />
      </button>
    </div>
  );
}
