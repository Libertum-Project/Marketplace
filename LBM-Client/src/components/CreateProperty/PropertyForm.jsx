import { useState } from "react";
import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";
import backBtn from "../../assets/back_btn.svg";
import SelectCountry from "./SelectCountry";
import UploadImages from "./UploadImages";

const PropertyForm = ({
  handleSubmit,
  onBack,
  onNext,
  onChange,
  propertyData,
  setImages,
  images,
}) => {


  const amenitiesOptions = ['Swimming Pool', 'Gym ', 'Parking', 'WiFi Access', "Terrace", 'Garden', 'Security', 'None']; 
  const [selectedAmenities, setSelectedAmenities] = useState([]);

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    let updatedAmenities = [...selectedAmenities];
    if (checked) {
      updatedAmenities.push(value);
    } else {
      updatedAmenities = updatedAmenities.filter(item => item !== value);
    }
    setSelectedAmenities(updatedAmenities);
    onChange("Amenities", updatedAmenities);
  };
  

  const [formErrors, setFormErrors] = useState({});

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

    if (!propertyData.featureData.Amenities || propertyData.featureData.Amenities.length === 0) {
      errors.Amenities = "Amenities are required";
    }
    

    if (!propertyData.featureData.Description.trim()) {
      errors.Description = "Description is required";
    } else if (propertyData.featureData.Description.length > 300) {
      errors.Description = "Description must not exceed 300 characters";
    }

    if(images.length < 5 ){
      errors.ExpectedImages = "Please upload at least 5 images";
    }

    setFormErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleBtn = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    isValid ? onNext() : console.log(formErrors);
  };

  return (
    <form className={css.createForm} onSubmit={handleSubmit}>
      <div className={css.formHeader}>
        <button onClick={onBack}>
          <img src={backBtn} alt="Back" />
        </button>
        <h2>Property information</h2>
      </div>
      <ProgressBar step={"2"} />

      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>
          <div>
            <label>Square Foot</label>
            <input
              type="number"
              value={propertyData.featureData.Square_foot}
              onChange={(e) => {
                onChange("Square_foot", e.target.value);
              }}
            />
            {formErrors.Square_foot && (
              <p className={css.error}>{formErrors.Square_foot}</p>
            )}
          </div>
          <div>
            <label>Type</label>
            <select
              value={propertyData.featureData.Type}
              onChange={(e) => {
                onChange("Type", e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="green">Green / Sustainable</option>
              <option value="commercial">Commercial</option>
              <option value="residential">Residential</option>
              <option value="hotels">Hotels</option>
              <option value="agriculture">Agriculture</option>
              <option value="farm-house">Farm House</option>
              <option value="development-fund">Development Fund</option>
              <option value="industrial">Industrial</option>
              <option value="boat-house">Boat House</option>
            </select>
            {formErrors.Type && <p className={css.error}>{formErrors.Type}</p>}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Country</label>
            <SelectCountry
              onChange={onChange}
              propertyData={propertyData}
              form="featureData"
            />
            {formErrors.Country && (
              <p className={css.error}>{formErrors.Country}</p>
            )}
          </div>
          <div>
            <label>City</label>
            <input
              type="text"
              value={propertyData.featureData.City}
              onChange={(e) => {
                onChange("City", e.target.value);
              }}
            />
            {formErrors.City && <p className={css.error}>{formErrors.City}</p>}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Region / State / Province</label>
            <input
              type="text"
              value={propertyData.featureData.State}
              onChange={(e) => {
                onChange("State", e.target.value);
              }}
            />
            {formErrors.State && (
              <p className={css.error}>{formErrors.State}</p>
            )}
          </div>
          <div>
            <label>Address</label>
            <input
              type="text"
              value={propertyData.featureData.Address}
              onChange={(e) => {
                onChange("Address", e.target.value);
              }}
            />
            {formErrors.Address && (
              <p className={css.error}>{formErrors.Address}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Postal Code</label>
            <input
              type="text"
              value={propertyData.featureData.Postal_Code}
              onChange={(e) => {
                onChange("Postal_Code", e.target.value);
              }}
            />
            {formErrors.Postal_Code && (
              <p className={css.error}>{formErrors.Postal_Code}</p>
            )}
          </div>
          <div>
            <label>Occupancy Status</label>
            <select
              value={propertyData.featureData.Occupancy_Status}
              onChange={(e) => {
                onChange("Occupancy_Status", e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="free">Free</option>
              <option value="occupied">Occupied</option>
              <option value="long term lease">Long Term Lease</option>
              <option value="short term lease">Short Term Lease</option>
            </select>
            {formErrors.Occupancy_Status && (
              <p className={css.error}>{formErrors.Occupancy_Status}</p>
            )}
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Rooms</label>
            <input
              type="number"
              value={propertyData.featureData.Rooms}
              onChange={(e) => {
                onChange("Rooms", e.target.value);
              }}
            />
            {formErrors.Rooms && (
              <p className={css.error}>{formErrors.Rooms}</p>
            )}
          </div>
          {/* <div>
            <label>Amenities</label>
            <input
              type="text"
              value={propertyData.featureData.Amenities}
              onChange={(e) => {
                onChange("Amenities", e.target.value);
              }}
            />
            {formErrors.Amenities && (
              <p className={css.error}>{formErrors.Amenities}</p>
            )}
          </div> */}

        </div>
        <div className={css.inputContainer}>

        <div >
      <label>Amenities</label>
      <div className={css.amenities}>
      {amenitiesOptions.map((option) => (
        <div key={option}>
          <label>
            <input
              type="checkbox"
              value={option}
              onChange={handleAmenitiesChange}
              checked={selectedAmenities.includes(option)}              
            />
            {option}
          </label>          
        </div>
          ))}
      </div>
      {formErrors.Amenities && (
            <p className={css.error}>{formErrors.Amenities}</p>
          )}
        </div>

        </div>

        <div className={css.inputContainer}>
          <div>
            <label>More / Extra</label>
            <input
              type="text"
              value={propertyData.featureData.More}
              onChange={(e) => {
                onChange("More", e.target.value);
              }}
            />
          </div>
        </div>

        <div className={css.inputContainer}>
          <div>
            <label>Description</label>
            <textarea
              value={propertyData.featureData.Description}
              onChange={(e) => {
                onChange("Description", e.target.value);
              }}
            ></textarea>
            {formErrors.Description && (
              <p className={css.error}>{formErrors.Description}</p>
            )}
          </div>
        </div>
        <UploadImages
          onChange={onChange}
          setImages={setImages}
          images={images}
        />
        {formErrors.ExpectedImages && (
              <p className={css.error}>{formErrors.ExpectedImages}</p>
            )}
      </div>

      <button
        className={css.nextBtn}
        onClick={(event) => {
          handleBtn(event);
        }}
      >
        Next
      </button>
    </form>
  );
};

export default PropertyForm;
