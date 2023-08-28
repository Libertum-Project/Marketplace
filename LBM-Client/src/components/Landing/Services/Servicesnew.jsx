import React, { useState } from 'react';
import styles from './servicesnew.module.scss';
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

const ServicesNew = () => {
  const [activeItem, setActiveItem] = useState(0); // Usamos índices en base 0

  return (
    <div className={styles.section}>
      <h1>How it works?</h1>
      <div className={styles.topBar}>
        {servicesData.map((service, index) => (
          <div
            key={index}
            className={`${styles.item} ${activeItem === index ? styles.active : ''}`}
            onClick={() => setActiveItem(index)}
          >
            <h2>{`${index + 1 < 10 ? '0' : ''}${index + 1} - ${service.nombre}`}</h2>
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <img
          src={servicesData[activeItem].image}
          alt={`Imagen ${activeItem + 1}`}
        />
        <div className={styles.overlay}>
          <p>{servicesData[activeItem].description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServicesNew;
