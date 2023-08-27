import { ethers } from "ethers";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { buyToken } from "../../../redux/features/userSlice";
import capitalRepaymentABI from "../ABI/CapitalRepaymentProperty.json";
import usdtTokenABI from "../ABI/MockUSDT.json";
import css from "./smartcontracts.module.css";

function MintCapitalRepaymentProperty({
  capitalRepaymentPropertyAddress,
  userId,
  propertyId,
  quantity,
}) {
  const dispatch = useDispatch();
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

      const capitalRepaymentPropertyContract = new ethers.Contract(
        capitalRepaymentPropertyAddress,
        capitalRepaymentABI.abi,
        signer
      );

      const pricePerToken =
        await capitalRepaymentPropertyContract.pricePerToken();
      const price = BigInt(quantity) * BigInt(pricePerToken) * BigInt(10 ** 6);

      const faucetTransaction = await usdtTokenContract
        .connect(signer)
        .faucet(100_000);
      faucetTransaction.wait();

      const approveTransaction = await usdtTokenContract
        .connect(signer)
        .approve(capitalRepaymentPropertyAddress, price);
      approveTransaction.wait();

      const mintTransaction = await capitalRepaymentPropertyContract.mint(
        quantity,
        {
          gasLimit: 200000,
        }
      );
      mintTransaction.wait();
      dispatch(
        buyToken({
          userId,
          propertyId,
          quantity,
        })
      );
      navigate("/mydashboard");
    } else alert("Metamask not found.");
  };

  return (
    <button
      className={css.mintBtn}
      onClick={(event) => {
        handleBuyTokenBtn(event);
      }}
      type="submit"
    >
      Invest Now!
    </button>
  );
}

export default MintCapitalRepaymentProperty;
