'use client';
import { type ReactElement, useState, useEffect } from 'react';
import Image from 'next/image';
import leftArrow from './leftArrow.svg';
import rocket from '@/public/assets/rocket.svg';
import wallet from '@/public/assets/wallet.svg';
import css from './WalletComponents.module.css';

export function ConnectWalletButton({}: any): ReactElement {
  const [isConnected, setIsConnected] = useState(false);

  return (
    <div className={css.connectWalletButtonContainer}>
      <button className={css.connectWalletButton}>
        <Image
          alt="Wallet"
          src={isConnected ? wallet : rocket}
          width={16}
          height={16}
        />
        {isConnected ? 'Wallet' : 'Sign In'}
        <Image alt="left arrow" src={leftArrow} width={13.207} height={8.708} />
      </button>
    </div>
  );
}
