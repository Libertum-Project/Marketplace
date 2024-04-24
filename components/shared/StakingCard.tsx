import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '../ui/card';
import { ServerImage } from './ServerImage';
import { stakingCards } from '@/constants';
import Link from 'next/link';
import { Button } from '../ui/button';

const StakingCard = () => {
  return (
    <>
      {stakingCards.map((stake) => {
        return (
          <Card
            key={stake.apr}
            className="rounded-[5px] shadow-emerald-100 shadow-sm bg-white max-h-[340px]"
          >
            <CardHeader className="p-3">
              <ServerImage
                src={stake.icon}
                width={200}
                height={200}
                alt={stake.name}
              />
            </CardHeader>
            <CardContent className="flex flex-col gap-5 p-3 py-4">
              <div className="flex justify-between items-center py-2 px-4 bg-neutral-100 rounded-full">
                <div className="text-md font-semibold font-montserrat flex gap-2 items-center">
                  <ServerImage
                    src="/assets/icons/apr.svg"
                    width={20}
                    height={20}
                    alt={stake.name}
                  />
                  APR:
                </div>
                <span className="text-md font-semibold font-montserrat">
                  {stake.apr} %
                </span>
              </div>
              <div className="flex justify-between items-center py-2 px-4 bg-neutral-100 rounded-full">
                <div className="text-md font-semibold font-montserrat flex gap-2 items-center">
                  <ServerImage
                    src="/assets/icons/lock-period.svg"
                    width={20}
                    height={20}
                    alt={stake.name}
                  />
                  Locking Period:
                </div>
                <span className="text-md font-semibold font-montserrat">
                  {stake.lockingPeriod} Days
                </span>
              </div>
            </CardContent>
            <CardFooter className="p-2 w-full">
              <Link
                href="https://earn.libertum.io"
                target="_blank"
                className="w-full"
              >
                <Button className="bg-libertumGreen hover:bg-libertumGreen w-full text-white rounded-[5px]">
                  STAKE
                </Button>
              </Link>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};

export default StakingCard;
