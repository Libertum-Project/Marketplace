export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
  info: string;
}

export interface Token {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logo: string;
}

export interface Property {
  amenities: string[];
  annualYield: number;
  category: string;
  contractAddress: string;
  createdAt: string;
  description: string[];
  documents: string[];
  highlightImage: string;
  id: number;
  imageGallery: string[];
  investedBy: null | string;
  listingDurationMonths: number;
  location: {
    country: string;
    region: string;
    city: string;
    address: string;
    postalCode: string;
  };
  ownerId: number;
  savedBy: number;
  tokenDurationMonths: number;
  totalShares: number;
  totalValuation: number;
  repaymentDuration: number;
}

export interface User {
  id: number;
  walletAddress: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  dob: string | null;
  residentialAddress: string | null;
  city: string | null;
  country: string | null;
  postalCode: string | null;
  isAuthenticated: boolean;
  createdAt: string;
  favoriteProperties: Property[];
  publishedProperties: Property[];
  investedProperties: Property[];
}

export type Gem = {
  id: number;
  name: string;
  image: string;
  pricePerGram: number;
  tokenGrams: number;
  description: string;
};

export type GemsCardProps = {
  gem: Gem;
  investmentDetail?: boolean;
};

export type WeightUnitType = 'gr' | 'oz';

export type SecurityListing = {
  id: number;
  name: string;
  image: string;
  description: string[];
  valuation: number;
  tokenPrice: number;
  totalTokens: number;
  guaranteed: number;
};

export type SecurityCardProps = {
  security: SecurityListing;
  investmentDetail?: boolean;
};
export type Art = {
  id: number;
  name: string;
  image: string;
  description: string[];
  valuation: number;
  tokenPrice: number;
  totalTokens: number;
  guaranteed: number;
};

export type ArtCardProps = {
  artPiece: Art;
  investmentDetail?: boolean;
};