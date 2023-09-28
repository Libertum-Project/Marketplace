import css from "./CreateProperty.module.css";
import ProgressBar from "./ProgressBar";

const Review = ({ handleSubmit, onBack, }) => {

    const handleBtn = (event) => {
    event.preventDefault();
    const isValid = validateForm();
    isValid ? handleSubmit() : console.log(formErrors);
  };

  return(
    <form className={css.createForm} onSubmit={handleSubmit}>
      <h2>Review information</h2>
      <ProgressBar step="3"/>

        <p>Please check your information, there is data that cannot be edited later.</p>
      <div className={css.createForm__inputs}>
        <div className={css.inputContainer}>

        </div>

      </div>

    </form>
  )
}; 

export default Review; 