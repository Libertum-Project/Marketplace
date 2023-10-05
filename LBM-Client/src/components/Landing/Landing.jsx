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
import ContactForm from "../Landing/Subscribe/ContactForm";
import Work from "./Work/Work";

export default function Landing() {

  const [showModal, setShowModal] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 4000); // 3000 milisegundos = 3 segundoS
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };


  const sections = [
    <div className="first-section">
      <button onClick={() => setCurrentSection(1)} className="text-red-300 bg-transparent text-3xl ml-80 -mr-52"> ❯ </button>
      <div className="timer-container">
        <div className="timer-content">
          {/* <Link to="/coinrelease"> */}
          <Header />
          {/* <img src={coinimage} alt="" className="coin" /> */}
          <div className="timer">
            <Timer />
          </div>
          {/* </Link> */}
        </div>
      </div>
    </div>,

    <div className="second-section">
      <button onClick={() => setShowModal(false)} className="text-red-400 bg-transparent text-3xl ml-80 -mr-52">x</button>
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
        <div className="timer-section">
          <div className="timer-container">
            <div className="timer-content ">

              <Header />
              <div className="timer">
                <Timer />
              </div>

              <div className='text-left'>
              <p > The <span>$ LMB</span> launch is coming
                soon, and we're so excited to
                share it with you !</p>

              <p> Stay tuned for
                more details, and in the
                meantime, be sure to <span className="span2">register
                  below </span> for all the latest updates.</p>
              </div>

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

      <Work />

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
