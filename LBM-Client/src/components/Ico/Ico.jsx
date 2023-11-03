import { Slide } from "react-awesome-reveal";
import Hero from "./Hero";
import PresaleGrid from "./Presale";
import Join from "./Join";
import HowToBuy from "./HowToBuy";
import HowToClaim from "./HowToClaim";
import WhyLBM from "./WhyLBM";
import Faq from "./Faq";
import Roadmap from "./Roadmap";
import AllocationChart from "./AllocationChart";

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
    padding: '0 2px',

   };

  return (
    <div>
    <Slide direction={"up"} triggerOnce={true}>
      <Hero />
    </Slide>

    <Slide direction={"left"} triggerOnce={true}>
      <h2 style={headingStyle}>UPCOMING EVENTS</h2>
      <PresaleGrid />
    </Slide>

    <Slide direction={"up"} triggerOnce={true}>
      <Join />    
    </Slide>


      <h2 style={headingStyle}>HOW TO BUY?</h2>
      <HowToBuy />


    <Slide direction={"up"} triggerOnce={true}>
      <h2 style={headingStyle}>HOW TO CLAIM $LBM TOKENS?</h2>
      <HowToClaim />
    </Slide>

    <Slide direction={"up"} triggerOnce={true}>
      <AllocationChart />
    </Slide>

    <Slide direction={"right"} triggerOnce={true}>
      <h2 style={headingStyle}>WHY $LBM TOKENS?</h2>
      <WhyLBM />
    </Slide>

    <Slide direction={"up"} triggerOnce={true}>
      <Join />    
    </Slide>

    <Slide direction={"up"} triggerOnce={true}>
      <h2 style={headingStyle}>ROAD MAP</h2>
      <Roadmap />
    </Slide>

    <Slide direction={"up"} triggerOnce={true}>
      <h2 style={headingStyle}>FAQs</h2>
      <Faq />    
    </Slide>




    </div>
  );
};

export default Ico;
