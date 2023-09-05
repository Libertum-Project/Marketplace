import css from "./Userproperties.module.scss";
import Card from "./Card";


const SavedProperties = ({ saved }) => {



  return (
    <div className={css.header}>
      <div className={css.cards}>
        {saved.length ? (
          <div className={css.cardGrid}>
    {saved.map((property, index) => {
      console.log(property); 
      console.log(property.Financial.Market_value_of_the_property)
      return (
    <Card
      image={property.Feature.Link_Image[0]}
      key={index}
      id={property.ID_Property}
      number={property.ID_Property}
      price={property.Financial.Market_value_of_the_property}
      review={property.Feature.Description} 
      totalReviews={property.Feature.Expected_Emission_Level} 
      amenities={property.Feature.Amenities}
      rooms={property.Feature.Rooms}
      guests={property.Feature.Square_foot} 
      type={property.Feature.Type}
      address={property.Feature.Address} 
      location={`${property.Feature.City}, ${property.Feature.Country}`}
      PIT={property.Financial.Percent_of_property_tokenized}
      PRY={property.Financial.Rental_yield}
      tokenised={property.Financial.Investment_type}
      NFTPrice={property.Financial.Market_value_of_the_property}
      AvailablesNFT={property.Financial.Percent_of_property_tokenized}
      capital={property.Financial.Market_value_of_the_property}
      littledescription={property.Feature.More} 
      
                />
                );
              })}
          </div>
        ) : (
          <p>No saved properties available.</p>
        )}
      </div>
    </div>
  );
};

export default SavedProperties;