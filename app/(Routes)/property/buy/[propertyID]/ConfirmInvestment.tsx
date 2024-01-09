import { type ReactElement } from "react";
import css from "./Buy.module.css";

export function ConfirmInvestment({
  propertyDetails,
  setCurrentStep,
  amount,
}: any): ReactElement {
  const handlePreviusStep = () => {
    setCurrentStep(1);
  };
  const address = propertyDetails[0]?.Feature.Address;
  const city = propertyDetails[0]?.Feature.City;
  const region = propertyDetails[0]?.Feature.State;
  const country = propertyDetails[0]?.Feature.Country;

  const pricePerToken = propertyDetails[0]?.Financial.Token_Price;
  const subtotal = amount * pricePerToken;
const total = subtotal + (subtotal * 0.03);
  return (
    <div className={css.buySection}>
      <header className={css.header}>
        <div className={css.tittle}>
          <div className={css.goBackBtn} onClick={handlePreviusStep}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M15 19L8 12L15 5"
                stroke="#2196F3"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <h1>Confirm Investment</h1>
        </div>
        <p className={css.paragraph}>
          Check the data and confirm the investment
        </p>
        <div className={css.progressBar}>
          <div className={css.step} onClick={handlePreviusStep}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.6673 7L9.50065 16.1667L5.33398 12"
                stroke="#47B2FF"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={css.divider}></div>
          <div className={css.step + " " + css.selected}>
            <p>2</p>
          </div>
        </div>
      </header>

      <main>
        <section className={css.detailsContainer}>
          <h3>Property</h3>
          <div className={css.details}>
            <div>
              <p>Address</p>
              <p className={css.orange}>{address}</p>
            </div>
            <div>
              <p>City</p>
              <p>{city}</p>
            </div>
            <div>
              <p>Region/State</p>
              <p>{region}</p>
            </div>
            <div>
              <p>Country</p>
              <p>{country}</p>
            </div>
          </div>
        </section>

        <section className={css.detailsContainer}>
          <h3>Invesment</h3>
          <div className={css.details}>
            <div>
              <p>Price Per Token</p>
              <p className={css.orange}>{pricePerToken}</p>
            </div>
            <div>
              <p>Total Amount</p>
              <p>{amount}</p>
            </div>
            <div>
              <p>Subtotal</p>
              <p>{subtotal}</p>
            </div>
            <div>
              <p>Fees</p>
              <p>3 %</p>
            </div>
            <div>
              <p>TOTAL</p>
              <p className={css.orange}>{total}</p>
            </div>
          </div>
        </section>
        <button className={css.nextBtn}>INVEST</button>
      </main>
    </div>
  );
}
