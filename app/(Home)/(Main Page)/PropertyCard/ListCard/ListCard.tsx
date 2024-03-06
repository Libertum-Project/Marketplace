'use client'
import React from 'react';
import Image from 'next/image';
import css from "./ListCard.module.css";
import Link from 'next/link';
import saveIcon from "../../../../../public/assets/saveHeart.svg"
import hotel from '../../../../../public/assets/hotel.svg';
import rentalYield from '../../../../../public/assets/rentalyield.svg';
import location from '../../../../../public/assets/filter2.svg';


interface ListPropertyProps {
  properties: any[];
  expandedCard: string | null;
  handleCardClick: (address: string) => void;
}

const ListPropertyComponent: React.FC<ListPropertyProps> = ({
  properties,
  expandedCard,
  handleCardClick,
}) => {
  return (
    <article className={css.allPropertiesList}>
      {properties.map((property) => (
        <div
          key={property.Address}
          className={css.propertyList}
        >
            <Image
              src={property.Feature.Link_Image[0]}
              alt={property.Address}
              width={272}
              height={200}
              className={css.property__image}
            />

            <div className={css.property__info}>
              <div className={css.property__info_FirstFrame}>
                <p className={css.property__info_address}>
                  {property.Feature.Address}
                </p>
                <p className={css.property__info_country}>
                  {property.Feature.City}, {property.Feature.State},{' '} {property.Feature.Country}{' '}
                </p>
                <p className={css.property__info_price}>
                  ${' '}{parseInt(property.Financial.Market_value_of_the_property.replace(/,/g,''),10)}
                </p>
              </div>

              <div className={css.property__info_SecondFrame}>
                <div className={css.property__info_SecondFrame_Info}>
                  <div>
                    <p><b>Capital Repayment: </b> {property.Financial.Capital_repayment}% </p>
                    <p><b>Income per token: </b>${property.Financial.Income_per_token} </p>
                  </div>
                  <div>
                    <p><b>Repayment Term: </b> {property.Financial.Capital_payment_duration} years </p>                    
                    <p><b>Price per token: </b>${property.Financial.Token_Price}</p> 
                  </div>   
                </div>
                <div className={css.property__info_features}>
                  <div className={css.property__info_features_feature}>
                    <Image
                      src={hotel}
                      alt={property.Address}
                      width={14}
                      height={14}
                    />
                    <p><b>Property: </b>{property.Feature.Type}</p>
                  </div>
                  <div className={css.property__info_features_feature}>
                    <Image
                      src={location}
                      alt={property.Address}
                      width={14}
                      height={14}
                    />
                    <p>{property.Feature.Country}</p>
                  </div>
                  <div className={css.property__info_features_feature}>
                    <Image
                      src={rentalYield}
                      alt={property.Address}
                      width={14}
                      height={14}
                    />
                    <p>
                      Rental Yield:{' '}
                      {parseInt(
                        property.Financial.Rental_yield.replace(/,/g, ''),
                        10
                      )}{' '}
                      %
                    </p>
                  </div>
                </div>
              </div>

              <div className={css.property__info_ThirdFrame}>
                <Image
                src={saveIcon}
                alt={property.Address}
                width={272}
                height={200}
                className={css.property__saveIcon}
              />

              </div>
            </div>
          </div>
      ))}
    </article>
  );
};

export default ListPropertyComponent;
