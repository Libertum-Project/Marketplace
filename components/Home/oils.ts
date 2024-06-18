import { Oil } from '@/types/index';

export const oils: Oil[] = [
  {
    id: 1,
    name: 'Oil Field',
    image: '/assets/oil/oilListing.jpg',
    description: [
      'Oil field ownership tokenization by Libertum offers a revolutionary investment opportunity by converting shares of lucrative oil fields into digital tokens.',
      "As a token holder, you can expect to receive annual returns in the form of dividends derived from the oil field's profits. Additionally, to ensure the security of your investment, a guaranteed buyback price for your tokens is offered, providing a safety net against market volatility. ",
      " This combination of regular income and capital protection makes oil field ownership tokenization by Libertum a compelling and secure way to diversify your investment portfolio while capitalizing on the enduring value of the energy sector. Own a piece of 'Oil Field' today.",
    ],
    valuation: 10000000,
    tokenPrice: 500,
    totalTokens: 20000,
    tokensAvailables: 5000,
    freeFloatOilToken: 25,
    tokenHoldbyOwner: 75,
    guaranteed: 300,
    oilFieldNetProfit: 2000000,
    expectedAnnualDividendPerToken: 100,
    annualReturn: 20,
  },
];
