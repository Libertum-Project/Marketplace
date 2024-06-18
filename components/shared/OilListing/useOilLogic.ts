import { useState, useEffect } from 'react';
import { Oil } from '@/types/index';

export const useOilLogic = (oil: Oil) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) || value <= 0 ? 1 : value);
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
