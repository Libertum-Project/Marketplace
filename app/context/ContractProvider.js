'use client';
import { useState } from 'react';
import ContractContext from './ContractContext.js';
import MessageBoxProvider from './MessageBoxProvider.js';
import { Web3ModalProvider } from './Web3Modal.tsx';

const ContractProvider = ({ children }) => {
  const [updateContractInfo, setUpdateContractInfo] = useState(false);

  const switchToMainnet = async () => {
    const MainnetData = {
      chainId: '0x38', // 56
      chainName: 'BNB Smart Chain Mainnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'BNB',
        decimals: 18,
      },
      rpcUrls: ['https://bsc-dataseed1.binance.org/'],
      blockExplorerUrls: ['https://bscscan.com'],
    };

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: MainnetData.chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [MainnetData],
          });
        } catch (addError) {
          console.error('Error adding Mainnet:', addError);
        }
      } else {
        console.error('Error switching to Mainnet:', error);
      }
    }
  };

  const switchToTestnet = async () => {
    const TestnetData = {
      chainId: '0x61', //97
      chainName: 'BNB Smart Chain Testnet',
      nativeCurrency: {
        name: 'BNB',
        symbol: 'tBNB',
        decimals: 18,
      },
      rpcUrls: ['https://endpoints.omniatech.io/v1/bsc/testnet/public'],
      blockExplorerUrls: ['https://testnet.bscscan.com'],
    };

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: TestnetData.chainId }],
      });
    } catch (error) {
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [TestnetData],
          });
        } catch (addError) {
          console.error('Error adding Testnet:', addError);
        }
      } else {
        console.error('Error switching to Testnet:', error);
      }
    }
  };

  const value = {
    updateContractInfo,
    setUpdateContractInfo,
    switchToMainnet,
    switchToTestnet,
  };

  return (
    <Web3ModalProvider>
      <MessageBoxProvider>
        <ContractContext.Provider value={value}>{children}</ContractContext.Provider>
      </MessageBoxProvider>
    </Web3ModalProvider>
  );
};

export default ContractProvider;
