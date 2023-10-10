import { useState } from "react";
import "./Draft.scss";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import { deleteDraftProperty } from "../../../../../redux/features/propertySlice";
import { fetchCurrentUser } from "../../../../../redux/features/userSlice";
import LoadingBtn from "../../../../smartContracts/components/LoadingBtn";

const Draft = ({ draft }) => {
  if (draft?.length === 0) {
    return null;
  }

  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const handleDelete = async (id) => {
    const propertyId = id;
    await dispatch(deleteDraftProperty({ propertyId }));

    setIsLoading(true);

    await dispatch(
      fetchCurrentUser({
        email: currentUser.email,
        name: currentUser.name,
      })
    );

    setIsLoading(false);
  };

  return (
    <div className="draftContainer">
      {isLoading ? <LoadingBtn /> : null}
      <h2 className="title">Property Drafts</h2>
      <div className="cardGrid">
        {draft.map((property, index) => {
          return (
            <Card
              key={property.ID_PropertyDraft}
              id={property.ID_PropertyDraft}
              address={property.FeatureDraft.Address}
              city={property.FeatureDraft.City}
              country={property.FeatureDraft.Country}
              handleDelete={() => {
                handleDelete(property.ID_PropertyDraft);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Draft;
