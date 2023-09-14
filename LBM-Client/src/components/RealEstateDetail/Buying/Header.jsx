import Icons from "../IconsAmenities/Icons"

const HeaderProperty = ({address, location, amenities, rooms, Square_foot} ) => {
  return (
    <div>
    <h1> 
         {address} | {location}             
    </h1> 

      <Icons 
      amenities ={amenities}
      rooms = {rooms}
      squarefoot = {Square_foot}
      />

    </div>
  )
};

export default HeaderProperty; 