import  style  from "../Aboutproperty.module.scss"
import GraphicIncomeMonth from "./GraphicIncomeMonth";
import TableIncome from "./TableIncome";

import { useState } from "react";

const Financials = ({number, PRY, value, AvailablesNFT, NFTPrice, capital}) => {

  const dividerStyle = {
    borderBottom: "1px inset silver",
    width: '30%', 
    // margin: '0 auto',     
  }
    const [rangeValue, setRangeValue] = useState(1);
    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };
      const thumbPosition = (rangeValue - 0) / (100 - 0);
    

    // const passiveincometoken = (((investment * PRY)/100) / rangeValue).toFixed(2) //Rental Income 
    // const passiveIncomePerYear = ((investment*PRY)/100).toFixed(2); //Rental Income Year
    // const passiveIncomePerMonth = (passiveIncomePerYear / 12).toFixed(2);

    // const capitalrepaymentpertoken = (NFTPrice/capital/12).toFixed(2);
    // const monthlycapitalrepayment = (capitalrepaymentpertoken/12).toFixed(2)
    // const annualcapitalrepaymentpertoken = (capitalrepaymentpertoken*12).toFixed(2)
    // // const anualcapitalrepayment = (capitalrepaymentpertoken * rangeValue).toFixed(2)
    // const totalCapitalRepayment = (capitalrepaymentpertoken*rangeValue).toFixed(2)
    // const anualcapitalrepayment = (parseFloat(passiveIncomePerYear) + parseFloat(annualcapitalrepaymentpertoken)).toFixed(2);
    // const totalAnualCapitalRepayment = (anualcapitalrepayment * rangeValue).toFixed(2)
    // const capitalrepaymentmonth = (anualcapitalrepayment /12).toFixed(2)

    const investment = NFTPrice * rangeValue;
    const rentalIncomePerToken = ((NFTPrice * PRY )/100);
    const rentalIncomePerTokenSHOW = rentalIncomePerToken.toFixed(2);
    const annualRentalIncome = (investment * PRY)/100
    const annualRentalIncomeSHOW = annualRentalIncome.toFixed(2)
    const monthlyRentalIncome = annualRentalIncome/12;
    const monthlyRentalIncomeSHOW = monthlyRentalIncome.toFixed(2);
    const capitalRepaymentDuration = Math.floor(capital);
    const annualCapitalRepayment = (investment / capitalRepaymentDuration)
    const annualCapitalRepaymentSHOW = annualCapitalRepayment.toFixed(2)
    const monthlyCapitalRepaymentPerToken = (investment/rangeValue/capitalRepaymentDuration/12)
    const monthlyCapitalRepaymentPerTokenSHOW = monthlyCapitalRepaymentPerToken.toFixed(2);
    const annualRepaymentPerToken = (parseFloat(annualCapitalRepayment) + parseFloat(annualRentalIncome))/rangeValue;
    const annualRepaymentPerTokenSHOW = annualRepaymentPerToken.toFixed(2)
    const annualRepayment = (parseFloat(annualCapitalRepayment) + parseFloat(annualRentalIncome))
    const annualRepaymentSHOW = annualRepayment.toFixed(2)
    const monthlyRepayment = annualRepayment/12;
    const monthtlyRepaymentSHOW = monthlyRepayment.toFixed(2)




return (
  <div>
    <div className={style.table}>
      <div className={style.tableRectangule}>
                <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Market value of the property:</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}> $ {value}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Funded:</span>
                   </div>
                   <div className={style.cell} >                   
                      <div className={style.barra}>
                      <progress
                        type="progress"
                        min="0"
                        max="100"
                        step="1"
                        value="40"   
                        oninput="rangevalue.value=value"
                        className=""/>                 
                          <output id="rangevalue"> 40 % </output>
                      </div>
                  </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Rental Yield:</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{PRY} %</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Number of Tokens available:</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{AvailablesNFT}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Rental Income per token:</span>
                   </div>
                   <div className={style.cell}>
                     <span className={style.descriptiontable}>{rentalIncomePerTokenSHOW}</span>
                   </div>
                 </div>
                 

      </div>

      <div className={style.tableRectangule}>
                  <div className={style.row}>
                  <div className={style.cell}>
                     <span className={style.label}>Tokens to be purchased:</span>
                   </div>
 

                   <div className={style.cell} >                   
                      <div className={style.barra}>
                      <input
                        type="range"
                        min="1"
                        max={AvailablesNFT}
                        step="1"
                        value={rangeValue}                    
                        onChange={handleRangeChange}
                        className={style.tokensbar}
                        // className={style.range}
                        // className="range range-warning w-full"  
                        onInput={() => {}}/>                 
                          <output id="rangevalue">{rangeValue} TOKENS</output>
                      </div>
                  </div>
                   </div>


                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Invesment:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontabledif}>$ {investment}</span>
                   </div>
                 </div>



                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Annual Rental Income:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontabledif}>$ {annualRentalIncomeSHOW}</span>
                   </div>
                 </div>

                 <div className={style.row}>
                   <div className={style.cell}>
                     <span className={style.label}>Monthly Rental Income:</span>
                   </div>
                   <div className={style.cell}>
                   <span className={style.descriptiontabledif}>$ {monthlyRentalIncomeSHOW}</span>
                   </div>
                 </div>
            
                 
                 { capital  ? ( <>
                                   <div className={style.row}>
                                   <div className={style.cell}>
                                     <span className={style.label}>Capital Repayment Duration:</span>
                                   </div>
                                   <div className={style.cell}>
                                     <span className={style.descriptiontable}>{capitalRepaymentDuration} years</span>
                                   </div>
                                 </div>

                                 <div className={style.row}>
                                   <div className={style.cell}>
                                     <span className={style.label}>Monthly Capital Repayment per Token:</span>
                                   </div>
                                   <div className={style.cell}>
                                     <span className={style.descriptiontable}>$ {monthlyCapitalRepaymentPerTokenSHOW} </span>
                                   </div>
                                 </div>

                                 <div className={style.row}>
                                   <div className={style.cell}>
                                     <span className={style.label}>Annual Capital Repayment:</span>
                                   </div>
                                   <div className={style.cell}>
                                     <span className={style.descriptiontabledif}>$ {annualCapitalRepaymentSHOW} / year</span>
                                   </div>
                                 </div>

                                 <div className={style.row}>
                                   <div className={style.cell}>
                                     <span className={style.label}>Monthly Repayment:</span>
                                   </div>
                                   <div className={style.cell}>
                                     <span className={style.descriptiontabledif}> $  {monthtlyRepaymentSHOW} </span>
                                   </div>
                                 </div>

                                 <div className={style.row}>
                                   <div className={style.cell}>
                                     <span className={style.label}>Annual Repayment:</span>
                                   </div>
                                   <div className={style.cell}>
                                     <span className={style.descriptiontabledif}> $  {annualRepaymentSHOW} </span>
                                   </div>
                                 </div>

                                 </>
                              )
                            : null}  

                                              

    </div>
</div>

           <div className={style.graphics}>

           <div className={style.graphic1}>
                 <GraphicIncomeMonth 
                      passiveIncomePerMonth={monthlyRentalIncome}                
                   />  
                   <span className={style.descriptiontablemonth}>
                   <p><i>ACCUMULATIVE PASSIVE INCOME PER MONTH</i></p>
                  </span>
                 </div>
         <div>
                <TableIncome 
                   passiveIncomePerYear={annualRentalIncome}
                   investment={investment}
                   /> 
                  <span className={style.descriptiontablemonth}>
                   <p><i>ACCUMULATIVE PASSIVE INCOME IN YEARS</i></p>
                  </span>
         




           </div>
           </div>
           </div>
)}; 

export default Financials; 