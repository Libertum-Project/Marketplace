import { Farm } from '@/types/index'; 

export const farms: Farm[] = [
  {
    id: 1,
    name: 'Farm',
    image: '/assets/farm/farmListing.jpg',
    description: [
      "Invest in the future of agriculture via Libertum's Farm Ownership Tokenization!",
      "By purchasing the tokens, you gain fractional ownership of profitable, sustainably managed farms. Token holders can expect an annual return in the form of dividends generated from the farm's revenue, ensuring a steady income stream. Additionally, guaranteed buyback price is offered, providing security and liquidity for your investment.",
      "Join us in revolutionizing the agricultural industry, supporting local farmers, and earning reliable returns through innovative blockchain technology with Libertum."

    ],
    valuation: 1000000,
    tokenPrice: 500,
    totalTokens: 2000,
    tokensAvailables: 500,
    freeFloatFarmToken: 25,
    tokenHoldbyOwner: 75,
    guaranteed: 300,
    farmNetProfit: 150000,
    expectedAnnualDividendPerToken: 75,
    annualReturn: 15,
}
];