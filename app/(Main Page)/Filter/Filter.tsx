import { type ReactElement } from "react";
import css from "./Filter.module.css";
import Image from "next/image";
import searchImage from "./search.svg";
import moreOptionsImage from "./moreOptions.svg";

export function Filter(): ReactElement {
  return (
    <section className={css.filterContainer}>
      <div className={css.searchByName}>
        <input type="text" name="" id="" />
        <button className={css.moreOptionsBtn}>
          <Image src={moreOptionsImage} alt="Search" />
        </button>
      </div>
      <div className={css.filterList}>
        <div>
          <label htmlFor="location">Location</label>
          <select id="location"></select>
        </div>
        <div>
          <label htmlFor="rentalYield">Rental Yield</label>
          <select id="rentalYield"></select>
        </div>
        <div>
          <label htmlFor="financeType">Finance Type</label>
          <select id="financeType"></select>
        </div>
      </div>
    </section>
  );
}
