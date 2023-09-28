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
            At Libertum, we transform properties into digital assets and divide them into smaller fractions on the blockchain. Each fraction represents a portion of monthly rental income, revolutionizing the way we approach investing.
          </p>
          <p>
            With Libertum, you can invest just $50 and start earning monthly income on your investment, all while seeing your capital grow. And the best part? You won't have to worry about unexpected maintenance costs like insurance or repairs. It's a win-win situation for everyone!
          </p>
          <p>
            Our peer-to-peer marketplace is the one and only platform in the blockchain where you can easily sell your shares of digital property. We're shaping the future of fractional real estate trading and investment.
          </p>
          <p>
          Our peer-to-peer marketplace is the one and only platform in the blockchain where you can easily sell your shares of digital property. We're shaping the future of fractional real estate trading and investment.
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