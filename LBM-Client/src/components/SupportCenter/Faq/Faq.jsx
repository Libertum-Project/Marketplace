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
      // width: '500px', // Cambia el ancho según tus necesidades
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
    {
      pregunta: "I forgot my credentials",
      answer: "answer"
    },
    {
      pregunta: "Can I use my account on multiple devices?",
      answer: "Of course, you can access to your investments anywhere and at every time, from your PC, tablet or even your mobile."
    }
  ];

  const financialData = [
    {
      pregunta: "What is Passive income?",
      answer: "Passive income is earnings derived from a rental property, limited partnership, or other enterprise in which a person is not actively involved. It is called 'passive' because the individual does not need to be actively working to earn the income."
    },
    {
      pregunta: "What is Capital Repayment?",
      answer: "Capital repayment refers to the process of paying back the original amount borrowed or invested in a financial instrument or loan. It does not include any interest or profits earned; it simply returns the initial capital."
    },
    {
      pregunta: "What is real estate tokenization?",
      answer: "Real estate tokenization is the process of converting ownership or rights to a real estate property into digital tokens on a blockchain. These tokens represent ownership shares in the property and can be bought, sold, or traded. It allows for fractional ownership, making it easier for investors to enter the real estate market."
    },
    {
      pregunta: "How is a property valued before tokenization?",
      answer: "Before tokenization, a property is typically valued using traditional real estate appraisal methods. This involves assessing factors such as the property's location, size, condition, comparable sales in the area, and other relevant market data. Appraisers use these factors to determine the property's market value."
    },
    {
      pregunta: "What is a real estate token and how does it work?",
      answer: "A real estate token is a digital representation of ownership in a real estate property. It works by utilizing blockchain technology to create and manage these tokens. Each token corresponds to a share of ownership in the property. These tokens can be bought, sold, and traded on blockchain-based platforms, providing liquidity and flexibility to real estate investors."
    },
    {
      pregunta: "How are real estate tokens issued?",
      answer: "Real estate tokens are typically issued through a process known as tokenization. This involves ..."
    },
    {
      pregunta: "How can I buy real estate tokens on the platform?",
      answer: "To buy real estate tokens on the platform, you  need to create an account, complete any required identity verification. You can browse the available real estate tokens on the platform, select the ones you want to purchase, and execute the buy order..."
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

      <h2>Getting started</h2>
      <p>Answer you initial doubts!</p>
      {startingData.map((item, index) => (
        <QuestionAnswer
          key={index}
          pregunta={item.pregunta}
          answer={item.answer}
          isActive={activeIndex === index}
          onClick={() => toggleAccordion(index)}
        />
      ))}

      <h2>Financials</h2>
      <p>Get to know and understand everything about investments</p>
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
