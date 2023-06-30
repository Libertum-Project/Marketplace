import css from "./index.module.scss";
import style from "./indexnew.module.scss"
import starIcon from "../../../assets/star.svg";
import heartIconMobile from "../../../assets/heart--movile.svg";
import heartIconPc from "../../../assets/heart--pc.svg";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";

const Index = (props) => {
  const { number, image, address, location, PIT, PRY, tokenised, NFTPrice, AvailablesNFT, price } = props;


 
  return (
    <div className={style.container}>
     

      <div className={style.imageContainer}>
        <Link className={css.link} to={`/marketplace/${number}`}>        
          <img src={image} alt="image of the property" />        
        </Link>
        <div className={style.funded}>
          <div className={style.informacion}>
            <div className={style.progressBar}></div>
            <div className={style.fundedtext}>44 % funded</div>            
          </div>  
        </div>
      </div>
        <div className={style.content}>
        <div className={style.header}>
          <div className={style.titleSubtitle}>
            <h3>{location}</h3>
            <p>{address}</p>
          </div>   

          {/* <div className={style.capitalReturnContainer}>
          <svg width="89" height="22" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 11C0 4.92487 4.92487 0 11 0H78C84.0751 0 89 4.92487 89 11V11C89 17.0751 84.0751 22 78 22H11C4.92487 22 0 17.0751 0 11V11Z" fill="#F7931A"/>          
          </svg>
          <p>CAPITAL RETURN</p>
          
          </div>      

          <div className={style.passiveIncomeContainer}>
          <svg width="89" height="22" viewBox="0 0 89 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 11C0 4.92487 4.92487 0 11 0H78C84.0751 0 89 4.92487 89 11V11C89 17.0751 84.0751 22 78 22H11C4.92487 22 0 17.0751 0 11V11Z" fill="#F7931A"/>          
          </svg>
          <p>PASSIVE INCOME</p>
          </div>   */}

          <div className={style.saveIcon}>
            <BsBookmark />
          </div>            
        </div>

        <div className={style.description}>
          <p>Pasive Income per Token: ${PIT} </p>
          <p>Projected Rental Yield: ${PRY}</p>
          <p> Property Tokenised: {tokenised}%</p>

        </div>

        <div className={style.rating}>

        <div className={style.nfts}>
        <p>NFT Price: <span>{NFTPrice}</span> ·</p>
        <p>Available NFTs:<span>{AvailablesNFT}</span></p>   

        </div>
    
           <div className={style.price}>
                  <p>Property Value:</p>
                  <i>${price}</i>
          </div> 
        </div>


     
       </div>



      </div>
   
  )}




//     <div className={css.card}>
//       <div className={css.header}>

//       </div>
//       <Link className={css.link} to={`/marketplace/${number}`}>        
//           <img src={image} alt="image of the property" />        
//       </Link>
//       <div className={css.info}>
//         <div className={css.title}>
//           <h3>{address}</h3>
//           <p>{location}</p>
//         </div>

//         <div className={css.description}>
//           <p>
//             Pasive Income per Token: ${PIT}
//             <br />
//             Projected Rental Yield: ${PRY}
//             <br />
//             Property Tokenised: {tokenised}%
//           </p>
//         </div>
//         <div className={css.rating}>
//           <p>
//             NFT Price: <span>{NFTPrice}</span> ·
//           </p>
//           <p>
//             Available NFTs:<span>{AvailablesNFT}</span>
//           </p>
//         </div>
//       </div>
//       <div className={css.price}>
//         <p>Property Value:</p>
//         <i>${price}</i>
//       </div>
//       <i className={css.heartIconMobile}>
//       < BsBookmarkFill />
//       </i>
//       <i className={css.heartIconPc}>

//       <BsBookmark />
//       </i>
//     </div>
//   );
// };

export default Index;

