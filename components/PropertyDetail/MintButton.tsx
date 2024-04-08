'use client';
import { useState } from 'react';
import Loading from '@/components/MessageBox/Loading.jsx';
import PendingMessage from '@/components/MessageBox/PendingMessage';
import { Button } from '@/components/ui/button';
import {
  useContractWrite,
  useContract,
  useContractRead
} from '@thirdweb-dev/react';
import PROPERTY_ABI from '@/constants/Property.json';
import USDT_ABI from '@/constants/USDT.json';

const MintButton = ({ contractAddress, amount, price }: any) => {
  const [showIsLoadingUi, setShowIsLoadingUi] = useState(false);
  const { contract: propertyContract, isLoading } = useContract(
    contractAddress,
    PROPERTY_ABI.abi
  );

  const { data: paymentTokenAddress } = useContractRead(
    propertyContract,
    'paymentToken'
  );

  const { mutateAsync: mint, isLoading: isMintInProgress } = useContractWrite(
    propertyContract,
    'mint'
  );

  const { contract: usdtContract } = useContract(
    paymentTokenAddress,
    USDT_ABI.abi
  );

  const { mutateAsync: approve } = useContractWrite(usdtContract, 'approve');

  const handleMint = async () => {
    setShowIsLoadingUi(true);
    if (!isLoading) {
      try {
        //todo: Check user USDT and BNB.

        const amountBigInt = BigInt(amount);
        const priceBigInt = BigInt(price);

        // Calculate the total amount in BigInt.
        const totalAmountBigInt = amountBigInt * priceBigInt * BigInt(10 ** 18);

        // Calculate the additional 5% fee.
        const fee = (totalAmountBigInt * BigInt(5)) / BigInt(100);

        const approveAmount = totalAmountBigInt + fee;
        await approve({ args: [contractAddress, approveAmount] });

        await mint({ args: [amount] });
        console.log('hola');
        setShowIsLoadingUi(false);
      } catch (error) {
        setShowIsLoadingUi(false);
        console.log(error);
      }
    }
  };

  return (
    <>
      {showIsLoadingUi && <Loading />}
      {isMintInProgress && (
        <PendingMessage message="Almost there! Your mint transaction is in progress." />
      )}

      <Button
        variant="outline"
        className="w-full bg-libertumGreen text-white px-4 py-4 rounded hover:bg-teal-600 transition duration-300 flex items-center justify-center font-space_grotesk select-none"
        onClick={handleMint}
      >
        Invest Now!
      </Button>
    </>
  );
};

export default MintButton;
