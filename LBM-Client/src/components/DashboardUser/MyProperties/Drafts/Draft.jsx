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
                id = { property.ID_Property}
                address = { property.Feature.Address }
                city = { property.Feature.City }
                country = { property.Feature.Country }
              />
          )
 })}
      </div>
      
    </div>
  )
}; 

export default Draft; 
