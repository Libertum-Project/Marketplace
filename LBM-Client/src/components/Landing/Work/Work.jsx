import css from './Work.module.scss'; 
import marketImage from "./cardmarket.png"
import passiveIncomeImage from "./passiveincome.svg";
import inflationaryImage from "./inflationaryImage.svg";
import { Slide } from "react-awesome-reveal";


const Work = () => {

  return(
    <div className={css.container}>

      <Slide direction={"down"} triggerOnce={false}>
      <h2>How I will make money?</h2>
      </Slide>

      
      <div className={css.section}>

      <Slide direction={"left"} triggerOnce={false}>
        <div className={css.sidebox}>
        <img src={passiveIncomeImage} alt="" className={css.icon}/>
          <h3>
            Passive Monthly Income
          </h3>          
          <p>             
            Guaranteed passive monthly income generated from transparent digital ownership           
          </p>
        </div>
        </Slide>

        <img src={marketImage} alt="" className={css.image}/>

        <Slide direction={"right"} triggerOnce={false}>
        <div className={css.sidebox}>
        <img src={inflationaryImage} alt="" className={css.icon}/>
          <h3>
            Inflationary Adjustment
          </h3>          
          <p>
            Watch your passive income increase to ensure your money works for you and not a bank
          </p>
        </div>
        </Slide>
      </div>
    
    </div>
  )
}; 


export default Work; 
