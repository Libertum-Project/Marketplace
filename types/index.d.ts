export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}

export interface Property {
  id: number;
  location: {
    country: string;
    region: string;
    city: string;
    address: string;
    postal_code: string;
  };
  amenities: string[];
  description: string;
  category: string;
  images: string[];
  documents: string[];
  owner_id: number;
  contract_address: string;
  total_shares: number;
  total_valuation: number; 
  annual_yield: number; 
  token_duration_months: number;
  listing_duration_months: number;
  savedBy: null | number; 
}
