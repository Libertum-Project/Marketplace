import styles from "./SupportCenter.module.scss";
import Faq from "./Faq/Faq";

export default function SupportCenter() {

  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h1>How can we <span className={styles.underline}>help you ?</span></h1>
        <h3>
          Browse through our frequently asked questions, tutorials, and other self-help resources to find the answers you need.
        </h3>
      </div>      

      <div className={styles.allQuestions}>
        <Faq /> 
      </div>

    </div>
  );
}
