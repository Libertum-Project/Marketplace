import { ethers } from 'ethers';

import PROPERTY_ABI from '@/constants/Property.json';

async function getPropertyContract(propertyContractAddress: string) {
  const provider = new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/');

  const propertyContract = new ethers.Contract(propertyContractAddress, PROPERTY_ABI.abi, provider);

  return propertyContract;
}

export default getPropertyContract;
