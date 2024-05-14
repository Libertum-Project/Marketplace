'use client';
import { useState } from 'react';
import {
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button,
  useAddress,
  useBalance,
} from '@thirdweb-dev/react';

import Loading from '@/components/MessageBox/Loading.jsx';
import PendingMessage from '@/components/MessageBox/PendingMessage';
import ErrorMessage from '@/components/MessageBox/ErrorMessage';
import SuccessMessage from '@/components/MessageBox/SuccessMessage';
import PROPERTY_ABI from '@/constants/Property.json';
import USDT_ABI from '@/constants/USDT.json';

import css from './MintButton.module.css';

const MintButton = ({
  contractAddress: propertyContractAddress,
  amount,
  price,
  remainingTokens,
  areTermsAccepted,
}: any) => {
  const [showIsLoadingUi, setShowIsLoadingUi] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [errorText, setErrorText] = useState('');
  const [errorUrl, setErrorUrl] = useState('');
  const userWalletAddress = useAddress();
  const isDisabled = !areTermsAccepted;

  console.log(propertyContractAddress);
  const { data: userNativeTokenBalance, isLoading: isLoadingUserNativeTokenBalance } = useBalance();
  const { data: userUsdtBalance, isLoading: isLoadingUsdtBalance } = useBalance(
    '0x53057dE112fd5ED7594Da6F858D908dA9D3d685f',
  );

  const { contract: propertyContract, isLoading } = useContract(propertyContractAddress, PROPERTY_ABI.abi);

  const { data: paymentTokenAddress } = useContractRead(propertyContract, 'paymentToken');

  const { mutateAsync: mint, isLoading: isMintInProgress } = useContractWrite(propertyContract, 'mint');

  const { contract: usdtContract } = useContract(paymentTokenAddress, USDT_ABI.abi);

  const { mutateAsync: approve } = useContractWrite(usdtContract, 'approve');

  const handleMint = async () => {
    setShowIsLoadingUi(true);

    if (!isLoading) {
      try {
        if (amount > remainingTokens) {
          throw new Error('Not enough remaining tokens');
        }

        if (!isLoadingUserNativeTokenBalance && userNativeTokenBalance!.value.isZero()) {
          throw new Error('Not enough native token');
        }

        const amountBigInt = BigInt(amount);
        const priceBigInt = BigInt(Math.round(price));

        // Calculate the total amount in BigInt.
        const totalAmountBigInt = amountBigInt * priceBigInt * BigInt(10 ** 18);

        // Calculate the additional 5% fee.
        const fee = (totalAmountBigInt * BigInt(5)) / BigInt(100);

        const approveAmount = totalAmountBigInt + fee;

        const approveAmountBigNumber = BigInt(approveAmount);

        if (!isLoadingUsdtBalance && userUsdtBalance!.value.toBigInt() < approveAmountBigNumber) {
          throw new Error('Not enough payment token');
        }

        await approve({ args: [propertyContractAddress, approveAmount] });
        await mint({ args: [amount] });

        const response = await fetch(
          `/api/users/investments?userWalletAddress=${userWalletAddress}&propertyContractAddress=${propertyContractAddress}`,
          {
            method: 'POST',
            cache: 'no-store',
          },
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        setShowSuccessMessage(true);
        setShowIsLoadingUi(false);
      } catch (error: any) {
        setShowIsLoadingUi(false);
        setShowErrorMessage(true);
        console.error(error.message);

        if (error.message === 'Not enough remaining tokens') {
          setErrorText("You've requested more tokens than are currently available.");
        } else if (error.message === 'Not enough payment token') {
          setErrorText(
            `Not enough funds. Please deposit additional ${
              userUsdtBalance!.symbol
            } into your account to complete the transaction.`,
          );
        } else if (error.message === 'Not enough native token') {
          setErrorText(
            `Not enough funds to cover gas fees. Please deposit additional ${
              userNativeTokenBalance!.symbol
            } into your account to complete the transaction.`,
          );
        } else {
          setErrorText('Unable to process your request. Please try again later.');
        }
      }
    }
  };

  return (
    <>
      {showIsLoadingUi && <Loading />}
      {isMintInProgress && <PendingMessage message="Almost there! Your mint transaction is in progress." />}

      {showErrorMessage && (
        <ErrorMessage setShowErrorMessage={setShowErrorMessage} message={errorText} url={errorUrl} />
      )}

      {showSuccessMessage && (
        <SuccessMessage
          setShowSuccessMessage={setShowSuccessMessage}
          message="Success! Your investment has been processed. Exciting times ahead!"
          textBtn="Continue"
        />
      )}

      <Web3Button
        contractAddress={propertyContractAddress}
        contractAbi={PROPERTY_ABI.abi}
        action={handleMint}
        className={css.mintBtn}
        isDisabled={isDisabled}
      >
        Invest Now!
      </Web3Button>
    </>
  );
};

export default MintButton;
