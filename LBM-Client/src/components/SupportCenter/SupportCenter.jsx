import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./SupportCenter.module.scss";
import SearchBar from "./SearchBar/SearchBar";
import Cards from "./Cards/Cards";
import Principal from "./Principal/Principal";
import Faq from "./Faq/Faq";


export default function SupportCenter() {
  const [filteredCards, setFilteredCards] = useState([]);

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>How can we help you?</h1>
        <h3>
          Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.
        </h3>
      </div>
      
      <SearchBar setFilteredCards={setFilteredCards} />

      <div className={styles.allQuestions}>
        <Principal /> 
      </div>

      <div className={styles.allQuestions}>
        <Faq /> 
      </div>

    </div>
  );
}
