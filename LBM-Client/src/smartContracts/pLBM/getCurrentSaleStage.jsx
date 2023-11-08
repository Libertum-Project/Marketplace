import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = import.meta.env.VITE_pLBM_address;

const stageTextMap = {
  0: 'Inactive',
  1: 'Seed',
  2: 'PostSeed',
  3: 'Whitelist',
  4: 'PostWhitelist',
  5: 'Public',
  6: 'Ended',
};

export async function getCurrentSaleStage() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, provider);

    const currentStageNumber = await contract.currentStage();
    const currentStageText = stageTextMap[currentStageNumber];
    return currentStageText;
  } catch (error) {
    console.error('Error fetching current sale stage:', error);
  }
}
