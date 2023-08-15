import Frame3 from "./Frame3/Frame3";
import Table from "./UsersTable/Table"
import css from "./MyInvestments.module.scss"

const MyInvestments = ({name, id, transactions, investments}) => {

    return(
        <div>
        <div className={css.container}>
            <div className={css.frame}>
                <Frame3 />
            </div>
            <div className="">
                <Table />
            </div>
                </div>
        </div>
    )
};

export default MyInvestments;