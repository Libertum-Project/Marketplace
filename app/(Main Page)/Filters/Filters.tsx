'use client'
import { type ReactElement,  useState, useEffect } from "react";
import Image from "next/image";
import css from "./Filters.module.css";
import Link from "next/link";
import filter1 from "../../../public/assets/filter1.svg"
import filter2 from "../../../public/assets/filter2.svg"
import filter3 from "../../../public/assets/filter3.svg"

export function Filters(): ReactElement {

  return (
    <div className={css.filtersBox}>      
      <div className={css.filter}>
        <div className={css.filter__name}>
        <Image
                src={filter1}
                alt="N"
                width="18"
                height="18"
                className={css.filter__name_image}
          />
          <p>Property Type</p>

        </div>
        <select className={css.filter__option}>
          <option value="">All property types</option>
        </select>

      </div>
      <div className={css.filter}>
        <div className={css.filter__name}>
        <Image
                src={filter2}
                alt="N"
                width="18"
                height="18"
                className={css.filter__name_image}
          />
          <p>Location</p>

        </div>
        <select className={css.filter__option}>
          <option value="">Worldwide</option>
        </select>

      </div>
      <div className={css.filter}>
        <div className={css.filter__name}>
        <Image
                src={filter3}
                alt="N"
                width="18"
                height="18"
                className={css.filter__name_image}
          />
          <p>Rental Yield</p>

        </div>
        <select className={css.filter__option}>
          <option value="">Up to 10%</option>
        </select>

      </div>      
    </div>
  )
}