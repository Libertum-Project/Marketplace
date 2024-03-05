import css from "./MessageBox.module.css";
import network from "./network.png";
import Image from "next/image";

const ConnectToNetworkMessage = ({ setShowConnectToNetworkMessage }) => {
  const handleContinue = (event) => {
    event.preventDefault();
    setShowConnectToNetworkMessage(false);
  };
  const message =
    "Seems like you haven't linked to Binance Smart Chain yet! To purchase $LBM, simply connect your wallet to the Binance Smart Chain network.";
  return (
    <div
      className={css.messageBoxContainer}
      onClick={(event) => {
        handleContinue(event);
      }}
    >
      <div className={css.messageBox}>
        <div className={css.header}>
          <Image
            className={css.networkImage}
            src={network}
            alt="network"
            width={48}
            height={48}
          />
          <h2>Connect To BSC</h2>
        </div>
        <div>
          <p>{message}</p>
        </div>
        <button>Continue</button>
      </div>
    </div>
  );
};

export default ConnectToNetworkMessage;
