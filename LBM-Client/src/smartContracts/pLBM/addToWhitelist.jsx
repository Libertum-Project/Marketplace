import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = import.meta.env.VITE_pLBM_address;
const ownerPrivateKey = import.meta.env.VITE_ownerPrivateKey;

const addToWhitelist = async () => {
  const userAddress = '0x863638E43276F6f9047E4B54A8D43eFF297C6371'
  const amount = 10;

  const provider = new ethers.providers.JsonRpcProvider(
    'https://polygon-mumbai.g.alchemy.com/v2/1MGoef4uSxJ3hjS0wszW_hmrScMeLq6B',
  );
  const owner = new ethers.Wallet(ownerPrivateKey, provider);
  const pLBM_contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, owner);

  await pLBM_contract.modifyWhitelistAllocations(
    [userAddress],
    [BigInt(amount * 10 ** 18)],
    { gasLimit: 2000000 },
  );
};

export default addToWhitelist;
