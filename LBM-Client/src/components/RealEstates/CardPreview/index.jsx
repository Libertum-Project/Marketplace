import style from "./indexnew.module.scss"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { saveProperty, deleteProperty } from "../../../../redux/features/userSlice";
import { useAuth0 } from "@auth0/auth0-react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Index = (props) => {
  const { id, address, image, image2, image3, image4, image5, location, PIT, PRY, tokenised, NFTPrice, AvailablesNFT, price, capital } = props;
  const { user } = useAuth0();

  const [propertySaved, setPropertySaved] = useState(false);

  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  // console.log('CURRENT USER:', currentUser);
  // console.log('PROPERTY TO SAVE:', id);

  const handleSaveProperty = () => {
    const userId = currentUser.ID_user;
    const propertyId = id;
  
    if (userId && propertyId) {
      if (propertySaved) {
        dispatch(deleteProperty(propertyId)); 
        setPropertySaved(false);
      } else {        
        const propertyData = {
          userId,
          propertyId,
          address,
          image,
          location,
          PIT,
          PRY,
          tokenised,
          NFTPrice,
          AvailablesNFT,
          price,
          capital,
        };
        dispatch(saveProperty(propertyData)); 
        setPropertySaved(true);
      }
    } else {
      console.error("No se pudo obtener userId o propertyId");
    }
  };


  // ---------------- IMAGES CARROUSEL -------------------------------
  const images = [image, image2, image3, image4, image5];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // Puedes agregar más opciones aquí según tus necesidades
  };


  return (
    <div className={style.container}>

      <div className={style.imageContainer}>
        {/* <Link  to={`/marketplace/${id}`}>        
          <img src={image} alt="image of the property" />        
        </Link> */}

          <Slider {...sliderSettings}>
    {images.map((img, index) => (
      <div key={index}>
        <Link to={`/marketplace/${id}`}>
          <img src={img} alt={`Image ${index}`} />
        </Link>
      </div>
    ))}
  </Slider>



        <div className={style.funded}>
          <div className={style.informacion}>
            <div className={style.progressBar}></div>
            <div className={style.fundedtext}>44 % funded</div>            
          </div>  
        </div>
         { capital ?        ( <div className={style.capital}>                   
                              <div className={style.capitaltext}> Cap + PI </div>      
                             </div>)
                  : null }

      </div>
      
        <div className={style.content}>
          <div className={style.header}>
            <div className={style.titleSubtitle}>
              <h3>{location}</h3>
              <p>{address}</p>
            </div>   

            <div className={style.saveIcon} onClick={() => handleSaveProperty()}>
              {propertySaved ? <BsBookmarkFill /> : <BsBookmark />}
            </div>

            {/* <div className={style.saveIcon}>
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23 5H9C7.346 5 6 6.346 6 8V27C6.00006 27.1872 6.05265 27.3706 6.15179 27.5294C6.25094 27.6881 6.39265 27.8159 6.56082 27.8981C6.72898 27.9803 6.91685 28.0137 7.10303 27.9944C7.28922 27.9751 7.46626 27.9039 7.614 27.789L16 21.267L24.386 27.789C24.5335 27.9043 24.7106 27.9757 24.8968 27.995C25.0831 28.0143 25.271 27.9806 25.439 27.898C25.6072 27.8158 25.7489 27.6881 25.8481 27.5293C25.9473 27.3706 25.9999 27.1872 26 27V8C26 6.346 24.654 5 23 5ZM24 24.956L16.614 19.211C16.4386 19.0741 16.2226 18.9997 16.0002 18.9995C15.7777 18.9994 15.5616 19.0734 15.386 19.21L8 24.956V8C8 7.449 8.449 7 9 7H23C23.551 7 24 7.449 24 8V24.956Z" fill="black"/>
            </svg> */}
            {/* </div>             */}
          </div>

          <div className={style.description}>
            <p>Pasive Income per Token: ${PIT} </p>
            <p>Projected Rental Yield: {PRY} % </p>
            <p> Property Tokenised: {tokenised}%</p>
            {capital ? (
              <p>Capital Repayment Duration: {capital} years</p>
              ) : null}
          </div>

          <div className={style.rating}>

          <div className={style.nfts}>
          <p>Token Price: <span> $ 50 </span> ·</p>
          <p>Available Tokens:<span>{AvailablesNFT}</span></p>
          </div>      
          <div className={style.price}>
                    <p>Property Value:</p>
                    <i>${price}</i>
          </div> 
          </div>     
       </div>

       
      </div>
   
  )}
export default Index;

