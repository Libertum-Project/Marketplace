import coinIcon from './assets/coinIcon.svg';
import calendarIcon from './assets/calendar.svg';
import tagIcon1 from './assets/tag.svg'
import tagIcon2 from './assets/tag2.svg'
import tagIcon3 from './assets/tag3.svg'
import tagIcon4 from './assets/tag3.svg'
import './Presale.scss'

const Card = (
  { 
  icon, 
  image, 
  dateIcon, 
  title, 
  features, 
  note,
  date
}
) => {
    
  return (
    <div className="card">
      {/* <div className="icon">{icon}</div> */}
      <div className="image">{image}</div>
      <div className="date-container">
        <div className="date-icon">{dateIcon}</div>
        <div className="date">{date}</div>
      </div>
      <h3 className="title">{title}</h3>
      <ul className="features">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className='buybutton'>BUY</button>
    </div>
  );
};

const PresaleGrid = () => {

  const cardData = [
    {
      icon: <img src={coinIcon} alt="" />,
      image: <img src={tagIcon1} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "Until 11-25-2023",
      title: 'Private Round',
      features: [
        'Tokens for sale: 12.500.000', 
        'Price start at: $0.0018', 
        'Per Stage min: $22.550'
      ],
    },
    {
      icon: <img src={coinIcon} alt="" />,
      image: <img src={tagIcon2} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "15 to 20 January 2024",
      title: 'Whitelist Presale',
      features: [
        'Tokens for sale: 87.500.000', 
        'Price start at: $0.0020', 
        'Per Stage min: $175.000'
      ],
    },
    {
      icon: <img src={coinIcon} alt="" />,
      image: <img src={tagIcon3} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "25 to 30 January 2024",
      title: 'Public Presale',
      features: [
        'Tokens for sale: 120.000.000', 
        'Price start at: $0.0025', 
        'Per Stage min: $300.000'
      ],
    },
    {
      icon: <img src={coinIcon} alt="" />,
      image: <img src={tagIcon4} alt="" />,
      dateIcon: <img src={calendarIcon} alt="" />,
      date: "1st February 2024",
      title: 'Launch Day',
      features: [
        'Tokens for sale: 120.000.000', 
        'Price start at: $0.0025', 
        'Per Stage min: $300.000'
      ],
    },
    
  ];

  return (
    <div className="card-grid">
      {cardData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};

export default PresaleGrid;
