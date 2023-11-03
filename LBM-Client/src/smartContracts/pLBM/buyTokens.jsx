import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
import USDC_ABI from '../ABI/USDC.json';
const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
const USDC_address = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
const provider = new ethers.providers.JsonRpcProvider();
const signer = provider.getSigner();
const userAddress = '0x70997970C51812dc3A010C7d01b50e0d17dc79C8';
const privateKey =
  '0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d';
const wallet = new ethers.Wallet(privateKey, provider);
const pLBM_contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, wallet);
const USDC_contract = new ethers.Contract(USDC_address, USDC_ABI.abi, signer);

async function buyTokens(amount) {
  try {
    if (window.ethereum) {
      await window.ethereum.enable();
      await USDC_contract.mint(userAddress, BigInt(amount * 10 ** 6));
      await USDC_contract.connect(wallet).approve(
        pLBM_address,
        BigInt(amount * 10 ** 6),
      );

      await pLBM_contract
        .connect(wallet)
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
