import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';

const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export async function advanceToNextSaleStage() {
  try {
    if (window.ethereum) {
      await window.ethereum.enable();
      const provider = new ethers.providers.JsonRpcProvider();
      const signer = provider.getSigner();

      const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, signer);
      const tx = await contract.advanceToNextStage();
      await tx.wait();
      console.log(tx);
    }
  } catch (error) {
    console.error('Error advancing to the next sale stage:', error);
    return null;
  }
}
