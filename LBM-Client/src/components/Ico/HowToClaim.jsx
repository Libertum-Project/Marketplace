import './HowToClaim.scss'

const HowToClaim = () => {
  const Card = ({ title, paragraph, button }) => {
    return (
      <div className="howtoclaim-card">
        <h2 className="howtoclaim-title">{title}</h2>
        <p className="howtoclaim-p">{paragraph}</p>
        <button className="howtoclaim-button">{button}</button>
      </div>
    );
  };

  const data = [
    {
      title: "How To Claim",
      paragraph:
        "As we complete all funding rounds, you'll gain the opportunity to claim your $LBM tokens effortlessly! Stay tuned for comprehensive instructions on how to claim, which will be revealed closer to the scheduled time. When the claiming process is ready, simply visit our main page at libertum.io and click on the 'Claim' button. We've got you covered, and claiming your $LBM tokens will be as seamless as our investing in out fractionalised rental income model",
      button: "BUY",
    },
    {
      title: "Purchase with confidence",
      paragraph:
        "Purchase with peace of mind, knowing that our $LBM token contract has undergone rigorous audits by “ “, a renowned blockchain security firm, ensuring unparalleled levels of security.​",
      button: "WHITEPAPER",
    },
  ];

  return (
    <div className='howtoclaim-container'>
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default HowToClaim;
