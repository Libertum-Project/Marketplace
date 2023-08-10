import React, { useState, useEffect } from "react";
import { useLocation, Link, useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import db from "../../RealEstates/fakedb/db.json";
import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../Loading/Loading";
import css from "./BuyProperty.module.css"
import ConfirmTokens from "./ConfirmTokens.jsx";
import ConfirmInvestment from "./ConfirmInvestment.jsx";
import PaymentMethod from "./PaymentMethod.jsx"

const BuyProperty = () => {
  const { id } = useParams();
  const properties = useSelector((state) => state.property.filteredProperties);

  // Convertir el valor de 'id' a un número
  const propertyId = parseInt(id);

  // // Buscar la propiedad que coincide con el ID_Property DESCOMENTAR CUANDO BORRE LAS PROPIEDADES FALSAS Y BORRAR TODO EL APARTADO FAKE PROPERTIES PARA Q SOLO TOME DE LA BDD
  // const property = properties.find((property) => property.ID_Property === propertyId);



// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

  // ------------------- FAKE PROPERTIES ----------------------

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
      "Map":  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.103122417797!2d-90.2111142248339!3d38.7842702533725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df4f23d1cc64ad%3A0x37845d3643065482!2sCove%20Ln%2C%20Spanish%20Lake%2C%20MO%2063138%2C%20EE.%20UU.!5e0!3m2!1ses-419!2sar!4v1686662781964!5m2!1ses-419!2sar",
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
      "Map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.952346587928!2d0.3231098!3d51.477388999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8b70156422e1b%3A0x4589b3bd45b5cfda!2s21%20High%20St%2C%20Grays%20RM17%206NB%2C%20Reino%20Unido!5e0!3m2!1ses-419!2sar!4v1686767840529!5m2!1ses-419!2sa" ,
      "More": "Are currently utilising a rear secure storage area which appears to be accessed from the shopping centre which sits to the immediate rear and now, effectively, adjoins the extended subject premises. There is additional production space to the first floor together with ancillary office, staff welfare and storage accommodation. The property benefits from internal, 5 person maximum, lift access from ground to first floor level. The front shop fit out is fairly typical with suspended ceilings and inset lighting. It is also served by air handling units providing both space heating and cooling. Further air handling units are located within the principle first floor accommodation. The various floor and wall coverings throughout are appropriate considering the premises' use. The rear commercial bakery is fully fitted out with uPVC lined walls and commercial floor coverings. Free standing ovens, commercial catering equipment, preparation tables and cold stores further serve the current bakery operation. The property is served by DDA compliant male/female WC's and basic kitchenette facilities. The ancillary accommodation serving the property is considered appropriate and fitted out accordingly with good natural light to the various work and office areas. The property appears to benefit from demised rear parking accessed again via the shopping centre service yard"
    }
  };



  // Combine the fetched properties and fake properties into a single array
  const fakeProperties = [fakeProperty1, fakeProperty2];
  const allProperties = [...properties, ...fakeProperties];

  // Find the property that matches the propertyId
  const property = propertyId && allProperties.find((property) => property.ID_Property === propertyId);
  console.log(property)
 
  console.log('propertyId:', propertyId);
  console.log('allProperties:', allProperties);

// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------

  const [rangeValue, setRangeValue] = useState(40);

  const [formData, setFormData] = useState({
    tokensData: {},
    paymentMethodData: {},
  });

  const [currentForm, setCurrentForm] = useState(1);

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


  const handleRangeChange = (event) => {
    setRangeValue(event.target.value);
  };

  const priceNFT = parseInt(property.NFTPrice);
  const totalPrice = rangeValue * priceNFT;
  const availables = property.AvailablesNFT;

  // const handlePaymentMethodChange = (event) => {
  //   setPaymentMethod(event.target.value);
  // };

  // const handleConnectWallet = () => {
  //   setIsConnected(true);
  // };

  const handleSubmit = (data) => {
    // Actualizar el estado con la información del formulario actual
    if (currentForm === 1) {
      setFormData((prevData) => ({
        ...prevData,
        tokensData: data,
      }));
    } else if (currentForm === 2) {
      setFormData((prevData) => ({
        ...prevData,
        paymentMethodData: data,
      }));
    }

    // Avanzar al siguiente formulario
    setCurrentForm(currentForm + 1);
    console.log(data);
  };

  


  

  const handleBack = () => {
    // Retroceder al formulario anterior
    setCurrentForm(currentForm - 1);
  };

  const handleNext = () => {
    // Avanzar al siguiente formulario
    setCurrentForm(currentForm + 1);
  };


  return !isLoading && isAuthenticated ? (
    <div className={css.formContainer}>
    {currentForm === 1 && (
      <ConfirmTokens handleSubmit={handleSubmit} onNext={handleNext}   
      id={property.ID_Property}
      value={property.Financial.Market_value_of_the_property}
      Tokenised={property.Financial.Percent_of_property_tokenized}      
      AvailablesNFT={property.Financial.Number_of_tokens_available} 
      address={property.Feature.Address}
      location={property.Feature.City}
      NFTPrice={property.Financial.Token_Price}

      />
    )}
    {currentForm === 2 && (
      <PaymentMethod
        handleSubmit={handleSubmit}
        onBack={handleBack}
        onNext={handleNext}

        id={property.ID_Property}
        address={property.Feature.Address}
        location={property.Feature.City}
        

      />
    )}
    {currentForm === 3 && (
      <ConfirmInvestment handleSubmit={handleSubmit} onBack={handleBack} formData={formData}
      id={property.ID_Property}               
      value={property.Financial.Market_value_of_the_property}      
      address={property.Feature.Address}
      location={property.Feature.City}
      NFTPrice={property.Financial.Token_Price}
      
      />
    )}
  </div>

  ) : (
    <Loading />
  );
};

export default BuyProperty;
