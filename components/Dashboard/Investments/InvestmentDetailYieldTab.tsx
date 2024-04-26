import { TabsContent } from '@/components/ui/tabs';
//import ClaimSection from './ClaimSection';
import YieldChart from '../Chart/YieldChart';
import { ServerImage } from '../../shared/ServerImage';
import UserTokenBalance from './UserTokenBalance';

const InvestmentDetailYieldTab = ({
  propertyAddress,
  durationInMonths
}: any) => {
  //  <ClaimSection propertyAddress={propertyAddress} durationInMonths={durationInMonths}/>
  return (
    <TabsContent
      value="yield"
      className="sm:max-h-[640px] overflow-auto py-20 flex gap-10 flex-col"
    >
      <div className="flex justify-between items-center">
        <UserTokenBalance propertyAddress={propertyAddress} />

        <button className="flex justify-between items-center px-4 py-2 bg-[#00B3B5] bg-opacity-70 rounded-[5px] border border-[#00B3B5] backdrop-blur-[10px] text-white gap-3 mx-4 cursor-not-allowed w-[200px]">
          Claim
          <ServerImage
            alt="icon"
            src="/assets/icons/investment-details/right-arrow.svg"
            width={14}
            height={8}
          />
        </button>
      </div>

      <div className="flex justify-between items-center">
        <p className="flex-shrink-0 px-4 py-1 bg-libertumGreen bg-opacity-20 rounded-[50px] border border-libertumGreen items-center justify-center text-libertumGreen text-sm font-semibold mx-4 w-[300px] text-center">
          Next claim time: <b>37 days left.</b>
        </p>
        <p className="flex-shrink-0 px-4 py-1 bg-libertumGreen bg-opacity-20 rounded-[50px] border border-libertumGreen items-center justify-center text-libertumGreen text-sm font-semibold mx-4 w-[300px] text-center">
          Remaining months to claim: <b>{durationInMonths}</b>
        </p>
      </div>

      <div className="flex flex-col gap-4 shadow-xl  m-4 p-10">
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
              $ 0
              <span className="text-black text-opacity-60 text-[32px] font-extrabold">
                .0
              </span>
            </p>
            <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
              rent in total
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-black text-opacity-60 text-[40px] font-extrabold">
              $ 0
              <span className="text-black text-opacity-60 text-[32px] font-extrabold">
                .0
              </span>
            </p>
            <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
              rent in last 30 days
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 shadow-xl  m-4 p-10">
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
              $ 0
              <span className="text-black text-opacity-60 text-[32px] font-extrabold">
                .0
              </span>
            </p>
            <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
              rent in total
            </p>
          </div>

          <div className="flex flex-col">
            <p className="text-black text-opacity-60 text-[40px] font-extrabold">
              $ 0
              <span className="text-black text-opacity-60 text-[32px] font-extrabold">
                .0
              </span>
            </p>
            <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
              rent in last 30 days
            </p>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default InvestmentDetailYieldTab;
