import React from "react";
import ContactForm from "./ContactForm";
import "./Subscribe.scss";
import { Slide } from "react-awesome-reveal";
import image from './image.svg'
import { Link } from "react-router-dom";


export default function Subscribe() {


  return (
    <main name="subscribe" className="subscribe_items">
      <Slide direction={"down"} triggerOnce={false}>
      <section className="subscribe_section">
        <div className="subscribe_text">
          <h2>Are you ready to start earning today? </h2>
          {/* <p>
            Subscribe to our newsletter to receive updates on the progress of
            Libertum Project and be part of a movement to democratize the real estate investment market
          </p> */}
          <Link to='/mydashboard'>
          <button className="button">LOG IN</button>
          </Link>
          
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
      </section>
      </Slide>
    </main>
  );
}
