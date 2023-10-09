import "./Draft.scss";
import Card from "./Card";

const Draft = ({ draft }) => {
  if (draft?.length === 0) {
    return null;
  }

  return (
    <div className="draftContainer">
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Draft;
