import db from "./fakedb/db.json";
import Card from "./Card/Card";
import css from "./Userproperties.module.scss"

const UserProperties = () => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>Your Properties</h2>
        <p>search</p>
      </div>

      <div className={css.cards}>
        {db.length ? (
          <div className={css.cardGrid}>
            {db.map((land) => (
              <Card
                image={land.image}
                key={land.number}
                number={land.number}
                price={land.price}
                review={land.review}
                totalReviews={land.totalreviews}
                amenities={land.amenities}
                rooms={land.rooms}
                guests={land.guests}
                type={land.type}
                address={land.address}
                location={land.location}
                PIT={land.PIT}
                PRY={land.PRY}
                tokenised={land.Tokenised}
                NFTPrice={land.NFTPrice}
                AvailablesNFT={land.AvailablesNFT}
                capital={land.capital}
                littledescription={land.littledescription}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default UserProperties;
