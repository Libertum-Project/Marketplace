import getPropertyContract from './getPropertyContract';
async function getTokensIds(
  tokenQuantity: number,
  userWalletAddress: string | undefined,
  propertyContractAddress: string
) {
  let tokenIds = [];
  const propertyContract: any = await getPropertyContract(
    propertyContractAddress
  );

  for (let i = 0; i < tokenQuantity; i++) {
    let tokenId = await propertyContract.tokenOfOwnerByIndex(
      userWalletAddress,
      i
    );
    tokenIds.push(tokenId);
  }

  return tokenIds;
}

export default getTokensIds;
