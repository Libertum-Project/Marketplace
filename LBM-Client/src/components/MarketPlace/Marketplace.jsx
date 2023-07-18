import React from "react";
import Classes from "./Classes/Classes";
import CardImages from "./CardImages/CardImages";
import CardMarket from "./CardPreview";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import css from "./Marketplace.module.scss";
import db from "./fakedb/db.json"


function Marketplace() {


  const navigate = useNavigate();
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  const handleLogin = () => {
    const redirectUri = `${window.location.origin}/marketplace/`;
    loginWithRedirect({
      redirectUri: redirectUri,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        handleLogin();
      }
    }
  }, [navigate, isAuthenticated, isLoading]);


  const [rentalYield, setRentalYield] = useState(0); // Estado para almacenar el valor del filtrado

  const handleRentalYieldChange = (event) => {
    setRentalYield(Number(event.target.value));
  };



  return (!isLoading) ? (
  <div className={css.container}>
    <Classes />
    <div className={css.filtersContainer}>       
      <div className={css.filters}>
        <div className={css.filtersSelect}>
          <select>
            <option hidden value="">
              Finance Type
            </option>
            <option className={css.option}>Passive Income Only</option>
            <option>Capital Rep. + Passive Income</option>
          </select>
        </div>

        <div className={css.filtersSelect}>
          <select>
            <option hidden value="">
              Rental Yield
            </option>
            <option className={css.option}>Up to 5 %</option>
            <option>5 % to 10 %</option>
            <option>10 % to 25 %</option>
            <option>25 % to 50 %</option>
            <option>50 % & above</option>
          </select>
        </div>
        
        <div className={css.filtersSelect}>
          <select>
            <option hidden value="">
              Location
            </option>
            <option className={css.option}>USA</option>
            <option>UK</option>
          </select>
        </div>

        <div className={css.filterbuttons}>
          <button> 
            all 
          </button> |
          <button> 
            New 
          </button>|
          <button> 
            Upcoming 
          </button>
        </div>

        {/* <ModalFilter /> */}
      </div>
    </div>
    
    <div className={css.cards}>
    <section className={css.cardGrid}>
      {db.length
        ? db.map((land) => (
            <CardMarket
              image={land.image}
              image2={land.image2}
              image3={land.image3}
              image4={land.image4}
              image5={land.image5}
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
            />
          ))
        : null}
        
    </section>
    </div>
  </div>
) : (
  <Loading />
);

};


export default Marketplace;
