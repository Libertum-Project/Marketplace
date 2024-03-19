import Hero from './Hero/hero';
import { Filters } from './Filters';
import AllProperties from '@/components/Home/AllProperties';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="md:max-w-[75rem] m-auto">
        <Filters />
        <AllProperties />
      </div>
    </div>
  );
};

export default Home;
