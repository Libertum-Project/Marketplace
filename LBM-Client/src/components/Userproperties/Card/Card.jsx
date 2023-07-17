import css from "./Card.module.scss";

const Card = ({image, address, littledescription, amenities, rooms, location}) => {
return(
    <div className={css.cardcontainer}>
        <img src={image} alt="" />
        <h2>{address}</h2>
        <p>{littledescription}</p>
        <section>{location} {rooms}</section>
        <button> Sell </button>
        <button> View property details </button>
    </div>
)
};

export default Card; 