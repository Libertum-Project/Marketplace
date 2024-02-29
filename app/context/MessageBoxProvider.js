"use client";
import { useState } from "react";
import MessageBoxContext from "./MessageBoxContext";

const MessageBoxProvider = ({ children }) => {
  const [showFailMessage, setShowFailMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [networkScanURL, setNetworkScanURL] = useState("");
  const [showPendingMessage, setShowPendingMessage] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showConnectToNetworkMessage, setShowConnectToNetworkMessage] =
    useState(false);
  const [showNotEnoughUSDT, setShowNotEnoughUSDT] = useState(false);
  const [showConnectWallet, setShowConnectWallet] = useState(false);

  const value = {
    showFailMessage,
    setShowFailMessage,
    errorMessage,
    setErrorMessage,
    networkScanURL,
    setNetworkScanURL,
    showPendingMessage,
    setShowPendingMessage,
    showSuccessMessage,
    setShowSuccessMessage,
    isLoading,
    setIsLoading,
    showConnectToNetworkMessage,
    setShowConnectToNetworkMessage,
    showNotEnoughUSDT,
    setShowNotEnoughUSDT,
    showConnectWallet,
    setShowConnectWallet,
  };

  return (
    <MessageBoxContext.Provider value={value}>
      {children}
    </MessageBoxContext.Provider>
  );
};

export default MessageBoxProvider;
