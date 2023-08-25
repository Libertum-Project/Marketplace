import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

import desktop from "./assets/desktop.png";
import arrow from "./assets/arrow.svg";
import criptoImage from "./assets/cripto.svg"
import "./Protocol.scss";

const content = [
  {
    title: "The libertum Opportunity",
    paragraph: "Using the Libertum platform allows everyone to invest in premium real estate. Real estate is the single biggest asset class that anyone can digitally invest in.. The Global real estate market is worth $369 trillion...​"
  },
  {
    title:  "The Libertum Reward",
    paragraph: "Libertum allows everyone to earn a second income. There is no mortgage or large investment required, You simply sit back and enjoy the passive income your investments provide."
  }
]


  export default function Protocol() {

  const [index, setIndex] = useState(1);
const { title, paragraph } = content[index];

const nextContent = () => {
  const nextIndex = (index + 1) % content.length;
  setIndex(nextIndex);
};

  return (
    <main className="protocol_items">
      <section className="protocol_section">
        <Slide direction={"left"} triggerOnce={"true"}>
          <div className="procotol_image">
            <div>
              <div></div>
            </div>
            <img alt="Launch App" src={criptoImage} />
          </div>
        </Slide>
        <Slide direction={"right"} triggerOnce={"true"}>
          <div className="protocol_text">
            <h2>
              {title}
            </h2>
            <div className="protocol_slide">
              <p>{paragraph}</p>
              <div>
                <img
                  style={{ transform: "rotate(180deg)" }}
                  src={arrow}
                  onClick={nextContent}
                />
                <span>{index}</span>
                <img src={arrow} onClick={nextContent} />
              </div>
            </div>
          </div>
        </Slide>
      </section>
    </main>
  );
}
