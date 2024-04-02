import FavoriteProperties from '@/components/Dashboard/FavoriteProperties';

const page = async () => {
  return (
    <div className="p-5 grid grid-cols-1 min-[575px]:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-full">
      <FavoriteProperties />
    </div>
  );
};

export default page;
