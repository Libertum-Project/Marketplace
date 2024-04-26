import { SidebarLink } from '@/types';

export const kycPending: boolean = false;

export const sidebarLinks: SidebarLink[] = [
  {
    imgURL: '/assets/icons/dashboard.svg',
    route: '/profile',
    label: 'Profile',
    info: 'Manage personal information'
  },
  {
    imgURL: '/assets/icons/listings.svg',
    route: '/listings',
    label: 'My Listings',
    info: 'Your properties'
  },
  {
    imgURL: '/assets/icons/investments.svg',
    route: '/investments',
    label: 'My Investments',
    info: 'Properties you invested in'
  },
  {
    imgURL: '/assets/icons/properties.svg',
    route: '/saved',
    label: 'Saved',
    info: 'View saved properties'
  },
  {
    imgURL: '/assets/icons/earn.svg',
    route: '/lbm-coin',
    label: 'Earn',
    info: 'Token analytics and staking tool'
  },
  {
    imgURL: '/assets/icons/market.svg',
    route: '/',
    label: 'Marketplace',
    info: 'Invest and buy premium NFTs'
  },
  {
    imgURL: '/assets/icons/get.svg',
    route: '/get',
    label: 'Get',
    info: 'Liquidity for cross-chain token swaps'
  }
];

export const mobileMenu: SidebarLink[] = [
  {
    imgURL: '/assets/icons/dashboard.svg',
    route: '/profile',
    label: 'Profile',
    info: ''
  },
  {
    imgURL: '/assets/icons/listings.svg',
    route: '/listings',
    label: 'Listings',
    info: ''
  },
  {
    imgURL: '/assets/icons/properties.svg',
    route: '/saved',
    label: 'Saved',
    info: ''
  },
  {
    imgURL: '/assets/icons/earn.svg',
    route: '/lbm-coin',
    label: 'Earn',
    info: ''
  },
  {
    imgURL: '/assets/icons/investments.svg',
    route: '/investments',
    label: 'Investments',
    info: ''
  },
  {
    imgURL: '/assets/icons/market.svg',
    route: '/',
    label: 'Marketplace',
    info: ''
  },
  {
    imgURL: '/assets/icons/get.svg',
    route: '/get',
    label: 'Get',
    info: ''
  }
];

export const properties: {}[] = [
  // {
  //   id: 1,
  //   name: '23 canyon street',
  //   price: '$300,000',
  //   type: 'hotel',
  //   percentage: 7.58,
  //   image: '/assets/property.png',
  //   favourite: false,
  //   address: {
  //     house_no: 'E-9',
  //     city: 'Miami',
  //     state: 'florida',
  //     country: 'united states',
  //   },
  // },
  // {
  //   id: 2,
  //   name: '24 canyon street',
  //   price: '$300,000',
  //   type: 'hotel',
  //   percentage: 7.58,
  //   image: '/assets/property.png',
  //   favourite: true,
  //   address: {
  //     house_no: 'E-9',
  //     city: 'sikar',
  //     state: 'rajasthan',
  //     country: 'india',
  //   },
  // },
  // {
  //   id: 3,
  //   name: '25 canyon street',
  //   price: '$300,000',
  //   type: 'hotel',
  //   percentage: 7.58,
  //   image: '/assets/property.png',
  //   favourite: false,
  //   address: {
  //     house_no: 'E-9',
  //     state: 'rajasthan',
  //     city: 'sikar',
  //     country: 'india',
  //   },
  // },
  // {
  //   id: 4,
  //   name: '26 canyon street',
  //   price: '$300,000',
  //   type: 'hotel',
  //   percentage: 7.58,
  //   image: '/assets/property.png',
  //   favourite: true,
  //   address: {
  //     house_no: 'E-9',
  //     state: 'rajasthan',
  //     city: 'sikar',
  //     country: 'india',
  //   },
  // },
  // {
  //   id: 5,
  //   name: '26 canyon street',
  //   price: '$300,000',
  //   type: 'hotel',
  //   percentage: 7.58,
  //   image: '/assets/property.png',
  //   favourite: true,
  //   address: {
  //     house_no: 'E-9',
  //     state: 'rajasthan',
  //     city: 'sikar',
  //     country: 'india',
  //   },
  // },
  // {
  //   id: 6,
  //   name: '26 canyon street',
  //   price: '$300,000',
  //   type: 'hotel',
  //   percentage: 7.58,
  //   image: '/assets/property.png',
  //   favourite: false,
  //   address: {
  //     house_no: 'E-9',
  //     state: 'rajasthan',
  //     city: 'sikar',
  //     country: 'india',
  //   },
  // },
  {
    id: 1,
    location: {
      country: 'USA',
      region: 'California',
      city: 'San Francisco',
      address: '123 Main St',
      postal_code: '94105'
    },
    amenities: ['Swimming pool, gym'],
    description: 'Beautiful property with amazing views',
    category: 'Residential',
    image:
      'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?w=1380&t=st=1697029644~exp=1697030244~hmac=6a515cd407f7f099d8e84c82c7040c2463e88e388410aa76243b749a132c52bf',
    images: [
      'https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150749.jpg?w=1380&t=st=1697029644~exp=1697030244~hmac=6a515cd407f7f099d8e84c82c7040c2463e88e388410aa76243b749a132c52bf',
      'https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-bookshelf_105762-2104.jpg?w=1380&t=st=1697029761~exp=1697030361~hmac=81e59d81329423b31cd5361deb4f8d32867b8183c579de47c474e328b81d6f8c',
      'https://img.freepik.com/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150767.jpg?w=1380&t=st=1697029796~exp=1697030396~hmac=8a8bbd630e314c73ee2bf8b43c6019eba3c01b7e68617b1f330d629cbc8f496e',
      'https://img.freepik.com/free-photo/beautiful-tropical-beach-front-hotel-resort-with-swimming-pool-paradise-destination-vacations-ge_1258-150769.jpg?w=1380&t=st=1697029842~exp=1697030442~hmac=528606be38677c9d9ec9c88d9d435336ccb09ab57ed7e8739a556bfee51fc277',
      'https://img.freepik.com/free-photo/high-angle-shot-pier-seashore-with-cloudy-blue-sky_181624-20001.jpg?w=1380&t=st=1697029850~exp=1697030450~hmac=a892a6b8fdf9032266460307f6338c3ece76aa4884ce3f4bf9470b00de1bfa00'
    ],
    documents: ['document_url1, document_url2'],
    owner_id: 1,
    contract_address: 'smart_contract_address',
    property_creation_time: '2024-03-07T00:00:00.000Z',
    total_shares: 1000,
    total_valuation: '1000000',
    annual_yield: '5.2',
    token_duration_months: 12,
    listing_duration_months: 6,
    savedBy: null
  },
  {
    id: 2,
    location: {
      country: 'Canada',
      region: 'Ontario',
      city: 'Toronto',
      address: '456 Elm St',
      postal_code: 'M5H 1T1'
    },
    amenities: ['Spa, rooftop garden'],
    description: 'Modern condo with city views',
    category: 'Residential',
    image:
      'https://res.cloudinary.com/dlgxyehlw/image/upload/v1696425080/kcobrfqqrvdu5eb7f3au.jpg',
    images: [
      'https://res.cloudinary.com/dlgxyehlw/image/upload/v1696425080/kcobrfqqrvdu5eb7f3au.jpg',
      'https://res.cloudinary.com/dlgxyehlw/image/upload/v1696425081/xe3ey4pp31uwph1qic8u.jpg',
      'https://res.cloudinary.com/dlgxyehlw/image/upload/v1696425081/zs4dqm86rpzqcljsdhlg.jpg',
      'https://res.cloudinary.com/dlgxyehlw/image/upload/v1696425081/oaqpr0ozhqoqba1ok7a3.jpg',
      'https://res.cloudinary.com/dlgxyehlw/image/upload/v1696425086/br5bk6a3praxumrttsfg.jpg'
    ],
    documents: ['document_url3, document_url4'],
    owner_id: 1,
    contract_address: 'smart_contract_address2',
    property_creation_time: '2024-03-07T00:00:00.000Z',
    total_shares: 1500,
    total_valuation: '1200000',
    annual_yield: '4.8',
    token_duration_months: 10,
    listing_duration_months: 7,
    savedBy: null
  },
  {
    id: 3,
    location: {
      country: 'Spain',
      region: 'Catalonia',
      city: 'Barcelona',
      address: '789 Oak Ave',
      postal_code: '08001'
    },
    amenities: ['Beach access'],
    description: 'Cozy beachfront villa',
    category: 'Residential',
    image:
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80',
      'https://images.unsplash.com/photo-1592595896551-12b371d546d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1569443693539-175ea9f007e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    ],
    documents: ['document_url5, document_url6'],
    owner_id: 1,
    contract_address: 'smart_contract_address3',
    property_creation_time: '2024-03-07T00:00:00.000Z',
    total_shares: 2000,
    total_valuation: '1500000',
    annual_yield: '6.0',
    token_duration_months: 8,
    listing_duration_months: 8,
    savedBy: null
  },
  {
    id: 6,
    location: {
      country: 'United Kingdom',
      region: 'Grays',
      city: 'Grays',
      address: '21 & 23 High Street',
      postal_code: '67890'
    },
    amenities: ['Harbour views, balcony'],
    description:
      'The properties are mid-terraced traditional brick-built retail units. N° 21 trades as Hannahs Bakery and N° 23 as an H&T Pawnbrokers. Are of solid brick construction and sit beneath butterfly main roofs, with a central valley, served by replacement interlocking concrete roof tiles. Parapet front walls mask the main roof elevations from the roadside. Both are two storeys in height to include later rear additions of cavity brick/block construction.',
    category: 'Commercial',
    image:
      'https://res.cloudinary.com/detybwf0y/image/upload/v1698176117/Imagen_de_WhatsApp_2023-10-23_a_las_09.14.33_c9221fbd_abxbc5.jpg',
    images: [
      'https://res.cloudinary.com/detybwf0y/image/upload/v1698176117/Imagen_de_WhatsApp_2023-10-23_a_las_09.14.33_c9221fbd_abxbc5.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1698176117/rnjosttaih4t9begkcq9_vcda8c.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1698176117/apiyjnkwo27b8xoiaxz2_1_k9psti.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1698176118/Imagen_de_WhatsApp_2023-10-23_a_las_09.31.17_42abd195_e4mctc.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1698176117/Imagen_de_WhatsApp_2023-10-23_a_las_09.15.52_6c5bbd4f_blnioz.jpg'
    ],
    documents: ['document_url11, document_url12'],
    owner_id: 1,
    contract_address: 'smart_contract_address6',
    property_creation_time: '2024-03-07T00:00:00.000Z',
    total_shares: 1800,
    total_valuation: '1150000',
    annual_yield: '4',
    token_duration_months: 15,
    listing_duration_months: 10,
    savedBy: null
  },
  {
    id: 7,
    location: {
      country: 'Netherlands',
      region: 'Groningen',
      city: 'Groningen',
      address: 'Zijlsterried 39',
      postal_code: '9746 PB'
    },
    amenities: ['Beer garden, rooftop pool'],
    description:
      "Stunning Semi-Detached House on the Water with Underfloor Heating and Attached Stone Garage. \n  Looking for a home that feels like a holiday retreat? Look no further than this beautiful semi-detached house located on the water in the Reitdiep residential area. With boats sailing by, you'll feel like you're on vacation every day. This fully insulated home features underfloor heating in the living room and bathroom, providing ultimate comfort.",
    category: 'Residential',
    image:
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610764/146_2160_hbs8h6.jpg',
    images: [
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610764/146_2160_hbs8h6.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610763/148_2160_n0jw9m.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610763/149_2160_grok1d.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610761/150_2160_is2eel.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610761/151_2160_c4rr7q.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610761/154_2160_cs3hd0.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610761/152_2160_bis3cm.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610761/155_2160_xusoen.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610760/156_2160_mt9gxe.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610760/158_2160_wdrjl7.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610760/157_2160_miv8ni.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610760/159_2160_k5gf1x.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610760/160_2160_kv6raa.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610759/161_2160_otetat.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610759/162_2160_zpuabx.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610755/163_2160_eynmqy.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610747/164_2160_yhnb7u.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610746/168_2160_d7mjsy.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610746/170_2160_rkrubi.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610745/172_2160_ljgosl.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610745/174_2160_js0nqz.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610745/176_2160_a2fsdq.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610745/177_2160_xraqkt.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610745/178_2160_sz7yf7.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610744/181_2160_rw56xm.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610744/180_2160_b8uaz0.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610744/182_2160_ea4sqm.jpg',
      'https://res.cloudinary.com/detybwf0y/image/upload/v1700610743/187_2160_pym7fp.jpg'
    ],
    documents: ['document_url13, document_url14'],
    owner_id: 1,
    contract_address: 'smart_contract_address7',
    property_creation_time: '2024-03-07T00:00:00.000Z',
    total_shares: 100,
    total_valuation: '700000',
    annual_yield: '3',
    token_duration_months: 12,
    listing_duration_months: 6,
    savedBy: null
  }
];

export const MAX_ALLOWANCE =
  115792089237316195423570985008687907853269984665640564039457584007913129639935n;
export const exchangeProxy = '0x4F68248ecB782647D1E5981a181bBe1bfFee1040';

export const stakingCards = [
  {
    name: 'stake',
    lockingPeriod: 0,
    apr: 5,
    icon: '/assets/logo-dark.svg'
  },
  {
    name: 'stake',
    lockingPeriod: 30,
    apr: 8,
    icon: '/assets/logo-dark.svg'
  },
  {
    name: 'stake',
    lockingPeriod: 90,
    apr: 10,
    icon: '/assets/logo-dark.svg'
  },
  {
    name: 'stake',
    lockingPeriod: 180,
    apr: 20,
    icon: '/assets/logo-dark.svg'
  },
  {
    name: 'stake',
    lockingPeriod: 360,
    apr: 40,
    icon: '/assets/logo-dark.svg'
  }
];
