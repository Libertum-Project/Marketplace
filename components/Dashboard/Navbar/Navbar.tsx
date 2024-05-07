'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ConnectWalletButton from '@/components/Navbar/WalletComponents/ConnectWalletButton';

const Navbar = () => {
  const pathname = usePathname();
  const title = pathname === '/saved' ? pathname.replace('/', '') : `My ${pathname.replace('/', '')}`;

  if (pathname === '/get' || pathname === '/lbm-coin') {
    return (
      <div className="flex justify-between bg-[#080915] py-2 px-5 border-b border-black border-opacity-5 w-full items-center max-sm:bg-[#080915] h-[82.8667px] sm:h-[55px]">
        <Link href="/" className="sm:hidden ">
          <Image src="/horizontal-logo.svg" alt="Logo" width={140} height={20} />
        </Link>
        <div className="absolute top-[1.35rem] md:top-2 right-5 ">
          <ConnectWalletButton />
        </div>
      </div>
    );
  }

  return (
    <nav className="flex justify-between bg-[#080915] py-2 px-5 border-b border-black border-opacity-5 w-full items-center max-sm:bg-[#080915]">
      <div>
        <p className="text-white text-opacity-80 text-lg font-bold font-space_grotesk max-sm:hidden capitalize">
          {title}
        </p>
        <Link href="/" className="px-5 sm:hidden">
          <Image src="/horizontal-logo.svg" alt="Logo" width={140} height={20} />
        </Link>
      </div>

      <ConnectWalletButton />
    </nav>
  );
};

export default Navbar;
