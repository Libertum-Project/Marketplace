import css from './userproperties.module.scss';
import { Link } from 'react-router-dom'; 
const Card = (
  {
  id,
  image,
  price,
  address,
  location,
  onDelete
}
) => {

  const handleDeleteClick = () => {
   onDelete(id);
  };

  return(
    <div className={css.cardcontainer}>
        <img src={image} alt="" />
        <h2>{address}</h2>        
        <p>{location}</p>
        <p>$ {price}</p>

        <Link  to={`/marketplace/${id}`} className={css.button}>         
        Property details        
        </Link>

        {/* <button onClick={handleDeleteClick} className={css.button}>
        Delete
      </button> */}
    </div>
  )
}

export default Card; 
