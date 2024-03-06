'use client'
import React from 'react';
import Image from 'next/image';
import gridActive from '../../../../../public/assets/gridActive.svg';
import filesInactive from '../../../../../public/assets/filesInactive.svg';
import gridInactive from '../../../../../public/assets/gridInactive.svg';
import filesActive from '../../../../../public/assets/filesActive.svg';
import css from '../PropertyCards.module.css';

interface SortProps {
  grid: boolean;
  toggleView: () => void;
}

const SortComponent: React.FC<SortProps> = ({ grid, toggleView }) => {
  return (
    <div className={css.marketplaceFrame}>
      <select className={css.marketplaceFrame__sort} defaultValue="Select">
        <option value="Newest first">Sort by: Newest first</option>
        <option value="Old First">Sort by: Old first</option>
      </select>

      <div className={css.marketplaceFrame__show}>
        <Image
          src={grid ? gridActive : gridInactive}
          alt="Grid"
          width="32"
          height="32"
          className={css.marketplaceFrame__show_image}
          onClick={toggleView}
        />
        <Image
          src={grid ? filesInactive : filesActive}
          alt="List"
          width="32"
          height="32"
          className={css.marketplaceFrame__show_image}
          onClick={toggleView}
        />
      </div>
    </div>
  );
};

export default SortComponent;
