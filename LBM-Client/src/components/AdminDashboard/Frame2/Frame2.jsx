import css from "./Frame2.module.scss"
import { BsWallet2 } from  "react-icons/bs"; 
import { AiOutlineUserAdd } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { BsHouseAdd } from "react-icons/bs"

const Frame2 = () => {
return(
    <div className={css.mainContainer}>
        <ul>
            <li>
                <div>
                <h3>Today's Transactions</h3>
                <h2>$ 53000</h2>
                </div>
                
                <BsWallet2 className={css.icon}/>                                            
            </li>

            <li>
                <div>
                    <h3>Today's Users</h3>
                    <h2>1200</h2>
                </div>
            
             <AiOutlineUserAdd className={css.icon} />
            </li>

            <li>
                <div>
                    <h3>Total Users</h3>
                    <h2>8756</h2>
                </div>
             
             <FiUsers className={css.icon}/>
            </li>

            <li>
                <div>
                <h3>Total Transactions</h3>
                <h2>$ 2553000</h2>
                </div>

             <BsHouseAdd className={css.icon}/>
            </li>

        </ul>
    </div>
)    
};

export default Frame2;