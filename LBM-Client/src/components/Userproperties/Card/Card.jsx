import css from "./Card.module.scss";
import { Link } from "react-router-dom";

const Card = ({number, image, address, littledescription, amenities, rooms, location}) => {
return(
    <div className={css.cardcontainer}>
        <img src={image} alt="" />
        <h2>{address}</h2>
        <p>{littledescription}</p>
        <section>{location} {rooms}</section>

        <Link  to={`/userdash/myproperties/sell/${number}`} className={css.button}> 
        <button > Sell </button>
        </Link>
        
        <Link  to={`/userdash/myproperties/${number}`} className={css.button}>  
        <button> Property details </button>
        </Link>
    </div>
)
};

export default Card; 