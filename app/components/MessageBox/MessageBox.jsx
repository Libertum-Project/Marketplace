"use client";
import { useContext } from "react";
import MessageBoxContext from "../../context/MessageBoxContext";
import Loading from "./Loading";
import PendingMessage from "./PendingMessage";
import FailMessage from "./FailMessage";
import SuccessMessage from "./SuccessMessage";
import ConnectToPolygonMessage from "./ConnectToPolygonMessage.jsx";

const MessageBox = () => {
  const {
    isLoading,
    showFailMessage,
    setShowFailMessage,
    errorMessage,
    polyScanURL,
    showPendingMessage,
    showSuccessMessage,
    setShowSuccessMessage,
    showConnectToPolygonMessage,
    setShowConnectToPolygonMessage,
  } = useContext(MessageBoxContext);

  return (
    <>
      {isLoading ? <Loading /> : null}
      {showFailMessage ? (
        <FailMessage
          setShowFailMessage={setShowFailMessage}
          message={errorMessage}
          url={polyScanURL}
        />
      ) : null}

      {showConnectToPolygonMessage ? (
        <ConnectToPolygonMessage
          setShowConnectToPolygonMessage={setShowConnectToPolygonMessage}
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
