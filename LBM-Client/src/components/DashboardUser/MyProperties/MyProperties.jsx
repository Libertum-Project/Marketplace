import Frame3 from "./Frame3/Frame3";
import Properties from "./UsersTable/Table";
import css from "./MyProperties.module.scss";
import { Link } from "react-router-dom";

const MyProperties = ({name, transactions, investments, publishedProperties, email}) => {
  return (
    <div className={css.propcontainer}>

    {publishedProperties.length === 0 ? (
            <div className={css.alertNoInvestment}>
              <p>You don't have properties published yet.  Click the link below and list your first property!</p>

              <Link
                to="https://docs.google.com/forms/d/e/1FAIpQLSd8HkLol829WO2hii1aem2H1_VNXWY6-1J_kqQAQclMPwo2MA/viewform"
                target="_blank"
              >
                <button> List </button>
              </Link>
            </div> 
      ) : null}

        <div>
          <Frame3 />
        </div>
  
        <div>
          <Properties
            investments={investments}
            transactions={transactions}
            publishedProperties={publishedProperties}
          />
        </div>
      
    </div>
  );
      }

export default MyProperties;