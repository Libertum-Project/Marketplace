import css from "./Frame1.module.scss"

const Frame1 = () => {
    return(
        <div className={css.mainContainer}>

            <section className={css.section1}>
                <h2> Upload Property</h2>
                <button>List Now!</button>
            </section>

            <section className={css.section2}>
                <h2>Admin Wallet</h2>
                <button>Access</button>                       
            </section>

            

            <section className={css.section3}>
            <div className={css.seefraction}> 
                <h3>See Your Fractionalizations</h3>                 
                <button>See Group ⠿ </button>              
            </div>

            <div className={css.mapframe}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25297.85452119839!2d-68.88154396107632!3d-32.89108558353917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a326187519947f%3A0x6d81606321bb0289!2sParque%20General%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1689286308118!5m2!1ses-419!2sar"
            className={css.map}></iframe>
            </div>
        </section>

        </div>
    )
}; 

export default Frame1; 
