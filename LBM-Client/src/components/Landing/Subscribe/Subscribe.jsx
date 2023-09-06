import React from "react";
import ContactForm from "./ContactForm";
import "./Subscribe.scss";
import { Slide } from "react-awesome-reveal";

export default function Subscribe() {
  return (
    <main name="subscribe" className="subscribe_items">
      <Slide direction={"down"} triggerOnce={false}>
      <section className="subscribe_section">
        <div className="subscribe_text">
          <h2>Start Earning today</h2>
          <p>
            Subscribe to our newsletter to receive updates on the progress of
            Libertum Project and be part of a movement to democratize the real estate investment market
          </p>
        </div>
        <div className="subscribe_form">
          <ContactForm />
        </div>
      </section>
      </Slide>
    </main>
  );
}
