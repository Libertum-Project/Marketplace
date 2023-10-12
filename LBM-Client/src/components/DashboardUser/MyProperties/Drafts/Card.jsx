import { Link } from "react-router-dom";
import "./Draft.scss";
import iconHouse from "../../assets/dashboardInactive.svg";
import iconDelete from "../../assets/delete.svg";
import iconEdit from "../../assets/edit.svg";
import iconPreview from "../../assets/preview.svg";

const Card = ({ id, address, city, country, handleDelete }) => {
  const editRoute = `/create/${id}`;

  return (
    <div className="cardDraft">
      <img src={iconHouse} alt="" />
      <div>
        <h2>Property # {id} </h2>
        <p>Address: {address} </p>
        <p>City: {city} </p>
        <p>Country: {country} </p>
      </div>
      <div className="button">
        <button onClick={handleDelete}>
          <img src={iconDelete} alt="" className="icon"/>
        </button>
        <Link to={editRoute}>
          <img src={iconEdit} alt=""   className="icon"/>
        </Link>
        <button>
          <img src={iconPreview} alt=""  className="icon"/>
        </button>
      </div>
    </div>
  );
};

export default Card;
