import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';

const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export async function getUserWhitelistAllocation() {
  try {
    const userAddress = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
    const provider = new ethers.providers.JsonRpcProvider();
    const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, provider);

    const allocation = await contract.viewWhitelistAllocation(userAddress);
    const allocationPLBM = ethers.utils.formatUnits(allocation, 18);

    console.log(allocationPLBM);
    return allocationPLBM;
  } catch (error) {
    console.error('Error fetching user whitelist allocation:', error);
    return null;
  }
}
