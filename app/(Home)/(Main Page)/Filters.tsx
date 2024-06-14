'use client';
import { useState, useEffect, type ReactElement } from 'react';

import { ServerImage } from '@/components/shared/ServerImage';

interface Props {
  filterFunction: any;
}

export function Filters({ filterFunction }: Props): ReactElement {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [subCategoryFilter, setSubCategoryFilter] = useState('All');

  const filterOptions: { [key: string]: { label: string; subcategories: string[] } } = {
    'Real Estate': {
      label: 'Real Estate',
      subcategories: ['All', 'Residential', 'Commercial', 'Farm', 'Restaurant', 'Office'],
    },
    'Gems and Metals': {
      label: 'Gems and Metals',
      subcategories: ['All', 'Gold', 'Emeralds', 'Diamonds'],
    },
    'Security': {
      label: 'Security',
      subcategories: ['All', 'Subcategory1', 'Subcategory2'], // Ajusta las subcategorías según necesites
    },
    'Art': {
      label: 'Art',
      subcategories: ['All', 'SubcategoryA', 'SubcategoryB'], // Ajusta las subcategorías según necesites
    },
  };

  useEffect(() => {
    filterFunction(categoryFilter, subCategoryFilter);
  }, [categoryFilter, subCategoryFilter]);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCategory = event.target.value;
    setCategoryFilter(selectedCategory);
    setSubCategoryFilter('All'); // Reinicia las subcategorías al cambiar la categoría principal
  };

  const handleSubCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSubCategory = event.target.value;
    setSubCategoryFilter(selectedSubCategory);
  };

  const resetFilters = () => {
    setCategoryFilter('All');
    setSubCategoryFilter('All');
  };

  return (
    <div className="flex flex-col align-start gap-8 self-stretch max-w-[95%] relative top-[-3rem] mb-[-1rem] p-2 z-[999] shadow-sm bg-white border lg:top-[-1.8rem] lg:flex-row lg:px-8 lg:py-6 justify-between lg:align-center lg:max-w-[75rem] m-auto rounded-[5px]">
      <div className="w-full justify-between flex align-center md:gap-4 md:justify-center md:w-none">
        <div className="flex font-space_grotesk text-base font-bold justify-center items-center">
            {/* <ServerImage src={option.imageURL} alt="N" width="18" height="18" className="mr-3" /> */}
            <p className="w-fit whitespace-nowrap">Select Category</p>
          </div>
        <select
          className="flex w-full cursor-pointer px-4 py-3 bg-white rounded-[5px] border border-black border-opacity-10"
          onChange={handleCategoryChange}
          value={categoryFilter}
        >
          <option value="All">All</option>
          {Object.keys(filterOptions).map((category, index) => (
            <option key={index} value={category}>
              {filterOptions[category].label}
            </option>
          ))}
        </select>
      </div>

      {categoryFilter !== 'All' && (
        <div className="w-full justify-between flex align-center md:gap-4 md:justify-center md:w-none">
                  <div className="flex font-space_grotesk text-base font-bold justify-center items-center">
            {/* <ServerImage src={option.imageURL} alt="N" width="18" height="18" className="mr-3" /> */}
            <p className="w-fit whitespace-nowrap">Subcategory</p>
          </div>
          <select
            className="flex w-full cursor-pointer px-4 py-3 bg-white rounded-[5px] border border-black border-opacity-10"
            onChange={handleSubCategoryChange}
            value={subCategoryFilter}
          >
            {filterOptions[categoryFilter].subcategories.map((subCategory, index) => (
              <option key={index} value={subCategory}>
                {subCategory}
              </option>
            ))}
          </select>
        </div>
      )}

      <button className="flex bg-libertumGreen rounded-[5px] px-4 justify-center gap-4 py-4" onClick={resetFilters}>
        <p className="md:hidden text-white font-space_grotesk font-bold">Reset Filters</p>
        <ServerImage src="/assets/reset.svg" alt="Reset" width="30" height="30" />
      </button>
    </div>
  );
}
