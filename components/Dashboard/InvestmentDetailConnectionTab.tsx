'use client';
import { TabsContent } from '@/components/ui/tabs';
import { useAddress } from '@thirdweb-dev/react';
import { Button } from '../ui/button';
import Image from 'next/image';

const InvestmentDetailConnectionTab = () => {
  const address = useAddress();
  return (
    <TabsContent value="connection" className="sm:max-h-[550px] overflow-auto">
      <div className="mt-16">
        <div className="flex justify-between items-center gap-16 max-sm:flex-col">
          <div className="px-8 py-6 bg-wallet-card-gradient rounded-2xl flex flex-col gap-4 flex-1 max-sm:w-[80%] sm:max-w-[50%]">
            <div className="flex flex-col items-center justify-center">
              <p className="text-neutral-100 text-sm font-medium font-space_grotesk">
                Wallet
              </p>
              <p className="text-center text-white text-2xl font-semibold">
                {address &&
                  `${address.slice(0, 5)}....${address.slice(
                    address.length - 5
                  )}`}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <Button className="text-neutral-100 text-sm font-medium font-space_grotesk flex flex-col gap-2 p-0">
                <Image
                  src="/assets/icons/copy.svg"
                  alt="copy"
                  width={14}
                  height={16}
                />
                <span>Copy</span>
              </Button>

              <div className="flex flex-col gap-2 items-center justify-center">
                <Image
                  src="/assets/icons/binance.svg"
                  alt="copy"
                  width={16}
                  height={16}
                />
                <p className="text-neutral-100 text-sm font-medium font-space_grotesk">
                  BNB Smart Chain
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default InvestmentDetailConnectionTab;
