import { Link as Scroll } from "react-scroll";
import { Link } from "react-router-dom";
// import logo from "../../Landing/assets/logo.svg";
import logo  from "../../Landing/assets/LibertumColor.png";
import css from "./Footer.module.css";
import pdf from "../../Landing/assets/LBM-whitepaper.pdf";
import { networks } from "../../Landing/networks";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <img src={logo} alt="Libertum" className={ css.image}/>
      <div className={css.text}>
        <p>
        Libertum is a decentralized finance algorithmic market protocol that will make DeFi adoption make sense by introducing real collateral.
        </p>
        <i>© 2023 Libertum Protocol</i>
      </div>

      <div className={css.links}>
        <div className={css.navigation}>
          <Link to="/">HOME</Link>
          <Link
            to={pdf}
            target="_blank"
            rel="noopener noreferrer"
            download="LBM-whitepaper.pdf"
          >
            WHITEPAPER
          </Link>
          {/* <Link to="/">PRODUCT</Link> */}
        
          <a
            href="https://www.linkedin.com/company/libertum1"
            target="_blank"
            rel="noreferrer"
          >
            I WANT TO BE PART
          </a>

          <a href="/marketplace" rel="noreferrer">
              MARKETPLACE
          </a>

          <a href="/support" rel="noreferrer">
              FAQs
          </a>

          <Link to="contact" smooth={true} duration={1000} className="menu-a_items">
              CONTACT
            </Link>

        </div>
        <div className={css.socialmedia}>
          {networks.map(({ net, href }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noreferrer"
            >
              <img src={net} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
