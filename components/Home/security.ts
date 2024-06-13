import { SecurityListing } from '@/types/index'; 

export const securityListings: SecurityListing[] = [
  {
    id: 1,
    name: 'ETFs',
    image: '/assets/securityListing/etf.jpg',
    description: [
      "Enjoy the benefits of owning the ETFs, including price appreciation and the security of a clear buyback insurance.",
      "An exchange-traded fund is a type of investment fund that is also an exchange-traded product, i.e., it is traded on stock exchanges. ETFs own financial assets such as stocks, bonds, currencies, debts, futures contracts, and/or commodities such as gold bars."
    ],
    valuation: 6000000,
    tokenPrice: 1000,
    totalTokens: 6000,
    guaranteed: 900,
  }
];
