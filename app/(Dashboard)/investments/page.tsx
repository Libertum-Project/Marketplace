import RightSidebar from '@/components/Dashboard/Investments/RightSidebar';
import Investments from '@/components/Dashboard/Investments/Investments';

const page = () => {
  return (
    <div className="flex w-full max-sm:flex-col-reverse">
      <div className="flex w-full flex-col">
        <Investments />
      </div>
      <RightSidebar />
    </div>
  );
};

export default page;
