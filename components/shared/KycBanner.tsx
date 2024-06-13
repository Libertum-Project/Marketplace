import React from 'react';

import { Button } from '../ui/button';

const KycBanner = () => {
  return (
    <div className="w-full px-5 py-2.5 bg-orange-500 shadow flex justify-center items-center gap-2.5 max-sm:flex-col">
      <p className="text-white text-xs font-normal text-center">
        Complete your ‘Know Your Customer’ details to unlock access to your full dashboard.
      </p>
      <div className="flex gap-2.5">
        <Button className="min-w-[100px]px-3 py-[5px] rounded-[5px] border border-white text-white text-xs font-normal">
          Dismiss Notice
        </Button>
        <Button className="min-w-[100px]px-3 py-[5px] rounded-[5px] bg-teal-500 border border-white text-white text-xs font-normal hover:bg-teal-500">
          Get Started
        </Button>
      </div>
    </div>
  );
};

export default KycBanner;
