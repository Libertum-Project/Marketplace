import Hero from './Hero/hero';
import { Filters } from './Filters/Filters';
import { properties } from '@/constants';
import AllProperties from '@/components/Home/AllProperties';

const Home = () => {
  return (
    <div>
      <Hero />
      <div className="md:max-w-[75rem] m-auto">
        <Filters />
        <AllProperties properties={properties} />
      </div>
    </div>
  );
};

export default Home;
