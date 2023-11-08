import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
import USDC_ABI from '../ABI/USDC.json';
const pLBM_address = import.meta.env.VITE_pLBM_address;
const USDC_address = import.meta.env.VITE_USDC_address;
const ownerPrivateKey = import.meta.env.VITE_ownerPrivateKey;

const withdrawFunds = async () => {
  try {
    if (window.ethereum) {
      const provider = new ethers.providers.JsonRpcProvider(
        'https://polygon-mumbai.g.alchemy.com/v2/1MGoef4uSxJ3hjS0wszW_hmrScMeLq6B',
      );
      const ownerSigner = new ethers.Wallet(ownerPrivateKey, provider);
      const pLBM_contract = new ethers.Contract(
        pLBM_address,
        pLBM_ABI.abi,
        ownerSigner,
      );
      const USDC_contract = new ethers.Contract(
        USDC_address,
        USDC_ABI.abi,
        ownerSigner,
      );

      const owner = await pLBM_contract.owner();
      console.log(await USDC_contract.balanceOf(owner));
      const tx = await pLBM_contract
        .connect(ownerSigner)
        .withdrawAllFunds({ gasLimit: 2000000 });
      await tx.wait()
      console.log(tx)
      console.log(await USDC_contract.balanceOf(owner));
    } else {
      console.error(
        'Please connect your wallet using MetaMask or a similar provider.',
      );
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
export default withdrawFunds;
