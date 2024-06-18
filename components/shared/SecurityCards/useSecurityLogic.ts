import { useState, ChangeEvent } from 'react'; 
import { SecurityListing } from '@/types/index';

export const useSecurityLogic = (security: SecurityListing) => {
  const [quantity, setQuantity] = useState(1);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setQuantity(value);
  };

  const calculatedPrice = (quantity * security.tokenPrice).toFixed(0); 
  const calculatedGuarantee = (quantity * security.guaranteed).toFixed(0);

  return {
    quantity,
    isExpanded,   
    handleChange,
    handleToggle,
    calculatedPrice,
    calculatedGuarantee
  };
};