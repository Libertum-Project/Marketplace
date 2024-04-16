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
