import React from 'react';

import { CountryInfo } from '../components/ranking-table/country.interface';
import { FilterBox } from '../components/ranking-table/FilterBox';
import { useSearch } from '../components/ranking-table/hooks/useSearch';
import { RankingTable } from '../components/ranking-table/RankingTable';
import { Header } from '../layout/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = ({ initCountries }: { initCountries: CountryInfo[] }) => {
  const { searchTerm, setSearchTerm } = useSearch('');

  const filteredCountries = initCountries.filter(
    ({ name: countryName }: { name: string }) =>
      countryName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Main
      meta={
        <Meta
          title="Work Rank"
          description="This is a work rank about every countries information all over the world."
        />
      }
    >
      <Header />
      <FilterBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RankingTable countries={filteredCountries} />
    </Main>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/all?fields=flag;name;population;area;gini;&page=1`
  );
  const initCountries: CountryInfo[] = await res.json();

  if (!initCountries) {
    return {
      notFound: true,
    };
  }

  return {
    props: { initCountries },
  };
}

export default Index;
