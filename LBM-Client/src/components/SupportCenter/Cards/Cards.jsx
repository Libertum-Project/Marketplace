import React from 'react';
import styles from './Cards.module.scss';
import cardsData from './cards.json';
import { Link } from 'react-router-dom';

const Cards = () => {
  return (
    <div className={styles.supcontainer}>
          
        {cardsData.map((card) => (
          <div className={styles.card} key={card.id}>
            <div className={styles.icon1}>              
                <h2 className={styles.title}>{card.title}:</h2>                 
            </div>
            <ul className={styles.icon}>
              {card.questions.map(({ id, question }) => (
                <li className={styles.li} key={id}>
                  <Link to={`/detail/${id}`}>{question}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
     
    </div>
  );
};
  
export default Cards;
