"use client";
import { type ReactElement, useState, useContext } from "react";
import css from "./Filter.module.css";
import Image from "next/image";
import searchImage from "./whiteSearchBtn.svg";
import moreOptionsImage from "./moreOptions.svg";
import { FilterModal } from "./FilterModal";
import SelectCountry from "../../components/SelectCountry/SelectCountry.jsx";
import PropertyContext from "@/app/context/PropertyContext";

export function Filter(): ReactElement {
  
  const {selectedFilters, setSelectedFilters, getFilteredProperties} = useContext<any>(PropertyContext)
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleFilterChange = (filterType: string, filterValue: string) => {
    setSelectedFilters((prevFilters: any) => ({
      ...prevFilters,
      [filterType]: filterValue,
    }));
  };

  const handleApplyFilter = () => {
    getFilteredProperties()
  } 

  return (
    <>
      {showModal && (
        <FilterModal
          setShowModal={setShowModal}
          selectedFilters={selectedFilters}
          handleFilterChange={handleFilterChange}
          handleApplyFilter={handleApplyFilter}
        />
      )}
      <section className={css.filterContainer}>
        <div className={css.searchByName}>
          <input type="text" name="" id="" placeholder="Search by name" />
          <button className={css.moreOptionsBtn} onClick={handleShowModal}>
            <Image src={moreOptionsImage} alt="Search" />
          </button>
        </div>
        <div className={css.filterList}>
          <div>
            <label htmlFor="location">Location</label>
            <SelectCountry
              currentValue={selectedFilters.location}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <label htmlFor="rentalYield">Rental Yield</label>
            <select
              id="rentalYield"
              defaultValue={selectedFilters.rentalYield}
              onChange={(e) =>
                handleFilterChange("rentalYield", e.target.value)
              }
            >
              <option value="">All</option>
              <option value="0-5">Up to 5%</option>
              <option value="5-10">5% to 10%</option>
              <option value="10-25">10% to 25%</option>
            </select>
          </div>
          <div>
            <label htmlFor="financeType">Finance Type</label>
            <select
              id="financeType"
              defaultValue={selectedFilters.financeType}
              onChange={(e) =>
                handleFilterChange("financeType", e.target.value)
              }
            >
              <option value="">All</option>
              <option value="passiveIncome">Passive Income</option>
              <option value="capitalRepayment">Capital Repayment</option>
            </select>
          </div>
          <button className={css.searchBtn} onClick={handleApplyFilter}>
            <Image src={searchImage} alt="Search" width={79} height={36} />
          </button>
        </div>
      </section>
    </>
  );
}
