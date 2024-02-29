'use client'
import { createContext } from "react";

const ContractContext = createContext({
  updateContractInfo: false,
  setUpdateContractInfo: () => {},
  switchToMainnet: () => {},
  switchToTestnet: () => {},
});

export default ContractContext;
