import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

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
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();
  const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, signer);

  try {
    const currentStageNumber = await contract.currentStage();
    const currentStageText = stageTextMap[currentStageNumber];
    return currentStageText;
  } catch (error) {
    console.error('Error fetching current sale stage:', error);
  }
}
