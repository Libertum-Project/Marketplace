import React from 'react';
import './PropertyDetails.scss';  

const PropertyDetails = ({ property, closeModal }) => {
  return (
    <div className="property-details-modal">
      <div className='property-details-container'>
        <div className="header">
        {/* <img src="url_de_la_imagen_de_fondo.jpg" alt="Imagen de fondo" /> */}
        <div className="property-info">
          {/* <button className='buttonClose' onClick={closeModal}>X</button> */}
          {/* <img src="" alt="Imagen izquierda" /> */}
          <div>
            <p>Property #{property.id}</p>
            <h2>{property.address}</h2>
            <p>{property.rooms} </p>
            {/* <p>Característica 2: </p>
            <p>Característica 5: </p> */}
          </div>
        </div>
      </div>
      {/* Inputs */}
      <div className="inputs">
        <h2>Edit property info</h2>

        <form action="" className='createForm'>
          <div className='createForm__inputs'>
            <div className='inputContainer'>

              <div>
                <label htmlFor="">Square Foot</label>
                <input type="number" />  
              </div> 

              <div>
                <label htmlFor="">Type</label>
                <select name="" id="">
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
              </div>
              
            </div>

            <div className='inputContainer'>
              <div>
                <label htmlFor="">Country</label>
                <input type="text" name="" id="" />
              </div>

              <div>
                <label htmlFor="">City</label>
                <input type="text" />
              </div>
            </div>
          </div>

          <div className='buttons'>
            <button className='cancelBtn' onClick={closeModal}>Cancel</button>
            <button className='updateBtn'>Edit</button>
          </div>
          
        </form>


      </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
