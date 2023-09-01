import React from "react";
import styles from "./DetailSupport.module.scss";
import { useParams } from "react-router-dom";
import { useState } from "react";
import questionsData from "../Cards/cards.json"; // import Card.JSON with questions & answ.
import ThumbUp from '../../../assets/ThumbUp.png';
import ThumbDown from '../../../assets/ThumbDown.png';
import {Link} from 'react-router-dom';
import SearchBar from '../SearchBar/SearchBar'
import SupportCenter from "../SupportCenter";


export default function DetailSupport() {
  const { id } = useParams(); // get the  question ID  from the parameters of the URL.
   
  //Search for the question in "card.json".
  let question, content;
  for (const category of questionsData) {
    const foundQuestion = category.questions.find((q) => q.id === Number(id));
    if (foundQuestion) {
      question = foundQuestion.question;
      content = foundQuestion.content;
      break;
    }
  }

  const [helpful, setHelpful] = useState(0);
  const [notHelpful, setNotHelpful] = useState(0);
  const [thumbsUpClicked, setThumbsUpClicked] = useState(false);
  const [thumbsDownClicked, setThumbsDownClicked] = useState(false);


  const handleHelpfulClick = () => {
    if (!thumbsUpClicked) {
      setHelpful((prevCount) => prevCount + 1);
      setThumbsUpClicked(true);
      if (thumbsDownClicked) {
        setNotHelpful((prevCount) => prevCount - 1);
        setThumbsDownClicked(false);
      }
    }
  };

  const handleNotHelpfulClick = () => {
    if (!thumbsDownClicked) {
      setNotHelpful((prevCount) => prevCount + 1);
      setThumbsDownClicked(true);
      if (thumbsUpClicked) {
        setHelpful((prevCount) => prevCount - 1);
        setThumbsUpClicked(false);
      }
    }
  };

 


  return (
    <div className={styles.detailContainer}>
      <div>
        <SupportCenter />

        <div>
          <div className={styles.divRectangle}>
             <h2 className={styles.title}>{question}</h2>
             <div className={styles.content}>
             {content.split('\n').map((paragraph, index) => (
      <p className={styles.p} key={index}>{paragraph}</p>
    ))}    
             </div>
             
              <div className={styles.thumbs} >
            <p>Is this article helpful?</p>
            <div>
              <button onClick={handleHelpfulClick} disabled={thumbsUpClicked}>
                <img src={ThumbUp} alt="Thumbs Up"/>
              </button>
              <span>{helpful}</span>
              <button  onClick={handleNotHelpfulClick} disabled={thumbsDownClicked}>
                <img src={ThumbDown} alt="Thumbs Down" />
              </button> 
              <span>{notHelpful}</span>
            </div>
            </div>
          </div>     
        </div>
      </div>
    </div>
  );
}
