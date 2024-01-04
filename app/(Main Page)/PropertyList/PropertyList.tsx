"use client";
import { type ReactElement, useContext } from "react";
import PropertyContext from "@/app/context/PropertyContext";
import Image from "next/image";
import css from "./PropertyList.module.css";
import saveIcon from "./save.svg";
import proyectedYield from "./proyectedYield.svg";
import annualRepayment from "./annualRepayment.svg";

export function PropertyList(): ReactElement {
  const { allProperties }: any = useContext(PropertyContext);

  const bestSellersProperties:any = []
  for (const property of allProperties) {
    if (property.IsBestSeller) {
      bestSellersProperties.push(property)
    }
  }

  return (
    <section className={css.listProperty}>
      <h3>Best Sellers</h3>
      <article className={css.bestSellers}>
        {bestSellersProperties.map((property: any) => (
          <div key={property.Address} className={css.property}>
            <Image
              src={property.Feature.Link_Image[0]}
              alt={property.Address}
              width={272}
              height={200}
              priority={true}
            />
            <Image
              className={css.saveIcon}
              src={saveIcon}
              width={14}
              height={20}
              alt="Save"
            />
            <div className={css.bestSellersInfoContainer}>
              <div className={css.bestSellerInfo}>
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
                  <p>
                    ${parseInt(property.Financial.Market_value_of_the_property)}
                  </p>
                  <p>${parseInt(property.Financial.Token_Price)}/Token</p>
                </div>
              </div>
              <div className={css.propertyImportantInfo}>
                <div>
                  <span className={css.imageContainer}>
                    <Image src={proyectedYield} alt="Projected Yield" />
                  </span>
                  <p>Projected Rental Yield</p>
                  <span>4%</span>
                </div>
                <div>
                  <span className={css.imageContainer}>
                    <Image src={annualRepayment} alt="Annual Repayment" />
                  </span>
                  <p>Annual Repayment</p>
                  <span>7.33%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
      <h3>All Properties</h3>
      <article className={css.allProperties}>
        {allProperties.map((property: any) => (
          <div key={property.Address} className={css.property}>
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
              <p>
                ${parseInt(property.Financial.Market_value_of_the_property)}
              </p>
              <p>${parseInt(property.Financial.Token_Price)}/Token</p>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
