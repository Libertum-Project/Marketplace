'use client';
import { useEffect, type ReactElement } from 'react';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import css from './DesktopNavbar.module.css';
import logo from '@/public/horizontal-logo.svg';
import { LearnModal } from './modals/LearnModal';
import { DocsModal } from './modals/DocsModal';
import ConnectWalletButton from '../WalletComponents/ConnectWalletButton';
import { useAddress } from '@thirdweb-dev/react';

export function DesktopNavbar(): ReactElement {
  const [isLearnModalVisible, setIsLearnModalVisible] = useState(false);
  const [isDocsModalVisible, setIsDocsModalVisible] = useState(false);
  const address = useAddress();

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

  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

  const saveUser = async () => {
    if (address) {
      await fetch('https://libertum--marketplace.azurewebsites.net/users', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${secretKey}`,
          Accept: 'application/json',
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ wallet_address: address }),
      });
    }
  };

  useEffect(() => {
    saveUser();
  }, [address]);

  return (
    <>
      <nav className={css.desktopNavbar}>
        <Link
          href={'./'}
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
          {address && <a href="/profile">Profile</a>}
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
