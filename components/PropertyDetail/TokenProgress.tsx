import React from 'react';
import { Progress } from '@/components/ui/progress';

interface TokenProgressProps {
  total_tokens: number;
  tokens_sold: number;
}

const TokenProgress: React.FC<TokenProgressProps> = ({
  total_tokens,
  tokens_sold
}) => {
  tokens_sold = 0;
  const percentageSold = (tokens_sold / total_tokens) * 100;

  return (
    <div className="flex gap-6 items-center justify-between">
      <Progress value={percentageSold} />
      <p className="flex-shrink-0 px-4 py-1 bg-libertumOrange bg-opacity-20 rounded-[50px] border border-libertumOrange items-center justify-center text-libertumOrange text-sm font-semibold">
        {tokens_sold} | {total_tokens} Tokens Sold
      </p>
    </div>
  );
};

export default TokenProgress;
