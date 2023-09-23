import css from "./CreateProperty.module.css";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createProperty } from "../../../redux/features/propertySlice";
import Loading from "../Loading/Loading.jsx";
import OwnerForm from "./OwnerForm";
import PropertyForm from "./PropertyForm";
import FinancialForm from "./FinancialForm";

const CreateProperty = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [name, surname] = currentUser.editableName.split(" ");
  const dispatch = useDispatch();
  const status = useSelector((state) => state.property.status);
  const [currentForm, setCurrentForm] = useState(1);
  const [images, setImages] = useState([]);
  const [ownerData, setOwnerData] = useState({
    UserID: currentUser.ID_user,
    Firstname: name,
    Surname: currentUser.lastName,
    Address: currentUser.address,
    City: currentUser.city,
    State: currentUser.state,
    Country: currentUser.country,
    Postal_Code: currentUser.postalCode,
    Mail: currentUser.email,
    Phone_number: currentUser.phoneNumber,
    Code_area: currentUser.codeArea,
    Passport_ID: currentUser.passportId,
    Date_of_birth: currentUser.dateOfBirth,
  });

  const [featureData, setFeatureData] = useState({
    Type: "",
    Country: "",
    City: "",
    Address: "",
    State: "",
    Postal_Code: "",
    Description: "",
    Square_foot: "",
    Amenities: [],
    Rooms: "",
    Occupancy_Status: "",
    Link_Image: images,
    Link_Document: "http://example.com/document.pdf",
    More: "",
  });

  const [financialData, setFinancialData] = useState({
    Market_value_of_the_property: "",
    Mortgage: "",
    Investment_type: "",
    Percent_of_property_tokenized: "",
    Rental_yield: "",
    Number_of_tokens_available: "",
    Passive_Income_per_token: "",
    Token_Price: "",
    Monthly_capital_repayment_amount: "",
    Capital_payment_duration: "",
  });

  const [property, setProperty] = useState({
    ownerData,
    featureData,
    financialData,
  });

  const updateOwnerData = (field, value) => {
    setOwnerData({
      ...ownerData,
      [field]: value,
    });

    setProperty({
      ...property,
      ownerData: {
        ...ownerData,
        [field]: value,
      },
    });
  };

  const updateFeatureData = (field, value) => {
    setFeatureData({
      ...featureData,
      [field]: value,
    });

    setProperty({
      ...property,
      featureData: {
        ...featureData,
        [field]: value,
      },
    });
  };

  const updateFinancialData = (field, value) => {
    setFinancialData({
      ...financialData,
      [field]: value,
    });

    setProperty({
      ...property,
      financialData: {
        ...financialData,
        [field]: value,
      },
    });
  };

  const navigate = useNavigate();
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  let admin = null;

  if (user?.sub === import.meta.env.VITE_ADMIN_DEV1)
    admin = import.meta.env.VITE_ADMIN_DEV1;
  if (user?.sub === import.meta.env.VITE_ADMIN_DEV2)
    admin = import.meta.env.VITE_ADMIN_DEV2;
  if (user?.sub === import.meta.env.VITE_ADMIN_ALAN)
    admin = import.meta.env.VITE_ADMIN_ALAN;
  if (user?.sub === import.meta.env.VITE_ADMIN_GABRIEL)
    admin = import.meta.env.VITE_ADMIN_GABRIEL;
  if (user?.sub === import.meta.env.VITE_ADMIN_JAVVAD)
    admin = import.meta.env.VITE_ADMIN_JAVVAD;

  const handleLogin = () => {
    const redirectUri = `${window.location.origin}/marketplace/`;
    loginWithRedirect({
      redirectUri: redirectUri,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || !admin) {
        handleLogin();
      }
    }
  }, [navigate, isAuthenticated, isLoading, admin]);

  const handleSubmit = async () => {
    dispatch(createProperty(property));
    if (status === "succeeded") {
      alert("Request sent successfully!");
      navigate("/marketplace/");
    } else if (status === "failed") {
      alert("Error sending the request.");
    }
  };

  const handleNext = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleBack = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  return !isLoading && isAuthenticated && admin ? (
    <div className={css.formContainer}>
      {currentForm === 1 && (
        <OwnerForm
          handleSubmit={handleSubmit}
          onNext={handleNext}
          onChange={updateOwnerData}
          propertyData={property}
        />
      )}
      {currentForm === 2 && (
        <PropertyForm
          handleSubmit={handleSubmit}
          onBack={handleBack}
          onNext={handleNext}
          onChange={updateFeatureData}
          propertyData={property}
          setImages={setImages}
          images={images}
        />
      )}
      {currentForm === 3 && (
        <FinancialForm
          handleSubmit={handleSubmit}
          onBack={handleBack}
          onChange={updateFinancialData}
          propertyData={property}
        />
      )}
    </div>
  ) : (
    <Loading />
  );
};

export default CreateProperty;
