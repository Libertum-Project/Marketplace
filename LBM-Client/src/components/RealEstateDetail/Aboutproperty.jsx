import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import plano1 from "./documents/plano1.pdf"
import plano2 from "./documents/plano2.pdf"
import document1 from "./documents/Register1.pdf"
import document2 from "./documents/Register2.pdf"
import  style  from "./Aboutproperty.module.scss"
import { BsDownload } from "react-icons/bs"


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


    const [sticky, setSticky] = useState(false);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Punto de desplazamiento donde se fija el componente
      const column2 = document.querySelector('.column-2');
    
      if (scrollPosition > threshold) {
        column2.style.position = 'fixed';
        column2.style.top = '50px'; // Ajusta la posición verticalmente según tus necesidades
        column2.style.left = '20px'; // Ajusta la posición horizontalmente según tus necesidades
      } else {
        column2.style.position = 'static';
      }
    };
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
    

    return (
        <div className={style.container}>

          <div className={style.column-1}>

            <div >

            <p className={style.about}>ABOUT THE PROPERTY</p>
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
          className={`style.column-2 ${sticky ? "sticky" : ""}`}
        >
            <div className="card card-compact w-96 bg-base-100 bg-opacity-80 shadow-xl">
            <figure>
              <img src={image} alt="image1" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{address} - {location}</h2>
              <p>Passive Income Per Token: {PIT}</p>
              <p>Projected Rental Yield: ${PRY}</p>
              <p>Avaliables NFT: {AvailablesNFT}</p>
              <div className="card-actions justify-center">
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



{/* <table className="table mt-[-2rem]">
<tbody >              
  <tr>
    <th>Blueprints</th>
    <td> 
      <a href="https://drive.google.com/file/d/1Faf1XiLZIBtm2vXzyiIj0M7PSgpChzDn/view?usp=sharing" target="_blank"> Blueprint 1 </a>
      <br /> 
      <br />                 
      <a href="https://drive.google.com/file/d/1nry8wOF_xb0iV3uIq52csaDexg95wF4i/view?usp=sharing" target="_blank">Blueprint 2 </a>                
    </td>
  </tr >

  <tr>
    <th >Other documents </th>
    <td>  
      <a href="https://drive.google.com/file/d/1OKBJ1dKgZEd8ZBse8AI9d3h0zt6RDZv9/view?usp=sharing" target="_blank" >Title 21 High Street</a>
<br />
<br />

      <a href="https://drive.google.com/file/d/1bKvMVhea7gxi8VKusIFNroWqMzfzeTHr/view?usp=sharing" target="_blank" >Title 23 High Street</a>
      
      </td>
  </tr>
  
  </tbody>
</table> */}