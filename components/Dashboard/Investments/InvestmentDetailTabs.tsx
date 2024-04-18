import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InvestmentDetailConnectionTab from './InvestmentDetailConnectionTab';
import InvestmentDetailPropertyTab from './InvestmentDetailPropertyTab';
import InvestmentDetailYieldTab from './InvestmentDetailYieldTab';

const InvestmentDetailTabs = ({propertyAddress} : any) => {

  return (
    <div className="w-full items-center">
      <Tabs defaultValue="yield">
        <div className="flex justify-center">
          <TabsList className="grid w-full grid-cols-3 bg-neutral-200 rounded-[5px]">
            <TabsTrigger
              value="yield"
              className="border-0 data-[state=active]:rounded-[5px] data-[state=active]:shadow data-[state=active]:border-black data-[state=active]:border-opacity-10 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              Yield
            </TabsTrigger>
            <TabsTrigger
              value="connection"
              className="border-0 data-[state=active]:rounded-[5px] data-[state=active]:shadow data-[state=active]:border-black data-[state=active]:border-opacity-10 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              Connection
            </TabsTrigger>
            <TabsTrigger
              value="property"
              className="border-0 data-[state=active]:rounded-[5px] data-[state=active]:shadow data-[state=active]:border-black data-[state=active]:border-opacity-10 data-[state=active]:bg-slate-900 data-[state=active]:text-white"
            >
              Property
            </TabsTrigger>
          </TabsList>
        </div>

        <InvestmentDetailYieldTab propertyAddress={propertyAddress} />
        <InvestmentDetailConnectionTab />
        <InvestmentDetailPropertyTab />
      </Tabs>
    </div>
  );
};

export default InvestmentDetailTabs;
