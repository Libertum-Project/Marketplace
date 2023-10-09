import './Draft.scss'
import iconHouse from '../../assets/dashboardInactive.svg'
import { Link } from 'react-router-dom';

const Card = ({id, address, city, country}) => {

  const editRoute = `/create/${id}`;

  return(
    <div className="cardDraft">
      <img src={iconHouse} alt=""/>
      <div>
        <h2>Property # {id} </h2>
        <p>Address: {address} </p>
        <p>City: {city} </p>
        <p>Country: {country} </p>
      </div>
      <div className='button'>
        <Link  to={editRoute}>
          <button>Edit</button>
        </Link>
      </div>
    </div>
  )
}; 

export default Card; 