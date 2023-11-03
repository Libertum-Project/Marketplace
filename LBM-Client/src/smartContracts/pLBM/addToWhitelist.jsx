import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
const userAddress = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
const pLBM_contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, signer);

const addToWhitelist = async () => {
  const amount = 10;
  await pLBM_contract.modifyWhitelistAllocations([userAddress], [BigInt(amount * 10 ** 18)]);
};

export default addToWhitelist;
