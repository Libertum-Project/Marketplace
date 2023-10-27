import React from 'react';
import arrowIcon from './assets/iconflecha.svg';
import icon1 from './assets/icon1.svg';
import icon2 from './assets/icon2.svg';
import icon3 from './assets/icon3.svg';
import icon4 from './assets/icon4.svg';
import './Roadmap.scss';

const Card = ({ icon, title, features }) => (
  <div className="card-roadmap">
    <div className="image-roadmap">{icon}</div>
    <h3 className="title-roadmap">{title}</h3>
    <ul className="features-roadmap">
      {features.map((feature, index) => (
        <li key={index}>{feature}</li>
      ))}
    </ul>
  </div>
);

const Roadmap = () => {
  const roadmapData = [
    {
      icon: <img src={icon1} alt="" />,
      title: 'Phase 1',
      features: [
       " Project Concept",
        "UK Company Registration",
        "Tokenomics",
        "MVP 1.0",
        "Smart Contract Development",
        "Private Sale",
        "Community Building"
      ],
    },
    {
      icon: <img src={icon2} alt="" />,
      title: 'Phase 2',
      features: [
        'Licencing',
        'Smart Contract Audit',
        'Geo Growth',
        'Commersialize Marketplace',
        'Tokenise First Real Estate',
        'Community Events Launch',
        'Giveaway & Airdrops Launch',
      ]
    },
    {
      icon: <img src={icon3} alt="" />,
      title: 'Phase 3',
      features: [
        'Whitelist presale',
        'Public PreSale',
        'LBM Launch',
        'DEX Listing',
        'Token Staking Pool Launch',
      ],
    },
    {
      icon: <img src={icon4} alt="" />,
      title: 'Phase 4',
      features: [
        'Adquisition of the first Real Estate',
        'Consider CEX Listing',
        'Targeted to tokenise 20 Real Estates',
        'Expansion & Geo Growth',
        'Feasibility of Valuator AI',
      ],
    },
  ];

  return (
    <div className="roadmap-grid">
      {roadmapData.map((card, index) => (
        <React.Fragment key={index}>
          <Card {...card} />
          {index < roadmapData.length - 1 && <img src={arrowIcon} alt="Arrow" className="arrow-icon" />}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Roadmap;
