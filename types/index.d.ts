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
}

