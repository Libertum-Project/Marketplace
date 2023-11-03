import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
import USDC_ABI from '../ABI/USDC.json';
const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
const USDC_address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
const pLBM_contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, signer);
const USDC_contract = new ethers.Contract(USDC_address, USDC_ABI.abi, signer);

const withdrawFunds = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.enable();

      const owner = await pLBM_contract.owner();
      console.log(await USDC_contract.balanceOf(owner));
      await pLBM_contract.connect(signer).withdrawAllFunds();
      console.log(await USDC_contract.balanceOf(owner));
    } else {
      console.error(
        'Please connect your wallet using MetaMask or a similar provider.',
      );
    }
  } catch (error) {
    console.error('Error buying tokens:', error);
  }
};
export default withdrawFunds;
