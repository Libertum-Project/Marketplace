import  style  from "../Aboutproperty.module.scss"
import GraphicIncomeMonth from "./GraphicIncomeMonth";

import { useState } from "react";

const Financials = ({number, PRY, value, AvailablesNFT, NFTPrice}) => {

    const [rangeValue, setRangeValue] = useState(40);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };
    
    const investment = NFTPrice * rangeValue;
    const passiveincometoken = (((investment * PRY)/100) / rangeValue).toFixed(2)
    const passiveIncomePerYear = ((investment*PRY)).toFixed(2);
    const passiveIncomePerMonth = (passiveIncomePerYear / 12).toFixed(2);
    console.log(passiveIncomePerMonth)
 

return (
    <div className={style.table}>
                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Market value of the property</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}> $ {value}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Funded</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>.... % </span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Rental Yield</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{PRY} %</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Number of F-NFT available</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{AvailablesNFT}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Passive Income per token</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{passiveincometoken}</span>
                   </div>
                 </div>
                 
                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Number of tokens to be purchased:</span>
                   </div>

                   <div className="px-4">
                   <input
                    type="range"
                    min="0"
                    max={AvailablesNFT}
                    step="1"
                    value={rangeValue}                    
                    onChange={handleRangeChange}
                    // className={style.tokensbar}
                    // className={style.range}
                    className="range range-warning w-full"                   
                     />
                   </div>
                 </div>

           
                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Invesment:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontable}>$ {investment}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Passive Income per Month:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontable}></span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}></span>  
                   </div>
                   <div className={style.cell}>
                   <GraphicIncomeMonth 
                      passiveIncomePerMonth={passiveIncomePerMonth}                
                   />  
                   <span className={style.descriptiontablemonth}>
                   <p><i>ACCUMULATIVE PASSIVE INCOME PER MONTH</i></p>
                  </span>

                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Anual Passive Income:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontable}>$ {passiveIncomePerYear}</span>
                   </div>
                 </div>

           </div>
)}; 

export default Financials; 