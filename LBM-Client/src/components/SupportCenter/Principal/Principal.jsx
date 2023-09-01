import styles from './Principal.module.scss'

const Principal = () => {

  const data = [
    {
      icon: 'icon1',
      title: 'About Libertum',
      description: 'Know more about Libertum.io and how to get started'
    },
    {
      icon: 'icon2',
      title: 'Investing',
      description: 'Learn more about the investment process'
    },
    {
      icon: 'icon3',
      title: 'Guides 3',
      description: 'Description 3'
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