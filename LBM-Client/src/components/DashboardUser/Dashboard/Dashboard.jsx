import style from "./Dashboard.module.scss"
import { useNavigate } from "react-router";
import house from "./house.png"
import man from "./Man.svg"
import grafico1 from "./grafico1.png"
import grafico2 from "./grafico2.png"



const DashboardContent = ({name, id}) => {
    const navigate = useNavigate()

const handleListClick = () => {
    navigate('/create');        
  };

const handlemarket = () => {
  navigate('/marketplace')
}

const handleListUSERClick = () => {
  window.open('https://docs.google.com/forms/d/e/1FAIpQLSd8HkLol829WO2hii1aem2H1_VNXWY6-1J_kqQAQclMPwo2MA/viewform?pli=1', '_blank');
}

return(
    <div>

        <div className={style.welcome}>
            <p>Welcome {name}! </p>  
        </div>

        <div>
            <div className={style.mainContainer}>
                <section className={style.section1}>
                    <div>
                    <h2>Tokenize your property</h2>         
                    <p>Here you will have access to a form to upload all the information about your property. 
                    </p>                           
                    {/* <button onClick={handleListClick}>List Now</button>    */}
                    <button onClick={handleListUSERClick}>List now!</button>
                    </div>
                    <img src={house} alt="house image" />
                </section>


                <section className={style.section2}>
                    
                    <img src={man} alt="house image" />
                    <div>
                        <h2>Start Earning</h2>         
                        <p>Access our marketplace and discover all the properties we have for you. 
                        <br />
                        <br />
                        Start investing now, start earning now.</p>                           
                        {/* <button onClick={handleListClick}>List Now</button>    */}
                        <button onClick={handlemarket}>Go now!</button>
                    </div>
                    
                    
                </section>
            </div>

            <div className={style.mainContainer}>
                
                <section className={style.section3}>                   
                    <img src={grafico1} alt="grafico1" />    

                    <div> 
                        <section>
                            <h2>My Investments</h2>         
                            <p>See your investments month by month</p>  
                        </section>

                        <section>
                        <button onClick={handleListUSERClick}>My Investments</button>
                        </section>
                    </div>
                    
                </section>


                <section className={style.section3}>
                    
                    <img src={grafico2} alt="house image" />
                    <div> 
                        <section>
                            <h2>My Income</h2>         
                            <p>See your income month by month</p>  
                        </section>

                        <section>
                        <button onClick={handleListUSERClick}>My Income</button>
                        </section>
                    </div>
                    
                    
                </section>
            </div>
        </div>
        
    </div>
)
};

export default DashboardContent; 