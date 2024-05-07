import getPropertyContract from './getPropertyContract';

async function getNumberOfClaims(propertyContractAddress: string, tokenId: any) {
  const propertyContract: any = await getPropertyContract(propertyContractAddress);

  const numberOfClaims = await propertyContract.getNumberOfClaims(tokenId);

  return numberOfClaims;
}

export default getNumberOfClaims;
