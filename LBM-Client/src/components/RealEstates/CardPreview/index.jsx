import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SaveProperty from "../../SaveProperty/SaveProperty";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss"

const Index = (props) => {
  const {
    id,
    address,
    image,
    image2,
    image3,
    image4,
    image5,
    location,
    PIT,
    PRY,
    tokenised,
    NFTPrice,
    AvailablesNFT,
    price,
    capital,
    country
  } = props;

  // ---------------- IMAGES CARROUSEL -------------------------------
  const images = [image, image2, image3, image4, image5];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const capitalRepayment = (100/capital).toFixed(2)
  const fundedBar = 32
  

  return (

    <div className="card-container">

      <div className="card-image-container">
      <Link  to={`/marketplace/${id}`}>
        <img src={image} alt="property image" />
      </Link>
      
      <div className="card-progress">
        <progress max="100" value={fundedBar}></progress>
        <div className="progress-text">{fundedBar}% Funded</div>
      </div>

      <Slider {...sliderSettings}>
          {images.map((img, index) => (
            <div key={index}>
              <Link to={`/marketplace/${id}`}>
                <img src={img} alt={`Image ${index}`} />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      <div className="card-content">
        <div className="card-content-header">
          <div className="card-content-header-title">
            <h3>{location} · {country}</h3>
            <h2>{address}</h2>
          </div>
          <p>Proyected rental yield {PRY} % </p>
          {capital ? <p>Annual repayment up to 12.2%</p> : null} 
          
          <SaveProperty propertyId={props.id} />
        </div>
        <div className="card-content-columns">
          <div className="card-content-details">
            <h5>1400  <span>tokens for sale</span></h5>
            <h5>$50  <span>each token</span></h5>
            <p>Rental Income per token: ${PIT} </p>
            {capital ? <p>Capital Repayment: {capitalRepayment} % </p> : null}            
            {capital ? <p>Capital Repayment Duration: {Math.floor(capital)} years</p> : null}
          </div>

          <div className="card-content-price">
            <p>${price.toLocaleString('en-US')}</p>
          </div>



        </div>

      </div>

    </div>
  );
};
export default Index;
