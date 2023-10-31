import { ethers } from 'ethers';
import pLBM_ABI from '../ABI/pLBM.json';
const pLBM_address = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export async function getRemainingTokens() {
  const provider = new ethers.providers.JsonRpcProvider();
  const signer = provider.getSigner();
  const contract = new ethers.Contract(pLBM_address, pLBM_ABI.abi, signer);

  try {
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
