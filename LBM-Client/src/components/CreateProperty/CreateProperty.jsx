import css from "./CreateProperty.module.css";
import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  createProperty,
  createDraftProperty,
  editDraftProperty,
} from "../../../redux/features/propertySlice";
import { fetchCurrentUser } from "../../../redux/features/userSlice";
import Loading from "../Loading/Loading.jsx";
import OwnerForm from "./OwnerForm";
import PropertyForm from "./PropertyForm";
import FinancialForm from "./FinancialForm";
import Review from "./Review";
import SuccessMessage from "../../smartContracts/components/MessageBox/SuccessMessage";

const CreateProperty = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [name, surname] = currentUser.editableName.split(" ");
  const [showPropertyCreatedMessage, setShowPropertyCreatedMessage] =
    useState(false);
  const [showDraftCreatedMessage, setShowDraftCreatedMessage] = useState(false);
  const dispatch = useDispatch();
  const status = useSelector((state) => state.property.status);
  const [currentForm, setCurrentForm] = useState(1);
  const [images, setImages] = useState([]);
  const { id } = useParams();
  const selectedDraft = currentUser.draftProperties.find(
    (draft) => draft.ID_PropertyDraft == id
  );

  const propertyId = selectedDraft.ID_PropertyDraft;

  const [property, setProperty] = useState({
    ownerData: {
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
    },
    featureData: {
      Type: "",
      Country: "",
      City: "",
      Address: "",
      State: "",
      Postal_Code: "",
      Description: "",
      Square_foot: null,
      Amenities: [],
      Rooms: null,
      Occupancy_Status: "",
      Link_Image: images,
      Link_Document: "http://example.com/document.pdf",
      More: "",
    },
    financialData: {
      Market_value_of_the_property: null,
      Mortgage: 0,
      Investment_type: null,
      Percent_of_property_tokenized: null,
      Rental_yield: null,
      Number_of_tokens_available: null,
      Passive_Income_per_token: null,
      Token_Price: null,
      Monthly_capital_repayment_amount: 0,
      Capital_payment_duration: 0,
    },
  });

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

  const updateOwnerData = (field, value) => {
    setProperty({
      ...property,
      ownerData: {
        ...property.ownerData,
        [field]: value,
      },
    });
  };

  const updateFeatureData = (field, value) => {
    setProperty({
      ...property,
      featureData: {
        ...property.featureData,
        [field]: value,
      },
    });
  };

  const updateFinancialData = (field, value) => {
    setProperty({
      ...property,
      financialData: {
        ...property.financialData,
        [field]: value,
      },
    });

    console.log("Updated Financial Data:", property.financialData);
    console.log("Updated Property:", property);
  };

  const handleSubmit = () => {
    dispatch(createProperty(property));
    setShowPropertyCreatedMessage(true);
  };

  const createDraft = () => {
    !selectedDraft
      ? dispatch(createDraftProperty(property))
      : dispatch(editDraftProperty({ property, propertyId }));
    dispatch(
      fetchCurrentUser({
        email: currentUser.email,
        name: currentUser.name,
      })
    );
    setShowDraftCreatedMessage(true);
  };

  const handleNext = () => {
    setCurrentForm((prevForm) => prevForm + 1);
  };

  const handleBack = () => {
    setCurrentForm((prevForm) => prevForm - 1);
  };

  useEffect(() => {
    const updateStates = () => {
      if (selectedDraft) {
        setProperty({
          ...property,
          featureData: {
            Type: selectedDraft.FeatureDraft.Type,
            Country: selectedDraft.FeatureDraft.Country,
            City: selectedDraft.FeatureDraft.City,
            Address: selectedDraft.FeatureDraft.Address,
            State: selectedDraft.FeatureDraft.State,
            Postal_Code: selectedDraft.FeatureDraft.Postal_Code,
            Description: selectedDraft.FeatureDraft.Description,
            Square_foot: selectedDraft.FeatureDraft.Square_foot,
            Amenities: selectedDraft.FeatureDraft.Amenities,
            Rooms: selectedDraft.FeatureDraft.Rooms,
            Occupancy_Status: selectedDraft.FeatureDraft.Occupancy_Status,
            Link_Image: selectedDraft.FeatureDraft.Link_Image,
            Link_Document: selectedDraft.FeatureDraft.Link_Document,
            More: selectedDraft.FeatureDraft.More,
          },
          financialData: {
            Market_value_of_the_property:
              selectedDraft.FinancialDraft.Market_value_of_the_property,
            Mortgage: selectedDraft.FinancialDraft.Mortgage,
            Investment_type: selectedDraft.FinancialDraft.Investment_type,
            Percent_of_property_tokenized:
              selectedDraft.FinancialDraft.Percent_of_property_tokenized,
            Rental_yield: selectedDraft.FinancialDraft.Rental_yield,
            Number_of_tokens_available:
              selectedDraft.FinancialDraft.Number_of_tokens_available,
            Passive_Income_per_token:
              selectedDraft.FinancialDraft.Passive_Income_per_token,
            Token_Price: selectedDraft.FinancialDraft.Token_Price,
            Monthly_capital_repayment_amount:
              selectedDraft.FinancialDraft.Monthly_capital_repayment_amount,
            Capital_payment_duration:
              selectedDraft.FinancialDraft.Capital_payment_duration,
          },
        });
      }
    };

    updateStates();
  }, []);

  return !isLoading && isAuthenticated && admin ? (
    <>
      {showPropertyCreatedMessage ? (
        <SuccessMessage
          setShowSuccessMessage={setShowPropertyCreatedMessage}
          messagge="Congratulations! Your property has been successfully uploaded."
          textBtn="Continue"
          redirectURL="/marketplace"
        />
      ) : null}
      {showDraftCreatedMessage ? (
        <SuccessMessage
          setShowSuccessMessage={setShowDraftCreatedMessage}
          messagge="Draft completed! Your property details are ready for future submission."
          textBtn="Continue"
          redirectURL="/mydashboard"
        />
      ) : null}
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
            onNext={handleNext}
            onBack={handleBack}
            onChange={updateFinancialData}
            propertyData={property}
          />
        )}
        {currentForm === 4 && (
          <Review
            handleSubmit={handleSubmit}
            onBack={handleBack}
            propertyData={property}
            createDraft={createDraft}
            images={images}
          />
        )}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default CreateProperty;
