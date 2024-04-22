import getPropertyContract from './getPropertyContract';

async function getClaimableAmount(
  propertyContractAddress: string,
  tokensIds: any
) {
  let totalClaimableAmount = 0;
  const propertyContract: any = await getPropertyContract(
    propertyContractAddress
  );

  const tokenId = tokensIds[0];
  let claimableAmountHex = await propertyContract.calculateClaimable(tokenId);
  const claimableAmount = parseInt(claimableAmountHex._hex, 16);
  totalClaimableAmount = claimableAmount * tokensIds.length;

  return totalClaimableAmount;
}

export default getClaimableAmount;
