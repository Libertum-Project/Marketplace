import getMintTime from './getMintTime';

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

  const groups = Object.values(mintTimeMap).filter((group) => group.length > 1);

  return groups;
}

export default createGroups;
