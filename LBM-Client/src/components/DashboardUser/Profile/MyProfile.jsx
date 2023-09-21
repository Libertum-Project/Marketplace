import React, { useState, useEffect } from "react";
import css from "./MyProfile.module.scss";
import { useDispatch } from "react-redux";
import { editUserInfo } from "../../../../redux/features/userSlice";
import SelectCountry from "./SelectCountry";
import SelectCodeArea from "./SelectCodeArea";

const MyProfile = ({ name: initialName, email: initialEmail, user }) => {
  const dispatch = useDispatch();
  const [name, surname] = user.editableName.split(" ");
  const [firstName, setFirstName] = useState(name);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(initialEmail);
  const [country, setCountry] = useState(user.country);
  const [city, setCity] = useState(user.city);
  const [region, setRegion] = useState(user.state);
  const [address, setAddress] = useState(user.address);
  const [postalCode, setPostalCode] = useState(user.postalCode);
  const [codeArea, setCodeArea] = useState(user.codeArea);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [passportId, setPassportId] = useState(user.passportId);
  const [dateOfBirth, setDateOfBirth] = useState(user.dateOfBirth);

  const handleUpdateProfile = () => {
    const userData = {
      editableName: firstName,
      lastName,
      country,
      city,
      state: region,
      address,
      postalCode,
      codeArea,
      phoneNumber,
      passportId,
      dateOfBirth
    };

    const userId = user.ID_user;

    dispatch(editUserInfo({ userData, userId }))
  };

  return (
    <div className={css.formContainer}>
      {/* <h2 className={css.createForm__inputs}>My Profile</h2> */}
      <div className={css.createForm}>
        <div className={css.createForm__inputs}>

          <div className={css.inputContainer}>

            <div>
              <label className={css.createForm__inputs__label}>Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className={css.createForm__inputs__input}
              />
            </div>

            <div>
              <label className={css.createForm__inputs__label}>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className={css.createForm__inputs__input}
              />
            </div>
          </div>


          <div className={css.createForm__inputs}>
            <label className={css.createForm__inputs__label}>Email:</label>
            <input
              type="email"
              disabled
              value={email}
              className={css.createForm__inputs__input}
            />
          </div>
          <div className={css.inputContainer}>
            <div>
              <label className={css.createForm__inputs__label}>Country:</label>
              <SelectCountry onChange={(country) => setCountry(country)} currentValue={country} />
            </div>
            <div className={css.createForm__inputs}>
              <label className={css.createForm__inputs__label}>City:</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={css.createForm__inputs__input}
              />
            </div>
          </div>
          <div className={css.inputContainer}>
            <div className={css.createForm__inputs}>
              <label className={css.createForm__inputs__label}>Region / State / Province:</label>
              <input
                type="text"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className={css.createForm__inputs__input}
              />
            </div>
            <div className={css.createForm__inputs}>
              <label className={css.createForm__inputs__label}>Address:</label>
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className={css.createForm__inputs__input}
              />
            </div>
          </div>
          <div className={css.inputContainer}>
            <div className={css.createForm__inputs}>
              <label className={css.createForm__inputs__label}>Postal Code:</label>
              <input
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className={css.createForm__inputs__input}
              />
            </div>
            <div>
              <label>Phone Number</label>
              <div className={css.codeNumber}>
                <SelectCodeArea onChange={(codeArea) => setCodeArea(codeArea)} currentValue={codeArea} />
                <input
                  type="number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className={css.inputContainer}>
            <div>
              <label>Passport / ID</label>
              <input
                type="text"
                value={passportId}
                onChange={(e) => setPassportId(e.target.value)}
              />
            </div>
            <div>
              <label>Date of Birth</label>
              <input
                type="date"
                value={dateOfBirth}
                onChange={(e) => setDateOfBirth(e.target.value)}
              />
            </div>
          </div>
        </div>
        <button
          onClick={handleUpdateProfile}
          className={css.updateBtn}
        >
          Update
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
