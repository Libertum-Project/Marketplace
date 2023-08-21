import Frame3 from "./Frame3/Frame3";
import css from "./MyInvestments.module.scss"
import Investments from "./UsersTable/Table";
import { Link } from "react-router-dom";
const MyInvestments = ({ name, id, transactions, investments }) => {
    console.log("user name " + name);
  
    if (investments.length === 0) {
      return (
        <div className={css.container}>
          <div>
            <div className={css.alertNoInvestment}>
              <p>You don't have any investments yet.</p>
              <p> Enter our marketplace and start investing!</p> 
              <Link to="/marketplace">
              <button> Marketplace! </button>
              </Link>             
            </div>
          </div>
        </div>
      );
      
    }
  
    return (
      <div>
        <div>
          <div>
            <Frame3 />
          </div>
          <div className="">
            <Investments 
            investments={investments} 
            transactions={transactions} />
          </div>
        </div>
      </div>
    );
  };
  
  export default MyInvestments;
  