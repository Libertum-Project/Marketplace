import getPropertyContract from './getPropertyContract';

async function getMintTime(propertyContractAddress: string, tokenId: number) {
  const propertyContract: any = await getPropertyContract(
    propertyContractAddress
  );

  const mintTime = await propertyContract.getMintTime(tokenId);
  const date = new Date(mintTime * 1000);
  return date;
}

export default getMintTime;
