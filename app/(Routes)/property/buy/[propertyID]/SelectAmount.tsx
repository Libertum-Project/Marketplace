import { type ReactElement } from "react";
import css from "./Buy.module.css";

export function SelectAmount({
  propertyDetails,
  setCurrentStep,
  amount,
  setAmount,
}: any): ReactElement {
  const handleGoBack = () => {
    console.log("go back");
  };

  const handleNextStep = () => {
    setCurrentStep(2);
  };

  const handleChangeAmount = (value: string) => {
    setAmount(value);
  };

  const address = propertyDetails[0]?.Feature.Address;
  const city = propertyDetails[0]?.Feature.City;
  const region = propertyDetails[0]?.Feature.State;
  const country = propertyDetails[0]?.Feature.Country;

  const pricePerToken = propertyDetails[0]?.Financial.Token_Price;
  const rentalYield = propertyDetails[0]?.Financial.Rental_yield;

  const subtotal = amount * pricePerToken;

  return (
    <div className={css.buySection}>
      <header className={css.header}>
        <div className={css.tittle}>
          <button className={css.goBackBtn} onClick={handleGoBack}>
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
          </button>
          <h1>Select Amount</h1>
        </div>
        <p className={css.paragraph}>Select the amount of tokens to purchase</p>
        <div className={css.progressBar}>
          <button className={css.step + " " + css.selected}>
            <p>1</p>
          </button>
          <div className={css.divider}></div>
          <button className={css.step} onClick={handleNextStep}>
            <p>2</p>
          </button>
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
        <section className={css.financialInfo}>
          <div className={css.selectQuantity}>
            <label htmlFor="inputAmount">Select property token quantity </label>
            <input
              placeholder="Input here"
              id="inputAmount"
              type="number"
              value={amount}
              onChange={(e) => {
                handleChangeAmount(e.target.value);
              }}
            />
          </div>
          <div className={css.details + " " + css.detailsFinancial}>
            <div>
              <p>Price Per Token</p>
              <p>$ {pricePerToken}</p>
            </div>
            <div>
              <p>RentalYield</p>
              <p>{rentalYield} %</p>
            </div>
            <div>
              <p>Subtotal</p>
              <p className={css.orange}>$ {subtotal}</p>
            </div>
          </div>
        </section>
        <section className={css.walletMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0004 21.6C17.3023 21.6 21.6004 17.302 21.6004 12C21.6004 6.69809 17.3023 2.40002 12.0004 2.40002C6.69846 2.40002 2.40039 6.69809 2.40039 12C2.40039 17.302 6.69846 21.6 12.0004 21.6ZM16.4489 10.4486C16.9175 9.97992 16.9175 9.22013 16.4489 8.7515C15.9803 8.28287 15.2205 8.28287 14.7519 8.7515L10.8004 12.703L9.24892 11.1515C8.78029 10.6829 8.02049 10.6829 7.55186 11.1515C7.08323 11.6201 7.08323 12.3799 7.55186 12.8486L9.95186 15.2486C10.4205 15.7172 11.1803 15.7172 11.6489 15.2486L16.4489 10.4486Z"
              fill="#27AE60"
            />
          </svg>
          <p>
            Your <span>wallet</span> is already connected
          </p>
        </section>
        <button onClick={handleNextStep} className={css.nextBtn}>
          NEXT
        </button>
      </main>
    </div>
  );
}
