import { Hero } from './Hero/hero';
import { Filters } from './Filters/Filters';
import { properties } from '@/constants';
import AllProperties from '@/components/Home/AllProperties';

const Home = () => {
  return (
    <div>
      <Hero />
      <Filters />
      <AllProperties properties={properties} />
    </div>
  );
};

export default Home;
