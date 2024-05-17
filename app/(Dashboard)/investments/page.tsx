import RightSidebar from '@/components/Dashboard/Investments/RightSidebar';
import Investments from '@/components/Dashboard/Investments/Investments';

const page = () => {
  return (
    <div className="flex w-full max-[1024px]:flex-col-reverse">
      <div className="flex w-full flex-col">
        <Investments />
      </div>
      <RightSidebar />
    </div>
  );
};

export default page;
