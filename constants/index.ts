import { SidebarLink } from '@/types';

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '/assets/icons/dashboard.svg',
    route: '/dashboard',
    label: 'Dashboard',
  },
  {
    imgURL: '/assets/icons/listings.svg',
    route: '/listings',
    label: 'My Listings',
  },
  {
    imgURL: '/assets/icons/investments.svg',
    route: '/investments',
    label: 'My Investments',
  },
  {
    imgURL: '/assets/icons/properties.svg',
    route: '/properties',
    label: 'My Properties',
  },
  {
    imgURL: '/assets/icons/lbm-coin.svg',
    route: '/lbm-coin',
    label: 'LBM Coin',
  },
];

export const mobileMenu: SidebarLink[] = [
  {
    imgURL: '/assets/icons/dashboard.svg',
    route: '/dashboard',
    label: 'Dashboard',
  },
  {
    imgURL: '/assets/icons/listings.svg',
    route: '/listings',
    label: 'Listings',
  },
  {
    imgURL: '/assets/icons/investments.svg',
    route: '/investments',
    label: 'Investments',
  },
  {
    imgURL: '/assets/icons/properties.svg',
    route: '/properties',
    label: 'Properties',
  },
  {
    imgURL: '/assets/icons/lbm-coin.svg',
    route: '/lbm-coin',
    label: 'LBM Coin',
  },
];

export const properties: {}[] = [
  {
    id: 1,
    name: '23 canyon street',
    price: '$300,000',
    type: 'hotel',
    percentage: 7.58,
    image: '/assets/property.png',
    favourite: false,
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
    favourite: true,
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
    favourite: false,
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
    favourite: true,
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
    favourite: true,
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
    favourite: false,
    address: {
      house_no: 'E-9',
      state: 'rajasthan',
      city: 'sikar',
      country: 'india',
    },
  },
];
