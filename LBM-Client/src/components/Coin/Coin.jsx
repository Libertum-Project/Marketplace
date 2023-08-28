
import css from "./Coin.module.scss";
import Header from "./Header";
import Timer from "./Timer";
import ContactForm from "../Landing/Subscribe/ContactForm";

const CoinPage = () => {


return(
  <div className={css.timerCointainer}  >
    <Header />
    <Timer />

  <div>
    <div className={css.cs_form}>
        <ContactForm />
    </div>
  </div>

  </div>
)
};

export default CoinPage;
