import React from "react";
import Home from "./Home/Home";
import Protocol from "./Protocol/Protocol";
import Services from "./Services/Services";
import Value from "./Value/Value";
import Subscribe from "./Subscribe/Subscribe";
import divider from "./assets/divider.png";
import "./Landing.scss";

export default function Landing() {
  return (
    <div>
      <Home />
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
