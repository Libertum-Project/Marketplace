import Frame3 from "./Frame3/Frame3";
import css from "./MyInvestments.module.scss"
import Investments from "./UsersTable/Table";
import Coin from "./Coin/Coin";
import { Link } from "react-router-dom";

const MyInvestments = ({ name, id, transactions, investments }) => {
      
    return (
      <div>

        
        {investments.length === 0 ? (
            <div className={css.alertNoInvestment}>
            <p>You don't have any investments yet. Enter our marketplace and start investing!</p>            
            <Link to="/marketplace">
            <button> Marketplace! </button>
            </Link>             
          </div>
        ) : null
        }

          <div>
            <Frame3 />
          </div>

          <h2 className={css.title}>Properties</h2>
          <div className="">
            <Investments 
            investments={investments} 
            transactions={transactions} />
          </div>

          <h2 className={css.title}>LBM COIN</h2>
          <div className="">
            <Coin />
          </div>
      </div>
    );
  };
  
  export default MyInvestments;
  
