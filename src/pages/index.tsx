import React from 'react';

import { CountryInfo } from '../components/ranking-table/country.interface';
import { RankingTable } from '../components/ranking-table/RankingTable';
import { Header } from '../layout/Header';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Index = ({ countries }: { countries: CountryInfo[] }) => {
  console.log(countries);
  return (
    <Main
      meta={
        <Meta
          title="Work Rank"
          description="This is a work rank about every countries information all over the world."
        />
      }
    >
      <>
        <Header />
        <RankingTable countries={countries} />
      </>
    </Main>
  );
};

export async function getStaticProps() {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/all?fields=flag;name;population;area;gini;&page=1`
  );
  const countries: CountryInfo[] = await res.json();

  if (!countries) {
    return {
      notFound: true,
    };
  }

  return {
    props: { countries },
  };
}

export default Index;
