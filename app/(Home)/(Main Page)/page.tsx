import { Hero } from './Hero/hero';
import { Filters } from './Filters/Filters';
import AllProperties from '@/components/Home/AllProperties';

const Home = () => {
  const properties: {}[] = [
    {
      id: 1,
      name: '23 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        city: 'Miami',
        state: 'florida',
        country: 'united states',
      },
    },
    {
      id: 2,
      name: '24 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        city: 'sikar',
        state: 'rajasthan',
        country: 'india',
      },
    },
    {
      id: 3,
      name: '25 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        state: 'rajasthan',
        city: 'sikar',
        country: 'india',
      },
    },
    {
      id: 4,
      name: '26 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        state: 'rajasthan',
        city: 'sikar',
        country: 'india',
      },
    },
    {
      id: 5,
      name: '26 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        state: 'rajasthan',
        city: 'sikar',
        country: 'india',
      },
    },
    {
      id: 6,
      name: '26 canyon street',
      price: '$300,000',
      type: 'hotel',
      percentage: 7.58,
      image: '/assets/property.png',
      address: {
        house_no: 'E-9',
        state: 'rajasthan',
        city: 'sikar',
        country: 'india',
      },
    },
  ];
  return (
    <div>
      <Hero />
      <Filters />
      <AllProperties properties={properties} />
    </div>
  );
};

export default Home;
