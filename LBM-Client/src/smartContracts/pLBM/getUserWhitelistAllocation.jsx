import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';

const pLBM_address = import.meta.env.VITE_pLBM_address;

export async function getUserWhitelistAllocation() {
  try {
  const [userAddress] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, provider);

    const allocation = await contract.viewWhitelistAllocation(userAddress);
    const allocationPLBM = ethers.utils.formatUnits(allocation, 18);

    return allocationPLBM;
  } catch (error) {
    console.error('Error fetching user whitelist allocation:', error);
    return null;
  }
}
