"use client";
import { useContext, useState, useEffect, type ReactElement } from "react";
import { createWeb3Modal, useWeb3Modal, useWeb3ModalAccount } from "@web3modal/ethers/react";
import Image from "next/image";
import leftArrow from "./leftArrow.svg";
import wallet from "./wallet.svg";
import css from "./WalletComponents.module.css";
import ContractContext from "../../../context/ContractContext";

// export function ConnectWalletButton({}: any): ReactElement {
//   const [isUserConnected, setIsUserConnected] = useState(false);
//   const web3Modal = createWeb3Modal();

//   const { open } = useWeb3Modal();
//   const { isConnected } = useWeb3ModalAccount();
//   const { switchToMainnet, switchToTestnet } =
//     useContext(ContractContext);
//   const [isTest, setIsTest] = useState();

//   useEffect(() => {
//     const fetchEnvironmentVariables = async () => {
//       try {
//         const response = await fetch(
//           "/api/smartcontract?function=getEnvironmentVariables",
//           {
//             method: "GET",
//           },
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const result = await response.json();

//         setIsTest(result.isTest);
//       } catch (error) {
//         console.error("There was a problem with the fetch operation:", error);
//       }
//     };

//     fetchEnvironmentVariables();
//   }, []);

//   useEffect(() => {
//     setIsUserConnected(isConnected);
//   }, [isConnected]);

//   const handleConnectWallet = () => {
//     open();
//   };

//   useEffect(() => {
//     if (isTest !== undefined) {
//       if (isTest) {
//         switchToTestnet();
//       } else {
//         switchToMainnet();
//       }
//     }
//   }, [isTest]);

//   return (
//     <div className={css.connectWalletButtonContainer}>
//       {!isUserConnected ? (
//         <button
//           className={css.connectWalletButton}
//           onClick={handleConnectWallet}
//         >
//           <div>
//             <Image alt="Wallet" src={wallet} width={16} height={16} />
//             <p>Connect Wallet</p>
//           </div>
//           <Image
//             alt="left arrow"
//             src={leftArrow}
//             width={13.207}
//             height={8.708}
//           />
//         </button>
//       ) : (
//         <div className={css.w3mBtn}>
//           <w3m-account-button balance="hide" />
//           <w3m-network-button />
//         </div>
//       )}
//     </div>
//   );
// }


export function ConnectWalletButton ({}: any): ReactElement {

  return (
    <div className={css.connectWalletButtonContainer}>      
        <button
          className={css.connectWalletButton}          
        >
          <div>
            <Image alt="Wallet" src={wallet} width={16} height={16} />
            <p>Connect Wallet</p>
          </div>
          <Image
            alt="left arrow"
            src={leftArrow}
            width={13.207}
            height={8.708}
          />
        </button> 
    </div>    
  );
}
