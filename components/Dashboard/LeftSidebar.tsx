'use client';
import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const LeftSidebar = () => {
  const pathname = usePathname();
  return (
    <div className="sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto max-sm:hidden lg:w-[252px] bg-[#080915] p-5 min-w-max  ">
      <div className="flex flex-1 flex-col gap-[30px]">
        <Link href="/" className="px-5">
          <Image
            src="/horizontal-logo.svg"
            alt="Logo"
            width={140}
            height={20}
          />
        </Link>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              href={item.route}
              className={`text-white flex gap-[10px] group py-[10px] px-5 items-center ${
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
              <p
                className={`group-hover:text-[#00B3B5] text-opacity-70 text-xs font-bold font-ubuntu ${
                  isActive ? 'text-[#00B3B5]' : ''
                }`}
              >
                {item.label}
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Image
                        src="/assets/icons/info.svg"
                        alt="more info"
                        width={12}
                        height={12}
                      />
                    </TooltipTrigger>
                    <TooltipContent className="bg-libertumOrange rounded-[5px]" >
                      <p className="text-white font-space_grotesk font-semibold text-xs">{item.info}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </p>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-col gap-2">
        <Link
          href="/Libertum_Tokenomics.pdf"
          target="_blank"
          className="bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 text-white text-base font-bold font-space_grotesk leading-normal text-center p-4"
        >
          Tokenomics
        </Link>
        <Link
          href="/whitepaperLibertum.pdf"
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
