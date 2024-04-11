import RightSidebar from '@/components/Dashboard/Investments/RightSidebar';
import DemoInvestments from '@/components/Dashboard/Investments/DemoInvestments';
import Investments from '@/components/Dashboard/Investments/Investments';

const page = () => {
  return (
    <div className="flex w-full max-sm:flex-col-reverse">
      <div className="flex w-full flex-col">
        <DemoInvestments />
        <Investments />
      </div>
      <RightSidebar />
    </div>
  );
};

export default page;
