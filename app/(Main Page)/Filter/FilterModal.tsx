import { type ReactElement } from "react";
import css from "./FilterModal.module.css";
import closeIcon from "./closeIcon.svg";
import Image from "next/image";

interface FilterProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FilterModal({ setShowModal }: FilterProps): ReactElement {
  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className={css.filterModalContainer}>
      <section className={css.filterModal}>
        <div className={css.filterModalHeader}>
          <h3>Filter</h3>
          <button onClick={handleCloseModal}>
            <Image src={closeIcon} alt="close" />
          </button>
        </div>
        <div className={css.modalFilterList}>
          <div>
            <label htmlFor="location">Location</label>
            <select id="location">
              <option value="">All</option>
              <option value="passiveIncome">Passive Income</option>
              <option value="capitalRepayment">Capital Repayment</option>
            </select>
          </div>
          <div>
            <label htmlFor="rentalYield">Rental Yield</label>
            <select id="rentalYield">
              <option value="">All</option>
              <option value="passiveIncome">Passive Income</option>
              <option value="capitalRepayment">Capital Repayment</option>
            </select>
          </div>
          <div>
            <label htmlFor="financeType">Finance Type</label>
            <select id="financeType">
              <option value="">All</option>
              <option value="passiveIncome">Passive Income</option>
              <option value="capitalRepayment">Capital Repayment</option>
            </select>
          </div>
        </div>

        <div className={css.filterModalType}>
          <h3>Type</h3>
          <label htmlFor="rental">
            <input type="checkbox" id="rental" />
            <span>Rental</span>
          </label>
          <label htmlFor="rural">
            <input type="checkbox" id="rural" />
            <span>Rural</span>
          </label>
          <label htmlFor="apartament">
            <input type="checkbox" id="apartament" />
            <span>Apartament</span>
          </label>
        </div>
        <button className={css.savechanges}>Save changes</button>
      </section>
    </div>
  );
}
