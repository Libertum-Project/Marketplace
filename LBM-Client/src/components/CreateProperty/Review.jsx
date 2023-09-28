import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";

const Review = () => {

  return(
    <form className={css.createForm}>
      <h2>Review information</h2>
      <ProgressBar step="4"/>

      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>

        </div>

      </div>

    </form>
  )
}; 

export default Review; 