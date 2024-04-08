'use client';
import { Button } from '@/components/ui/button';
import {
  useContractWrite,
  useContract,
  useContractRead
} from '@thirdweb-dev/react';
import PROPERTY_ABI from '@/constants/Property.json';
import USDT_ABI from '@/constants/USDT.json';

const MintButton = ({ contractAddress, amount, price }: any) => {
  const { contract: propertyContract, isLoading } = useContract(
    contractAddress,
    PROPERTY_ABI.abi
  );

  const { data: paymentTokenAddress } = useContractRead(
    propertyContract,
    'paymentToken'
  );

  const { mutateAsync: mint, error } = useContractWrite(
    propertyContract,
    'mint'
  );

  const { contract: usdtContract } = useContract(
    paymentTokenAddress,
    USDT_ABI.abi
  );

  const { mutateAsync: approve } = useContractWrite(usdtContract, 'approve');

  const handleMint = async () => {
    if (!isLoading) {
      const approveAmount = BigInt(amount) * BigInt(price) * BigInt(10 ** 18) * BigInt(105) / BigInt(100);
      await approve({ args: [contractAddress, approveAmount] });
      await mint({ args: [amount] });
    }
  };

  return (
    <Button
      variant="outline"
      className="w-full bg-libertumGreen text-white px-4 py-4 rounded hover:bg-teal-600 transition duration-300 flex items-center justify-center font-space_grotesk select-none"
      onClick={handleMint}
    >
      Invest Now!
    </Button>
  );
};

export default MintButton;
