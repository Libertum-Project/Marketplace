import './WhyLBM.scss'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import iconarrow from './assets/iconarrow.svg';
import iconhouse from './assets/iconhouse.svg';
import iconbag from './assets/iconbolsa.svg'

const CarouselCard = ({ icon, text }) => {
  return (
    <div className='carousel-container'>
    <div className="carousel-card">
      <img className="icon" src={icon} alt="" />
      <p className="text">{text}</p>
    </div>
    </div>

  );
};

const WhyLBM = () => {
  const data = [
    {
      icon: iconarrow,
      text: "$LBM is the Libertum native token. It is the bricks that will build a strong foundation for thee Libertum Community",
    },
    {
      icon: iconbag,
      text: "$LBM will allow everyone to earn their share of the platform revenue. By staking $LBM, the community can earn their reward in $LBM and USDC",
    },
    {
      icon: iconhouse,
      text: "We will be giving to non-profit organizations that help millions globally to create a home. As an $LBM holder, you will have the power to choose which projects we support",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Slider {...settings}>
      {data.map((item, index) => (
        <CarouselCard
          key={index}
          icon={item.icon}
          text={item.text}
        />
      ))}
    </Slider>
  );
};

export default WhyLBM;
