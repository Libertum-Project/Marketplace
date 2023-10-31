import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import style from "./SideBar.module.scss";
import WalletIcon from "../../../public/icons/walletIcon";
import { useDispatch, useSelector } from "react-redux";
import {
  setConnected,
  selectIsConnected,
} from "../../../redux/features/walletSlice";
import { useAccountModal } from "@rainbow-me/rainbowkit";

function CustomConnectButtom({ container }) {
  const isConnected = useSelector(selectIsConnected);
  const dispatch = useDispatch();

  const { openAccountModal } = useAccountModal();



  return (
    <div className={style.button}>
      <ConnectButton.Custom>
        {({
          account,
          chain,
          openAccountModal,
          openChainModal,
          openConnectModal,
          authenticationStatus,
          mounted,
        }) => {
          // Note: If your app doesn't use authentication, you
          // can remove all 'authenticationStatus' checks
          const ready = mounted && authenticationStatus !== "loading";
          const connected =
            ready &&
            account &&
            chain &&
            (!authenticationStatus || authenticationStatus === "authenticated");
          return (
            <div
              {...(!ready && {
                "aria-hidden": true,
                style: {
                  opacity: 0,
                  pointerEvents: "none",
                  userSelect: "none",
                },
              })}
            >
              {(() => {
                if (!connected) {
                  dispatch(setConnected(false));
                  return (
                    <div className={style.button}>
                      <button
                        onClick={openConnectModal}
                        type="button"
                        className={style.walletButtonOpen}
                      >
                        Connect Wallet
                      </button>
                    </div>
                  );
                }

                if (chain.unsupported) {
                  return (
                    <button onClick={openChainModal} type="button">
                      Wrong network
                    </button>
                  );
                }
                if (ready && !isConnected) {
                  dispatch(setConnected(true));
                }

                return (
                  <div className={style.ConnectedModal}>
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className={style.chainModal}
                    >
                      {/* {chain.name} */}
                      Wallet
                    </button>
                    {/* 
                    <button
                      onClick={openAccountModal}
                      type="button"
                      className={style.balanceModal}
                    >
                      {account.displayName}
                      {account.displayBalance
                        ? ` (${account.displayBalance})`
                        : ""}
                    </button> */}
                  </div>
                );
              })()}
            </div>
          );
        }}
      </ConnectButton.Custom>
    </div>
  );
}

export default CustomConnectButtom;
