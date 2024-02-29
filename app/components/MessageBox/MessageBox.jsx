"use client";
import { useContext } from "react";
import MessageBoxContext from "../../../context/MessageBoxContext";
import Loading from "./Loading";
import PendingMessage from "./PendingMessage";
import FailMessage from "./FailMessage";
import SuccessMessage from "./SuccessMessage";
import ConnectToNetworkMessage from "./ConnectToNetworkMessage.jsx";
import NotEnoughUSDT from "./NotEnoughUSDT";
import ConnectWallet from "./ConnectWallet";

const MessageBox = () => {
  const {
    isLoading,
    showFailMessage,
    setShowFailMessage,
    errorMessage,
    networkScanURL,
    showPendingMessage,
    showSuccessMessage,
    setShowSuccessMessage,
    showConnectToNetworkMessage,
    setShowConnectToNetworkMessage,
    showNotEnoughUSDT,
    setShowNotEnoughUSDT,
    showConnectWallet,
    setShowConnectWallet,
  } = useContext(MessageBoxContext);

  return (
    <>
      {isLoading ? <Loading /> : null}
      {showNotEnoughUSDT ? (
        <NotEnoughUSDT setShowNotEnoughUSDT={setShowNotEnoughUSDT} />
      ) : null}

      {showConnectWallet ? (
        <ConnectWallet setShowConnectWallet={setShowConnectWallet} />
      ) : null}
      {showFailMessage ? (
        <FailMessage
          setShowFailMessage={setShowFailMessage}
          message={errorMessage}
          url={networkScanURL}
        />
      ) : null}

      {showConnectToNetworkMessage ? (
        <ConnectToNetworkMessage
          setShowConnectToNetworkMessage={setShowConnectToNetworkMessage}
        />
      ) : null}

      {showPendingMessage ? (
        <PendingMessage messagge="Processing your investment..." />
      ) : null}
      {showSuccessMessage ? (
        <SuccessMessage
          setShowSuccessMessage={setShowSuccessMessage}
          messagge="Success! Your investment has been processed. Exciting times ahead!"
          textBtn="Continue"
          redirectURL="https://www.marketplace.libertum.io/mydashboard"
        />
      ) : null}
    </>
  );
};

export default MessageBox;
