import React, { useState, useEffect } from 'react';
import styles from './Faq.module.scss';
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';
import Autosuggest from 'react-autosuggest';
import Principal from '../Principal/Principal';

const QuestionAnswer = ({ pregunta, answer, isActive, onClick }) => (
  <div className={`${styles['faq-item']} ${isActive ? styles.active : ''}`}>
    <div className={styles['faq-question']} onClick={onClick}>
      {pregunta}
      <div className={styles['faq-icon']}>
        {isActive ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
      </div>
    </div>
    {isActive && (
      <div className={styles['faq-answer']}>
        {answer}
      </div>
    )}
  </div>
);

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(null);


  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();

    return inputValue === ''
      ? []
      : startingData.concat(financialData).filter((item) =>
          item.pregunta.toLowerCase().includes(inputValue)
        );
  };

  // Renderizar sugerencias
  const renderSuggestion = (suggestion) => (
    <div>{suggestion.pregunta}</div>
  );

  // Manejar cambios en el input de búsqueda
  const onChange = (event, { newValue }) => {
    setSearchTerm(newValue);
  };

  // Actualizar sugerencias al escribir
  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  // Limpiar sugerencias al borrar el input
  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    setSelectedSuggestion(suggestion);
  };

  useEffect(() => {
    // Cuando se selecciona una sugerencia, encontrar su índice en los datos
    if (selectedSuggestion) {
      const selectedIndex = startingData.concat(financialData).findIndex(
        (item) => item.pregunta === selectedSuggestion.pregunta
      );
      setActiveIndex(selectedIndex);
    }
  }, [selectedSuggestion]);

   //  Autosuggest configuration
   const inputProps = {
    placeholder: 'How to...?',
    value: searchTerm,
    onChange: onChange,
    style: {
      width: '500px', // Cambia el ancho según tus necesidades
      height: '40px', // Cambia el alto según tus necesidades
      border: 'none', // Elimina el borde
      outline: 'none', // Elimina el contorno cuando se enfoca
    }
  };

  const startingData = [
    {
      pregunta: "How do I begin investing?",
      answer: "To begin your investment journey, follow these simple steps:\n\n1. Log in to your account.\n2. Explore the marketplace to discover various investment opportunities.\n3. Take your time to research and understand the options available.\n4. When you're ready, select the investment that aligns with your goals and risk tolerance.\n\nIt's that easy to get started with us!",
    },
    {
      pregunta: "I don’t have an account yet",
      answer: "No worries, creating an account with us is a straightforward process. Here's how you can do it:\n\n1. Visit our website.\n2. Click on the 'Sign Up' or 'Create Account' button.\n3. Fill in the required information, such as your name, email address, and password.\n4. Alternatively, you can also choose to log in using your Google credentials for added convenience.\n\nOnce your account is created, you'll be able to explore our marketplace and start your investment journey.",
    },
  ];

  const financialData = [
    {
      pregunta: "What is Passive income?",
      answer: "answer",
    },
    {
      pregunta: "What is Capital Repayment?",
      answer: "answer"
    }
  ];

  return (
    <div className={styles.container}>

      <div className={styles.searchContainer}>
        <div className={styles.input}> 
            <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={(suggestion) => suggestion.pregunta}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />
      </div>
      <button className={styles.button} onClick={getSuggestions}>🔍</button>   

      </div>   

      <div>
       <Principal />
      </div>

      <h2>Getting started...</h2>
      {startingData.map((item, index) => (
        <QuestionAnswer
          key={index}
          pregunta={item.pregunta}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}

      <h2>Financials...</h2>
      {financialData.map((item, index) => (
        <QuestionAnswer
          key={index}
          pregunta={item.pregunta}
          answer={item.answer}
          isActive={activeIndex === index + startingData.length}
          onClick={() => toggleAccordion(index + startingData.length)}
        />
      ))}
    </div>
  );
};

export default Faq;
