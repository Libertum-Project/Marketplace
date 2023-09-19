import groupIcon from "./assets/group.svg";
import AlanPhoto from "./assets/Alan.jpg";
import JavvadPhoto from "./assets/Javvad.jpg";
import NicolePhto from "./assets/Nicole.png";
import GuillermoPhoto from "./assets/Guillermo.png";
import './About.scss'


const About = () => {

  const team = [
    {
      id:1,
      name: "Alan Gormley",
      role: "Co-Founder and COO",
      image: AlanPhoto
    },
    {
      id:2,
      name: "Javvad Azam",
      role: "Co-Founder and CEO",
      image: JavvadPhoto
    },
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
        <section>
          <img src={groupIcon} alt="" />
        </section>
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
        
      </div>

      <div className="phrase">
        <p>
        "Transforming an Exclusive Market into an Inclusive Opportunity for Everyone
        Democratising investment in real estate by breaking barriers, creating opportunities and making it accessible to everyone."
        </p>
      </div>

      <div className="team">
        <section>
          <h2>The team</h2>
          <p>Meet our team</p>
        </section>
        <section className="teamPictures">
          {team.map((person) => (
            <div key={person.id} className="person">
              <img src={person.image} alt={`Photo of ${person.name}`} />
              <p className="name">{person.name}</p>
              <p className="role">{person.role}</p>
            </div>

          ))}
          
        </section>
      </div>




    </div>
    )
}; 


export default About; 