import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
// import desktop from "./assets/desktop.png";
import arrow from "./assets/arrow.svg";
// import criptoImage from "./assets/cripto.svg";
// import personImage from "./assets/person.svg";
import rewardImage from "./assets/reward.svg";
import opportunityImage from "./assets/opportunity.svg"
import "./Protocol.scss";

const content = [
  {
    title: "The libertum Opportunity",
    paragraph: "Using the Libertum platform allows everyone to invest in premium real estate. Real estate is the single biggest asset class that anyone can digitally invest in.. The Global real estate market is worth $369 trillion...​",
    imagen: opportunityImage
  },
  {
    title:  "The Libertum Reward",
    paragraph: "Libertum allows everyone to earn a second income. There is no mortgage or large investment required, You simply sit back and enjoy the passive income your investments provide.",
    imagen: rewardImage
  }
]


  export default function Protocol() {

  const [index, setIndex] = useState(1);
  const { title, paragraph, imagen } = content[index];
  const intervalTime = 5000;
  const [forward, setForward] = useState(true);

// const nextContent = () => {
//   const nextIndex = (index + 1) % content.length;
//   setIndex(nextIndex);
// };

useEffect(() => {
  const interval = setInterval(() => {
    if (forward) {
      nextContent();
    } else {
      prevContent();
    }
  }, intervalTime);

  return () => {
    clearInterval(interval);
  };
}, [forward]);

const nextContent = () => {
  const nextIndex = index + 1;
  if (nextIndex >= content.length) {
    setForward(false);
    setIndex(content.length - 2);
  } else {
    setIndex(nextIndex);
  }
};

const prevContent = () => {
  const prevIndex = index - 1;
  if (prevIndex < 0) {
    setForward(true);
    setIndex(1);
  } else {
    setIndex(prevIndex);
  }
};

  return (
    <main className="protocol_items">
      <section className="protocol_section">
        <Slide direction={"left"} triggerOnce={false}>
          <div className="procotol_image">
            <div>
              <div></div>
            </div>
            <img alt="Launch App" src={imagen} />
          </div>
        </Slide>
        <Slide direction={"right"} triggerOnce={false}>
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
                {/* <span>{index}</span> */}
                <img src={arrow} onClick={nextContent} />
              </div>
            </div>
          </div>
        </Slide>
      </section>
    </main>
  );
}
