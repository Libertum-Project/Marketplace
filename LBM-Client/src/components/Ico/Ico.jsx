import { Slide } from "react-awesome-reveal";
import Hero from "./Hero";
import PresaleGrid from "./Presale";
import Join from "./Join";
import HowToBuy from "./HowToBuy";
import HowToClaim from "./HowToClaim";

const Ico = () => {
  const headingStyle = {
    color: '#414141',
    textAlign: 'center',
    fontFamily: 'Montserrat',
    fontSize: '2.75rem',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
    letterSpacing: '1rem',
    marginTop: '5rem',
    marginBottom: '2rem',

   };

  return (
    <div>
    <Slide direction={"up"} triggerOnce={true}>
      <Hero />
    </Slide>

    <Slide direction={"left"} triggerOnce={false}>
      <h2 style={headingStyle}>UPCOMING EVENTS</h2>
      <PresaleGrid />
    </Slide>

    <Slide direction={"up"} triggerOnce={false}>
      <Join />    
    </Slide>

    <Slide direction={"up"} triggerOnce={true}>
      <h2 style={headingStyle}>HOW TO BUY?</h2>
      <HowToBuy />
    </Slide>

    <Slide direction={"up"} triggerOnce={true}>
      <h2 style={headingStyle}>HOW TO CLAIM LBM TOKENS?</h2>
      <HowToClaim />
    </Slide>

    </div>
  );
};

export default Ico;
