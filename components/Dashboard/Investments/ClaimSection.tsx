'use client';
import { useState, useEffect } from 'react';
import PROPERTY_ABI from '@/constants/Property.json';
import getTokensIds from '@/lib/investments/getTokensIds';
import {
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button,
  useAddress,
  useBalance
} from '@thirdweb-dev/react';

const ClaimSection = ({ propertyAddress: propertyContractAddress }: any) => {
  const userWalletAddress = useAddress();
  const [tokenQuantity, setTokenQuantity] = useState<number>(0);
  const [claimableAmount, setClaimableAmount] = useState<number>(0);
  const [nextClaimTime, setNextClaimTime] = useState<Date | null>(null);
  const [totalClaimedAmount, setTotalClaimedAmount] = useState<number>(0);
  const [totalEarnedYield, setTotalEarnedYield] = useState<number>(0);
  const [tokenIds, setTokenIds] = useState<string[]>([]);

  const { contract: propertyContract, isLoading: isPropertyContractLoading } =
    useContract(propertyContractAddress, PROPERTY_ABI.abi);

  const { data: userBalance, isLoading: isUserBalanceLoading } =
    useContractRead(propertyContract, 'balanceOf', [userWalletAddress]);

  useEffect(() => {
    async function fetchTokenIds() {
      if (!isUserBalanceLoading && userBalance) {
        const tokenQuantity = userBalance.toNumber(); 
        setTokenQuantity(tokenQuantity);

        let tokenIds: any = await getTokensIds(
          tokenQuantity,
          userWalletAddress,
          propertyContractAddress
        );

        setTokenIds(tokenIds);
      }
    }
    fetchTokenIds();
  }, [userBalance, isUserBalanceLoading]);

  console.log(tokenIds);
  return (
    <section>
      <p>You have: {tokenQuantity} Tokens total</p>
      <p>You can claim: {claimableAmount} $</p>
      <p>Next Claim Time: {nextClaimTime?.toLocaleString()}</p>
      <p>Total Claimed Amount: {totalClaimedAmount} $</p>
      <p>Total Earned Yield: {totalEarnedYield} $</p>
    </section>
  );
};

export default ClaimSection;
