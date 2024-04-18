import getPropertyContract from './getPropertyContract';

async function getClaimableAmount(
  propertyContractAddress: string,
  tokensIds: any
) {
  let totalClaimableAmount = 0;
  const propertyContract: any = await getPropertyContract(
    propertyContractAddress
  );

  for (let i = 0; i < tokensIds.length; i++) {
    const tokenId = tokensIds[i];
    let claimableAmountHex = await propertyContract.calculateClaimable(tokenId);
    const claimableAmount = parseInt(claimableAmountHex._hex, 16);
    totalClaimableAmount += claimableAmount;
  }

  return totalClaimableAmount;
}

export default getClaimableAmount;
