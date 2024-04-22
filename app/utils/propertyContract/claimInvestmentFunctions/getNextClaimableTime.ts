import getPropertyContract from './getPropertyContract';

async function getNextClaimableTime(
  propertyContractAddress: string,
  tokenId: number[]
) {
  const propertyContract: any = await getPropertyContract(
    propertyContractAddress
  );

  const nextClaimTime = await propertyContract.getNextEligibleClaimTime(
    tokenId[0]
  );
  const date = new Date(nextClaimTime * 1000);
  return date;
}

export default getNextClaimableTime;
