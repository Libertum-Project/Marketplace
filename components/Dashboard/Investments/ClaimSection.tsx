'use client';
import { useState, useEffect } from 'react';
import PROPERTY_ABI from '@/constants/Property.json';
import getTokensIds from '@/app/utils/propertyContract/claimInvestmentFunctions/getTokensIds';
import getClaimableAmount from '@/app/utils/propertyContract/claimInvestmentFunctions/getClaimableAmount';
import getMonthsToClaim from '@/app/utils/propertyContract/claimInvestmentFunctions/getMonthsToClaim';
import getMintTime from '@/app/utils/propertyContract/claimInvestmentFunctions/getMintTime';
import createGroups from '@/app/utils/propertyContract/claimInvestmentFunctions/createGroups';
import getNextClaimableTime from '@/app/utils/propertyContract/claimInvestmentFunctions/getNextClaimableTime';

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
  const [monthsToClaim, setMonthsToClaim] = useState<number>(0);

  const [nextClaimTime, setNextClaimTime] = useState<Date | null>(null);

  const [totalClaimedCapitalRepayment, setTotalClaimedCapitalRepayment] =
    useState<number>(0);
  const [totalEarnedYield, setTotalEarnedYield] = useState<number>(0);
  const [groups, setGroups] = useState<any>();

  const { contract: propertyContract, isLoading: isPropertyContractLoading } =
    useContract(propertyContractAddress, PROPERTY_ABI.abi);

  const { data: userBalance, isLoading: isUserBalanceLoading } =
    useContractRead(propertyContract, 'balanceOf', [userWalletAddress]);

  useEffect(() => {
    async function fetchTokenIds() {
      if (!isUserBalanceLoading && userBalance) {
        const tokenQuantity = userBalance.toNumber();
        setTokenQuantity(tokenQuantity);

        //This is taking so much time!!!
        let tokenIds: any = await getTokensIds(
          tokenQuantity,
          userWalletAddress,
          propertyContractAddress
        );

        const groups = await createGroups(propertyContractAddress, tokenIds);
        setGroups(groups);

        const firstTokenIdsForEachGroup = groups.map((group: any) => group[0]);

        let claimableAmount: number = await getClaimableAmount(
          propertyContractAddress,
          firstTokenIdsForEachGroup
        );
        setClaimableAmount(claimableAmount);

        let monthsToClaim: number = await getMonthsToClaim(
          propertyContractAddress,
          firstTokenIdsForEachGroup
        );
        setMonthsToClaim(monthsToClaim);

        let nextClaimTimes: Date[] = [];
        for (let tokenId of firstTokenIdsForEachGroup) {
          const nextClaimTime = await getNextClaimableTime(
            propertyContractAddress,
            tokenId
          );
          nextClaimTimes.push(new Date(nextClaimTime));
        }

        // Find the closest time among all the groups
        let closestTime = nextClaimTimes.reduce((prev, curr) =>
          Math.abs(curr.getTime() - new Date().getTime()) <
          Math.abs(prev.getTime() - new Date().getTime())
            ? curr
            : prev
        );

        setNextClaimTime(closestTime);
      }
    }
    fetchTokenIds();
  }, [userBalance, isUserBalanceLoading]);

  function formatTimeDifference(nextClaimTime: Date | null): string {
    if (!nextClaimTime) {
      return 'Loading ...';
    }
    const now = new Date();
    const difference = nextClaimTime.getTime() - now.getTime();
    const days = Math.ceil(difference / (1000 * 60 * 60 * 24));

    if (days === 0) {
      return 'Today';
    } else if (days === 1) {
      return 'Tomorrow';
    } else if (days > 1) {
      return `${days} days left`;
    } else {
      return 'Expired';
    }
  }

  return (
    <section>
      <p>You have: {tokenQuantity} Tokens total</p>
      <p>You can claim: {claimableAmount} $</p>
      <p>Your months to claim: {monthsToClaim}</p>
      <p>Next Claim Time: {formatTimeDifference(nextClaimTime)}</p>
      <p>Total Claimed Capital Repayment: {totalClaimedCapitalRepayment} $</p>
      <p>Total Earned Yield: {totalEarnedYield} $</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Claim
      </button>
      {groups &&
        groups.map((group: number[], index: number) => (
          <div key={index} className="border p-4 my-2">
            <p>{group.length} tokens</p>
          </div>
        ))}
    </section>
  );
};

export default ClaimSection;
