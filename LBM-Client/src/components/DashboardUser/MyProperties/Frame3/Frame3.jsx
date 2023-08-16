import BarChart from "./GraphicUsers";
import LineChart from "./GraphicTransactions";
import css from "./Frame3.module.scss";



const Frame3 = () => {
    return(
        <div className={css.mainContainer}>
            
            <section className={css.barsContainer}>
                <div className={css.barsText}>
                    <h2>Total Tokens Sold</h2>                    
                </div>
                <div className={css.barGraph}>                    
                    <BarChart />
                </div>
            </section>

            <section className={css.transactions}>
                <div className={css.transactionstext}>
                    <h2>Transactions</h2>                    
                </div>
                <div className={css.transactionschart}>
                    <LineChart />
                </div>
            </section>
        </div>
    )
}; 

export default Frame3; 