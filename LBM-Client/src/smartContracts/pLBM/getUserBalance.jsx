import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';

const pLBM_address = import.meta.env.VITE_pLBM_address;

export async function getUserBalance() {
  try {
    if (window.ethereum) {
      const [userAddress] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        pLBM_address,
        pLBM_ABI.abi,
        provider,
      );

      const balanceWei = await contract.balanceOf(userAddress);
      const balancePLBM = ethers.utils.formatUnits(balanceWei, 18);
      return parseFloat(balancePLBM);
    }
  } catch (error) {
    console.error('Error fetching user balance:', error);
    return null;
  }
}
