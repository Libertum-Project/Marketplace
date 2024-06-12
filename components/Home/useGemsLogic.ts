import { useState, ChangeEvent } from 'react';
import { Gem } from '@/types/index';

export const useGemLogic = (gem: Gem) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [unit, setUnit] = useState<'gr' | 'oz'>('gr');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };

  const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'gr' | 'oz';
    setUnit(value);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const getConversionFactor = () => {
    return unit === 'gr' ? 1 : 0.035274; // 1 gr = 0.035274 oz
  };

  const calculatedPrice = (quantity * 50).toFixed(0);
  const calculatedWeight = (quantity * gem.tokenGrams * getConversionFactor()).toFixed(4);

  return {
    quantity,
    unit,
    isExpanded,
    handleChange,
    handleUnitChange,
    handleToggle,
    calculatedPrice,
    calculatedWeight
  };
};
