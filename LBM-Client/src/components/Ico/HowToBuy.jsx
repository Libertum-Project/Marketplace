
import circleIcon from './assets/circle.svg'
import './HowToBuy.scss'


const Card = (
  { 
  icon, 
  title, 
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
  paragraph5,
  step
}
) => {
    
  return (
    <div className="card-buy">
      <div className="image-buy">{icon}</div>
      <div className='step'>{step}</div>      
      <h3 className="title-buy">{title}</h3>
      <p className='text-buy'>{paragraph1}</p>
      <p className='text-buy'>{paragraph2}</p>
      <p className='text-buy'>{paragraph3}</p>
      <p className='text-buy-5'>{paragraph4}</p>
      <p className='text-buy-5'>{paragraph5}</p>
    </div>
  );
};

const HowToBuy = () => {

  const cardData = [
    {
      icon: <img src={circleIcon} alt="" />,
      step: "1",
      title: 'Requirements',
      paragraph1: 'You will need to have a web3 compatible wallet such as Metamask connected to your browser, alternatively you can also use other wallets supported by Wallet Connect, such as Trust Wallet.',
      paragraph2:'To ensure a smooth process for participating in the presale, we suggest using a desktop browser and Metamask. For mobile devices we suggest using Trust Wallet for the smoothest user experience.'
    },
    {
      icon: <img src={circleIcon} alt="" />,
      step: "2",
      title: 'Wallet Connection',
      paragraph1: 'Enter the amount you wish to purchase and click "Connect Wallet" to choose your preferred payment option for acquiring $LBM tokens. Ensure your wallet has sufficient balance in the desired currency to display available options or alternatively use pay by card or bank transfer for FIAT payment.',
      paragraph2:"After selecting your desired currency in our widget, you'll be redirected to your wallet or card payment gateway for completing the transaction.",
      paragraph3: "There will be 2 options to buy LBM:",
      paragraph4: "🔹 with TRANSFER / CARD (Fiat Currency)",
      paragraph5: "🔹 with CRYPTO"
    } ,
    {
      icon: <img src={circleIcon} alt="" />,
      step: "3",
      title: 'Requirements',
      paragraph1: "You can claim your $LBM tokens at the end of the presale. Details will be released closer to the time. Once the presale period has concluded, you must visit our website and click the ‘Claim’ button.",
    }     
  ];

  return (
    <div className="card-buy-grid">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );

}; 

export default HowToBuy; 