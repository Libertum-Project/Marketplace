'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import { sidebarLinks } from '@/constants';

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto max-md:hidden lg:w-[252px] bg-[#080915] p-5 min-w-max  ">
      <div className="flex flex-1 flex-col gap-[30px]">
        <Link href="/" className="px-5">
          <Image src="/horizontal-logo.svg" alt="Logo" width={140} height={20} />
        </Link>
        {sidebarLinks.map((item) => {
          const isActive = (pathname.includes(item.route) && item.route.length > 1) || pathname === item.route;

          return (
            <Link
              href={item.route}
              className={`text-white flex flex-col gap-2 group py-[10px] px-5 ${
                isActive && 'bg-white bg-opacity-5 rounded-[5px]'
              }  `}
              key={item.route}
            >
              <div className="flex gap-[10px] items-center ">
                <Image
                  src={item.imgURL}
                  alt={item.label}
                  width={20}
                  height={20}
                  className={'group-hover:fill-[#00B3B5]'}
                />
                <p
                  className={`group-hover:text-[#00B3B5] text-base font-bold font-space_grotesk ${
                    isActive ? 'text-[#00B3B5]' : ''}
                  `}
                >
                  {item.label}
                </p>
              </div>
              <p className="max-w-[200px] text-xs font-montserrat text-white/85">{item.info}</p>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href="https://www.libertum.io/Libertum_Pitch.pdf"
          target="_blank"
          className="bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 text-white text-base font-bold font-space_grotesk leading-normal text-center p-4"
        >
          Tokenomics
        </Link>
        <Link
          href="https://www.libertum.io/whitepaperLibertum.pdf"
          target="_blank"
          className="bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 text-base font-bold font-space_grotesk leading-normal text-white p-4 text-center"
        >
          Whitepaper
        </Link>
      </div>
    </div>
  );
};

export default LeftSidebar;
