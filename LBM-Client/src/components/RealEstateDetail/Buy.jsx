import { Link } from "react-router-dom";
import style from "./Aboutproperty.module.scss";
import { FaBath, FaBed, FaWifi, FaParking   } from "react-icons/fa";

const Buy = (props) => {
  const { image, number, address, location, PIT, PRY, AvailablesNFT } = props;

  return (
           <div
          className={style.column-2}        >          
            <div className={style.buycontainer}>
              <span>{location} | {address} </span>
            
              <div className={style.icons}>
                <div>
                  <span><FaBath /></span>
                  <p>2 bath</p>
                </div>
                <div>
                  <span><FaBed /></span>
                  <p>3 rooms</p>
                </div>
                <div>
                  <span><FaWifi /></span>
                  <p>Free Wifi</p>
                </div>
                <div>
                  <span><FaParking /></span>
                  <p>Parking</p>
                </div>
              </div>


            <div className={style.cardbody}>
              
              <p>Passive Income Per Token: {PIT}</p>
              <p>Projected Rental Yield: ${PRY}</p>
              <p>Avaliables NFT: {AvailablesNFT}</p>
              <div className={style.cardbutton}>
                <Link
                  to={`/marketplace/buy/${number}`}
                >
                  <button className="btn content-center btn-wide bg-primary flex items-center justify-center">Buy Now</button>
                </Link>
              </div>
            </div>
            </div>

          </div> 
  );
};

export default Buy;
