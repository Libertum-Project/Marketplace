import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = import.meta.env.VITE_pLBM_address;

export async function getRemainingTokens() {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, provider);

    const seedTokensRemaining = await contract.seedTokensRemaining();
    const whitelistTokensRemaining = await contract.whitelistTokensRemaining();
    const publicTokensRemaining = await contract.publicTokensRemaining();

    const seedTokensRemainingUserFriendly = seedTokensRemaining
      .div(ethers.BigNumber.from(10).pow(18))
      .toString();
    const whitelistTokensRemainingUserFriendly = whitelistTokensRemaining
      .div(ethers.BigNumber.from(10).pow(18))
      .toString();
    const publicTokensRemainingUserFriendly = publicTokensRemaining
      .div(ethers.BigNumber.from(10).pow(18))
      .toString();

    return {
      seedTokensRemaining: seedTokensRemainingUserFriendly,
      whitelistTokensRemaining: whitelistTokensRemainingUserFriendly,
      publicTokensRemaining: publicTokensRemainingUserFriendly,
    };
  } catch (error) {
    console.error('Error fetching remaining tokens:', error);
    return {
      error: 'Error fetching remaining tokens',
    };
  }
}
