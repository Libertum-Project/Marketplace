import db from "./fakedb/db.json";
import Card from "./Card/Card";
import css from "./Userproperties.module.scss"

import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, fetchCurrentUser } from "../../../redux/features/userSlice";



const UserProperties = () => {


  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();
  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <div className={css.container}>
      <div className={css.header}>
        <h2>Your Properties</h2>
        <div>
          <select>
            <option value="">Select an option</option>
            <option value="my_properties">My Properties</option>
            <option value="investments">Investments</option>
            <option value="saved_properties">Saved Properties</option>
          </select>
          {/* <p>Selected option: {selectedOption}</p> */}
      </div>
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
