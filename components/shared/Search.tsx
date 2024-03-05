'use client';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

const Search = () => {
  return (
    <div className="rounded-[5px] border border-black border-opacity-10 flex items-center justify-between w-[218px] px-[10px] max-sm:hidden">
      <Input
        type="text"
        placeholder="Search dashboard"
        value=""
        onChange={() => {}}
        className="paragraph-regular no-focus placeholder border-none shadow-none outline-none text-black text-opacity-60 text-[13px]"
      />
      <Image
        src="/assets/icons/search.svg"
        alt="search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
    </div>
  );
};

export default Search;
