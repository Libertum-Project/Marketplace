import { useState, ChangeEvent } from 'react'; 
import { Oil } from '@/types/index';

export const useOilLogic = (oil: Oil) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };

  const calculatedPrice = (quantity * 250).toFixed(0); 
  const calculatedGuarantee = (quantity * 225).toFixed(0);
  
  return {
    quantity,
    isExpanded,   
    handleChange,
    handleToggle,
    calculatedPrice,
    calculatedGuarantee
  };
};