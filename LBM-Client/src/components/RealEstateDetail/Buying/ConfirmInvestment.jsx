import MintCapitalRepaymentProperty from "../../../smartContracts/components/Mint/MintCapitalRepaymentProperty.jsx";
import MintPassiveIncomeProperty from "../../../smartContracts/components/Mint/MintPassiveIncomProperty.jsx";
import CustomConnectButtom from "../../SideBar/CustomConnectButtom";
import css from "./BuyProperty.module.css";
import ProgressBar from "./ProgressBar";
import { useSelector } from "react-redux";
import backBtn from "../../../assets/back_btn.svg";
import Icons from "./Icons";
import { useState } from "react";
import { useEffect } from "react";

const ConfirmInvestment = ({
  handleSubmit,
  onBack,
  formData,
  isValid,
  errorMessage,
  address,
  location,
  NFTPrice,
  value,
  propertyId,
  property,
}) => {
  const [subtotal, setSubtotal] = useState(0); //Estadp para ver el subtotal sin los impuestos
  const currentUser = useSelector((state) => state.user.currentUser);
  const quantity = formData.tokensData.rangeValue.toString();
  const userId = currentUser.ID_user.toString();
  const propertyAddress = property.Address;
  const propertyType = property.Financial.Investment_type;

  // Actualiza el subtotal cuando se recibe el formData
  useEffect(() => {
    const calculateSubtotal = () => {
      const tokensData = formData.tokensData;
      const { rangeValue } = tokensData;

      const calculatedSubtotal = rangeValue * NFTPrice;
      setSubtotal(calculatedSubtotal);
    };
    calculateSubtotal();
  }, [formData, NFTPrice]);

  return (
    <form className={css.createForm}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Financial information</h2>
      </div>
      <ProgressBar step={"2"} />
      <h1>
        {address} | {location}
      </h1>
      <Icons />
      <div className={css.createForm__inputs}></div>
      <div className={css.box}>
        <div>
          <label>
            <b>Value of the Property:</b>
          </label>
          <span>${value}</span>
        </div>
        <div>
          <label>
            <b>Tokens to be Purchased:</b>
          </label>
          <span>{formData.tokensData.rangeValue}</span>
        </div>
        <div>
          <label>
            <b>Payment Method:</b>
          </label>
          {/* <span>{formData.paymentMethodData.method}</span> */}
          <span>Metamask</span>
        </div>
        <div>
          <label>
            <b>Payment Currency:</b>
          </label>
          {/* <span>{formData.paymentMethodData.currency}</span> */}
          <span> USDT </span>
        </div>
      </div>
      <div className={css.fees}>
        <p>Platform fee $0.00</p>
        <p>Platform fee $0.00</p>
      </div>
      <div className={css.inputContainer}>
        <div className={css.subtotal}>
          <h2>
            <b>SUBTOTAL:</b> ${subtotal}
          </h2>
        </div>
      </div>
      <CustomConnectButtom />

      {propertyType === "capitalRepayment" ? (
        <MintCapitalRepaymentProperty
          userId={userId}
          propertyId={propertyId}
          quantity={quantity}
          capitalRepaymentPropertyAddress={propertyAddress}
          totalPrice={subtotal}
        />
      ) : (
        <MintPassiveIncomeProperty
          userId={userId}
          propertyId={propertyId}
          quantity={quantity}
          passiveIncomePropertyAddress={propertyAddress}
          totalPrice={subtotal}
        />
      )}
    </form>
  );
};

export default ConfirmInvestment;
