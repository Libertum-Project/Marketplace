import { Slide } from "react-awesome-reveal";
import groupIcon from "./assets/group.svg";
import AlanPhoto from "./assets/Alan.jpg";
import JavvadPhoto from "./assets/Javvad.jpg";
import NicolePhto from "./assets/Nicole.png";
import GuillermoPhoto from "./assets/Guillermo.png";
import './About.scss'


const About = () => {

  const team = [
    // {
    //   id:1,
    //   name: "Alan Gormley",
    //   role: "Co-Founder and COO",
    //   image: AlanPhoto
    // },
    // {
    //   id:2,
    //   name: "Javvad Azam",
    //   role: "Co-Founder and CEO",
    //   image: JavvadPhoto
    // },
    {
      id: 5,
      name:"Christopher Tham",
      role: "Chief Blockchain Office"
    },
    {
      id: 3,
      name: "Guillermo Galarza",
      role: "Full Stack Developer",
      image: GuillermoPhoto

    },
    {
      id: 4,
      name: "Nicole Burgos Vega",
      role: "Front End UX/UI Developer",
      image: NicolePhto

    },
  ]
  return(
    <div className="aboutUsContainer">
      
      <div className='aboutus'>
      <Slide direction={"left"} triggerOnce={false}>
        <section>
          <img src={groupIcon} alt="" />
        </section>
      </Slide>
      
      <Slide direction={"right"} triggerOnce={false}>
        <section>
          <h2> About Us</h2>
          <p>
            Libertum, headquartered in London, England, is poised to revolutionise the real estate industry with an innovative equity ecosystem. The Libertum Platform will tackle the shortcomings of traditional real estate investment models, addressing scalability and accessibility issues. Powered by blockchain technology, Libertum will unite small and large investors with property owners on our global peer to peer platform, granting local property investment opportunities global exposure and opening doors for retail investors worldwide.
          </p>
          <p>
            The next stage in the evolution of real estate investment is here. Libertum will reduce the need for intermediaries, making real estate investment cost-effective and efficient, benefiting both investors and property professionals. This transformation won't eliminate agencies and middlemen; it will transform them, enabling them to leverage the Libertum platform.
          </p>
          <p>
            Libertum's mission is to simplify real estate investment by making it accessible to a global investor community. Our platform will offer trustless, compliant, and borderless connectivity, addressing the rising demand for more accessible and efficient investment opportunities in real estate.
          </p>
        </section>
      </Slide>
      </div>

      <Slide direction={"down"} triggerOnce={false}>
      <div className="phrase">
        <p>
        "Transforming an Exclusive Market into an Inclusive Opportunity for Everyone
        Democratising investment in real estate by breaking barriers, creating opportunities and making it accessible to everyone."
        </p>
      </div>
    </Slide>

    <Slide direction={"down"} triggerOnce={false}>
      <div className="team">
        <section>
          <h2>The team</h2>
          <p>Meet our team</p>
        </section>
        <div className="alanJavvad">
          <div className="card">
                {/* <img src={AlanPhoto} alt={`Photo of Alan`} /> */}
                <p className="name">Alan Gormley</p>
                <p className="role">Co-Founder and COO</p>
          </div>
          <div className="card">
                {/* <img src={JavvadPhoto} alt={`Photo of Alan`} /> */}
                <p className="name">Javvad Azam</p>
                <p className="role">Co-Founder and CEO</p>
          </div>
        </div>

        <section className="teamPictures">

          {team.map((person) => (
            <div key={person.id} className="person">
              {/* <img src={person.image} alt={`Photo of ${person.name}`} /> */}
              <p className="name">{person.name}</p>
              <p className="role">{person.role}</p>
            </div>

          ))}          
        </section>
      </div>
    </Slide>




    </div>
    )
}; 


export default About; 