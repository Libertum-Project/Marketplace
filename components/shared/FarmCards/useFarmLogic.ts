import { useState, useEffect } from 'react';
import { Farm } from '@/types/index';

export const useFarmLogic = (farm: Farm) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    setQuantity(isNaN(value) || value <= 0 ? 1 : value);
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
