'use client';
import React, {
  useState,
  useEffect,
  type ReactElement,
} from 'react';
import Link from 'next/link';
import css from './PropertyCards.module.css';
import Image from 'next/image';
import gridActive from '../../../../public/assets/gridActive.svg';
import filesInactive from '../../../../public/assets/filesInactive.svg';
import gridInactive from '../../../../public/assets/gridInactive.svg';
import filesActive from '../../../../public/assets/filesActive.svg';


import hotel from '../../../../public/assets/hotel.svg';
import rentalYield from '../../../../public/assets/rentalyield.svg';
import location from '../../../../public/assets/filter2.svg';



export function PropertyCard(): ReactElement {
 
  const [properties, setProperties] = useState<any[]>([]);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [grid, setGrid] = useState<boolean>(true); 

  const toggleView = () => {
    setGrid(!grid);
  };

  useEffect(() => {
    async function fetchProperties() {
      try {
        const response = await fetch('https://libertum.azurewebsites.net/properties');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
      const data = await response.json();
      setProperties(data);
    }catch (error) {
      console.error('Error fetching properties:', error);
    }
  }

  fetchProperties();
}, []);

  const handleCardClick = (address: string) => {
    if (expandedCard === address) {
      setExpandedCard(null);
    } else {
      setExpandedCard(address);
    }
  };


  return (
    <div className={css.marketplaceLayout}>
      <div className={css.marketplaceFrame}>
        <select className={css.marketplaceFrame__sort} defaultValue="Select">
          <option value="Newest first">Sort by: Newest first</option>
          <option value="Old First">Sort by: Old first</option>
        </select>

        <div className={css.marketplaceFrame__show}>
        <Image
            src={grid ? gridActive : gridInactive}
            alt="N"
            width="32"
            height="32"
            className={css.marketplaceFrame__show_image}
            onClick={toggleView} 
          />
          <Image
             src={grid ? filesInactive : filesActive} 
            alt="N"
            width="32"
            height="32"
            className={css.marketplaceFrame__show_image}
            onClick={toggleView} 
          />
        </div>
      </div>

      <article className={css.allProperties}>
        {properties.map((property: any) => (
          <div
            key={property.Address}
            className={`${css.property} ${
              expandedCard === property.Address ? css.propertyExpanded : ''
            }`}
          >
            <div
              className={css.property__header}
              onClick={() => handleCardClick(property.Address)}
            >
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
    </div>
  );
}

export default PropertyCard;
