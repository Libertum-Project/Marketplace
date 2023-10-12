import { useAuth0 } from "@auth0/auth0-react";
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import css from '../../components/RealEstateDetail/index.module.scss'
import Buy from '../RealEstateDetail/Buy';
import Aboutproperty from '../RealEstateDetail/Aboutproperty';
import Loading from "../Loading/Loading";
import SaveProperty from '../SaveProperty/SaveProperty'

const PreviewProperty = () => {
  const { isLoading } = useAuth0();
  const { id } = useParams(); 
  const propertyId = parseInt(id);

  const draftProperties = useSelector((state) => state.user.currentUser.draftProperties)
  const matchingDraft = draftProperties.find(draft => draft.ID_PropertyDraft === propertyId)

  return !isLoading ? (
    
    <div className={css.details}>
      <header className={css.header}>
        <h2>{matchingDraft.FeatureDraft.Address} <SaveProperty  /> </h2>
        <div className={css.headerText}>
          <p>{matchingDraft.FeatureDraft.City}</p>
        </div>
      </header>

      <img src={matchingDraft.FeatureDraft.Link_Image[0]} alt="Land" className={css.detailsImage} onClick={(event) => openModal(0, event)}/>

      <section className={css.mosaic}>
        <img
          src={matchingDraft.FeatureDraft.Link_Image[0]}
          alt="property image"
          onClick={(event) => openModal(0, event)}
        />
        <div className={css.otherImages}>
          {matchingDraft.FeatureDraft?.Link_Image.length >= 2 ? (
            matchingDraft.FeatureDraft?.Link_Image.slice(1, 5).map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                onClick={() => openModal(index + 1)}
              />
            ))
          ) : (
            [...Array(4)].map((_, index) => (
              <div key={index} className={`${css.placeholder} ${css.placeholderImage}`}></div>
            ))
          )}
        </div>


      </section>
       
      <div className={css.contenedor}>
             
          <Aboutproperty
            id={matchingDraft.FeatureDraft.ID_FeatureDraft}
            image={matchingDraft.FeatureDraft.Link_Image[0]}  
            address={matchingDraft.FeatureDraft.Address}
            location={matchingDraft.FeatureDraft.City}   
            more={matchingDraft.FeatureDraft.More}
            description={matchingDraft.FeatureDraft.Description}
            amenities={matchingDraft.FeatureDraft.Amenities}
            rooms={matchingDraft.FeatureDraft.Rooms}
            Square_foot={matchingDraft.FeatureDraft.Square_foot}
            type = {matchingDraft.FeatureDraft.Type}

            value={matchingDraft.FinancialDraft.Market_value_of_the_property}
            Tokenised={matchingDraft.FinancialDraft.Percent_of_property_tokenized}
            PRY={matchingDraft.FinancialDraft.Rental_yield}
            AvailablesNFT={matchingDraft.FinancialDraft.Number_of_tokens_available}
            capital={matchingDraft.FinancialDraft.Capital_payment_duration}            
            PIT={matchingDraft.FinancialDraft.Passive_Income_per_token}
            NFTPrice={matchingDraft.FinancialDraft.Token_Price}
            // guests={property.guests}
            // map={property.Feature.Map}            
           
          />
        
          <Buy
            id={matchingDraft.FeatureDraft.ID_FeatureDraft}
            // number={property.ID_Property}
            image={matchingDraft.FeatureDraft.Link_Image[0]}  
            type = {matchingDraft.FeatureDraft.Type}
            address={matchingDraft.FeatureDraft.Address}
            location={matchingDraft.FeatureDraft.City}   
            amenities={matchingDraft.FeatureDraft.Amenities}
            rooms={matchingDraft.FeatureDraft.Rooms}
            Square_foot={matchingDraft.FeatureDraft.Square_foot}
            value={matchingDraft.FinancialDraft.Market_value_of_the_property}
            PRY={matchingDraft.FinancialDraft.Rental_yield}
            AvailablesNFT={matchingDraft.FinancialDraft.Number_of_tokens_available}
            capital={matchingDraft.FinancialDraft.Capital_payment_duration}            
            PIT={matchingDraft.FinancialDraft.Passive_Income_per_token}
            NFTPrice={matchingDraft.FinancialDraft.Token_Price}
            tokenised={matchingDraft.FinancialDraft.Percent_of_property_tokenized}



          />


      </div>
    </div>
  ): <Loading />
}; 

export default PreviewProperty; 
