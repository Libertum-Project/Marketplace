import React from 'react';

const RightSidebar = () => {
  return (
    <div className="max-sm:hidden min-w-[350px] min-h-screen bg-neutral-100 border-l border-black border-opacity-10 p-5 flex flex-col gap-4">
      <div className="flex flex-col">
        <div className="flex flex-col gap-4">
          <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">
            Investment Breakdown
          </p>
          <div className="bg-white rounded-[5px] border border-black border-opacity-10 w-full">
            <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-neutral-100 text-right">
              <p className="text-black text-opacity-80 text-sm font-bold">
                Total Investments:
              </p>
              <p className="text-black text-opacity-50 text-sm font-normal">
                20
              </p>
            </div>

            <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-white text-right">
              <p className="text-black text-opacity-80 text-sm font-bold">
                Total Properties:
              </p>
              <p className="text-black text-opacity-50 text-sm font-normal">
                17
              </p>
            </div>

            <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-neutral-100 text-right">
              <p className="text-black text-opacity-80 text-sm font-bold">
                Current Total Value:
              </p>
              <p className="text-black text-opacity-50 text-sm font-normal">
                $350,000
              </p>
            </div>

            <div className="flex justify-between items-center py-2 px-2 bg-green-500 bg-opacity-10 text-right">
              <p className="text-black text-opacity-80 text-sm font-bold">
                Total Profit To Date:
              </p>
              <p className="text-[#21AF2F] text-sm font-bold">+$15,800</p>
            </div>
          </div>

          <div className="bg-white rounded-[5px] border border-black border-opacity-10 w-full flex justify-between items-center text-center">
            <div className="w-full h-[200px]">Graph</div>
          </div>

          <div className="bg-white rounded-[5px] border border-black border-opacity-10 w-full">
            <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-neutral-100 text-right">
              <p className="text-black text-opacity-80 text-sm font-bold">
                Running Total
              </p>
              <div className="bg-black w-3 h-3 rounded-[50%]"></div>
            </div>

            <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-white text-right">
              <p className="text-black text-opacity-80 text-sm font-bold">
                Property Name
              </p>
              <div className="bg-[#FFA143] w-3 h-3 rounded-[50%]"></div>
            </div>
            <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-neutral-100 text-right">
              <p className="text-black text-opacity-80 text-sm font-bold">
                Running Total
              </p>
              <div className="bg-black w-3 h-3 rounded-[50%]"></div>
            </div>

            <div className="flex justify-between items-center py-2 px-2 border-b border-black border-opacity-10 bg-white text-right">
              <p className="text-black text-opacity-80 text-sm font-bold">
                Property Name
              </p>
              <div className="bg-[#FFA143] w-3 h-3 rounded-[50%]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
