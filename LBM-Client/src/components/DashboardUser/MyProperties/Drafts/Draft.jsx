import './Draft.scss'
import Card from './Card';

const Draft = ({draft}) => {

  return(
    <div className='draftContainer'>
      <h2 className='title'>Property Drafts</h2>
      <div className='cardGrid'>
        {draft.map((property, index) => {
          console.log(property)
          return(

              <Card
                key = { index }
                id = { property.ID_PropertyDraft}
                address = { property.FeatureDraft.Address }
                city = { property.FeatureDraft.City }
                country = { property.FeatureDraft.Country }
              />
          )
 })}
      </div>
      
    </div>
  )
}; 

export default Draft; 
