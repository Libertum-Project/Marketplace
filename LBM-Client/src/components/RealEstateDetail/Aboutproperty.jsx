import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import  style  from "./Aboutproperty.module.scss"
import { FaBath, FaBed, FaWifi, FaParking   } from "react-icons/fa";
import Details from "./Details";
import Financials from "./Financials/Financials";
import Documents from "./documents/Documents";
import InvestmentGuide from "./BuyingProcess";
import Icons from "./IconsAmenities/Icons";

import Buy from "./Buy";
// import Icons from "./Buying/Icons"



const Aboutproperty = (props) => {
    const { Square_foot, capital, more, map, image, number, address, location, PIT, PRY, AvailablesNFT, amenities, rooms, guests, value, Tokenised, NFTPrice, description, type } = props;
    

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };
    
   

    return (
        <div className={style.container}>
          <div className={style.column1}>

            <div className={style.about} >
            <p className={style.about}>ABOUT THE PROPERTY</p>   

              <Icons 
              amenities ={amenities}
              rooms = {rooms}
              squarefoot = {Square_foot}
              />

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
              type={type}
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
              capital={capital}
                            
            />
         </div>

        )}


      {/* ------------------------------ DOCUMENTS ---------------------- */}
        {activeTab === 3 && (

          <div>
            <Documents />
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
 {/* ------------------------------ BUYING PROCESS ---------------------- */}
        {activeTab === 5 && (
                <div className="mt-8">
                <InvestmentGuide />
                </div>
              )}


          </div>          


        </div>     
    )};


export default Aboutproperty; 

