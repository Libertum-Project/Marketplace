import style from "./Frame1.module.scss"; 
import house from "./house.png"
import { Link } from "react-router-dom"
import { BiExpand } from "react-icons/bi";

const Frame1 = () => { 
    return(
            <div className={style.mainContainer}>
              <section className={style.section1}>
                <div>
                  <h2>Tokenize your property</h2>
                  <Link> {/* AGREGAR ACA EL LINK A LIST PROPERTY!  */}                  
                  <button>List Now</button>
                  </Link>
                  
                </div>
                <img src={house} alt="house image" />
              </section>


              <section className={style.section2}>
                <div className={style.analizefinances}>
                  <h3>Analyze Your Finances</h3>
                  <Link> {/* AGREGAR ACA EL LINK A YOUR PROPERTIES!  */}
                    <button>See Your Properties ⠿</button>
                  </Link>
                  <Link> {/* AGREGAR ACA EL LINK A PAY DEBT!  */}
                  <button>Pay Debt</button>   
                  </Link>               
                </div>

                <div className={style.buttons}>
                  <div className={style.button1}>
                    <p>Total Debt:</p>
                    <h2>$34.1K</h2>
                  </div>

                  <div className={style.button2}>
                    <p>Total Borrowed:</p>
                    <h2>$34.1K</h2>
                  </div>

                  <div className={style.button3}>
                    <p>Annual Profit:</p>
                    <h2>$34.1K</h2>
                  </div>
                </div>
                
              </section>
            </div>
    )
};


export default Frame1; 