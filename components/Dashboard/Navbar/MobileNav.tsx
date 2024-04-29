'use client';
import { mobileMenu } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <div className="md:hidden w-full fixed bottom-0 bg-gray-950 bg-opacity-95 justify-between items-center flex px-[10px] py-[12px]">
      {mobileMenu.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;
        return (
          <Link
            href={item.route}
            className={`text-white flex flex-col gap-[10px] group py-[10px] px-[10px] items-center ${
              isActive && 'bg-white bg-opacity-5 rounded-[5px]'
            } ${item.label === 'Get' ? 'gap-0' : ''}`}
            key={item.route}
          >
            <Image
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
              className={`group-hover:fill-[#00B3B5]  ${
                item.label === 'Get' ? 'w-[36px]' : ''
              }`}
            />
            <p className="text-white group-hover:text-[#00B3B5] text-opacity-70 text-xs font-bold font-ubuntu">
              {item.label}
            </p>
          </Link>
        );
      })}
    </div>
  );
};

export default MobileNav;
