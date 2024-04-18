import getPropertyContract from './getPropertyContract';

async function getMonthsToClaim(
  propertyContractAddress: string,
  tokensIds: any
) {
  let totalMonthsToClaim = 0;
  const propertyContract: any = await getPropertyContract(
    propertyContractAddress
  );

  for (let i = 0; i < tokensIds.length; i++) {
    const tokenId = tokensIds[i];
    let claimableMonths =
      await propertyContract.calculateClaimableMonths(tokenId);
    totalMonthsToClaim += claimableMonths;
  }

  return totalMonthsToClaim;
}

export default getMonthsToClaim;
