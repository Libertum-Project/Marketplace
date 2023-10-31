import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';

const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export async function getUserWhitelistAllocation(userAddress) {
  const provider = new ethers.providers.JsonRpcProvider();
  const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, provider);

  try {
    const allocationWei = await contract.viewWhitelistAllocation(userAddress);
    const allocationPLBM = ethers.utils.formatUnits(allocationWei, 18);
    return parseFloat(allocationPLBM);
  } catch (error) {
    console.error('Error fetching user whitelist allocation:', error);
    return null;
  }
}
