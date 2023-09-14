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
      width: '100%', // Cambia el ancho según tus necesidades
      height: '40px', // Cambia el alto según tus necesidades
      border: 'none', // Elimina el borde
      outline: 'none', // Elimina el contorno cuando se enfoca
    }
  };

  const startingData = [
    {
      pregunta: "How do I begin investing?",
      answer: (
        <ul>
          <li>To begin your investment journey, follow these simple steps:</li>
          <li>1. Log in to your account.</li>
          <li>2. Explore the marketplace to discover various investment opportunities.</li>
          <li>3. Take your time to research and understand the options available.</li>
          <li>4. When you're ready, select the investment that aligns with your goals and risk tolerance.</li>
        </ul>
      ),
    },
    {
      pregunta: "I don’t have an account yet",
      answer: (        
        <ul>
          <li>No worries, creating an account with us is a straightforward process. Here's how you can do it:</li>
          <li>1. Visit our website.</li>
          <li>2. Click on the 'Sign Up' or 'Create Account' button.</li>
          <li>3. Fill in the required information, such as your name, email address, and password.</li>
          <li>4. Alternatively, you can also choose to log in using your Google credentials for added convenience.</li>
          <li>5. Once your account is created, you'll be able to explore our marketplace and start your investment journey.</li>
        </ul>
      ),
    },
    {
      pregunta: "I forgot my credentials",
      answer: "If you've forgotten your credentials, you can click on the 'Forgot Password' link on the login page. Follow the instructions provided to reset your password. If you're still having trouble, please contact our support team for further assistance."
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
    // {
    //   pregunta: "How are real estate tokens issued?",
    //   answer: "Real estate tokens are typically issued through a process known as tokenization. This involves ..."
    // },
    {
      pregunta: "How can I buy real estate tokens on the platform?",
      answer: "To buy real estate tokens on the platform, you  need to create an account, complete any required identity verification. You can browse the available real estate tokens on the platform, select the ones you want to purchase, and execute the buy order..."
    }
  ];

  const aboutLibertum = [
    {
      pregunta: "What is Libertum?",
      answer: (
        <ul>
          <li>Our mission is to make real estate investment accessible to everyone.</li>
          <br />
          <li>Traditionally, real estate has been exclusive to the wealthy, but we believe that everyone should have the opportunity to participateWhether you want to own an entire property or just a fraction of it, we provide the means for you to earn rental
          income in proportion to your ownership.
          To achieve this, we convert properties into digital assets and break them into
          smaller fractions on the blockchain. Each fraction represents a slice of monthly
          rental income, revolutionizing the way we think about investment.</li>
          <li>
            <br />
          There are three primary reasons why people invest in real estate:
          </li>
          <li> • To earn passive income through rent.</li>
          <li> • For future security and a hedge against any risk</li>
          <li> • To see their capital appreciate over time.</li>
          <br />
          <li>
          With Libertum, you can invest as little as $50 and start earning monthly income
          on your investment, while also watching your capital grow. The best part? You
          won't have to worry about unexpected maintenance costs like insurance or
          repairs. It's a win-win situation for all!
          </li>
          <br />
          <li>
          Our peer-to-peer marketplace is the only platform in the blockchain where you
          can easily sell your shares of digital property. We're shaping the future of
          fractional real estate trading and investment.
          </li>
          <br />
          <li>
          The key difference between Libertum and other platforms is that we offer monthly
          rental income, rather than annual dividends that can be easily manipulated in our
          opinion.
          </li>

        </ul>
      ),
    },
    {
      pregunta: "What are the benefits of using the Libertum platform?",
      answer: (
        <ul>
          <li>By dividing real estate assets into tradable tokens, investors can now buy, sell, and trade ownership stakes in properties.</li>
          <li>This groundbreaking approach offers a multitude of benefits...</li>
        </ul>
      ),
    },
    {
      pregunta: "What are the benefits for the borrowers?",
      answer: (
        <ul>
          <li>• Access to low-cost capital,</li>
          <li>• Interest-free financing,</li>
          <li>• Streamlined process,</li>
          <li>• High liquidity options.</li>
        </ul>
      ),
    },
    {
      pregunta: "What are the benefits for the investors?",
      answer: (
        <ul>
          <li>• Guaranteed passive income,</li>
          <li>• Rental income-based returns,</li>
          <li>• No barriers to entry,</li>
          <li>• Authentic digital ownership of properties.</li>
        </ul>
      ),
    },
    {
      pregunta: "What types of investment opportunities do Libertum Offer?",
      answer: (
        <ul>
          <li>Libertum offers a variety of real estate in the marketplace. A few examples are as below:</li>
          <li> • Commercial</li>
          <li> • Residential</li>
          <li> • Hotels</li>
          <li> • Green / Sustainable</li>
          <li> • Development Fund</li>
          <li> • Agriculture</li>
          <li> • High Yield</li>
          <li> • Industrial</li>
          <li> • Farm House</li>
          <li> • Boat House</li>
          {/* <li> • Help Build Ukraine Properties</li> */}
        </ul>
      ),
    },
    {
      pregunta: "Where is the company located?",
      answer: "Libertum is located in The United Kingdom and The United Arab Emirates."
    },
    {
      pregunta: "How does Libertum handle potential disputes between property owners and investors? Is there a resolution mechanism in place?",
      answer: (
        <ul>
          <li>The property owner and investor have no direct interaction.</li>
          <li>Instead, they both work with Libertum, who facilitates transactions through smart contracts.</li>
          <li>Investors are paid by Libertum who are responsible for collecting rental income from borrowers.</li>
          <li>To ensure timely payments, Libertum holds the property as collateral, offering a guaranteed monthly passive income.</li>
        </ul>
      ),
    },
    {
      pregunta: "What measures does Libertum take to ensure the properties listed on the platform are legitimate and offer good investment value?",
      answer: (
        <ul>
          <li>Libertum conducts thorough property ownership audits with borrowers and utilizes the property as collateral along with legal charges to secure guaranteed and timely rental income payments for investors.</li>
          <li>All relevant documents are conveniently stored under the property listing in the document section.</li>
        </ul>
      ),
    },
    {
      pregunta: "How does the fixed income for investors get determined? Is it based on market rates, property value, or another metric?",
      answer: (
        <ul>
          <li>Libertum will conduct a thorough rental survey of the property to determine its rental value.</li>
          <li>The property will then be divided into multiple tokens, with each token valued at $50 and representing a guaranteed rental income.</li>
          <li>By dividing the rental value by the number of tokens, we can determine the passive income per token.</li>
        </ul>
      ),
    },
    {
      pregunta: "Given that Libertum acts as a guarantor, how does the platform manage risks, especially in cases where either the property owner or the investor defaults or breaches the contract?",
      answer: (
        <ul>
          <li>At Libertum, we perform comprehensive property ownership audits to protect both borrowers and investors.</li>
          <li>By using the property as collateral and implementing necessary legal charges, we ensure guaranteed and timely rental income payments.</li>
          <li>All essential documents are conveniently stored under the property listing for easy access.</li>
        </ul>
      ),
    },
    {
      pregunta: "How does Libertum tokenisation process work?",
      answer: (
        <ul>
          <li>At Libertum, we transform property into valuable digital assets in the form of non-fungible tokens.</li>
          <li>This token is then divided into multiple fractions on the Blockchain, with each fraction corresponding to an agreed rental income.</li>
        </ul>
      ),
    },
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

    <h2>About Libertum</h2>
      <p>FAQs about the company</p>
      {aboutLibertum.map((item, index) => (
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
