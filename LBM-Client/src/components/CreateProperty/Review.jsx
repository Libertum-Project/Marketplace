import { useDispatch } from "react-redux";
import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import backBtn from "../../assets/back_btn.svg";
import { useState } from "react";


const Review = ({ handleSubmit, onBack, propertyData }) => {

    const handleBtn = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    isValid ? handleSubmit() : console.log(formErrors);
  };

    console.log(propertyData)
  
    // const dispatch = useDispatch(); 
    // const [address, setAddress] = useState(address)
  
    return(
    <form className={css.createForm} onSubmit={handleSubmit}>
      <div className={css.formHeader}>
      <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Review information</h2>
      </div>
      <ProgressBar step="3"/>

    <p>Please check your information, there is data that cannot be edited later.</p>      
      
      <div className={css.createForm__inputs}>

      <h4>PROPERTY DATA</h4>

        <div className={css.inputContainer}>          
          <div>
            <label>Square Foot</label>
            <input 
            type="number" 
            value={propertyData.featureData.Square_foot}
            />
          </div>

          <div>
            <label>Type</label>
            <input 
            type="text" 
            value={propertyData.featureData.Type}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Country</label>
            <input 
            type="text" 
            value={propertyData.featureData.Country}
            />
          </div>

          <div>
            <label>City</label>
            <input 
            type="text" 
            value={propertyData.featureData.City}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Region / State / Province</label>
            <input 
            type="text" 
            value={propertyData.featureData.Country}
            />
          </div>

          <div>
            <label>Address</label>
            <input 
            type="text" 
            value={propertyData.featureData.Address}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Postal Code</label>
            <input 
            type="text" 
            value={propertyData.featureData.Postal_Code}
            />
          </div>

          <div>
            <label>Occupancy Status</label>
            <input 
            type="text" 
            value={propertyData.featureData.Occupancy_Status}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Rooms</label>
            <input 
            type="text" 
            value={propertyData.featureData.Rooms}
            />
          </div>

          <div>
            <label>Amenities</label>
            <input 
            type="text" 
            value={propertyData.featureData.Amenities}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Description</label>
            <textarea 
            
            value={propertyData.featureData.Description}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>More</label>
            <textarea             
            value={propertyData.featureData.Description}
            />
          </div>
        </div>

      </div>


      <div className={css.createForm__inputs}>

        <h4>FINANCIAL DATA</h4>

        <div className={css.inputContainer}>          
          <div>
            <label>Market Value of the Property</label>
            <input 
            type="number" 
            value={propertyData.financialData.Market_value_of_the_property}
            />
          </div>

          <div>
            <label>Investment Type</label>
            <input 
            type="text" 
            value={propertyData.financialData.Investment_type}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Passive Income per Token (in USD)</label>
            <input 
            type="text" 
            value={propertyData.financialData.Passive_Income_per_token}
            />
          </div>

          <div>
            <label>Token price (in USD)</label>
            <input 
            type="text" 
            value={propertyData.financialData.Token_Price}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Number of Tokens available</label>
            <input 
            type="text" 
            value={propertyData.financialData.Number_of_tokens_available}
            />
          </div>

          <div>
            <label>Rental Yield (in %)</label>
            <input 
            type="text" 
            value={propertyData.financialData.Rental_yield}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Mortgage (in USD)</label>
            <input 
            type="text" 
            value={propertyData.financialData.Mortgage}
            />
          </div>

          <div>
            <label>Percent of property tokenized (in %)</label>
            <input 
            type="text" 
            value={propertyData.financialData.Percent_of_property_tokenized}
            />
          </div>
        </div>

        <div className={css.inputContainer}>          
          <div>
            <label>Monthly Capital Repayment Amount (in USD)</label>
            <input 
            type="text" 
            value={propertyData.financialData.Monthly_capital_repayment_amount}
            />
          </div>

          <div>
            <label>Capital Payment Duration (in Months)</label>
            <input 
            type="text" 
            value={propertyData.financialData.Capital_payment_duration}
            />
          </div>
        </div>

</div>

  <div className={css.buttons}>
    <button className={css.saveBtn}>
      Save for later
    </button>

    <button className={css.submitBtn}>
      Submit
    </button>
  </div>

    </form>
  )
}; 

export default Review; 