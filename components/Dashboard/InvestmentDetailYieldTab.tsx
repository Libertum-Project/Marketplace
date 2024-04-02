import { TabsContent } from '@/components/ui/tabs';
import YieldChart from './Chart/YieldChart';
import { Button } from '../ui/button';
import { ServerImage } from '../shared/ServerImage';

const InvestmentDetailYieldTab = () => {
  return (
    <TabsContent value="yield" className="sm:max-h-[550px] overflow-auto">
      <div className="flex flex-col gap-4">
        <h3 className="text-slate-900 text-[32px] font-bold font-space_grotesk">
          RENT
        </h3>

        <div className="flex gap-10 items-center">
          <YieldChart type="PieChart" width="180px" height="180px" />

          <div className="flex flex-col gap-6 flex-1">
            <div className="flex gap-7 items-center">
              <div className="w-[24px] h-[24px] bg-[#86D8DB] rounded-full"></div>
              <p className="text-slate-400 text-[13px] font-medium">
                Rent for RIT's Held
              </p>
              <p className="text-neutral-500 text-xl font-bold font-space_grotesk">
                $0.00
              </p>
            </div>

            <div className="flex gap-7 items-center">
              <div className="w-[24px] h-[24px] bg-slate-300 rounded-full"></div>
              <p className="text-slate-400 text-[13px] font-medium">
                Rent for RIT's Sold
              </p>
              <p className="text-neutral-500 text-xl font-bold font-space_grotesk">
                $0.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="flex flex-col">
            <p className="text-black text-opacity-60 text-[40px] font-extrabold">
              $ 1258
              <span className="text-black text-opacity-60 text-[32px] font-extrabold">
                .82
              </span>
            </p>
            <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
              rent in total
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-black text-opacity-60 text-[40px] font-extrabold">
              $ 458
              <span className="text-black text-opacity-60 text-[32px] font-extrabold">
                .82
              </span>
            </p>
            <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
              rent in last 30 days
            </p>

            <Button className="flex justify-between items-center px-4 py-2 bg-teal-500 bg-opacity-40 rounded-[5px] border border-teal-500 backdrop-blur-[10px] text-white gap-3 mt-3 hover:bg-teal-500 hover:text-white">
              Clain
              <ServerImage
                alt="icon"
                src="/assets/icons/investment-details/right-arrow.svg"
                width={14}
                height={8}
              />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-2">
        <h3 className="text-slate-900 text-[32px] font-bold font-space_grotesk">
          CAPITAL REPAYMENT
        </h3>

        <div className="flex gap-10 items-center">
          <YieldChart
            type="PieChart"
            width="180px"
            height="180px"
            pieColor="#FFA143"
          />

          <div className="flex flex-col gap-6 flex-1">
            <div className="flex gap-7 items-center">
              <div className="w-[24px] h-[24px] bg-[#FFA143] rounded-full"></div>
              <p className="text-slate-400 text-[13px] font-medium">
                Rent for RIT's Sold
              </p>
              <p className="text-neutral-500 text-xl font-bold font-space_grotesk">
                $0.00
              </p>
            </div>

            <div className="flex gap-7 items-center">
              <div className="w-[24px] h-[24px] bg-slate-300 rounded-full"></div>
              <p className="text-slate-400 text-[13px] font-medium">
                Rent for RIT's Held
              </p>
              <p className="text-neutral-500 text-xl font-bold font-space_grotesk">
                $0.00
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-evenly">
          <div className="flex flex-col">
            <p className="text-black text-opacity-60 text-[40px] font-extrabold">
              $ 1258
              <span className="text-black text-opacity-60 text-[32px] font-extrabold">
                .82
              </span>
            </p>
            <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
              rent in total
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-black text-opacity-60 text-[40px] font-extrabold">
              $ 458
              <span className="text-black text-opacity-60 text-[32px] font-extrabold">
                .82
              </span>
            </p>
            <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
              rent in last 30 days
            </p>

            <Button className="flex justify-between items-center px-4 py-2 bg-teal-500 bg-opacity-40 rounded-[5px] border border-teal-500 backdrop-blur-[10px] text-white gap-3 mt-3 hover:bg-teal-500 hover:text-white">
              Clain
              <ServerImage
                alt="icon"
                src="/assets/icons/investment-details/right-arrow.svg"
                width={14}
                height={8}
              />
            </Button>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default InvestmentDetailYieldTab;
