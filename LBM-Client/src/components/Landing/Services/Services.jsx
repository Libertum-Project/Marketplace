import React, { useState } from 'react';
import { Slide } from "react-awesome-reveal";
import styles from './Services.module.scss'
import loginImage from './assets/login.svg'
import marketplaceImage from './assets/marketplace.svg';
import graphicsImage from './assets/graphics.svg'

const servicesData = [
  {
    nombre: 'Join The Club',
    image: loginImage,
    description: 'Sign up to the platform and pick an opportunity that suits you',
    text: "We're a group of skilled real estate experts who blend data-driven valuation and analysis techniques. Our aim is clear: to unearth the finest rental properties brimming with exceptional investment prospects, tailored exclusively for you. "
  },
 {
    nombre: 'Earn Passive income',
    image: graphicsImage,
    description: 'Purchase a digital share and enjoy the “Libertum” a second income provides.',
    text: "Discover the Power of Earning Passively.With our tailored approach, we present you the opportunity to not only invest wisely, but also relish the rewards of an additional revenue stream. "
 },
 {
    nombre: 'Build a Future',
    image: marketplaceImage,
    description: 'You decide if you want to resell your property or invest in a diversified property portfolio',
    text: "With our web platform, you have the tools to manage your investments in real time, all at your fingertips. Your financial growth is no longer a mystery, as you gain insights into your monthly earnings effortlessly.Choose whether you'd like to explore reselling your property for potential gains or embark on a path of diversification with an investment in a versatile property portfolio. "
  }
];

const Services = () => {
  const [activeItem, setActiveItem] = useState(0);
  const [animationDirection, setAnimationDirection] = useState('');

  const handleItemClick = (index) => {
    const newDirection = index > activeItem ? 'right' : 'left';
    setAnimationDirection(newDirection);
    setActiveItem(index);
  };

  return (
    <div className={styles.section}>
      <Slide direction={"down"} triggerOnce={true}>
        <h1>How it works?</h1>
      </Slide>
      <div className={styles.topBar}>
        <Slide direction={"up"} triggerOnce={false}>
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`${styles.item} ${activeItem === index ? styles.active : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <section>
              <h3>{`${index + 1 < 10 ? '0' : ''}${index + 1}`}</h3>
              <h2>{service.nombre}</h2>
              </section>

              <p>{service.description}</p>
            </div>
          ))}
        </Slide>
      </div>

      <div className={styles.content}>
        <Slide direction={animationDirection}>
          <img
            key={activeItem} 
            src={servicesData[activeItem].image}
            alt={`Imagen ${activeItem + 1}`}
          />
        </Slide>
        <div className={styles.overlay}>
          <Slide direction={animationDirection}>
            <p key={activeItem}> 
              {servicesData[activeItem].text}
            </p>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Services;