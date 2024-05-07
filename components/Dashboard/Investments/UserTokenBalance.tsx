'use client';
import { useState, useEffect } from 'react';
import { useContract, useContractRead, useAddress } from '@thirdweb-dev/react';

import PROPERTY_ABI from '@/constants/Property.json';

const UserTokenBalance = ({ propertyAddress: propertyContractAddress }: any) => {
  const userWalletAddress = useAddress();
  const [tokenQuantity, setTokenQuantity] = useState<number>(0);
  const { contract: propertyContract, isLoading: isPropertyContractLoading } = useContract(
    propertyContractAddress,
    PROPERTY_ABI.abi,
  );

  const { data: userBalance, isLoading: isUserBalanceLoading } = useContractRead(propertyContract, 'balanceOf', [
    userWalletAddress,
  ]);

  useEffect(() => {
    if (!isUserBalanceLoading && userBalance) {
      const tokenQuantity = userBalance.toNumber();
      setTokenQuantity(tokenQuantity);
    }
  }, [userBalance, isUserBalanceLoading]);

  return (
    <p className="flex-shrink-0 px-4 py-1 bg-libertumGreen bg-opacity-20 rounded-[50px] border border-libertumGreen items-center justify-center text-libertumGreen text-sm font-semibold ml-4 w-[200px] text-center">
      Owned tokens: <b> {isUserBalanceLoading ? '...' : tokenQuantity}</b>
    </p>
  );
};

export default UserTokenBalance;
