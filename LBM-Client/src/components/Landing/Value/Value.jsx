import React from "react";
import { Slide } from "react-awesome-reveal";
import "./Value.scss";
// import mobile from "./assets/mobile.svg";
import personimage from "./assets/personhouse.svg"

export default function Value() {
  return (
    <main className="value_items">
      <section className="value_section">
        <Slide direction={"left"} triggerOnce={"true"}>
          <div className="value_image">
            <img src={personimage} />
          </div>
        </Slide>
        <Slide direction={"right"} triggerOnce={"true"}>
          <div className="value_text">
            <div className="value-text_item">
              <h2>Our True Value</h2>
                <p>
                  Is that we are the gateway to real estate opportunities for everyone, everywhere, and at any time.Our mission of <span> Transforming an Exclusive Market into an Inclusive Opportunity </span> will be achieved by lowering barriers of entry and by increasing liquidity for property owners and investors.
                </p>
                <p>               
                  By <span> simplifying the process </span>of real estate investment, we  open up opportunities that were previously unattainable to most.
                </p>
            </div>
          </div>
        </Slide>
      </section>
    </main>
  );
}
