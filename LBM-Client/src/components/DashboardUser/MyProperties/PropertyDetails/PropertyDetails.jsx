import './PropertyDetails.scss';  

const PropertyDetails = ({ property, closeModal }) => {


  return (
    <div className="property-details-modal">
      <div className='property-details-container' >
        <div className="header">
          <h2>Property #{property.id}</h2>
          <div className="property-info">
            <img src="" alt="Imagen izquierda" />
            <div>
              <h3>{property.address}</h3>
              <p> 3 Bedrooms </p>
              <p> 456 SqFeet </p>
              <p> Gym • Parking • WiFi  </p>
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

            <div className='inputContainer'>
              <div>
                <label htmlFor="">Region / State / Province</label>
                <input type="text" name="" id="" />
              </div>

              <div>
                <label htmlFor="">Address</label>
                <input type="text" />
              </div>
            </div>

            <div className='inputContainer'>
              <div>
                <label htmlFor="">Postal Code</label>
                <input type="number" name="" id="" />
              </div>

              <div>
                <label htmlFor="">Ocuupancy Status</label>
                <input type="text" />
              </div>
            </div>

            <div className='inputContainer'>
              <div>
                <label htmlFor="">Rooms</label>
                <input type="text" name="" id="" />
              </div>

            </div>

            <div className='inputContainer'>
              <div>
                <label htmlFor="">More / Extra</label>
                <input type="text" name="" id="" />
              </div>
            </div>

            <div className='inputContainer'>
              <div>
                <label htmlFor="">Description</label>
                <input type="text" name="" id="" />
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
