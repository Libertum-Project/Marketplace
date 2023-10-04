import { useState, useEffect } from "react";
import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import backBtn from "../../assets/back_btn.svg";

const FinancialForm = ({ handleSubmit, onNext, onBack, onChange, propertyData }) => {

  const [formErrors, setFormErrors] = useState({});
  const handleBtn = (event) => {
    event.preventDefault();
    onNext()
  };


  return (
    <form className={css.createForm} onSubmit={handleSubmit}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Financial information</h2>
      </div>
      <ProgressBar step={"3"} />

      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>
          <div>
            <label>Market Value of the property (in USD)</label>
            <input
              type="number"
              value={propertyData.financialData.Market_value_of_the_property}
              onChange={(e) => {
                onChange("Market_value_of_the_property", e.target.value);
              }}
            />
            {formErrors.Market_value_of_the_property && (
              <p className={css.error}>
                {formErrors.Market_value_of_the_property}
              </p>
            )}
          </div>
          <div>
            <label>Investment Type</label>
            <select
              value={propertyData.financialData.Investment_type}
              onChange={(e) => {
                onChange("Investment_type", e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="passiveIncome">Passive Income Only</option>
              <option value="capitalRepayment">
                Passive Income + Capital Return
              </option>
            </select>
            {formErrors.Investment_type && (
              <p className={css.error}>{formErrors.Investment_type}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Passive Income per token (in USD)</label>
            <input
              type="number"
              value={propertyData.financialData.Passive_Income_per_token}
              onChange={(e) => {
                onChange("Passive_Income_per_token", e.target.value);
              }}
            />
            {formErrors.Passive_Income_per_token && (
              <p className={css.error}>{formErrors.Passive_Income_per_token}</p>
            )}
          </div>
          <div>
            <label>Token price (in USD)</label>
            <input
              type="number"
              value={propertyData.financialData.Token_Price}
              onChange={(e) => {
                onChange("Token_Price", e.target.value);
              }}
            />
            {formErrors.Token_Price && (
              <p className={css.error}>{formErrors.Token_Price}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Number of Tokens available</label>
            <input
              type="number"
              value={propertyData.financialData.Number_of_tokens_available}
              onChange={(e) => {
                onChange("Number_of_tokens_available", e.target.value);
              }}
            />
            {formErrors.Number_of_tokens_available && (
              <p className={css.error}>
                {formErrors.Number_of_tokens_available}
              </p>
            )}
          </div>
          <div>
            <label>Rental Yield (in %)</label>
            <input
              type="number"
              value={propertyData.financialData.Rental_yield}
              onChange={(e) => {
                onChange("Rental_yield", e.target.value);
              }}
            />
            {formErrors.Rental_yield && (
              <p className={css.error}>{formErrors.Rental_yield}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Mortgage (in USD)</label>
            <input
              type="number"
              value={propertyData.financialData.Mortgage}
              onChange={(e) => {
                onChange("Mortgage", e.target.value);
              }}
            />
            {formErrors.Mortgage && (
              <p className={css.error}>{formErrors.Mortgage}</p>
            )}
          </div>

          <div>
            <label>Percent of property tokenized (in %)</label>
            <input
              type="number"
              value={propertyData.financialData.Percent_of_property_tokenized}
              onChange={(e) => {
                onChange("Percent_of_property_tokenized", e.target.value);
              }}
            />
            {formErrors.Percent_of_property_tokenized && (
              <p className={css.error}>
                {formErrors.Percent_of_property_tokenized}
              </p>
            )}
          </div>
        </div>
        {propertyData.financialData.Investment_type !== "passiveIncome" ?

          (<div className={css.inputContainer}>
            <div>
              <label>Monthly Capital Repayment Amount (in USD)</label>
              <input
                type="number"
                value={
                  propertyData.financialData.Monthly_capital_repayment_amount
                }
                onChange={(e) => {
                  onChange("Monthly_capital_repayment_amount", e.target.value);
                }}
              />
              {formErrors.Monthly_capital_repayment_amount && (
                <p className={css.error}>
                  {formErrors.Monthly_capital_repayment_amount}
                </p>
              )}
            </div>

            <div>
              <label>Capital Payment Duration (in Months)</label>
              <input
                type="number"
                value={propertyData.financialData.Capital_payment_duration}
                onChange={(e) => {
                  onChange("Capital_payment_duration", e.target.value);
                }}
              />
              {formErrors.Capital_payment_duration && (
                <p className={css.error}>{formErrors.Capital_payment_duration}</p>
              )}
            </div>
          </div>) : null}
      </div>
      <button
        className={css.nextBtn}
        onClick={(event) => {
          handleBtn(event);
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default FinancialForm;
