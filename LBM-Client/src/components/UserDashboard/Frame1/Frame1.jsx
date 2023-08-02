import style from "./Frame1.module.scss"; 
import house from "./house.png"
import { BiExpand } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

const Frame1 = ({user, email, name, investedProperties, publishedProperties, savedProperties, transactions}) => { 

  const navigate = useNavigate()

  const handleListClick = () => {
      navigate('/create');        
    };

  const handleSeeClick = () => {
    navigate('/userdash/myproperties')
  }

  const handleListUSERClick = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSd8HkLol829WO2hii1aem2H1_VNXWY6-1J_kqQAQclMPwo2MA/viewform?pli=1', '_blank');
  }
  
  


    return(
            <div className={style.mainContainer}>
              <section className={style.section1}>
                <div>
                  <h2>Tokenize your property</h2>                                    
                  {/* <button onClick={handleListClick}>List Now</button>    */}
                  <button onClick={handleListUSERClick}>List now!</button>
                </div>
                <img src={house} alt="house image" />
              </section>


              <section className={style.section2}>
                <div className={style.analizefinances}>
                  <h3>Analyze Your Finances</h3>
                    <button onClick={handleSeeClick}>See Your Properties ⠿</button>                  
                  <button>Pay Debt</button>   
                          
                </div>

                <div className={style.buttons}>
                  <div className={style.button1}>
                    <p>Total Debt:</p>
                    <h2>$0</h2>
                  </div>

                  <div className={style.button2}>
                    <p>Total Borrowed:</p>
                    <h2>$0</h2>
                  </div>

                  <div className={style.button3}>
                    <p>Annual Profit:</p>
                    <h2>$0</h2>
                  </div>
                </div>
                
              </section>
            </div>
    )
};


export default Frame1; 