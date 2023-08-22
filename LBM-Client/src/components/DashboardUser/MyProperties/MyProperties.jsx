import Investments from "../MyInvestments/UsersTable/Table";
import Frame3 from "./Frame3/Frame3";
import Properties from "./UsersTable/Table";
import css from "./MyProperties.module.scss";
import { Link } from "react-router-dom";

const MyProperties = ({name, transactions, investments, publishedProperties, email}) => {

  console.log(publishedProperties)
  
  if (publishedProperties.length === 0) {
    return (
      <div className={css.container}>
          <div>
            <div className={css.alertNoInvestment}>
              <p>You don't have properties published yet.</p>
              <p> Click the link below and list your first property!</p> 
              <Link to="https://docs.google.com/forms/d/e/1FAIpQLSd8HkLol829WO2hii1aem2H1_VNXWY6-1J_kqQAQclMPwo2MA/viewform" target="_blank">
              <button> List </button>
              </Link>             
            </div>
          </div>
        </div>
    )
  }
  return(
    <>    
      <div>
        <Frame3 />
      </div>

      <div>
        <Properties 
        investments={investments} 
        transactions={transactions}
        />
      </div>
          
    </>
)
};

export default MyProperties;