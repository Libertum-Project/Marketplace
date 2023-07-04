import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plano1 from "./documents/plano1.pdf"
import plano2 from "./documents/plano2.pdf"
import document1 from "./documents/Register1.pdf"
import document2 from "./documents/Register2.pdf"
import  style  from "./Aboutproperty.module.scss"
import { BsDownload } from "react-icons/bs"
import { FaBath, FaBed, FaWifi, FaParking   } from "react-icons/fa";

import Details from "./Details";
import Financials from "./Financials/Financials"



const Aboutproperty = (props) => {
    const { more, map, image, number, address, location, PIT, PRY, AvailablesNFT, amenities, rooms, guests, value, Tokenised, NFTPrice, description } = props;
    

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
    
   

    return (
        <div className={style.container}>

          <div className={style.column-1}>

            <div >

            <p className={style.about}>ABOUT THE PROPERTY</p>   


            {/* ----------------------------------------------  ICONOS  ------------------------------------------------         */}
            
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

            <Details 
              more={more}
              map={map}
              number={number}
              address={address}
              location={location}
              amenities={amenities}
              rooms={rooms}
              guests={guests}
              value={value}
              description={description}
              // map ={map}
            />
          </div>
        )}

        {/* ----------------------------- FINANCIALS ------------------------- */}

        {activeTab === 2 && (
           <div>            

            <Financials 
              number={number}
              PRY={PRY}
              // funded = {funded}
              value={value}
              AvailablesNFT={AvailablesNFT}
              NFTPrice={NFTPrice}
                            
            />
         </div>

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

