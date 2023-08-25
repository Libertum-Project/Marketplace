import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import Protocol from "./Protocol/Protocol";
import Services from "./Services/Services";
import Value from "./Value/Value";
import Subscribe from "./Subscribe/Subscribe";
import divider from "./assets/divider.png";
import "./Landing.scss";
import Timer from "../Coin/Timer";
import Header from "../Coin/Header"
import { Link } from "react-router-dom";

import ContactForm from "../Landing/Subscribe/ContactForm";

export default function Landing() {

  const [showModal, setShowModal] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {    
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 3000 milisegundos = 3 segundoS
    return () => clearTimeout(timer); 
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };


  const sections = [    
    <div className="first-section">
      <button onClick={() => setCurrentSection(1)} className="button1"> ❯ </button>
      <div className="timer-container">
          <div className="timer-content">
          {/* <Link to="/coinrelease"> */}
              <Header />
              <div className="timer">          
              <Timer />   
            </div>
          {/* </Link> */}
      </div>
      </div>      
    </div>,

    <div className="second-section"> 
    <button onClick={() => setShowModal(false)} className="button1">x</button>     
      <div className="timer-container">
          <div className="timer-content">         
          
              <p> The <span>$ LMB</span> launch is coming 
                  soon, and we're so excited to 
                  share it with you! </p> 
                 
              <p> Stay tuned for 
                  more details, and in the 
                  meantime, be sure to <span className="span2">register 
                  below </span> for all the latest updates.</p>
            <div className="cs_form">
              <ContactForm />
          </div>
          
      </div>
      </div>

      
    </div>,
    // <div className="third-section">
    //   {/* Content for the third section */}
      
    // </div>,
  ];


  return (
    <div>
      <Home />


      {showModal && (
         <div className='modal-container'>
         <div className='modal-content'>
          <div className="modal-section">
            {sections[currentSection]}
          </div>
         </div>
       </div>
      )}
          
      <Protocol />      
      <div className="divider-container">
        <img src={divider} className="divider" />
      </div>
      
      <div >
         <div >
          <div className="timer-container">
            <div className="timer-content">
           
                <Header />
              <div className="timer">          
                <Timer />   
              </div>

              <p> The <span>$ LMB</span> launch is coming 
                  soon, and we're so excited to 
                  share it with you! </p> 
                 
              <p> Stay tuned for 
                  more details, and in the 
                  meantime, be sure to <span className="span2">register 
                  below </span> for all the latest updates.</p>
            
            <div className="cs_form">
                <ContactForm />
             </div>
           </div>
           </div>         
         </div>
       </div>
       
       <div className="divider-container">
        <img src={divider} className="divider" />
      </div>

      <Services />
      <div className="divider-container">
        <img src={divider} className="divider" />
      </div>
      <Value />
      <div className="divider-container">
        <img src={divider} className="divider" />
      </div>
      <Subscribe />
    </div>
  );
}
