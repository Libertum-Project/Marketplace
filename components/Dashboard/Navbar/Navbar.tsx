'use client';
import Search from '@/components/shared/Search';
import User from '@/components/shared/User';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white py-2 px-5 border-b border-black border-opacity-5 w-full items-center max-sm:bg-[#080915]">
      <div>
        <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk max-sm:hidden">
          My Account
        </p>
        <Link href="/" className="px-5 sm:hidden">
          <Image
            src="/horizontal-logo.svg"
            alt="Logo"
            width={140}
            height={20}
          />
        </Link>
      </div>

      <div className="flex gap-5">
        <Search />
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
