import { useState } from "react";
import Icons from "./IconsAmenities/Icons";
import Details from "./Details";
import Financials from "./Financials/Financials";
import Documents from "./documents/Documents";
import InvestmentGuide from "./BuyingProcess";
import style from "./Aboutproperty.module.scss";
import { HiOutlineChevronDown, HiOutlineChevronUp } from 'react-icons/hi';

const Accordion = ({ title, content, isFirst }) => {
  const [isActive, setIsActive] = useState(isFirst);

  const toggleAccordion = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${style.accordionItem} ${isActive ? style.active : style.inactive}`}>
      <div className={`${style.accordionTitle} ${isActive ? style.openTitle : style.closedTitle}`} onClick={toggleAccordion}>         
        {title}
        <div className={style.accordionIcon}>
            {isActive ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
        </div>
      </div>
      {isActive && <div className={style.accordionContent}>{content}</div>}
    </div>
  );
};



const Aboutproperty = ({
  Square_foot,
  capital,
  more,
  map,
  image,
  number,
  address,
  location,
  PIT,
  PRY,
  AvailablesNFT,
  amenities,
  rooms,
  guests,
  value,
  Tokenised,
  NFTPrice,
  description,
  type,
}) => {

  

  return (
    <div className={style.container}>
      <div className={style.column1}>
        <div className={style.about} >
          <p className={style.about}>ABOUT THE PROPERTY</p> 
          <Icons amenities ={amenities} rooms = {rooms} squarefoot = {Square_foot} withParagraph={true}/>
          <p className={style.description}>{description} </p>
        </div>
          
        <div className={style.accordion}>
          <Accordion 
          title="Details" 
          content={<Details  
              more={more}
              map={map}
              number={number}
              address={address}
              location={location}
              amenities={amenities}
              rooms={rooms}
              guests={guests}
              value={value}
              description={description}
              type={type}
          />} 
          />
          <Accordion 
          title="Financials" 
          content={<Financials 
              PRY={PRY}
              // funded = {funded}
              value={value}
              AvailablesNFT={AvailablesNFT}
              NFTPrice={NFTPrice}
              capital={capital}
          />} 
          />

          <Accordion 
          title="Documents" 
          content={<Documents />}
          />

          <Accordion 
          title="Buying Process" 
          content={<InvestmentGuide/>} 
          />
        </div>
      </div>
    </div>
  );
};

export default Aboutproperty;
