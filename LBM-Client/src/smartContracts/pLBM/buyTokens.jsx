import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
import USDC_ABI from '../ABI/USDC.json';
const USDC_address = import.meta.env.VITE_USDC_address; 
const pLBM_address = import.meta.env.VITE_pLBM_address;

async function buyTokens(amount) {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const pLBM_contract = new ethers.Contract(
        pLBM_address,
        pLBM_ABI.abi,
        signer,
      );
      const USDC_contract = new ethers.Contract(
        USDC_address,
        USDC_ABI.abi,
        signer,
      );

      const [userAddress] = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });

      await window.ethereum.enable();
      await USDC_contract.mint(userAddress, BigInt(amount * 10 ** 6));
      await USDC_contract.connect(signer).approve(
        pLBM_address,
        BigInt(amount * 10 ** 6),
      );

      await pLBM_contract
        .connect(signer)
        .buy(BigInt(amount * 10 ** 18), { gasLimit: 2000000 });
    } else {
      console.error(
        'Please connect your wallet using MetaMask or a similar provider.',
      );
    }
  } catch (error) {
    console.error('Error buying tokens:', error);
  }
}

export { buyTokens };
