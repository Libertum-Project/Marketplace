import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

import { ServerImage } from '../shared/ServerImage';
import InvestmentDetailTabs from './InvestmentDetailTabs';

interface Props {
  property: any;
}

const InvestmentDetail = ({ property }: Props) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex items-center w-full rounded-[5px] border border-teal-500 border-opacity-20  text-center font-bold font-space_grotesk py-6 hover:bg-teal-500
                    hover:text-white
                    bg-[#00062F] text-white"
          style={{
            justifyContent: 'center',
          }}
        >
          View Investment Details
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white p-0 border-0 rounded-[5px] max-w-[1100px]">
        <div className="flex max-sm:flex-col">
          <div className="bg-slate-900 py-8 px-6 max-sm:p-3">
            <DialogClose className="text-white mb-6 max-sm:hidden">
              <ServerImage
                src="/assets/back.svg"
                alt="back"
                width={10}
                height={10}
              />
            </DialogClose>

            <div className="flex flex-col">
              <p className="text-zinc-300 text-2xl font-bold font-space_grotesk">
                {property.location.address}
              </p>
              <p className="text-zinc-300 text-base font-normal font-space_grotesk">
                {property.location.city},{property.location.region},
                {property.location.country}
              </p>

              <ServerImage
                className="rounded-[5px] mt-[10px] max-sm:hidden"
                src={property.highlight_image}
                alt="property"
                width={324}
                height={124}
              />
            </div>

            <div className="mt-[30px] flex flex-col gap-2 max-sm:hidden">
              <div className="p-4 px-16 bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 justify-around items-center flex gap-6">
                <ServerImage
                  src="/assets/icons/investment-details/marketplace.svg"
                  alt="marketplace"
                  width={24}
                  height={24}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center text-slate-400 text-[11px] font-medium">
                    See property on
                  </p>
                  <p className="text-white text-base font-bold font-space_grotesk uppercase">
                    Marketplace
                  </p>
                </div>
              </div>

              <div className="p-4 px-16 bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 justify-around items-center flex gap-6">
                <ServerImage
                  src="/assets/icons/investment-details/p2p.svg"
                  alt="marketplace"
                  width={30}
                  height={30}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center text-slate-400 text-[11px] font-medium">
                    Sell your tokens in
                  </p>
                  <p className="text-white text-base font-bold font-space_grotesk uppercase">
                    p2p Market
                  </p>
                </div>
              </div>

              <div className="p-4 px-16 bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 justify-around items-center flex gap-6">
                <ServerImage
                  src="/assets/icons/investment-details/pools.svg"
                  alt="marketplace"
                  width={24}
                  height={24}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-center text-slate-400 text-[11px] font-medium">
                    Borrow / Lend
                  </p>
                  <p className="text-white text-base font-bold font-space_grotesk uppercase">
                    pools
                  </p>
                </div>
              </div>

              <div className="p-4 px-16 bg-teal-500 bg-opacity-30 rounded-[5px] border border-teal-500 justify-around items-center flex gap-6">
                <ServerImage
                  src="/assets/icons/investment-details/contract.svg"
                  alt="marketplace"
                  width={24}
                  height={24}
                />
                <div className="flex flex-col justify-center items-center">
                  <p className="text-white text-base font-bold font-space_grotesk uppercase">
                    contract
                  </p>
                </div>
              </div>
            </div>
          </div>

            <div className="sm:py-8 sm:px-12 flex-1 p-3 sm:pb-0">
              <InvestmentDetailTabs />
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvestmentDetail;
