"use client";
import { createWeb3Modal, defaultConfig } from "@web3modal/ethers/react";

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "";

const BSC = {
  chainId: 56,
  name: "BNB Smart Chain Mainnet",
  currency: "BNB",
  explorerUrl: "https://bscscan.com",
  rpcUrl: "https://bsc-dataseed1.binance.org/",
};

const ethereum = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const metadata = {
  name: "Libertum",
  description: "Libertum",
  url: "https://libertum.io",
  icons: [""],
};

createWeb3Modal({
  ethersConfig: defaultConfig({ metadata }),
  chains: [BSC, ethereum],
  defaultChain: BSC,
  projectId,
  themeVariables: {
    "--w3m-font-family": "Space Grotesk",  // Base font family
    "--w3m-accent":"#00b3b5", // Accent color for buttons, icons, labels, etc.
    "--w3m-color-mix": " #00b3b5", // The color that blends in with the default colors   
    "--w3m-color-mix-strength": 10,  // Percentage on how much "--w3m-color-mix" should blend in
    "--w3m-font-size-master": "8px",  // Base pixel size for fonts
    "--w3m-border-radius-master": "8px",  // Base border radius for fonts
  },
});

export function Web3ModalProvider({ children }: { children: React.ReactNode }) {
  return children;
}
