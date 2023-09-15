import React, { useState } from 'react';
import styles from './Principal.module.scss';
import groupIcon from "./assets/group.svg";
import houseIcon from "./assets/house.svg";
import helpIcon from "./assets/question.svg";
import About from './About';
import Contact from './Contact';
import Investing from './Investing';


const Principal = () => {
  const data = [
    {
      icon: groupIcon,
      title: 'About Libertum',
      description: 'Know more about Libertum.io',
    },
    {
      icon: houseIcon,
      title: 'Investing',
      description: 'Learn more about the investment process',
    },
    {
      icon: helpIcon,
      title: 'Contact Our Team',
      description: 'Contact us if you have any other questions',
    }
  ];

  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCard(index);
  };

  const handleCloseFullscreen = () => {
    setSelectedCard(null);
  };

  return (
    <div className={styles.container}>
      {data.map((item, index) => (
        <div
          key={index}
          className={styles.card}
          onClick={() => handleCardClick(index)}
        >
          <img className={styles.icon} src={item.icon} alt={item.title} />
          <div className={styles.title}>{item.title}</div>
          <div className={styles.description}>{item.description}</div>
        </div>
      ))}

      {selectedCard !== null && (
        <div className={styles.fullscreen}>
          <div className={styles.fullscreenContent}>
            <button onClick={handleCloseFullscreen} className={styles.buttonClose}>❮</button>
            {selectedCard === 0 && <About />}
            {selectedCard === 1 && <Investing />}
            {selectedCard === 2 && <Contact />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Principal;
