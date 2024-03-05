'use client';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky left-0 top-0 flex h-screen w-fit flex-col justify-between overflow-y-auto max-sm:hidden lg:w-[252px] bg-[#080915] p-5">
      <div className="flex flex-1 flex-col gap-[30px]">
        <Link href="/" className="px-5">
          <Image
            src="/horizontal-logo.svg"
            alt="Logo"
            width={140}
            height={20}
            className="group-hover:fill-[#00B3B5]"
          />
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              href={item.route}
              className={`text-white flex gap-[10px] group py-[10px] px-5 ${
                isActive && 'bg-white bg-opacity-5 rounded-[5px]'
              }`}
              key={item.route}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className="group-hover:fill-[#00B3B5]"
              />
              <p className="text-white group-hover:text-[#00B3B5]">
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href="/"
          className="bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 text-white p-4 text-center"
        >
          Tokenomics
        </Link>
        <Link
          href="/"
          className="bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 text-white p-4 text-center"
        >
          Whitepaper
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
