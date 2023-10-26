import './Hero.scss'; 
import { Slide } from "react-awesome-reveal";

const Hero = () => {


  return(
    <div>
      <div className='first-container'>
        <section className='title'>
          <h2>Transforming an exclusive market into an Inclusive opportunity for Everyone!</h2>
          <h3>Get your LBM Tokens now!</h3>
          <Slide direction={"left"} triggerOnce={true}>
            <section className='text'>
              <p>Don't miss out on your chance to be a part of the inclusive revolution in the real estate market. Start earning a steady rental income every month, hassle-free, and without any additional maintenance costs.</p>
              <p>By purchasing $LBM tokens, you are joining a movement that seeks to democratise and transform the landscape of fractionalised rental income investments. join us in creating a more inclusive world for all.</p>
            </section>
          </Slide>
        </section>
        <Slide direction={"down"} triggerOnce={false}>
        <section className='box'>
          <h4>Next Phase Price: $0.028</h4>
          <p className='first'>SOLD 2.345.534/5.000.000 $LBM</p>
          <p className='second'>40% Disscount Community Sale ends soon</p>

          <div className='exchange-box'>
            <h3>Community Pre-Sale</h3>
            <p>1 LBM = 0.024 USD</p>

            <div className='exchange-box-coins'>              
              <div className='exchange-buttons'>
                <input type="text" />
                <p>LBM</p>
              </div>

              <div className='exchange-buttons'>
                <input type="text" />
                <p>USD</p>
              </div>
            </div>

            <button className='connect-wallet'>Connect Wallet</button>
          </div>
        </section>
        </Slide>


      </div>

    </div>
  )

}; 

export default Hero; 