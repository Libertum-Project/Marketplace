import React, { useState } from 'react';
import styles from './Principal.module.scss';
import groupIcon from "./assets/group.svg";
import houseIcon from "./assets/house.svg";
import helpIcon from "./assets/question.svg";

const Principal = () => {
  const data = [
    {
      icon: groupIcon,
      title: 'About Libertum',
      description: 'Know more about Libertum.io',
      text: "add here some text"
    },
    {
      icon: houseIcon,
      title: 'Investing',
      description: 'Learn more about the investment process',
      text: "add here some text"
    },
    {
      icon: helpIcon,
      title: 'Contact Our Team',
      description: 'Contact us if you have any other questions',
      text: "add here some text"
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
          <button onClick={handleCloseFullscreen}>❮</button>
            {/* <img className={styles.icon} src={data[selectedCard].icon} alt={data[selectedCard].title} /> */}
            <div className={styles.content}>
              <div className={styles.title}>{data[selectedCard].title}</div>             
              <div className={styles.text}>{data[selectedCard].text}</div>
            </div>
            
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Principal;
