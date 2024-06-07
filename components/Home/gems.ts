import gold from '../../public/assets/gems/gold.svg';
import diamond from '../../public/assets/gems/diamond.svg';
import jade from '../../public/assets/gems/jade.svg';
import emerald from '../../public/assets/gems/emerald.svg';

import { Gem } from '@/types/index';


export const gems: Gem[] = [
  {
    id: 1,
    name: 'Gold',
    image: gold,
    pricePerGram: 75.82,
    tokenGrams: 0.66,
    description: "Gold Token is a digital token on our distributed ledger, backed by physical gold kept in our partner vault. Price is set by world's central banks and we use the daily spot price. 1 gr Gold = 0,035274 ounces",
  },
  {
    id: 2,
    name: 'Emerald',
    image: emerald,
    pricePerGram: 140,
    tokenGrams: 0.3,
    description: "Emerald Token is a digital token on our distributed ledger, backed by physical gold kept in our partner vault. Price is set by world's central banks and we use the daily spot price."
  },
  {
    id: 3,
    name: 'Jade',
    image: jade,
    pricePerGram: 20,
    tokenGrams: 2.5,
    description: "Jade Token is a digital token on our distributed ledger, backed by physical gold kept in our partner vault. Price is set by world's central banks and we use the daily spot price."
  },
  {
    id: 4,
    name: 'Diamond',
    image: diamond,
    pricePerGram: 1500,
    tokenGrams: 0.033,
    description: "Diamond Token is a digital token on our distributed ledger, backed by physical gold kept in our partner vault. Price is set by world's central banks and we use the daily spot price."
  },
];