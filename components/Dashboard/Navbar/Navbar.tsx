import Search from '@/components/shared/Search';
import User from '@/components/shared/User';

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-white py-2 px-5 border-b border-black border-opacity-5 w-full items-center">
      <div>
        <p className="text-black text-opacity-80 text-lg font-bold font-space_grotesk">
          My Account
        </p>
      </div>

      <div className="flex gap-5">
        <Search />
        <User />
      </div>
    </nav>
  );
};

export default Navbar;
