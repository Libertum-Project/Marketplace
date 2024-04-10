'use client';
import { useState } from 'react';
import Loading from '@/components/MessageBox/Loading.jsx';
import PendingMessage from '@/components/MessageBox/PendingMessage';
import ErrorMessage from '@/components/MessageBox/ErrorMessage';
import { Button } from '@/components/ui/button';
import {
  useContract,
  useContractRead,
  useContractWrite,
  useBalance
} from '@thirdweb-dev/react';
import PROPERTY_ABI from '@/constants/Property.json';
import USDT_ABI from '@/constants/USDT.json';

const MintButton = ({
  contractAddress,
  amount,
  price,
  remainingTokens
}: any) => {
  const [showIsLoadingUi, setShowIsLoadingUi] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [errorText, setErrorText] = useState(
    'Unable to process your request. Please try again later.'
  );
  const [errorUrl, setErrorUrl] = useState('');

  const {
    data: userNativeTokenBalance,
    isLoading: isLoadingUserNativeTokenBalance
  } = useBalance();
  const { data: userUsdtBalance, isLoading: isLoadingUsdtBalance } = useBalance(
    '0x53057dE112fd5ED7594Da6F858D908dA9D3d685f'
  );

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
        if (amount > remainingTokens) {
          setErrorText(
            "You've requested more tokens than are currently available."
          );
          throw new Error();
        }

        if (
          !isLoadingUserNativeTokenBalance &&
          userNativeTokenBalance!.value.isZero()
        ) {
          setErrorText(
            `Not enough funds to cover gas fees. Please deposit additional ${
              userNativeTokenBalance!.symbol
            } into your account to complete the transaction.`
          );
          throw new Error();
        }

        const amountBigInt = BigInt(amount);
        const priceBigInt = BigInt(price);

        // Calculate the total amount in BigInt.
        const totalAmountBigInt = amountBigInt * priceBigInt * BigInt(10 ** 18);

        // Calculate the additional 5% fee.
        const fee = (totalAmountBigInt * BigInt(5)) / BigInt(100);

        const approveAmount = totalAmountBigInt + fee;

        const approveAmountBigNumber = BigInt(approveAmount);

        if (
          !isLoadingUsdtBalance &&
          userUsdtBalance!.value.toBigInt() < approveAmountBigNumber
        ) {
          setErrorText(
            `Not enough funds. Please deposit additional ${
              userUsdtBalance!.symbol
            } into your account to complete the transaction.`
          );
          throw new Error();
        }

        await approve({ args: [contractAddress, approveAmount] });

        await mint({ args: [amount] });
        console.log('success');
        setShowIsLoadingUi(false);
      } catch (error) {
        setShowIsLoadingUi(false);
        setShowErrorMessage(true);
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

      {showErrorMessage && (
        <ErrorMessage
          setShowErrorMessage={setShowErrorMessage}
          message={errorText}
          url={errorUrl}
        />
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
