import style  from "./Frame2.module.scss";

const Frame2 = () => {    
    
const handleSeeMapClick = () => {
    alert("Soon you can see here in a map all your properties")
}

const handleWithdrawClick = () => {
    alert("Soon you will be able to withdraw your earnings here")
}

    return(
        <div className={style.mainContainer}>
        <section className={style.section1}>
            <div className={style.analizefinances}> 
                <h3>Earning Analysis</h3> 
                <h4 type='text'> Jan, 2022 ▾ </h4>
                {/* aca se va a usar una biblioteca de react llamada datepicker para podre mosrar calendario y que el usuario pueda elegir otra fecha */}
                <button onClick={handleWithdrawClick}>Withdraw Earnings</button>              
            </div>

            <div className={style.chartsection}>
                <object>
                    CHART
                </object> 

                <section>
                    <section>
                    <div>
                    <p>Net Earings</p>
                    <b>$6840</b>
                    </div>

                    <div>
                    <p>Change</p>
                    <b>80%</b>
                    </div>
                     
                    <div>
                    <p>Fees </p>
                    <b>$150</b>
                    </div>
                    </section>
                    
                    <h5>The earnings of the last 30 days of all purchased property tokens were calculated.</h5>
                </section>

                
            
            </div>




        </section>


        <section className={style.section2}>
            <div className={style.seefraction}> 
                <h3>See Your Fractionalizations</h3>                 
                <button onClick={handleSeeMapClick}>See Group ⠿ </button>              
            </div>

            <div className={style.mapframe}>
            {/* <iframe
            //   src={map}
              // width="400"
              // height="250"
              // style={{ border: '0' }}
              src=""
              allowFullScreen
              loading="lazy"
              title="Map">
              
            </iframe> */}
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25297.85452119839!2d-68.88154396107632!3d-32.89108558353917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95a326187519947f%3A0x6d81606321bb0289!2sParque%20General%20San%20Mart%C3%ADn!5e0!3m2!1ses-419!2sar!4v1689286308118!5m2!1ses-419!2sar"
            className={style.map}></iframe>
            </div>
        </section>
      </div>
    )
};

export default Frame2; 