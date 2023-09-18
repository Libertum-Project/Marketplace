import React, { useState, useEffect } from "react";
import css from "./MyProfile.module.scss";
import { useDispatch } from "react-redux";
import { editUserInfo } from "../../../../redux/features/userSlice";

const MyProfile = ({ name: initialName, email: initialEmail, user }) => {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState(user.editableName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(initialEmail);
  const [address, setAddress] = useState(user.address);
  const [city, setCity] = useState(user.city);
  const [country, setCountry] = useState(user.country);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleUpdateProfile = () => {
    const userData = {
      editableName: firstName, 
      lastName,
      address,
      city,
      country,
      phoneNumber,
    };

    const userId = user.ID_user;

    dispatch(editUserInfo({userData, userId}))
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

            <div className={css.createForm__inputs}>
              <label className={css.createForm__inputs__label}>City:</label>
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className={css.createForm__inputs__input}
              />
            </div>
            <div className={css.createForm__inputs}>
              <label className={css.createForm__inputs__label}>Country:</label>
              <input
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className={css.createForm__inputs__input}
              />
            </div>
          </div>

          <div className={css.createForm__inputs}>
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
