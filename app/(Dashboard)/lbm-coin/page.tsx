import StakingCard from '@/components/shared/StakingCard';

const page = () => {
  return (
    <div className="bg-blue-gradient min-h-screen p-4 md:p-20 flex items-center">
      <div
        className="
        grid 
        gap-5 
        grid-cols-1
        md:grid-cols-1
        lg:grid-cols-2
        xl:grid-cols-3
        max-w-[1400px]
        w-full
        "
      >
        <StakingCard />
      </div>
    </div>
  );
};

export default page;
