import css from "./Card.module.scss";
import { useNavigate } from 'react-router-dom';



const Card = ({number, image, address, littledescription, amenities, rooms, location}) => {

    const navigate = useNavigate()

    const handleSellClick = () => {
        navigate(`/userdash/myproperties/sell/${number}`);        
      };

    const handleSeeClick = () => {
        navigate(`/userdash/myproperties/${number}`);        
      };

    return(
    <div className={css.cardcontainer}>
        <img src={image} alt="" />
        <h2>{address}</h2>
        <p>{littledescription}</p>
        <section>{location} {rooms}</section>

        {/* <Link  to={`/userdash/myproperties/sell/${number}`} className={css.button}> 
        <button > Sell </button>
        </Link> */}
        <button className={css.button} onClick={handleSellClick}>
        Sell
        </button>
        
        <button className={css.button} onClick={handleSeeClick}>  
        Property details 
        </button>

    </div>
)
};

export default Card; 