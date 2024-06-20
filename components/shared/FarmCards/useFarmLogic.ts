import { useState, useEffect, ChangeEvent } from 'react';
import { Farm } from '@/types/index';

export const useFarmLogic = (farm: Farm) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= farm.totalTokens) setQuantity(value);
    else alert(`Maximum available tokens: ${farm.totalTokens}`);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const calculatedPrice = (quantity * farm.valuation).toFixed(2);
  const calculatedGuarantee = (quantity * farm.guaranteed).toFixed(2);

  useEffect(() => {
    setQuantity(1);
  }, [farm]);

  return {
    quantity,
    isExpanded,
    handleChange,
    handleToggle,
    calculatedPrice,
    calculatedGuarantee,
  };
};
