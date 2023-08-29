import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectIsConnected } from "../../../redux/features/walletSlice";
import { buyToken } from "../../../redux/features/userSlice";
import passiveIncomeABi from "../ABI/PassiveIncomeProperty.json";
import usdtTokenABI from "../ABI/MockUSDT.json";
import css from "./smartcontracts.module.css";

function MintPassiveIncomeProperty({
  passiveIncomePropertyAddress,
  userId,
  propertyId,
  quantity,
  totalPrice,
}) {
  const dispatch = useDispatch();
  const isConnected = useSelector(selectIsConnected);
  const navigate = useNavigate();
  const usdtTokenAddress = "0x43A8768b6F9cA89D5436413609150c6FB087a29E";

  const handleBuyTokenBtn = async (event) => {
    event.preventDefault();

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
        .faucet(100_000);
      faucetTransaction.wait();

      const approveTransaction = await usdtTokenContract
        .connect(signer)
        .approve(passiveIncomePropertyAddress, price);
      approveTransaction.wait();

      const mintTransaction = await passiveIncomePropertyContract.mint(
        quantity,
        {
          gasLimit: 200000,
        }
      );
      mintTransaction.wait();

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
      navigate("/mydashboard");
    } else alert("Metamask not found.");
  };

  return (
    <button
      className={`${css.mintBtn} ${isConnected ? "" : css.disabledButton}`}
      onClick={(event) => {
        handleBuyTokenBtn(event);
      }}
      type="submit"
      disabled={!isConnected}
    >
      Invest Now!
    </button>
  );
}

export default MintPassiveIncomeProperty;
