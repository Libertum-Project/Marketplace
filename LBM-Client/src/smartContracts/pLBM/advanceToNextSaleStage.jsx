import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = import.meta.env.VITE_pLBM_address;
const ownerPrivateKey = import.meta.env.VITE_ownerPrivateKey;

export async function advanceToNextSaleStage() {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://polygon-mumbai.g.alchemy.com/v2/1MGoef4uSxJ3hjS0wszW_hmrScMeLq6B',
      );
      const owner = new ethers.Wallet(ownerPrivateKey, provider);
      const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, owner);
      const tx = await contract.advanceToNextStage({ gasLimit: 2000000 });
      await tx.wait();
      console.log(tx)
    }
  } catch (error) {
    console.error('Error advancing to the next sale stage:', error);
    return null;
  }
}
