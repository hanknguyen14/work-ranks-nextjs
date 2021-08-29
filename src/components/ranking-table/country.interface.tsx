export type Language = {
  name: string;
  nativeName: string;
};

export type Currency = {
  name: string;
  code: string;
  symbol: string;
};

export type CountryInfo = {
  alpha3Code?: string;
  flag: string;
  name: string;
  population: string;
  area: string;
  gini?: number;
  region?: string;
  nativeName?: string;
  capital?: string;
  subregion?: string;
  languages?: Language[];
  currencies?: Currency[];
};
