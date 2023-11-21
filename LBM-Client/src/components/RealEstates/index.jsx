import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredProperties, fetchAllProperties } from '../../../redux/features/propertySlice';
import Classes from "../MarketPlace/Classes/Classes.jsx";
import css from "./index.module.scss";
import CardPreview from "./CardPreview";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import { FiRefreshCcw } from 'react-icons/fi';
import video from '../../../public/bg.mp4'

const index = () => {
  const navigate = useNavigate();
  const { isLoading } = useAuth0();

  const [rentalYield, setRentalYield] = useState(0); // Estado para almacenar el valor del filtrado

  const handleRentalYieldChange = (event) => {
    setRentalYield(Number(event.target.value));
  };

const dispatch = useDispatch();
const filteredProperties = useSelector(
  (state) => state.property.filteredProperties
);
const [selectedFilters, setSelectedFilters] = useState({
  rentalYield: "",
  location: "",
  financeType: "",
});

// Función para manejar los cambios en los filtros
const handleFilterChange = (filterType, filterValue) => {
  setSelectedFilters((prevFilters) => ({
    ...prevFilters,
    [filterType]: filterValue,
  }));
};

// Función para remover los filtros y obtener todas las propiedades
const handleRemoveFilters = () => {
  setSelectedFilters({
    rentalYield: "",
    location: "",
    financeType: "",
  });
};

useEffect(() => {
  dispatch(fetchAllProperties());
}, [dispatch]);

useEffect(() => {
  // Use effect para filtrado
  const { rentalYield, location, financeType } = selectedFilters;
  const filters = `financeType=${financeType}&rentalYield=${rentalYield}&location=${location}`;

  //Se modifica y obtiene las propiedades filtradas cuando cambie alguno de los filtros
  dispatch(fetchFilteredProperties(filters));
}, [dispatch, selectedFilters]);


  return !isLoading ? (
    <div className={css.container}>
      <Classes />
      <div className={css.filtersContainer}>       
        <div className={css.filters}>

{/* Filtro de Rental Yield */}
        <select value={selectedFilters.rentalYield} onChange={(e) => handleFilterChange("rentalYield", e.target.value)}>
        <option hidden value="">Rental Yield </option>
        <option value="0-5">Up to 5%</option>
        <option value="5-10">% 5 al 10</option>
        <option value="10-25">% 10 al 25</option>
        
      </select>
        <p className={css.divider}> | </p>
{/* Filtro de Location */}
      <select value={selectedFilters.location} onChange={(e) => handleFilterChange("location", e.target.value)}>
        <option hidden value="">Location</option>

        <option value="Arg">Argentina</option>
        <option value="Br">Brazil</option>
        <option value="Col">Colombia</option>
        <option value="Ire">Ireland</option>
        <option value="It">Italy</option>
        <option value="Sp">Spain</option>
        <option value="USA">United States of America</option>
        <option value="UK">United Kingdom</option>        
      </select>
        <p className={css.divider}> | </p>
{/* Filtro de Finance Type */}
      <select value={selectedFilters.financeType} onChange={(e) => handleFilterChange("financeType", e.target.value)}>
        <option hidden value="">Finance Type</option>
        <option value="Passive Income Only">Passive Income Only</option>
        <option value="Capital Rep. + Passive Income">Capital Rep. + Passive Income</option>       
      </select>

          {/* <div className={css.filterbuttons}>
            <button> 
              all 
            </button> |
            <button> 
              New 
            </button>|
            <button> 
              Upcoming 
            </button>
          </div> */}

       {/* Botón para remover los filtros */}
       <button onClick={handleRemoveFilters} className={css.clean}><FiRefreshCcw /></button>
  
        </div>
      </div>



<section>

{
  filteredProperties.length ? (
    filteredProperties.map((property) => (
      <CardPreview
        key={property.ID_Property}
        id={property.ID_Property}
        image={property.Feature.Link_Image[0]}
        image2={property.Feature.Link_Image[1]}
        image3={property.Feature.Link_Image[2]}
        image4={property.Feature.Link_Image[3]}
        image5={property.Feature.Link_Image[4]}
        number={property.Feature.ID_Feature}
        price={property.Financial.Market_value_of_the_property}
        review={property.review}
        totalReviews={property.totalreviews}
        amenities={property.Feature.Amenities}
        rooms={property.Feature.Rooms}
        guests={property.guests}
        type={property.Feature.type}
        address={property.Feature.Address}
        location={property.Feature.City}
        PIT={property.Financial.Passive_Income_per_token}
        PRY={property.Financial.Rental_yield}
        tokenised={property.Financial.Percent_of_property_tokenized}
        NFTPrice={property.Financial.Token_Price}
        AvailablesNFT={property.Financial.Number_of_tokens_available}
        capital={property.Financial.Capital_payment_duration}
        country = { property.Feature.Country}
      />
    ))
  ) : (
    <div className={css.error}>
      <p>
        Sorry, it seems that there are no properties available with these
        requirements. Please try again with different requirements.
      </p>
      <button onClick={handleRemoveFilters}>See all properties</button>
    </div>
  )
}

      </section>
    </div>
  ) : (
    <Loading />
  );
};

export default index;
