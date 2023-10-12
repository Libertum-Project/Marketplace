import { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import './Preview.scss'
import Buy from '../RealEstateDetail/Buy';
import Aboutproperty from '../RealEstateDetail/Aboutproperty';
import Loading from "../Loading/Loading";




const PreviewProperty = () => {
  const { isLoading } = useAuth0();

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
          onClick={(event) => openModal(0, event)}
        />
        <div className={css.otherImages}>
          {property.Feature.Link_Image.slice(1).map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index}`}
              onClick={() => openModal(index)}
            />
          ))}
        </div>
      </section>
       
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
  ): <Loading />
}; 

export default PreviewProperty; 
