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
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);
  const [codeArea, setCodeArea] = useState(user.codeArea);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleUpdateProfile = () => {
    const userData = {
      editableName: firstName,
      lastName,
      address,
      city,
      country,
      codeArea,
      phoneNumber,
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
          <div className={css.createForm__inputs}>
            <label className={css.createForm__inputs__label}>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
              <label className={css.createForm__inputs__label}>
                Code Area
              </label>
              <div>
                <SelectCodeArea onChange={(codeArea) => setCodeArea(codeArea)} currentValue={codeArea} />
              </div>
            </div>
            <div>
              <label className={css.createForm__inputs__label}>
                Phone Number
              </label>
              <input
                type="text"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className={css.createForm__inputs__input}
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
