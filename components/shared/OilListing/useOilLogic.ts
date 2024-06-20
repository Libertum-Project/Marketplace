import { useState, useEffect, ChangeEvent } from 'react';
import { Oil } from '@/types/index';

export const useOilLogic = (oil: Oil) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (!isNaN(value) && value >= 0 && value <= oil.totalTokens) setQuantity(value);
    else alert(`Maximum available tokens: ${oil.totalTokens}`);
  };

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const calculatedPrice = (quantity * oil.valuation).toFixed(0);
  const calculatedGuarantee = (quantity * oil.guaranteed).toFixed(2);

  useEffect(() => {
    setQuantity(1);
  }, [oil]);

  return {
    quantity,
    isExpanded,
    handleChange,
    handleToggle,
    calculatedPrice,
    calculatedGuarantee,
  };
};
