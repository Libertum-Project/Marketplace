import { type ReactElement } from "react";
import css from "./Filter.module.css";
import Image from "next/image";
import searchImage from "./whiteSearchBtn.svg";
import moreOptionsImage from "./moreOptions.svg";

export function Filter(): ReactElement {
  return (
    <section className={css.filterContainer}>
      <div className={css.searchByName}>
        <input type="text" name="" id="" placeholder="Search by name" />
        <button className={css.moreOptionsBtn}>
          <Image src={moreOptionsImage} alt="Search" />
        </button>
      </div>
      <div className={css.filterList}>
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
          <select id="financeType" value="all">
            <option value="">All</option>
            <option value="passiveIncome">Passive Income</option>
            <option value="capitalRepayment">Capital Repayment</option>
          </select>
        </div>
        <button className={css.searchBtn}>
          <Image src={searchImage} alt="Search" />
        </button>
      </div>
    </section>
  );
}
