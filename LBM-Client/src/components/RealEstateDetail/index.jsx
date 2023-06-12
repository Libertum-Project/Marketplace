import css from "./index.module.scss";
import { useParams, useNavigate } from "react-router-dom";
import db from "../RealEstates/fakedb/db.json";
import heartMobile from "../../assets/heart--movile.svg";
import shareIcon from "../../assets/share.svg";
import backIcon from "../../assets/vector.svg";
import starIcon from "../../assets/star.svg";
import avatar from "../../assets/avatar.svg";
import right from "../../assets/right.svg";
import sharePC from "../../assets/share--pc.svg";
import save from "../../assets/save.svg";
import showAll from "../../assets/showAll.svg";
import ModalFilter from "../MarketPlace/ModalFilter/ModalFilter.jsx";
import CardPreview from "./CardPreviewDetails.jsx";
import Footer from "../RealEstates/Footer/Footer.jsx";
import Aboutproperty from "./Aboutproperty";
import Buy from "./Buy";


const Index = () => {
  const navigate = useNavigate();
  const number = useParams();
  const land = db.find((item) => item.number === number.id);

  return (
    <div className={css.details}>
      <img src={land.image} alt="Land" className={css.detailsImage} />
      <div className={css.navMobile}> 
        <img
          src={backIcon}
          alt="back icon"
          onClick={() => navigate("/realestate")}
        />
        <div className={css.navMobileItems}>
          <div>
            <img src={shareIcon} alt="Share" />
            <p>Share</p>
          </div>
          <div>
            <img src={heartMobile} alt="Heart" />
            <p>Like</p>
          </div>
        </div>
      </div>

      <header className={css.header}>
        <h2>{land.location}</h2>
        <div className={css.headerText}>
          <p>{land.address}</p>
        <div className={css.headerBtns}>
            <img src={sharePC} alt="share" />
            <img src={save} alt="save" />
          </div>
        </div>
        <img src={avatar} alt="Person" className={css.avatar} />
      </header>

      <section className={css.mosaic}>
        <img src={land.image} alt="" />
        <div className={css.otherImages}>
          <img src={land.image2} alt="Land" />
          <img src={land.image3} alt="Land" />
          <img src={land.image4} alt="Land" />
          <img src={land.image5} alt="Land" />
        </div>
        
      </section>

      <div className={css.info}>
        <h2>Entire rental unit hosted by Ghazal</h2>

        
          
       
       <p className=" text-xl text-left mt-3 mb-[-1rem]">ABOUT THE PROPERTY</p>
        <p className={css.description}>
          
          Come and stay in this superb duplex T2, in the heart of the historic
          center of Bordeaux. Spacious and bright, in a real Bordeaux building
          in exposed stone, you will enjoy all the charms of the city thanks to
          its ideal location. Close to many shops, bars and restaurants, you can
          access the apartment by tram A and C and bus routes 27 and 44. <br />{" "}
          
        </p>
        
        
      </div>

     

      <div className="flex w-full ">
        <Aboutproperty 
        id = {land.id} 
        image = {land.image}
        number = {land.number}                
        value={land.price}
        Tokenised={land.Tokenised}
        PRY={land.PRY}
        AvailablesNFT={land.AvailablesNFT}
        PIT={land.PIT}
        address={land.address}
        location={land.location}
        NFTPrice = {land.NFTPrice} 
        amenities = {land.amenities}      
        rooms = {land.rooms}
        guests = {land.guests}
        
        
        />        
       
       <div className="fixed bottom-4 right-16">
       
       <Buy
          id = {land.id} 
          image = {land.image}
          number = {land.number}                
          value={land.price}
          Tokenised={land.Tokenised}
          PRY={land.PRY}
          AvailablesNFT={land.AvailablesNFT}
          PIT={land.PIT}
          address={land.address}
          location={land.location}
          NFTPrice = {land.NFTPrice}
          />

       </div>
        

      </div>

      <div> 
      </div>


    <Footer />

      
    </div>
  );
};

export default Index;
