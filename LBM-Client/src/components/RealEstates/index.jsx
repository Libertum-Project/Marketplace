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

  


//----------AGREGAR DOS PROPIEDADES FALSAS ---------------------- FAKE PROPERTIES -----------------------------

 const fakeProperty1 = {
  "ID_Property": 985,
  "ID_owner": 1,
  "ID_Financials": 1,
  "ID_Features": 1,
  "savedBy": null,
  "publishedBy": null,
  "investedBy": null,
  "Owner": {
    "ID_owner": 1,
    "Firstname": "John",
    "Surname": "Doe",
    "Address": "123 Main St",
    "City": "New York",
    "State": "NY",
    "Country": "USA",
    "Postal_Code": "12345",
    "Mail": "john@example.com",
    "Phone_number": "123-456-7890",
    "Code_area": "54",
    "Passport_ID": "AB123456",
    "Date_of_birth": "1990-01-01T00:00:00.000Z"
  },
  "Financial": {
    "ID_Financial": 1,
    "Market_value_of_the_property": 20000,
    "Investment_type": "Passive Income Only",
    "Percent_of_property_tokenized": 100,
    "Rental_yield": 6.5,
    "Number_of_tokens_available": 1000,
    "Passive_Income_per_token": 2,
    "Token_Price": 50,
    "Monthly_capital_repayment_amount": 0,
    "Mortgage": 30000
  },
  "Feature": {
    "ID_Feature": 1,
    "Type": "Entire Home",
    "Country": "USA",
    "City": "St Louis · MO 63128 · NY",
    "Address": "102 Cove Lane",
    "State": "NY",
    "Postal_Code": "MO 63128",
    "Description": "Come and stay in this superb duplex T2, in the heart of the historic center of Bordeaux. Spacious and bright, in a real Bordeaux building in exposed stone, you will enjoy all the harms of the city thanks to its ideal location. Close to many shops, bars and restaurants, you can    access the apartment by tram A and C and bus routes 27 and 44",
    "Square_foot": 1200,
    "Amenities": "Swimming pool, gym, parking",
    "Rooms": 2,
    "Occupancy_Status": "Vacant",
    "Link_Image": [
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      "https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
    ],
    "Link_Document": "http://example.com/document.pdf",
    "Current_Emission": "120.00",
    "Expected_Emission_Level": "100.00",
    "More": "Additional information"
  }
};

const fakeProperty2 = {
  "ID_Property": 789,
  "ID_owner": 1,
  "ID_Financials": 1,
  "ID_Features": 1,
  "savedBy": null,
  "publishedBy": null,
  "investedBy": null,
  "Owner": {
    "ID_owner": 1,
    "Firstname": "Niki",
    "Surname": "Doe",
    "Address": "123 Main St",
    "City": "New York",
    "State": "NY",
    "Country": "USA",
    "Postal_Code": "12345",
    "Mail": "john@example.com",
    "Phone_number": "123-456-7890",
    "Code_area": "54",
    "Passport_ID": "AB123456",
    "Date_of_birth": "1990-01-01T00:00:00.000Z"
  },
  "Financial": {
    "ID_Financial": 1,
    "Market_value_of_the_property": 1012960,
    "Investment_type": "Passive Income Only",
    "Percent_of_property_tokenized": 40,
    "Rental_yield": 3,
    "Number_of_tokens_available": 6400,
    "Passive_Income_per_token": 3,
    "Token_Price": 50,
    "Monthly_capital_repayment_amount": 20,
    "Capital_payment_duration": 10,
    "Mortgage": 30000.00
  },
  "Feature": {
    "ID_Feature": 1,
    "Type": "Apartment",
    "Country": "UK",
    "City": "Grays RM17 6NB, United Kingdom",
    "Address": "21 High St - 23 High St",
    "State": "NY",
    "Postal_Code": "67890",
    "Description": "The properties are mid-terraced traditional brick-built retail units. N° 21 trades as Hannahs Bakery and N° 23 as an H&T Pawnbrokers. Are of solid brick construction and sit beneath butterfly main roofs, with a central valley, served by replacement interlocking concrete roof tiles. Parapet front walls mask the main roof elevations from the roadside. Both are two storeys in height to include later rear additions of cavity brick/block construction.",
    "Square_foot": 1200,
    "Amenities": "kitchen, wifi",
    "Rooms": 2,
    "Occupancy_Status": "Vacant",
    "Link_Image": [
      "https://drive.google.com/uc?export=view&id=1gqCs1_iHbLcESR09t1YgDNt4ItTjmm6y",
      "https://drive.google.com/uc?export=view&id=1mywxUkorxzbZC6b_WHzS75m4F6rAcDBo",
      "https://drive.google.com/uc?export=view&id=1hdjoLNQGwvUXrNY8zkh9u62-xz1Imfun",
      "https://drive.google.com/uc?export=view&id=1J0pkS6r_EoTCcLkaHiv4SxJfGL1_1y1I",
      "https://drive.google.com/uc?export=view&id=1mywxUkorxzbZC6b_WHzS75m4F6rAcDBo" ],
    "Link_Document": "http://example.com/document.pdf",
    "Current_Emission": "120.00",
    "Expected_Emission_Level": "100.00",
    "More": "Are currently utilising a rear secure storage area which appears to be accessed from the shopping centre which sits to the immediate rear and now, effectively, adjoins the extended subject premises. There is additional production space to the first floor together with ancillary office, staff welfare and storage accommodation. The property benefits from internal, 5 person maximum, lift access from ground to first floor level. The front shop fit out is fairly typical with suspended ceilings and inset lighting. It is also served by air handling units providing both space heating and cooling. Further air handling units are located within the principle first floor accommodation. The various floor and wall coverings throughout are appropriate considering the premises' use. The rear commercial bakery is fully fitted out with uPVC lined walls and commercial floor coverings. Free standing ovens, commercial catering equipment, preparation tables and cold stores further serve the current bakery operation. The property is served by DDA compliant male/female WC's and basic kitchenette facilities. The ancillary accommodation serving the property is considered appropriate and fitted out accordingly with good natural light to the various work and office areas. The property appears to benefit from demised rear parking accessed again via the shopping centre service yard"
  }
};

const fakeProperties = [fakeProperty1, fakeProperty2];

const addFakeProperties = (properties) => {
  // Filtrar las propiedades falsas antes de agregarlas
  const filteredFakeProperties = fakeProperties.filter((property) => {
    // Aplicar los mismos filtros que se aplican a las propiedades reales
    const { rentalYield, location, financeType } = selectedFilters;
    if (
      (!rentalYield || (property.Financial.Rental_yield >= parseFloat(rentalYield.split("-")[0]) && property.Financial.Rental_yield <= parseFloat(rentalYield.split("-")[1]))) &&
      (!location || property.Feature.Country === location) &&
      (!financeType || property.Financial.Investment_type === financeType)
    ) {
      return true;
    }
    return false;
  });

  return [...filteredFakeProperties, ...properties];
};

//-----------------''AGREGAR DOS PROPIEDADES FALSAS ---------------------- FAKE PROPERTIES -----------------------------





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



<section>
        {
        
        // filteredProperties.length

        //    ? filteredProperties.map((property) => (

        fakeProperties.length || filteredProperties.length ? (
          addFakeProperties(filteredProperties).length ? (
            addFakeProperties(filteredProperties).map((property) => (

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
        ) : (
          <div className={css.error}>
            <p>
              Sorry, it seems that there are no properties available with these
              requirements. Please try again with different requirements.
            </p>
            <button onClick={handleRemoveFilters}>See all properties</button>
          </div>
        )}
      </section>
    </div>
  ) : (
    <Loading />
  );
};

export default index;
