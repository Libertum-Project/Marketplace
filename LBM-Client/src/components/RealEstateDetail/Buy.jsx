import { Link } from "react-router-dom";
import style from "./Aboutproperty.module.scss";
import { FaBath, FaBed, FaWifi, FaParking   } from "react-icons/fa";
import Icons from "./IconsAmenities/Icons";

const Buy = (props) => {
  const { Square_foot, rooms, amenities, image, id, address, location, PIT, PRY, AvailablesNFT } = props;

  return (
           <div
          className={style.column2}        >          
            <div className={style.buycontainer}>
              <h1>{location} | {address} </h1>
            

            <div>
              <Icons 
              amenities ={amenities}
              rooms = {rooms}
              squarefoot = {Square_foot}
              iconSize="2.5rem"
              containerWidth= "3rem"
              />
            </div>

            <div className={style.cardbody}>

              <div className={style.cardtext}>
              <p><b>Passive Income Per Token:</b> $ {PIT}</p>
              <p><b>Projected Rental Yield:</b> {PRY} % </p>
              <p><b>Tokens Availables:</b> {AvailablesNFT}</p>

              </div>
              

              <div className={style.cardbutton}>
                <Link
                  to={`/marketplace/buy/${id}`}
                >
                  <button className={style.button}>Invest Now! </button>
                </Link>
              </div>
            </div>
            </div>

          </div> 
  );
};

export default Buy;
