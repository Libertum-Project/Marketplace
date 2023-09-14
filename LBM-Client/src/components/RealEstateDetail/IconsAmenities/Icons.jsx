import css from "./icons.module.scss";
import React from "react";
import gymIcon from "./icons/gym.svg";
import bathroomIcon from "./icons/bathroom.svg";
import bedroomIcon from "./icons/bedroom.svg";
import gardenIcon from "./icons/garden.svg";
import parkingIcon from "./icons/parking.svg";
import securityIcon from "./icons/security.svg";
import sqfeetIcon from "./icons/sqfeet.svg";
import swimmingIcon from "./icons/pool.svg";
import terraceIcon from "./icons/terrace.svg";
import wifiIcon from "./icons/wifi.svg";

const Icons = ({ amenities, squarefoot, rooms, iconSize, containerWidth}) => {
  const displayedAmenities = amenities.slice(0, 5);

  return (
    <div className={css.iconosamenities}>
      <div className= {css.div} style={{ width: containerWidth }}>
      <img src={sqfeetIcon} alt="" style={{ width: iconSize, height: iconSize }} />
      <p>{squarefoot} sq ft</p>
    </div>
    <div className= {css.div} style={{ width: containerWidth }}>
      <img src={bedroomIcon} alt="" style={{ width: iconSize, height: iconSize }} />
      <p>{rooms} bedrooms</p>
    </div>

      {displayedAmenities.map((amenity, index) => {
        let icon = null;
        const amenityLowerCase = amenity.toLowerCase();
        
        switch (amenityLowerCase) {
          case "garden":
            icon = gardenIcon;
            break;
          case "terrace":
            icon = terraceIcon;
            break;
          case "swimming pool":
            icon = swimmingIcon;
            break;
          case "security":
            icon = securityIcon;
            break;
          case "wifi":
            icon = wifiIcon;
            break;
          case "gym":
            icon = gymIcon;
            break;
          case "parking":
            icon = parkingIcon;
            break;
          default:
            break;
        }

        return (
          <div className= {css.div} key={index} style={{ width: containerWidth }}>
             {icon && <img src={icon} alt="" style={{ width: iconSize, height: iconSize }} />}
            <p>{amenity}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
