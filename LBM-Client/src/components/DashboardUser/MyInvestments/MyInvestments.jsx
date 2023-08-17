import Frame3 from "./Frame3/Frame3";
import css from "./MyInvestments.module.scss"
import Investments from "./UsersTable/Table";

const MyInvestments = ({name, id, transactions, investments}) => {


    console.log("user name " + name) 
    
    return(
        <div>
           
        <div >
            <div >
                <Frame3 />
            </div>
            <div className="">
                <Investments 
                investments = { investments }
                transactions = { transactions }
                />
            </div>
                </div>
        </div>
    )
};

export default MyInvestments;