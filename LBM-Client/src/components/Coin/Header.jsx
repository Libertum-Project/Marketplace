import css from "./Coin.module.scss";
const Header = () => {
  return (
     <div className={css.timerHeader}>
       
        <h2> 
          Get ready for the{" "}
          <span className={css.span1}>LBM </span> {" "}  
          <span className={css.span2}>Coin</span> {" "}
          <span className={css.span1}>release!</span> {" "}
                   
        </h2>
        {/* <p></p> */}
      </div> 
      )
}; 

export default Header; 