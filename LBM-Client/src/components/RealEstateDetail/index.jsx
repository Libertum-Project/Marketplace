import css from "./index.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import db from "../RealEstates/fakedb/db.json";
import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredProperties, fetchAllProperties } from '../../../redux/features/propertySlice';
import Aboutproperty from "./Aboutproperty";
import Buy from "./Buy";
import Loading from "../Loading/Loading";
import { useEffect, useState } from "react";

const Index = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const properties = useSelector((state) => state.property.filteredProperties);

  // Convertir el valor de 'id' a un número
  const propertyId = parseInt(id);

  // Buscar la propiedad que coincide con el ID_Property
  const property = properties.find((property) => property.ID_Property === propertyId);

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

  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 120);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);




  return !isLoading && isAuthenticated ? (
    <div className={css.details}>
   


      <header className={css.header}>
        <h2>{property.Feature.Address}</h2>
        <div className={css.headerText}>
          <p>{property.Feature.City}</p>
          {/* <div className={css.headerBtns}>
            <img src={sharePC} alt="share" />
            <img src={save} alt="save" />
          </div> */}
        </div>
        {/* <img src={avatar} alt="Person" className={css.avatar} /> */}
      </header>
      
      <img src={property.Feature.Link_Image[0]} alt="Land" className={css.detailsImage} />
      {/* <div className={css.navMobile}>
        <img
          src={backIcon}
          alt="back icon"
          onClick={() => navigate("/marketplace")}
        />
        <div className={css.navMobileItems}>
          <div>
            <img src={shareIcon} alt="Share" />
            <p>Share</p>
          </div>
          <div>
            <img src={heartMobile} alt="Heart" />
            <p>Like</p>
          </div>
        </div>
      </div> */}

      <section className={css.mosaic}>
        <img src={property.Feature.Link_Image[0]} alt="" />
        <div className={css.otherImages}>
          <img src={property.Feature.Link_Image[0]} alt="Land" />
          <img src={property.Feature.Link_Image[0]} alt="Land" />
          <img src={property.Feature.Link_Image[0]} alt="Land" />
          <img src={property.Feature.Link_Image[0]} alt="Land" />
        </div>
      </section>

      


      <div className={css.info}>
             
          <Aboutproperty
            id={property.ID_Property}
            image={property.Feature.Link_Image[0]}            
            value={property.Financial.Market_value_of_the_property}
            Tokenised={property.Financial.Percent_of_property_tokenized}
            PRY={property.Financial.Rental_yield}
            AvailablesNFT={property.Financial.Number_of_tokens_available}
            capital={property.Financial.Capital_payment_duration}            
            PIT={property.Financial.Passive_Income_per_token}
            address={property.Feature.Address}
            location={property.Feature.City}
            NFTPrice={property.Financial.Token_Price}
            amenities={property.Feature.Amenities}
            rooms={property.Feature.Rooms}
            guests={property.guests}
            // map={land.map}
            more={property.More}
            description={property.Feature.Description}
           
          />
        

        <div className={isScrolled ? css.buycontainer : ''}>
          <Buy
            id={property.ID_Property}
            image={property.Feature.Link_Image[0]}            
            value={property.Financial.Market_value_of_the_property}
            type={property.Feature.type}
            address={property.Feature.Address}
            location={property.Feature.City}
            PIT={property.Financial.Passive_Income_per_token}
            PRY={property.Financial.Rental_yield}
            tokenised={property.Financial.Percent_of_property_tokenized}
            NFTPrice={property.Financial.Token_Price}
            AvailablesNFT={property.Financial.Number_of_tokens_available}
            capital={property.Financial.Capital_payment_duration}
          />
        </div>
      </div>
    </div>
  ) : <Loading />
};

export default Index;
