'use client';
import {type ReactElement } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import css from './DesktopNavbar.module.css';
import logo from '@/public/horizontal-logo.svg';
import { LearnModal } from './modals/LearnModal';
import { DocsModal } from './modals/DocsModal';
import { ProfileModal } from './modals/ProfileModal';
import ConnectWalletButton from '../WalletComponents/ConnectWalletButton';
import { useAddress } from '@thirdweb-dev/react';

export function DesktopNavbar(): ReactElement {
  const [isLearnModalVisible, setIsLearnModalVisible] = useState(false);
  const [isDocsModalVisible, setIsDocsModalVisible] = useState(false);
  const [isProfileModalVisible, setIsProfileModalVisible] = useState(false);
  const address = useAddress();

  const handleShowLearnModal = () => {
    setIsLearnModalVisible(true);
    setIsDocsModalVisible(false);
    setIsProfileModalVisible(false);
  };

  const handleShowDocsModal = () => {
    setIsDocsModalVisible(true);
    setIsLearnModalVisible(false);
    setIsProfileModalVisible(false);
  };

  const handleShowProfileModal = () => {
    setIsProfileModalVisible(true);
    setIsDocsModalVisible(false);
    setIsLearnModalVisible(false);
  };

  const handleHideModals = () => {
    setIsDocsModalVisible(false);
    setIsLearnModalVisible(false);
    setIsProfileModalVisible(false);
  };

  return (
    <>
      <nav className={css.desktopNavbar}>
        <Link
          href={'https://www.libertum.io'}
          onMouseEnter={handleHideModals}
          onTouchStart={handleHideModals}
        >
          <Image src={logo} alt="libertum logo" width="140.727" height="18" />
        </Link>

        <div className={css.links}>
          <Link
            href="https://www.libertum.io/ico"
            onMouseEnter={handleHideModals}
            onTouchStart={handleHideModals}
          >
            Buy LBM
          </Link>
          <a
            href="https://www.libertum.io/comingsoon"
            onMouseEnter={handleHideModals}
            onTouchStart={handleHideModals}
          >
            Explore Properties
          </a>
          <a
            href="#"
            onMouseEnter={handleShowLearnModal}
            onTouchStart={handleShowLearnModal}
          >
            Learn ↓
          </a>
          <a
            href="https://www.libertum.io/community"
            onMouseEnter={handleHideModals}
            onTouchStart={handleHideModals}
          >
            Community
          </a>
          <a
            href="#"
            onMouseEnter={handleShowDocsModal}
            onTouchStart={handleShowDocsModal}
          >
            Docs ↓
          </a>
          {address && (
            <a
              href="#"
              onMouseEnter={handleShowProfileModal}
              onTouchStart={handleShowProfileModal}
            >
              Profile ↓
            </a>
          )}
          <div onMouseEnter={handleHideModals} onTouchStart={handleHideModals}>
            <ConnectWalletButton />
          </div>
        </div>
      </nav>
      {isLearnModalVisible && (
        <LearnModal handleHideModals={handleHideModals} />
      )}

      {isDocsModalVisible && <DocsModal handleHideModals={handleHideModals} />}
      {isProfileModalVisible && (
        <ProfileModal handleHideModals={handleHideModals} />
      )}
    </>
  );
}
