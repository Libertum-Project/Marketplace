'use client'
import { createContext } from "react";

const MessageBoxContext = createContext({
  showFailMessage: false,
  setShowFailMessage: () => {},
  errorMessage: "",
  setErrorMessage: () => {},
  polyScanURL: "",
  setPolyScanURL: () => {},
  showPendingMessage: false,
  setShowPendingMessage: () => {},
  showSuccessMessage: false,
  setShowSuccessMessage: () => {},
  isLoading: true,
  setIsLoading: () => {},
  showConnectToPolygonMessage: false,
  setShowConnectToPolygonMessage: () => {},
});

export default MessageBoxContext;
