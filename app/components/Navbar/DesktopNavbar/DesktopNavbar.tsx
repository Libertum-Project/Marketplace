"use client";
import { type ReactElement } from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./DesktopNavbar.module.css";
import logo from "@/public/horizontal-logo.svg";
import { LearnModal } from "./modals/LearnModal";
import { DocsModal } from "./modals/DocsModal";
import { ConnectWalletButton } from "../WalletComponents/ConnectWalletButton";

export function DesktopNavbar(): ReactElement {
  const [isLearnModalVisible, setIsLearnModalVisible] = useState(false);
  const [isDocsModalVisible, setIsDocsModalVisible] = useState(false);

  const handleShowLearnModal = () => {
    setIsLearnModalVisible(true);
    setIsDocsModalVisible(false);
  };

  const handleShowDocsModal = () => {
    setIsDocsModalVisible(true);
    setIsLearnModalVisible(false);
  };

  const handleHideModals = () => {
    setIsDocsModalVisible(false);
    setIsLearnModalVisible(false);
  };

  return (
    <>
      <nav className={css.desktopNavbar}>
        <Link
          href={"./"}
          onMouseEnter={handleHideModals}
          onTouchStart={handleHideModals}
        >
          <Image src={logo} alt="libertum logo" width="140.727" height="18" />
        </Link>

        <div className={css.links}>
          <Link
            href="./ico"
            onMouseEnter={handleHideModals}
            onTouchStart={handleHideModals}
          >
            Buy LBM
          </Link>
          <a
            href="/comingsoon"
            onMouseEnter={handleHideModals}
            onTouchStart={handleHideModals}
          >
            Explore Properties
          </a>
          <a
            href="/comingsoon"
            onMouseEnter={handleShowLearnModal}
            onTouchStart={handleShowLearnModal}
          >
            Learn ↓
          </a>
          <a
            href="/community"
            onMouseEnter={handleHideModals}
            onTouchStart={handleHideModals}
          >
            Community
          </a>
          <a
            href="/comingsoon"
            onMouseEnter={handleShowDocsModal}
            onTouchStart={handleShowDocsModal}
          >
            Docs ↓
          </a>
          <div onMouseEnter={handleHideModals} onTouchStart={handleHideModals}>
            <ConnectWalletButton />
          </div>
        </div>
      </nav>
      {isLearnModalVisible && (
        <LearnModal handleHideModals={handleHideModals} />
      )}

      {isDocsModalVisible && <DocsModal handleHideModals={handleHideModals} />}
    </>
  );
}
