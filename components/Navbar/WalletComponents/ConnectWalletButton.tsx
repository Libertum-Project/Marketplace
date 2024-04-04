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
          className="flex justify-between items-center px-4 py-2 bg-libertumGreen bg-opacity-30 rounded-[5px] border border-libertumGreen backdrop-blur-[10px] text-white gap-3 override-link"
        >
          <ServerImage
            alt="Wallet"
            src="/assets/wallet.svg"
            width={10}
            height={10}
          />
          {address ? 'Wallet' : 'Connect Wallet'}
          <ServerImage
            alt="left arrow"
            src={leftArrow}
            width={9.207}
            height={4.708}
          />
        </Link>
      )}
    </div>
  );
};

export default ConnectWalletButton;
