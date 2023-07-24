import BarChart from "./GraphicUsers";
import LineChart from "./GraphicTransactions";
import css from "./Frame3.module.scss"
const Frame3 = () => {
    
    return(
        <div className={css.mainContainer}>
            <section className={css.usersContainer}>
                <div className={css.users}>
                <BarChart />
                </div>

                <div className={css.userstext}>
                    <h2>Users</h2>
                    <button>All Users</button>
                </div>
            </section>


            <section className={css.transactions}>

                <div className={css.transactionstext}>
                    <h2>Transactions overview</h2>
                    <button>All properties</button>
                    <button>All transactions</button>
                </div>

                <div className={css.transactionschart}>
                    <LineChart />
                </div>

            </section>

            

        </div>
    )
}; 

export default Frame3; 