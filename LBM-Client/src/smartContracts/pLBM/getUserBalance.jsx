import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';

const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export async function getUserBalance() {
  try {
    if (window.ethereum) {
      const [userAddress] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      const provider = new ethers.providers.JsonRpcProvider();
      const contract = new ethers.Contract(
        pLBM_address,
        pLBM_ABI.abi,
        provider
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
