"use client";
import { type ReactElement, useContext } from "react";
import PropertyContext from "@/app/context/PropertyContext";
import Image from "next/image";
import css from "./PropertyList.module.css";
import saveIcon from "./save.svg";

export function PropertyList(): ReactElement {
  const { allProperties } = useContext(PropertyContext);
  return (
    <section className={css.listProperty}>
      <article className={css.bestSellers}></article>
      <h3>All Properties</h3>
      <article className={css.allProperties}>
        {allProperties.map((property: any) => (
          <div className={css.property}>
            <Image
              key={property.Address}
              src={property.Feature.Link_Image[0]}
              alt={property.Address}
              width={272}
              height={200}
            />
            <Image
              className={css.saveIcon}
              src={saveIcon}
              width={14}
              height={20}
              alt="Save"
            />
            <div className={css.propertyImportantInfo}>
              <div>
                <p>Projected Rental Yield</p>
                <span>4%</span>
              </div>
              <div>
                <p>Annual Repayment</p>
                <span>7.33%</span>
              </div>
            </div>
            <div className={css.propertyAddress}>
              <p>{property.Feature.City}</p>
              <p>{property.Feature.Country}</p>
            </div>
            <h4>{property.Feature.Address}</h4>
            <div className={css.propertyRentalYield}>
              <p>
                Rental Income per token: $
                {property.Financial.Passive_Income_per_token}
              </p>
              <p>Capital Repayment: 3.33 %</p>
              <p>
                Capital Repayment Duration:{" "}
                {property.Financial.Capital_payment_duration} years
              </p>
            </div>
            <div className={css.propertyPrice}>
              <p>$ {property.Financial.Market_value_of_the_property}</p>
              <p>$ {property.Financial.Token_Price}/Token</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
