'use client';
import { TabsContent } from '@/components/ui/tabs';
import { Chart } from 'react-google-charts';
import { ServerImage } from '@/components/shared/ServerImage';

const MockProperty1 = () => {
  const data = [
    ['', ''],
    ['', 13],
    ['', 86],
  ];

  const options = {
    title: '',
    pieHole: 0.6,
    is3D: false,
    legend: 'none',
    tooltip: { trigger: 'none' },
    pieSliceText: 'none',
    slices: {
      0: { color: '#9BB0C9' },
      1: { color: '#86D8DB' },
    },
    backgroundColor: 'transparent',
  };

  return (
    <TabsContent value="yield" className="max-h-[860px] overflow-auto pb-52">
      <div className="py-20 max-sm:py-10 flex gap-10 flex-col">
        <div className="flex justify-between flex-col items-start gap-3">
          <p className="flex-shrink-0 p-4 w-fit bg-libertumGreen bg-opacity-20 rounded-[.5rem] border border-libertumGreen items-center justify-center text-libertumGreen text-sm font-semibold mx-4 text-center">
            Next claim time: <b>9 days left.</b>
          </p>
          <p className="flex-shrink-0 items-start justify-start text-slate-600 text-sm font-semibold mx-4 w-[300px] text-start">
            Remaining months to claim: <b> 54 months</b>
          </p>
        </div>
        <div className="flex items-center justify-center max-sm:flex-col gap-6 max-sm:items-start max-sm:gap-3">         
          <p className="flex items-center justify-center max-sm:flex-col gap-6 max-sm:items-start max-sm:gap-3">
            Owned tokens: <b>100</b>
          </p>
          <button className="flex justify-between items-center px-4 py-2 bg-[#00B3B5] bg-opacity-70 rounded-[5px] border border-[#00B3B5] backdrop-blur-[10px] text-white gap-3 mx-4 cursor-not-allowed w-[200px]">
            Claim
            <ServerImage alt="icon" src="/assets/icons/investment-details/right-arrow.svg" width={14} height={8} />
          </button>
        </div>

        <div className="flex flex-col gap-4 shadow-xl m-4 p-10 max-sm:p-5">
          <h3 className="text-slate-900 text-[32px] font-bold font-space_grotesk">PROFIT OVERVIEW</h3>

          <div className="flex gap-10 items-center max-sm:flex-col max-sm:items-start">
            <Chart chartType={'PieChart'} width={'180px'} height={'180px'} data={data} options={options} />
            <div className="flex flex-col gap-6 flex-1">
              <div className="flex gap-7 items-center">
                <div className="w-[24px] h-[24px] bg-[#86D8DB] rounded-full"></div>
                <p className="text-slate-400 text-[13px] font-medium">TOTAL RETURN</p>
                <p className="text-neutral-500 text-xl font-bold font-space_grotesk">$800.04</p>
              </div>

              <div className="flex gap-7 items-center">
                <div className="w-[24px] h-[24px] bg-slate-300 rounded-full"></div>
                <p className="text-slate-400 text-[13px] font-medium">TOTAL INCOME</p>
                <p className="text-neutral-500 text-xl font-bold font-space_grotesk">$304.02</p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-evenly">
            <div className="flex flex-col">
              <p className="text-black text-opacity-60 text-[40px] font-extrabold">
                $133
                <span className="text-black text-opacity-60 text-[32px] font-extrabold">.34</span>
              </p>
              <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
                Return in last 30 days
              </p>
            </div>
            <div className="flex flex-col">
              <p className="text-black text-opacity-60 text-[40px] font-extrabold">
                $50
                <span className="text-black text-opacity-60 text-[32px] font-extrabold">.67</span>
              </p>
              <p className="uppercase opacity-50 text-center text-neutral-800 text-xs font-black">
                Income in last 30 days
              </p>
            </div>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default MockProperty1;
