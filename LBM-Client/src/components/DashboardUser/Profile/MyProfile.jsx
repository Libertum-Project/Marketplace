import React, { useState, useEffect } from "react";
import css from "./MyProfile.module.scss";

const MyProfile = ({ name: initialName, email: initialEmail }) => {
  const [name, setName] = useState(initialName);
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState("");  
  const [email, setEmail] = useState(initialEmail);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    // Divide el nombre completo en nombre y apellido
    const nameParts = name.split(" ");
    setFirstName(nameParts[0]);
    setLastName(nameParts.slice(1).join(" ")); // Si hay más de un apellido, los une
  }, [name]);



  const handleUpdateProfile = () => {
    // Lógica para actualizar datos en la base de datos
    console.log("Nuevos datos:", {
      name,
      email,
      firstName,   // Utiliza firstName en lugar de name para enviar
      lastName, 
      address,
      city,
      country,
      phoneNumber,
    });
  };

//   const firstName = name.split()
//   const lastName = name.split(); 
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
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
        {/* <button
          onClick={handleUpdateProfile}
          className={css.createForm__inputs__nextBtn}
        >
          Actualizar Perfil
        </button> */}
      </div>
    </div>
  );
};

export default MyProfile;
