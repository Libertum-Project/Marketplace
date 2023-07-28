import { useDispatch, useSelector } from 'react-redux';
import { fetchFilteredProperties, fetchAllProperties } from '../../../redux/features/propertySlice';
import Classes from "../MarketPlace/Classes/Classes.jsx";
import ModalFilter from "../MarketPlace/ModalFilter/ModalFilter.jsx";
import css from "./index.module.scss";
import db from "../RealEstates/fakedb/db.json";
import CardPreview from "./CardPreview";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import Loading from "../Loading/Loading.jsx";
import { FiRefreshCcw } from 'react-icons/fi'

const index = () => {
  const navigate = useNavigate();
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();
  // const dispatch = useDispatch();
  // const filteredProperties = useSelector(
  //   (state) => state.property.filteredProperties
  // );
  // console.log(filteredProperties) 

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

//  useEffect(() => {
//     const filters = 'financeType=&rentalYield=5-10&location=';
//     dispatch(fetchFilteredProperties(filters));
//   }, [dispatch]);

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
  // Obtener todas las propiedades inicialmente
  dispatch(fetchAllProperties());
}, [dispatch]);

useEffect(() => {
  // Use effect para filtrado
  const { rentalYield, location, financeType } = selectedFilters;
  const filters = `financeType=${financeType}&rentalYield=${rentalYield}&location=${location}`;

  //Se modifica y obtiene las propiedades filtradas cuando cambie alguno de los filtros
  dispatch(fetchFilteredProperties(filters));
}, [dispatch, selectedFilters]);

  
  return !isLoading && isAuthenticated ? (
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
        {/* Agrega otras opciones de ubicación */}
      </select>
        <p className={css.divider}> | </p>
{/* Filtro de Finance Type */}
      <select value={selectedFilters.financeType} onChange={(e) => handleFilterChange("financeType", e.target.value)}>
        <option hidden value="">Finance Type</option>
        <option value="Passive Income Only">Passive Income Only</option>
        <option value="Capital Rep. + Passive Income">Capital Rep. + Passive Income</option>       
      </select>

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

       {/* Botón para remover los filtros */}
       <button onClick={handleRemoveFilters} className={css.clean}><FiRefreshCcw /></button>
  
        </div>
      </div>

      {/* <section>
        {db.length
          ? db.map((land) => (
              <CardPreview
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
      </section> */}

<section>
        {filteredProperties.length
          ? filteredProperties.map((property) => (
              <CardPreview
                key={property.ID_Property}
                // key={property.number}
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
              />
            ))
          : 
          <div className={css.error}>
          <p> Sorry, it seems that there are no properties available with these requirements. Please try again with different requirements.</p>
          <button onClick={handleRemoveFilters}>See all properties</button>
          </div>
          }
      </section>
    </div>
  ) : (
    <Loading />
  );
};

export default index;
