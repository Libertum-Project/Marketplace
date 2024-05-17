import React from 'react';

import YieldChart from '../Chart/YieldChart';
import { ServerImage } from '../../shared/ServerImage';

const RightSidebar = () => {
  return (
    <div className="bg-neutral-100 max-[1024px]:w-full min-[1024px]:min-h-screen min-[1024px]:max-w-[400px] border-l border-black border-opacity-10">
      <div className="w-full min-[1024px]:max-w-[400px] min-[1024px]:min-h-screen bg-neutral-100 p-5 flex flex-col border-l gap-4 sm:block top-[58px] bottom-0 right-0 overflow-y-scroll max-h-screen max-sm:w-[100%] max-sm:max-w-[100%]">
        <div className="flex flex-col">
          <div className="flex flex-col gap-4">
            <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">Investment Breakdown</p>
            <div className="bg-white rounded-[5px] border border-black border-opacity-10 w-full">
              <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-neutral-100 text-right">
                <p className="text-black text-opacity-80 text-sm font-bold">Total Investments:</p>
                <p className="text-black text-opacity-50 text-sm font-normal">0</p>
              </div>

              <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-white text-right">
                <p className="text-black text-opacity-80 text-sm font-bold">Total Properties:</p>
                <p className="text-black text-opacity-50 text-sm font-normal">0</p>
              </div>

              <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-neutral-100 text-right">
                <p className="text-black text-opacity-80 text-sm font-bold">Current Total Value:</p>
                <p className="text-black text-opacity-50 text-sm font-normal">$0</p>
              </div>

              <div className="flex justify-between items-center py-2 px-2 bg-green-500 bg-opacity-10 text-right">
                <p className="text-black text-opacity-80 text-sm font-bold">Total Profit To Date:</p>
                <p className="text-[#21AF2F] text-sm font-bold">+$0</p>
              </div>
            </div>

            <div className="flex gap-3 items-center">
              <YieldChart type="PieChart" width="150px" height="150px" />

              <div className="flex flex-col gap-6 flex-1">
                <div className="flex gap-3 items-center">
                  <div className="w-[24px] h-[24px] bg-[#86D8DB] rounded-full"></div>
                  <div className="flex flex-col">
                    <p className="text-slate-800 text-[13px] font-medium">Rent for RIT's Held</p>
                    <p className="text-neutral-700 text-xl font-bold font-space_grotesk">$0.00</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="w-[24px] h-[24px] bg-slate-300 rounded-full"></div>
                  <div className="flex flex-col">
                    <p className="text-slate-800 text-[13px] font-medium">Rent for RIT's Sold</p>
                    <p className="text-neutral-700 text-xl font-bold font-space_grotesk">$0.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center px-2 py-1 bg-white rounded-[5px]">
              <div className="flex gap-1">
                <ServerImage src="/assets/icons/investment-details/history.svg" alt="history" width={15} height={15} />
                <p className="text-black text-opacity-80 text-sm font-bold font-space_grotesk">Download Rent History</p>
              </div>
              <ServerImage src="/assets/icons/investment-details/download.svg" alt="history" width={15} height={15} />
            </div>

            <div className="flex gap-3 items-center">
              <YieldChart type="PieChart" width="150px" height="150px" pieColor="#FFA143" />

              <div className="flex flex-col gap-6 flex-1">
                <div className="flex gap-3 items-center">
                  <div className="w-[24px] h-[24px] bg-[#FFA143] rounded-full"></div>
                  <div className="flex flex-col">
                    <p className="text-slate-800 text-[13px] font-medium">Rent for RIT's Sold</p>
                    <p className="text-neutral-700 text-xl font-bold font-space_grotesk">$0.00</p>
                  </div>
                </div>

                <div className="flex gap-3 items-center">
                  <div className="w-[24px] h-[24px] bg-slate-300 rounded-full"></div>
                  <div className="flex flex-col">
                    <p className="text-slate-800 text-[13px] font-medium">Rent for RIT's Held</p>
                    <p className="text-neutral-700 text-xl font-bold font-space_grotesk">$0.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[5px] border border-black border-opacity-10 w-full flex justify-between items-center text-center">
              <div className="w-full">
                <YieldChart type="LineChart" width="100" height="100" />
              </div>
            </div>

            <div className="bg-white rounded-[5px] border border-black border-opacity-10 w-full">
              <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-neutral-100 text-right">
                <p className="text-black text-opacity-80 text-sm font-bold">Running Total</p>
                <div className="bg-black w-3 h-3 rounded-[50%]"></div>
              </div>

              <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-white text-right">
                <p className="text-black text-opacity-80 text-sm font-bold">Property Name</p>
                <div className="bg-[#FFA143] w-3 h-3 rounded-[50%]"></div>
              </div>
              <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-neutral-100 text-right">
                <p className="text-black text-opacity-80 text-sm font-bold">Running Total</p>
                <div className="bg-black w-3 h-3 rounded-[50%]"></div>
              </div>

              <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-white text-right">
                <p className="text-black text-opacity-80 text-sm font-bold">Property Name</p>
                <div className="bg-[#FFA143] w-3 h-3 rounded-[50%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
