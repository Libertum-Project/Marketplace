import { useState, useEffect } from "react";
import css from "./Tokens.module.scss"; 
import DataTable from "react-data-table-component";
import User from "./User/User";
import withdrawFunds from "../../../smartContracts/pLBM/withdrawFunds";
import { getCurrentSaleStage } from "../../../smartContracts/pLBM/getCurrentSaleStage";
import { getRemainingTokens } from "../../../smartContracts/pLBM/getRemainingTokens";
import { advanceToNextSaleStage } from "../../../smartContracts/pLBM/advanceToNextSaleStage";

const starIcon = "M13.4697 17.9697C13.1768 18.2626 13.1768 18.7374 13.4697 19.0303C13.7626 19.3232 14.2374 19.3232 14.5303 19.0303L20.3232 13.2374C21.0066 12.554 21.0066 11.446 20.3232 10.7626L14.5303 4.96967C14.2374 4.67678 13.7626 4.67678 13.4697 4.96967C13.1768 5.26256 13.1768 5.73744 13.4697 6.03033L18.6893 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H18.6893L13.4697 17.9697Z"

const columns = [
  {
    name: "User",
    selector: (row) => row.user,
  },
  {
    name: "Tokens purchased",
    selector: (row) => row.tokens,
  },
  
  {
    name: "View user",
    selector: (row) => row.view,
    cell: (row) => <button>{row.view}</button>,
  },
];

const Tokens = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [currentStage, setCurrentStage] = useState(null);
  const [remainingTokens, setRemainingTokens] = useState({
    seedTokensRemaining: null,
    whitelistTokensRemaining: null,
    publicTokensRemaining: null,
  });
  const [updateTrigger, setUpdateTrigger] = useState(0);

  const getRemainingTokensText = () => {
    if (currentStage === 'Private seed') {
      return `${remainingTokens.seedTokensRemaining}`;
    } else if (currentStage === 'whitelist') {
      return `${remainingTokens.whitelistTokensRemaining}`;
    } else if (currentStage === 'public') {
      return `${remainingTokens.publicTokensRemaining}`;
    } else {
      return 'Invalid Stage';
    }
  };


  useEffect(() => {
    async function fetchData() {
      const stage = await getCurrentSaleStage();
      setCurrentStage(stage);

      const tokens = await getRemainingTokens();
      setRemainingTokens(tokens);
    }

    fetchData();
  }, [updateTrigger]);

  const handleAdvanceToNextSaleStage = async () => {
    await advanceToNextSaleStage();
    setUpdateTrigger((prev) => prev + 1);
  };



  const data = [{
    user: 'Niki',
    tokens: 3,
    view: <button onClick={openModal}>View</button>
  }]




  return (
    <div className={css.container}>
      <div className={css.cardsGrid}>
        <div className={css.card}>
          <h2 className={css.card__title}>Current Token Stage:<br /> <b>{currentStage || 'Pre-sale not started yet'}</b></h2>
          <p className={css.card__content}>Remaining tokens: {getRemainingTokensText()}</p>
          <div className={css.card__date}>
            ADVANCE TO NEXT STAGE
          </div>
          <button className={css.card__arrow} onClick={handleAdvanceToNextSaleStage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
              <path fill="#fff" d={starIcon}></path>
            </svg>

          </button>
        </div>

        <div className={css.card}>
        <h2 className={css.card__title}>FUNDS:<br /> <b>$0</b></h2>
        <p className={css.card__content}>Sold Tokens: 0</p>
        <div className={css.card__date}>
          WITHDRAW FUNDS
        </div>
        <button className={css.card__arrow} onClick={withdrawFunds}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" height="15" width="15">
            <path fill="#fff" d={starIcon}></path>
          </svg>
        </button>
      </div>

      </div>


      {/* <div className={css.table}>
        <h3>LBM - PreSale</h3>
        <DataTable columns={columns} data={data} />
      </div>
      {isModalOpen && <User closeModal={closeModal} />} */}
    </div>
  );
};

export default Tokens; 