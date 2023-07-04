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
    const passiveIncomePerYear = ((investment*PRY)/100).toFixed(2);
    const passiveIncomePerMonth = (passiveIncomePerYear / 12).toFixed(2);

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
                   <div className={style.cell}>
                   <input
                    type="range"
                    min="0"
                    max={AvailablesNFT}
                    value={rangeValue}
                    // className="range w-96 "
                    onChange={handleRangeChange}
                    />
                   </div>
                 </div>

           
                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Invesment:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontable}>........</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Passive Income per month:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontable}>GRAPHIC</span>

                   <GraphicIncomeMonth />

                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Anual Passive Income:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontable}>........</span>
                   </div>
                 </div>

           </div>
)}; 

export default Financials; 