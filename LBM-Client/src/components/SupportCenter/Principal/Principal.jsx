import styles from './Principal.module.scss'
import { HiOutlineUserGroup } from "react-icons/hi";
import { BsHouseUp } from "react-icons/bs";
import { BiHelpCircle } from "react-icons/bi"

const Principal = () => {

  const customSize = '4rem';
  const customColor = 'rgb(247, 147, 26)';
  
  const groupIcon = <HiOutlineUserGroup style={{ fontSize: customSize, color: customColor }} />;
  const houseIcon = <BsHouseUp style={{ fontSize: customSize, color: customColor }} />;
  const helpIcon = <BiHelpCircle style={{ fontSize: customSize, color: customColor }} />;

  const data = [
    {
      icon: groupIcon,
      title: 'About Libertum',
      description: 'Know more about Libertum.io'
    },
    {
      icon: houseIcon,
      title: 'Investing',
      description: 'Learn more about the investment process'
    },
    {
      icon: helpIcon,
      title: 'Contact Our Team',
      description: 'Contact us if you have any other questions'
    }
  ];

  return(
    <div className={styles.container}>
      {data.map((item, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.icon}>{item.icon}</div>
          <div className={styles.title}>{item.title}</div>
          <div className={styles.description}>{item.description}</div>
        </div>
      ))}

    </div>
  )
}; 


export default Principal; 