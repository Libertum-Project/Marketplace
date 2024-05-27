import React from 'react';

import { Progress } from '@/components/ui/progress';

interface TokenProgressProps {
  totalTokens: number;
  tokensSold: number;
}

const TokenProgress: React.FC<TokenProgressProps> = ({ totalTokens, tokensSold }) => {
  const percentageSold = (tokensSold / totalTokens) * 100;

  return (
    <div className="flex gap-6 items-center justify-between">
      <Progress value={percentageSold} />
      <p className="flex-shrink-0 px-4 py-1 bg-libertumOrange bg-opacity-20 rounded-[50px] border border-libertumOrange items-center justify-center text-libertumOrange text-sm font-semibold">
        {tokensSold} | {totalTokens} Tokens Sold
      </p>
    </div>
  );
};

export default TokenProgress;
