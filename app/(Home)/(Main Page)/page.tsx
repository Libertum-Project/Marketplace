import { AllItems } from '@/components/Home/AllItems'; 

import Hero from './Hero/hero';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="md:max-w-[75rem] m-auto">
        <AllItems showFilters={true} />
      </div>
    </div>
  );
};

export default Home;
