'use client';
import Image from 'next/image';

const User = () => {
  return (
    <div className="bg-gray-950 bg-opacity-5 rounded-[48px] border border-black border-opacity-10 flex justify-between gap-3 pl-4 pr-0 items-center">
      <p className="text-black text-opacity-80 text-[13px]">
        ste@technicallycreative.co
      </p>
      <Image
        src="/assets/icons/profile.svg"
        alt="user"
        width={34}
        height={34}
      />
    </div>
  );
};

export default User;
