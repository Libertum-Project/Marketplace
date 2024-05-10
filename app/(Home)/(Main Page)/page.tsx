import AllProperties from '@/components/Home/AllProperties';

import Hero from './Hero/hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="md:max-w-[75rem] m-auto">
        <AllProperties showFilters={true} />
      </div>
    </div>
  );
};

export default Home;
