import { useDispatch } from "react-redux";
import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import backBtn from "../../assets/back_btn.svg";
import { useState } from "react";

const Review = ({
  handleSubmit,
  onBack,
  propertyData,
  createDraft,
  images,
}) => {
  const [formErrors, setFormErrors] = useState({});
  const handleCreateDraft = (event) => {
    event.preventDefault();
    createDraft();
  };

  const validateForm = () => {
    const errors = {};
    const onlyLetters = /^[A-Za-z\s]+$/;

    if (
      !propertyData.featureData.Square_foot ||
      propertyData.featureData.Square_foot < 1
    ) {
      errors.Square_foot = "Square Foot is required";
    }

    if (!propertyData.featureData.Type) {
      errors.Type = "Type is required";
    }

    if (!propertyData.featureData.Country) {
      errors.Country = "Country is required";
    }

    if (!propertyData.featureData.City.trim()) {
      errors.City = "City is required";
    } else if (!onlyLetters.test(propertyData.featureData.City)) {
      errors.City = "City should contain only letters";
    }

    if (!propertyData.featureData.State.trim()) {
      errors.State = "Region / State / Province is required";
    } else if (!onlyLetters.test(propertyData.featureData.State)) {
      errors.State = "It should contain only letters";
    }

    if (!propertyData.featureData.Address.trim()) {
      errors.Address = "Address is required";
    }

    if (!propertyData.featureData.Postal_Code.trim()) {
      errors.Postal_Code = "Postal Code is required";
    }

    if (!propertyData.featureData.Occupancy_Status) {
      errors.Occupancy_Status = "Occupancy Status is required";
    }

    if (!propertyData.featureData.Rooms || propertyData.featureData.Rooms < 0) {
      errors.Rooms = "Rooms is required";
    }

    if (
      !propertyData.featureData.Amenities ||
      propertyData.featureData.Amenities.length === 0
    ) {
      errors.Amenities = "Amenities are required";
    }

    if (!propertyData.featureData.Description.trim()) {
      errors.Description = "Description is required";
    } else if (propertyData.featureData.Description.length > 300) {
      errors.Description = "Description must not exceed 300 characters";
    }

    /*
    if (images.length < 5) {
      errors.ExpectedImages = "Please upload at least 5 images";
    }
    */

    if (
      !propertyData.financialData.Market_value_of_the_property ||
      propertyData.financialData.Market_value_of_the_property < 1
    ) {
      errors.Market_value_of_the_property =
        "Market Value of the property is required";
    } else if (
      propertyData.financialData.Market_value_of_the_property -
        propertyData.financialData.Mortgage <=
      0
    ) {
      errors.Market_value_of_the_property =
        "The mortgage amount cannot be greater than the property value.";
    }

    if (!propertyData.financialData.Investment_type) {
      errors.Investment_type = "Investment type is required";
    }

    if (
      !propertyData.financialData.Passive_Income_per_token ||
      propertyData.financialData.Passive_Income_per_token < 1
    ) {
      errors.Passive_Income_per_token = "Passive Income per token is required";
    }

    if (
      !propertyData.financialData.Token_Price ||
      propertyData.financialData.Token_Price < 1
    ) {
      errors.Token_Price = "Token price is required";
    }

    if (
      !propertyData.financialData.Number_of_tokens_available ||
      propertyData.financialData.Number_of_tokens_available < 1
    ) {
      errors.Number_of_tokens_available =
        "Number of Tokens available is required";
    }

    if (
      !propertyData.financialData.Rental_yield ||
      propertyData.financialData.Rental_yield < 1
    ) {
      errors.Rental_yield = "Rental Yield is required";
    }

    if (
      !propertyData.financialData.Percent_of_property_tokenized ||
      propertyData.financialData.Percent_of_property_tokenized < 1
    ) {
      errors.Percent_of_property_tokenized =
        "Percent of property tokenized is required";
    }

    if (
      (!propertyData.financialData.Monthly_capital_repayment_amount ||
        propertyData.financialData.Monthly_capital_repayment_amount < 1) &&
      propertyData.financialData.Investment_type !== "passiveIncome"
    ) {
      errors.Monthly_capital_repayment_amount =
        "Monthly Capital Repayment Amount is required";
    }

    if (
      (!propertyData.financialData.Capital_payment_duration ||
        propertyData.financialData.Capital_payment_duration < 1) &&
      propertyData.financialData.Investment_type !== "passiveIncome"
    ) {
      errors.Capital_payment_duration = "Capital Payment Duration is required";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleClick = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    isValid ? handleSubmit() : console.log(formErrors);
  };

  return (
    <form className={css.createForm} onSubmit={handleSubmit}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Review information</h2>
      </div>
      <ProgressBar step="3" />

      <p>
        Please check your information, there is data that cannot be edited
        later.
      </p>

      <div className={css.createForm__inputs}>
        <h4>PROPERTY DATA</h4>

        <div className={css.inputContainer}>
          <div>
            <label>Square Foot</label>
            <input
              type="number"
              disabled
              value={propertyData.featureData.Square_foot}
            />
          </div>

          <div>
            <label>Type</label>
            <input type="text" disabled value={propertyData.featureData.Type} />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Country</label>
            <input
              type="text"
              disabled
              value={propertyData.featureData.Country}
            />
          </div>

          <div>
            <label>City</label>
            <input type="text" disabled value={propertyData.featureData.City} />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Region / State / Province</label>
            <input
              type="text"
              disabled
              value={propertyData.featureData.Country}
            />
          </div>

          <div>
            <label>Address</label>
            <input
              type="text"
              disabled
              value={propertyData.featureData.Address}
            />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              disabled
              value={propertyData.featureData.Postal_Code}
            />
          </div>

          <div>
            <label>Occupancy Status</label>
            <input
              type="text"
              value={propertyData.featureData.Occupancy_Status}
              disabled
            />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Rooms</label>
            <input
              type="text"
              disabled
              value={propertyData.featureData.Rooms}
            />
          </div>

          <div>
            <label>Amenities</label>
            <input
              type="text"
              disabled
              value={propertyData.featureData.Amenities}
            />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Description</label>
            <textarea disabled value={propertyData.featureData.Description} />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>More</label>
            <textarea disabled value={propertyData.featureData.Description} />
          </div>
        </div>

        <div className={css.images}>
          {images &&
            images.map((image, index) => (
              <span>
                <a href={image} target="_blank">
                  image {index + 1}
                </a>
              </span>
            ))}
        </div>
      </div>

      <div className={css.createForm__inputs}>
        <h4>FINANCIAL DATA</h4>

        <div className={css.inputContainer}>
          <div>
            <label>Market Value of the Property</label>
            <input
              type="number"
              disabled
              value={propertyData.financialData.Market_value_of_the_property}
            />
            {formErrors.Market_value_of_the_property && (
              <p className={css.error}>
                {formErrors.Market_value_of_the_property}
              </p>
            )}
          </div>

          <div>
            <label>Investment Type</label>
            <input
              type="text"
              disabled
              value={propertyData.financialData.Investment_type}
            />
            {formErrors.Investment_type && (
              <p className={css.error}>{formErrors.Investment_type}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Passive Income per Token (in USD)</label>
            <input
              type="text"
              disabled
              value={propertyData.financialData.Passive_Income_per_token}
            />
            {formErrors.Passive_Income_per_token && (
              <p className={css.error}>{formErrors.Passive_Income_per_token}</p>
            )}
          </div>

          <div>
            <label>Token price (in USD)</label>
            <input
              type="text"
              disabled
              value={propertyData.financialData.Token_Price}
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
              type="text"
              disabled
              value={propertyData.financialData.Number_of_tokens_available}
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
              type="text"
              disabled
              value={propertyData.financialData.Rental_yield}
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
              type="text"
              disabled
              value={propertyData.financialData.Mortgage}
            />
          </div>

          <div>
            <label>Percent of property tokenized (in %)</label>
            <input
              type="text"
              disabled
              value={propertyData.financialData.Percent_of_property_tokenized}
            />
            {formErrors.Rental_yield && (
              <p className={css.error}>{formErrors.Rental_yield}</p>
            )}
          </div>
        </div>
        {propertyData.financialData.Investment_type !== "passiveIncome" ? (
          <div className={css.inputContainer}>
            <div>
              <label>Monthly Capital Repayment Amount (in USD)</label>
              <input
                type="text"
                disabled
                value={
                  propertyData.financialData.Monthly_capital_repayment_amount
                }
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
                type="text"
                disabled
                value={propertyData.financialData.Capital_payment_duration}
              />
              {formErrors.Capital_payment_duration && (
                <p className={css.error}>
                  {formErrors.Capital_payment_duration}
                </p>
              )}
            </div>
          </div>
        ) : null}
      </div>

      <div className={css.buttons}>
        <button className={css.saveBtn} onClick={handleCreateDraft}>
          Save for later
        </button>

        <button
          className={css.submitBtn}
          onClick={(e) => {
            handleClick(e);
          }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Review;
