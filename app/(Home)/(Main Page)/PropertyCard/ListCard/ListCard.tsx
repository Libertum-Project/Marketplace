'use client'
import React from 'react';
import Image from 'next/image';
import css from "./ListCard.module.css";
import Link from 'next/link';
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
          className={`${css.propertyList} ${
            expandedCard === property.Address ? css.propertyExpanded : ''
          }`}
          onClick={() => handleCardClick(property.Address)}
        >
          <div className={css.property__header}>
            <Image
              src={property.Feature.Link_Image[0]}
              alt={property.Address}
              width={272}
              height={200}
              className={css.property__image}
            />
<div className={css.property__info}>
                <div className={css.property__info_Secondframe}>
                  <div className={css.property__info_Firstframe}>
                    <p className={css.property__info_address}>
                      {property.Feature.Address}
                    </p>
                    <p className={css.property__info_price}>
                      ${' '}
                      {parseInt(
                        property.Financial.Market_value_of_the_property.replace(
                          /,/g,
                          ''
                        ),
                        10
                      )}
                    </p>
                  </div>
                  <p className={css.property__info_country}>
                    {property.Feature.City}, {property.Feature.State},{' '}
                    {property.Feature.Country}{' '}
                  </p>
                </div>
                <div className={css.property__info_features}>
                  <div className={css.property__info_features_feature}>
                    <Image
                      src={hotel}
                      alt={property.Address}
                      width={14}
                      height={14}
                    />
                    <p>{property.Feature.Type}</p>
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
                {/* Additional information to be shown when expanded */}
                {expandedCard === property.Address && (
                  <table className={css.table}>
                    <tbody>
                      <tr>
                        <td>
                          <strong>Token Price:</strong>
                        </td>
                        <td>${property.Financial.Token_Price}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Total Tokens:</strong>
                        </td>
                        <td>{property.Financial.Number_of_tokens_available}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Market Value:</strong>
                        </td>
                        <td>
                          ${property.Financial.Market_value_of_the_property}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Income per Token:</strong>
                        </td>
                        <td>${property.Financial.Income_per_token}</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Capital Repayment:</strong>
                        </td>
                        <td>{property.Financial.Capital_repayment}%</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Repayment Term:</strong>
                        </td>
                        <td>
                          {property.Financial.Capital_payment_duration} years
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Rental Yield:</strong>
                        </td>
                        <td>{property.Financial.Rental_yield}%</td>
                      </tr>
                      <tr>
                        <td>
                          <strong>Annual Return:</strong>
                        </td>
                        <td>{property.Financial.Annual_return}</td>
                      </tr>
                    </tbody>
                  </table>
                )}
                <Link href="/" className={css.property__info_button}>
                  View Property
                </Link>
              </div>
          </div>
        </div>        
      ))}
    </article>
  );
};

export default ListPropertyComponent;
