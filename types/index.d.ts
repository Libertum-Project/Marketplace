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
  annual_yield: number;
  category: string;
  contract_address: string;
  createdAt: string;
  description: string[];
  documents: string[];
  highlight_image: string;
  id: number;
  image_gallery: string[];
  investedBy: null | string; 
  listing_duration_months: number;
  location: {
    country: string;
    region: string;
    city: string;
    address: string;
    postal_code: string;
  };
  owner_id: number;
  savedBy: number;
  token_duration_months: number;
  total_shares: number;
  total_valuation: number;
}

