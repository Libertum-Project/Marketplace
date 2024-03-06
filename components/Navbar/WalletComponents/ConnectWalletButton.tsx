import leftArrow from './leftArrow.svg';
import css from './WalletComponents.module.css';
import Link from 'next/link';
import { ConnectWallet, useAddress } from '@thirdweb-dev/react';
import { ServerImage } from '@/components/shared/ServerImage';

const ConnectWalletButton = () => {
  const address = useAddress();

  return (
    <div>
      {address ? (
        <ConnectWallet className={css.connectWalletButton} />
      ) : (
        <Link
          href="/login"
          className="flex justify-between items-center px-4 py-2 bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 backdrop-blur-[10px] text-white gap-3"
        >
          <ServerImage
            alt="Wallet"
            src="/assets/wallet.svg"
            width={16}
            height={16}
          />
          {address ? 'Wallet' : 'Connect Wallet'}
          <ServerImage
            alt="left arrow"
            src={leftArrow}
            width={13.207}
            height={8.708}
          />
        </Link>
      )}
    </div>
  );
};

export default ConnectWalletButton;
