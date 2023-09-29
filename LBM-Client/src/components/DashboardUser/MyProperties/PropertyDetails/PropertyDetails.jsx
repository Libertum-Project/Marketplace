import './PropertyDetails.scss';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import SelectCountry from '../../Profile/SelectCountry';
import { editProperty } from '../../../../../redux/features/propertySlice';
import { fetchCurrentUser } from '../../../../../redux/features/userSlice';

const PropertyDetails = ({ property, closeModal }) => {

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const modal = document.querySelector('.property-details-container');
      if (modal && !modal.contains(e.target)) {
        closeModal(); // Llama a la función para cerrar el modal
      }
    };

    // Agregar el event listener cuando el componente se monta
    document.addEventListener('mousedown', handleOutsideClick);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.currentUser);
  const propertyId = property.id;
  const currentProperty = user.publishedProperties.find((property) => property.ID_Property === propertyId)
  const feature = currentProperty.Feature

  const [type, setType] = useState(feature.Type);
  const [country, setCountry] = useState(feature.Country);
  const [city, setCity] = useState(feature.City);
  const [address, setAddress] = useState(feature.Address);
  const [state, setState] = useState(feature.State);
  const [postalCode, setPostalCode] = useState(feature.Postal_Code);
  const [description, setDescription] = useState(feature.Description);
  const [squareFoot, setSquareFoot] = useState(feature.Square_foot);
  const [amenities, setAmenities] = useState(feature.Amenities);
  const [rooms, setRooms] = useState(feature.Rooms);
  const [occupancyStatus, setOccupancyStatus] = useState(feature.Occupancy_Status);
  const [linkImage, setLinkImage] = useState(feature.Link_Image);
  const [linkDocument, setLinkDocument] = useState(feature.Link_Document);
  const [more, setMore] = useState(feature.More);

  const handleEdit = (e) => {
    e.preventDefault()
    const newFeatureData = {
      Type: type,
      Country: country,
      City: city,
      Address: address,
      State: state,
      Postal_Code: postalCode,
      Description: description,
      Square_foot: squareFoot,
      Amenities: amenities,
      Rooms: rooms,
      Occupancy_Status: occupancyStatus,
      Link_Image: linkImage,
      Link_Document: linkDocument,
      More: more
    };

    dispatch(editProperty({ newFeatureData, propertyId }))
    dispatch(
      fetchCurrentUser({
        email: user.email,
        name: user.name,
      }))
    closeModal()
  }

  const amenitiesOptions = ['Swimming Pool', 'Gym', 'Parking', 'WiFi Access', "Terrace", 'Garden', 'Security', 'None'];

  const handleAmenitiesChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setAmenities([...amenities, value]);
    } else {
      setAmenities(amenities.filter(item => item !== value));
    }
  };

  return (
    <div className="property-details-modal">
      <div className='property-details-container' >
        <div className="header">
          {/* <h2>Property #{property.id}</h2> */}
          <div className="property-info">

            <img src={feature.Link_Image[0]} alt="" />
            <div>
              <h3>{property.address}</h3>
              <p> {feature.City} • {feature.Country} </p>
              <p> {feature.Square_foot} SqFeet </p>
              <p> {feature.Amenities.join(' • ')} </p>
            </div>
          </div>
        </div>
        <div className="inputs">
          <h2>Edit property info</h2>

          <form className='createForm'>
            <div className='createForm__inputs'>
              <div className='inputContainer'>

                <div>
                  <label htmlFor="">Square Foot</label>
                  <input
                    type="number"
                    value={squareFoot}
                    onChange={(e) => setSquareFoot(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="">Type</label>
                  <select
                    onChange={(e) => setType(e.target.value)}
                  >
                    <option value={type}>{type}</option>
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
                  <label>Country</label>
                  <SelectCountry onChange={(country) => setCountry(country)} currentValue={country} />
                </div>

                <div>
                  <label>City</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
                </div>
              </div>

              <div className='inputContainer'>
                <div>
                  <label>Region / State / Province</label>
                  <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                  />
                </div>

                <div>
                  <label>Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
              </div>

              <div className='inputContainer'>
                <div>
                  <label>Postal Code</label>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>

                <div>
                  <label>Ocuupancy Status</label>
                  <select
                    onChange={(e) => setOccupancyStatus(e.target.value)}
                  >
                    <option value={occupancyStatus}>{occupancyStatus}</option>
                    <option value="free">Free</option>
                    <option value="occupied">Occupied</option>
                    <option value="long term lease">Long Term Lease</option>
                    <option value="short term lease">Short Term Lease</option>
                  </select>
                </div>
              </div>

              <div className='inputContainer'>
                <div>
                  <label>Rooms</label>
                  <input
                    type="number"
                    value={rooms}
                    onChange={(e) => setRooms(e.target.value)} />
                </div>

                <div className="amenities">
                  {amenitiesOptions.map((option) => (
                    <div key={option}>
                      <label>
                        <input
                          type="checkbox"
                          value={option}
                          onChange={handleAmenitiesChange}
                          checked={amenities.includes(option)}
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                </div>

              </div>

              <div className='inputContainer'>
                <div>
                  <label>More / Extra</label>
                  <input
                    type="text"
                    value={more}
                    onChange={(e) => setMore(e.target.value)}
                  />
                </div>
              </div>

              <div className='inputContainer'>
                <div>
                  <label>Description</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                </div>
              </div>
            </div>

            <div className='buttons'>
              <button className='cancelBtn' onClick={closeModal}>Cancel</button>
              <button className='updateBtn' onClick={(e) => { handleEdit(e) }}>Edit</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
