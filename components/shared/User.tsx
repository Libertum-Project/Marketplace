'use client';
import { useAddress, useDisconnect } from '@thirdweb-dev/react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';

const User = () => {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="bg-gray-950 bg-opacity-5 rounded-[48px] border border-black border-opacity-10 flex justify-between gap-3 p-2 items-center cursor-pointer max-sm:bg-white">
          <p className="text-black text-opacity-80 text-[13px]">
            {address &&
              `${address.slice(0, 5)}....${address.slice(address.length - 5)}`}
          </p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white">
        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => disconnect()}
        >
          Disconnect
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default User;
