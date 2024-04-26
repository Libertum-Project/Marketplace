'use client';
import { useState, useEffect } from 'react';
import PROPERTY_ABI from '@/constants/Property.json';
import getTokensIds from '@/app/utils/propertyContract/claimInvestmentFunctions/getTokensIds';
import createGroups from '@/app/utils/propertyContract/claimInvestmentFunctions/createGroups';
import getClaimableAmount from '@/app/utils/propertyContract/claimInvestmentFunctions/getClaimableAmount';
import getMonthsToClaim from '@/app/utils/propertyContract/claimInvestmentFunctions/getMonthsToClaim';
import getNextClaimableTime from '@/app/utils/propertyContract/claimInvestmentFunctions/getNextClaimableTime';

import {
  useContract,
  useContractRead,
  useContractWrite,
  Web3Button,
  useAddress,
  useBalance
} from '@thirdweb-dev/react';

const ClaimSection = ({
  propertyAddress: propertyContractAddress,
  durationInMonths
}: any) => {
  const userWalletAddress = useAddress();
  const [tokenQuantity, setTokenQuantity] = useState<number>(0);
  const [claimableAmount, setClaimableAmount] = useState<number>(0);
  const [monthsToClaim, setMonthsToClaim] = useState<number>(0);

  const [nextClaimTime, setNextClaimTime] = useState<Date | null>(null);

  const [totalClaimedCapitalRepayment, setTotalClaimedCapitalRepayment] =
    useState<number>(0);
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

        let tokenIds: any = await getTokensIds(
          tokenQuantity,
          userWalletAddress,
          propertyContractAddress
        );

        const groups = await createGroups(propertyContractAddress, tokenIds);
        setGroups(groups);

        const groupTokenIds = groups.map((group: any) => group.tokens);

        let claimableAmountArray: number[] = [];
        let monthsToClaimArray: number[] = [];

        for (tokenIds of groupTokenIds) {
          let groupClaimableAmount: number = await getClaimableAmount(
            propertyContractAddress,
            tokenIds
          );
          claimableAmountArray.push(groupClaimableAmount);

          let monthsToClaim: number = await getMonthsToClaim(
            propertyContractAddress,
            tokenIds
          );
          monthsToClaimArray.push(monthsToClaim);
        }

        const totalClaimableAmount = claimableAmountArray.reduce(
          (total, amount) => total + amount,
          0
        );
        const totalMonthsToClaim = monthsToClaimArray.reduce(
          (total, amount) => total + amount,
          0
        );

        setClaimableAmount(totalClaimableAmount);
        setMonthsToClaim(totalMonthsToClaim);

        let nextClaimTimes: Date[] = [];
        for (let tokenIds of groupTokenIds) {
          const nextClaimTime = await getNextClaimableTime(
            propertyContractAddress,
            tokenIds
          );
          nextClaimTimes.push(new Date(nextClaimTime));
        }
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Claim
      </button>
      {groups &&
        groups.map((group: any, index: number) => (
          <div key={index} className="border p-4 my-2">
            <p>{group.tokens.length} tokens</p>
            <p>Mint Time: {group.mintTime.toLocaleDateString()}</p>
            <p>You claimed: {group.numberOfClaims} months</p>
            <p>
              Remaining moths to claim:{' '}
              {durationInMonths - group.numberOfClaims}
            </p>
            <p>Claimable amount: {group.claimableAmount}</p>
            <p>
              Next claimable time: {group.nextClaimTime.toLocaleDateString()}
            </p>
          </div>
        ))}
    </section>
  );
};

export default ClaimSection;
