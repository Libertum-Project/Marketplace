import React, { useState } from 'react';
import { Slide } from "react-awesome-reveal";
import styles from './services.module.scss';
import loginImage from './assets/login.svg'
import marketplaceImage from './assets/marketplace.svg';
import graphicsImage from './assets/graphics.svg'

const servicesData = [
  {
    nombre: 'Join The Club',
    image: loginImage,
    description: 'Sign up to the platform and pick an opportunity that suits you'
  },
 {
    nombre: 'Earn Passive income',
    image: graphicsImage,
    description: 'Purchase a digital share and enjoy the “Libertum” a second income provides.'
 },
 {
    nombre: 'Build a Future',
    image: marketplaceImage,
    description: 'You decide if you want to resell your property or invest in a diversified property portfolio'
  }
];

const Services = () => {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div className={styles.section}>
      <Slide direction={"down"} triggerOnce={false}>
        <h1>How it works?</h1>
      </Slide>
      <div className={styles.topBar}>
        <Slide direction={"up"} triggerOnce={false}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`${styles.item} ${activeItem === index ? styles.active : ''}`}
              onClick={() => setActiveItem(index)}
            >
              <h2>{`${index + 1 < 10 ? '0' : ''}${index + 1} - ${service.nombre}`}</h2>
            </div>
          ))}
        </Slide>
      </div>

      <div className={styles.content}>
        <Slide direction={"left"} triggerOnce={false}>
          <img
            src={servicesData[activeItem].image}
            alt={`Imagen ${activeItem + 1}`}
          />
        </Slide>
        <div className={styles.overlay}>
          <Slide direction={"right"} triggerOnce={false}>
            <p>{servicesData[activeItem].description}</p>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Services;