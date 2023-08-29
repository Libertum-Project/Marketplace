import css from "./Coin.module.scss";
const Header = () => {
  return (
     <div className={css.timerHeader}>
       
        <h2> 
          Get ready for {""}
          <span className={css.span1}>$ LBM</span> {""}  
          <span className={css.span2}>!</span> {""}
          <span className={css.span1}></span> {" "}
                   
        </h2>
        {/* <p></p> */}
      </div> 
      )
}; 

export default Header; 