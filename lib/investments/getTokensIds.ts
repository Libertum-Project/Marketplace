import { ethers } from 'ethers';
import PROPERTY_ABI from '@/constants/Property.json';

async function getTokensIds(
  tokenQuantity: number,
  userWalletAddress: string | undefined,
  propertyContractAddress: string
) {
  const provider = new ethers.providers.JsonRpcProvider(
    'https://data-seed-prebsc-1-s1.binance.org:8545/'
  );

  const contract = new ethers.Contract(
    propertyContractAddress,
    PROPERTY_ABI.abi,
    provider
  );

  let tokenIds = [];

  for (let i = 0; i < tokenQuantity; i++) {
    let tokenId = await contract.tokenOfOwnerByIndex(userWalletAddress, i);
    tokenIds.push(tokenId);
  }

  return tokenIds;
}

export default getTokensIds;
