import getMintTime from './getMintTime';
import getNumberOfClaims from './getNumberOfClaims';
import getClaimableAmount from './getClaimableAmount';

async function createGroups(propertyContractAddress: string, tokenIds: any) {
  const mintTimeMap: { [key: string]: number[] } = {};

  for (let i = 0; i < tokenIds.length; i++) {
    const mintTime = await getMintTime(propertyContractAddress, tokenIds[i]);
    if (mintTimeMap[mintTime.toString()]) {
      mintTimeMap[mintTime.toString()].push(tokenIds[i]);
    } else {
      mintTimeMap[mintTime.toString()] = [tokenIds[i]];
    }
  }

  const groups = await Promise.all(
    Object.entries(mintTimeMap).map(async ([mintTimeString, tokenIds]) => {
      const mintTime = new Date(mintTimeString);
      const numberOfClaims = await getNumberOfClaims(
        propertyContractAddress,
        tokenIds[0]
      );

      const claimableAmount = await getClaimableAmount(
        propertyContractAddress,
        tokenIds
      );

      return {
        tokens: tokenIds,
        mintTime,
        numberOfClaims,
        claimableAmount
      };
    })
  );

  return groups;
}

export default createGroups;
