import React, { useState, useEffect } from "react";
import Home from "./Home/Home";
import Protocol from "./Protocol/Protocol";
import Services from "./Services/Services";
import Value from "./Value/Value";
import Subscribe from "./Subscribe/Subscribe";
import divider from "./assets/divider.png";
import "./Landing.scss";
import Timer from "../Coin/Timer";
import { Link } from "react-router-dom";

import ContactForm from "../Landing/Subscribe/ContactForm";

export default function Landing() {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Mostrar el modal después de unos segundos (por ejemplo, 3 segundos)
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000); // 3000 milisegundos = 3 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <Home />


      {showModal && (
         <div className='modal-container'>
         <div className='modal-content'>
         <button className="button1" onClick={closeModal}>x</button>
         <div className="timer-container">
          <div className="timer-content">
          <Link to="/coinrelease">
            <div className="timer-text">
              <h2> 
              Get ready for the 
              <span className="span1"> 
              LBM  
              </span> 
              <span className="span2">
              Coin
              </span> 
              <span className="span1">
                release!
              </span>         
            </h2>
            </div> 
            <div className="timer">          
              <Timer />   
            </div>
          </Link>
          <div className="cs_form">
              <ContactForm />
          </div>
        </div>
      </div>         
         </div>
       </div>
      )}
    


      <div className="timer-container">
        <div className="timer-content">
          <Link to="/coinrelease">
            <div className="timer-text">
            <h2> 
              Get ready for the 
              <span className="span1"> 
              LBM  
              </span> 
              <span className="span2">
              Coin
              </span> 
              <span className="span1">
                release!
              </span>         
            </h2>
            </div> 
            <div className="timer">          
              <Timer />   
            </div>
          </Link>
          <div className="cs_form">
              <ContactForm />
          </div>
        </div>
      </div>


      
      <Protocol />
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
