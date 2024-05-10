import getPropertyContract from './getPropertyContract';

async function getMonthsToClaim(propertyContractAddress: string, tokensIds: any) {
  let totalMonthsToClaim = 0;
  const propertyContract: any = await getPropertyContract(propertyContractAddress);

  const tokenId = tokensIds[0];
  const claimableMonths = await propertyContract.calculateClaimableMonths(tokenId);
  totalMonthsToClaim = claimableMonths * tokensIds.length;

  return totalMonthsToClaim;
}

export default getMonthsToClaim;
