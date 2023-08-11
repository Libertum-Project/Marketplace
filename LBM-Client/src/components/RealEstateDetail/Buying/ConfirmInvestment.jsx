import css from "./BuyProperty.module.css";
import ProgressBar from "../../CreateProperty/ProgressBar";
import { useDispatch, useSelector } from "react-redux";
import {
  buyToken,
  fetchCurrentUser,
} from "../../../../redux/features/userSlice";
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
}) => {
  const [subtotal, setSubtotal] = useState(0); //Estadp para ver el subtotal sin los impuestos
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

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

  const handleBuyTokenBtn = (event) => {
    event.preventDefault();
    const rangeValue = formData.tokensData.rangeValue.toString();
    dispatch(
      buyToken({
        userId: currentUser.ID_user.toString(),
        propertyId: propertyId.toString(),
        quantity: rangeValue,
      })
    );
    alert('Done')
  };

  return (
    <form className={css.createForm}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Financial information</h2>
      </div>
      <ProgressBar step={"3"} />

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
          <span>{formData.paymentMethodData.method}</span>
        </div>
        <div>
          <label>
            <b>Payment Currency:</b>
          </label>
          <span>{formData.paymentMethodData.currency}</span>
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

      <button
        className={css.nextBtn}
        onClick={(event) => {
          handleBuyTokenBtn(event);
        }}
        type="submit"
      >
        Invest Now!
      </button>
    </form>
  );
};

export default ConfirmInvestment;
