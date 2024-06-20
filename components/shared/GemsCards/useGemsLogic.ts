import { useState, ChangeEvent } from 'react';
import { Gem, WeightUnitType } from '@/types/index';

export const useGemLogic = (gem: Gem) => {
  const [quantity, setQuantity] = useState(1);
  const [unit, setUnit] = useState<WeightUnitType>('gr');
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= gem.totalTokens) setQuantity(value);
    else alert(`Maximum available tokens: ${gem.totalTokens}`);
  };

  const handleUnitChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as WeightUnitType;
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
