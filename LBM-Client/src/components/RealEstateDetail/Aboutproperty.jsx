import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plano1 from "./documents/plano1.pdf"
import plano2 from "./documents/plano2.pdf"
import document1 from "./documents/Register1.pdf"
import document2 from "./documents/Register2.pdf"
import  style  from "./Aboutproperty.module.scss"
import { BsDownload } from "react-icons/bs"
import { FaBath, FaBed, FaWifi, FaParking   } from "react-icons/fa";



const Aboutproperty = (props) => {
    const { more, map, image, number, address, location, PIT, PRY, AvailablesNFT, amenities, rooms, guests, value, Tokenised, NFTPrice, description } = props;
    
    const [rangeValue, setRangeValue] = useState(40);

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
      };

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
    
    const passiveIncomePerYear = ((PIT * rangeValue)/10).toFixed(2);
    const passiveIncomePerMonth = (passiveIncomePerYear / 12).toFixed(2);


    

    return (
        <div className={style.container}>

          <div className={style.column-1}>

            <div >

            <p className={style.about}>ABOUT THE PROPERTY</p>            
            
            <div className={style.iconsbig}>
         
            <div>
                  <span><FaBath /></span>
                  <p>2 bath</p>
                </div>
                <div>
                  <span><FaBed /></span>
                  <p>3 rooms</p>
                </div>
                <div>
                  <span><FaWifi /></span>
                  <p>Free Wifi</p>
                </div>
                <div>
                  <span><FaParking /></span>
                  <p>Parking</p>
                </div>                        
            </div>

            <p className={style.description}>{description} </p>

            </div>
          

            <div className={style.buttons}>
              <button
                className={`${style.tab} ${activeTab === 1 ? style.tabActive : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Details
              </button>
              <button
                className={`${style.tab} ${activeTab === 2 ? style.tabActive : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Financials
              </button>
              <button
                className={`${style.tab} ${activeTab === 3 ? style.tabActive : ''}`}
                onClick={() => handleTabClick(3)}
              >
                Documents
              </button>
              {/* <button
                className={`${style.tab} ${activeTab === 4 ? style.tabActive : ''}`}
                onClick={() => handleTabClick(4)}
              >
                Carbon Emissions
              </button> */}
              <button
                className={`${style.tab} ${activeTab === 5 ? style.tabActive : ''}`}
                onClick={() => handleTabClick(5)}
              >
                Buying Process
              </button>
              
            </div>

        {/* --------------------------------DETAILS --------------------------------- */}
        {activeTab === 1 && (
          <div>
            <div className={style.table}>
                  <div className={style.row}>
                    <div className={style.cell}>
                      <span className={style.label}>Amenities:</span>
                    </div>
                    <div className={style.cell}>
                      <span className={style.descriptiontable}>{amenities}</span>
                    </div>
                  </div>
                  <div className={style.row}>
                    <div className={style.cell}>
                      <span className={style.label}>Rooms:</span>
                    </div>
                    <div className={style.cell}>
                      <span className={style.descriptiontable}>{rooms}</span>
                    </div>
                  </div>


                  
                  <div className={style.row}>
                    <div className={style.cell}>
                      <span className={style.label}>Occupancy Status:</span>
                    </div>
                    <div className={style.cell}>
                    <span className={style.descriptiontable}>Free</span>
                    </div>
                  </div>

                  <div className={style.row}>
                    <div className={style.cell}>
                      <span className={style.label}>Address:</span>
                    </div>
                    <div className={style.cell}>
                    <span className={style.descriptiontable}>{address}</span>
                    <iframe
                            src={map}
                            width="400"
                            height="250"
                            style={{ border: '0' }}
                            allowFullScreen
                            loading="lazy"
                            title="Map">
                          </iframe>
                    </div>
                  </div>
            
                  <div className={style.row}>
                    <div className={style.cell}>
                      <span className={style.label}>More:</span>
                    </div>
                    <div className={style.cell}>
                    <span className={style.descriptiontable}>{more}</span>
                    </div>
                  </div>
            </div>

          </div>
        )}

        {/* ----------------------------- FINANCIALS ------------------------- */}

        {activeTab === 2 && (
           <div>
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
                     <span className={style.descriptiontable}>{PIT} % / year</span>
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
                    className="range w-96 "
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

         </div>


    
          //       <th>Percent of property tokenised</th>
          //       <td>{Tokenised} %</td>
          //     </tr>
          //     <tr>
          //       <th>Rental yield</th>
          //       <td>{PRY} % </td>
          //     </tr>
          //     <tr>
          //       <th>Number of F-NFT available:</th>
          //       <td>{AvailablesNFT}</td>
          //     </tr>

          //     <tr>
          //       <th>Passive Income per token</th>
          //       <td>{PIT} % / year </td> 
          //     </tr>

          //     <tr>
          //       <th>Number of tokens to be purchased:</th>
          //       <td>
          //       <input
          //         type="range"
          //         min="0"
          //         max={AvailablesNFT}
          //         value={rangeValue}
          //         className="range w-96 "
          //         onChange={handleRangeChange}
          //         /><span  className="tooltip tooltip-open tooltip-right mb-3" data-tip={rangeValue}></span>
                  
          //         </td> {/* Placeholder for the value */}
          //         </tr>
  
          //     <tr>
          //     <th className=" text-base">Annual Passive Income</th>
          //     <td>$ {passiveIncomePerYear}</td> {/* Placeholder for the value */}
          //     </tr>

          //     <tr>
          //       <th className=" text-base">Monthly Passive Income</th>
          //       <td>$ {passiveIncomePerMonth}</td> {/* Placeholder for the value */}
          //     </tr>  
          //     </tbody>

          //     <tr>
          //       <th className="text-orange-400 text-lg uppercase">Total Cost:</th>
          //       <td className=" font-bold">$ {rangeValue * NFTPrice  }</td> {/* Placeholder for the value */}
          //     </tr>

          //   </table>
          // </div>
        )}


      {/* ------------------------------ DOCUMENTS ---------------------- */}
        {activeTab === 3 && (

          <div>  

            <Link
             to={plano1}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}>            
                 
              <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '5px', borderRadius: '50%', backgroundColor: '#F7931A',    padding: '5px'}}>
                <BsDownload />              
              </span>
              Download <b>Blueprint</b>
            </p>
            </Link>

            <Link
             to={document1}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}>
            <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '5px', borderRadius: '50%', backgroundColor: '#F7931A',    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Title</b></p>

              </Link>

            <Link
             to={document2}
             target="_blank"
             rel="noopener noreferrer"
             download="plano1.pdf"                  
           >
            <p className={style.download}
            >
            <span style={{ display: 'inline-flex', alignItems: 'center', marginRight: '5px', borderRadius: '50%', backgroundColor: '#F7931A',    padding: '5px'}}>
                <BsDownload />
              </span>
              Download <b>Smart Contract</b></p>

            </Link>

          </div>
         
          
        )}

        {activeTab === 4 && (                
            <table className="table h-10 mt-8 ">
                  <tbody>
                    <tr>
                        <th>Current Emission</th>
                        <td>943 kWh per month</td>
                    </tr>
                    <tr>
                        <th>Expected Emission Level</th>
                        <td>456 kWh per month</td>
                    </tr>
            </tbody>
          </table>
                  
                )}

        {activeTab === 5 && (
                <div className="mt-8">
                  {/* Contenido de la pestaña 3 */}
                  
                  <p>Charge document</p>
                </div>
              )}


          </div>


          

          {/* -------------------- BUY MODULE -------------------- */}
          <div
          className={style.column-2}        >          
            <div className={style.buycontainer}>
              <span>{location} | {address} </span>
            
              <div className={style.icons}>
                <div>
                  <span><FaBath /></span>
                  <p>2 bath</p>
                </div>
                <div>
                  <span><FaBed /></span>
                  <p>3 rooms</p>
                </div>
                <div>
                  <span><FaWifi /></span>
                  <p>Free Wifi</p>
                </div>
                <div>
                  <span><FaParking /></span>
                  <p>Parking</p>
                </div>
              </div>


            <div className={style.cardbody}>
              
              <p>Passive Income Per Token: {PIT}</p>
              <p>Projected Rental Yield: ${PRY}</p>
              <p>Avaliables NFT: {AvailablesNFT}</p>
              <div className={style.cardbutton}>
                <Link
                  to={`/marketplace/buy/${number}`}
                >
                  <button className="btn content-center btn-wide bg-primary flex items-center justify-center">Buy Now</button>
                </Link>
              </div>
            </div>
            </div>

          </div>
      





        </div>     
    )};


export default Aboutproperty; 

