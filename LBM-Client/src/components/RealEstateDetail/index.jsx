import css from "./index.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from 'react-redux';
import Aboutproperty from "./Aboutproperty";
import Buy from "./Buy";
import Loading from "../Loading/Loading";
import SaveProperty from '../SaveProperty/SaveProperty'
import { useEffect, useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Index = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const properties = useSelector((state) => state.property.filteredProperties);
  
  // Convertir el valor de 'id' a un número
  const propertyId = parseInt(id);

    // Find the property that matches the propertyId
  const property = properties.find((property) => property.ID_Property === propertyId);

  console.log("proerty" + property.Feature.Address)

  const { isLoading } = useAuth0();

  //--------------------   CARROUSEL  -------------------
  const [carrouselOpen, setCarrouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openCarrousel = (index, event) => {
    setCurrentImageIndex(index);
    setCarrouselOpen(true);    
  };

  const closeCarrousel = () => {
    setCarrouselOpen(false);
  };

  const handleCloseCarrousel = (e) => {
    if (e.target === e.currentTarget) {
      closeCarrousel(); 
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return !isLoading ? (
    <div className={css.details}>
      <header className={css.header}>
        <h2>{property.Feature.Address} <SaveProperty propertyId={property.ID_Property} /> </h2>
        <div className={css.headerText}>
          <p>{property.Feature.City}</p>
        </div>
      </header>

      <img src={property.Feature.Link_Image[0]} alt="Land" className={css.detailsImage} onClick={(event) => openModal(0, event)}/>

      <section className={css.mosaic}>
        <img
          src={property.Feature.Link_Image[0]}
          alt="property image"
          onClick={(event) => openCarrousel(0, event)}
        />
        <div className={css.otherImages}>

          {property.Feature.Link_Image.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => openCarrousel(index)}
            />
          ))}
        </div>
      </section>
      {carrouselOpen && (
          <div className={css.modal} onClick={handleCloseCarrousel}>
            <div className={css.modalContent}>

              <Slider {...settings} initialSlide={currentImageIndex}>
                {property.Feature.Link_Image.map((image, index) => (
                  <div key={index} className={css.slideContainer}>
                    <span className={css.close} onClick={closeCarrousel}>
                    &times;
                    </span>
                    <img src={image} alt={`Image ${index}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        )}
       
      <div className={css.contenedor}>
             
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
            map={property.Feature.Map}
            more={property.Feature.More}
            description={property.Feature.Description}
            Square_foot={property.Feature.Square_foot}
            type = {property.Feature.Type}
           
          />
        
          <Buy
            id={property.ID_Property}
            number={property.ID_Property}
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
            Square_foot={property.Feature.Square_foot}
            amenities={property.Feature.Amenities}
            rooms={property.Feature.Rooms}         
          />


      </div>
    </div>
  ) : <Loading />
};

export default Index;
