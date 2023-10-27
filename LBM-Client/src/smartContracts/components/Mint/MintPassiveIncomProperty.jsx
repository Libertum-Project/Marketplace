import { ethers } from 'ethers';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsConnected } from '../../../../redux/features/walletSlice';
import { buyToken } from '../../../../redux/features/userSlice';
import passiveIncomeABi from '../../ABI/PassiveIncomeProperty.json';
import usdtTokenABI from '../../ABI/MockUSDT.json';
import css from '../smartcontracts.module.css';
import Loading from '../LoadingBtn.jsx';
import FailMessage from '../MessageBox/FailMessage';
import SuccessMessage from '../MessageBox/SuccessMessage';
import PendingMessage from '../MessageBox/PendingMessage';

function MintPassiveIncomeProperty({
  passiveIncomePropertyAddress,
  userId,
  propertyId,
  quantity,
  totalPrice,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const dispatch = useDispatch();
  const isConnected = useSelector(selectIsConnected);
  const usdtTokenAddress = '0x43A8768b6F9cA89D5436413609150c6FB087a29E';

  const handleBuyTokenBtn = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      if (window.ethereum) {
        await window.ethereum.enable();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();

        const usdtTokenContract = new ethers.Contract(
          usdtTokenAddress,
          usdtTokenABI.abi,
          signer
        );

        const passiveIncomePropertyContract = new ethers.Contract(
          passiveIncomePropertyAddress,
          passiveIncomeABi.abi,
          signer
        );

        const tokenPrice = await passiveIncomePropertyContract.pricePerToken();
        const price = BigInt(quantity) * BigInt(tokenPrice) * BigInt(10 ** 6);
        const faucetTransaction = await usdtTokenContract
          .connect(signer)
          .faucet(999_999_100_000_000);
        faucetTransaction.wait();

        const approveTransaction = await usdtTokenContract
          .connect(signer)
          .approve(passiveIncomePropertyAddress, price);
        approveTransaction.wait();

        const mintTransaction = await passiveIncomePropertyContract.mint(
          quantity,
          {
            gasLimit: 2000000,
          }
        );
        setShowPendingMessage(true);
        const receipt = await mintTransaction.wait();

        if (receipt.status === 1) {
          console.log('Transaction was successful');

          const pricePerToken = Number(tokenPrice);

          dispatch(
            buyToken({
              userId,
              propertyId,
              quantity,
              pricePerToken,
              totalPrice,
            })
          );
          setShowPendingMessage(false);
          setIsLoading(false);
          setShowSuccessMessage(true);
        } else {
          console.error('Transaction failed');
        }
        console.log(receipt);
      } else alert('Metamask not found.');
    } catch (error) {
      console.error(error);
      setIsLoading(false);
      setShowPendingMessage(false);
      setShowFailMessage(true);
    }
  };

  return (
    <>
      {isLoading ? <Loading /> : null}
      {showPendingMessage ? (
        <PendingMessage messagge="Processing your investment..." />
      ) : null}
      {showFailMessage ? (
        <FailMessage
          setShowFailMessage={setShowFailMessage}
          message= "It looks like you rejected this transaction. Don't miss out on the opportunity to earn passive income!"
        />
      ) : null}
      {showSuccessMessage ? (
        <SuccessMessage
          setShowSuccessMessage={setShowSuccessMessage}
          messagge="Great news! You've successfully invested in this property. Your tokens are on the way!"
          textBtn="My Investments"
          redirectURL="/mydashboard"
        />
      ) : null}
      <button
        className={`${css.mintBtn} ${isConnected ? '' : css.disabledButton}`}
        onClick={(event) => {
          handleBuyTokenBtn(event);
        }}
        type="submit"
        disabled={!isConnected}
      >
        Invest Now!
      </button>
    </>
  );
}

export default MintPassiveIncomeProperty;
