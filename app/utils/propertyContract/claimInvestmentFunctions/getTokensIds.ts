import getPropertyContract from './getPropertyContract';

async function getTokensIds(
  tokenQuantity: number,
  userWalletAddress: string | undefined,
  propertyContractAddress: string,
) {
  const tokenIds = [];
  const propertyContract: any = await getPropertyContract(propertyContractAddress);

  for (let i = 0; i < tokenQuantity; i++) {
    const tokenIdHex = await propertyContract.tokenOfOwnerByIndex(userWalletAddress, i);

    const tokenId = parseInt(tokenIdHex._hex, 16);
    tokenIds.push(tokenId);
  }

  return tokenIds;
}

export default getTokensIds;
