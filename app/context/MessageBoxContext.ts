"use client";

import { createContext } from "react";

interface MessageBoxContextProps {
  showFailMessage: boolean;
  setShowFailMessage: (value: boolean) => void;
  errorMessage: string;
  setErrorMessage: (value: string) => void;
  networkScanURL: string;
  setNetworkScanURL: (value: string) => void;
  showPendingMessage: boolean;
  setShowPendingMessage: (value: boolean) => void;
  showSuccessMessage: boolean;
  setShowSuccessMessage: (value: boolean) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  showConnectToNetworkMessage: boolean;
  setShowConnectToNetworkMessage: (value: boolean) => void;
  showNotEnoughUSDT: boolean;
  setShowNotEnoughUSDT: (value: boolean) => void;
  showConnectWallet: boolean;
  setShowConnectWallet: (value: boolean) => void;
}

const MessageBoxContext = createContext<MessageBoxContextProps>({
  showFailMessage: false,
  setShowFailMessage: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  networkScanURL: "",
  setNetworkScanURL: () => {},
  showPendingMessage: false,
  setShowPendingMessage: () => {},
  showSuccessMessage: false,
  setShowSuccessMessage: () => {},
  isLoading: false,
  setIsLoading: () => {},
  showConnectToNetworkMessage: false,
  setShowConnectToNetworkMessage: () => {},
  showNotEnoughUSDT: false,
  setShowNotEnoughUSDT: () => {},
  showConnectWallet: false,
  setShowConnectWallet: () => {},
});

export default MessageBoxContext;
