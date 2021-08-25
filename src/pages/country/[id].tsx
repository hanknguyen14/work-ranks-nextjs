import React from 'react';

import { Flag } from '../../components/countries/Flag';
import { CountryInfo } from '../../components/ranking-table/country.interface';
import { Header } from '../../layout/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const Country = ({ country }: { country: CountryInfo }) => {
  return (
    <Main
      meta={
        <Meta
          title={`Work Rank | ${country.name}`}
          description="This is a work rank about every countries information all over the world."
        />
      }
    >
      <Header />
      <div className="grid grid-flow-row grid-cols-3 gap-4 mt-16">
        <Flag country={country} />
      </div>
    </Main>
  );
};

export async function getStaticProps({ params }: any) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}`
  );

  const country: CountryInfo = await response.json();

  return {
    props: {
      country,
    },
  };
}

export async function getStaticPaths() {
  const response = await fetch(
    'https://restcountries.eu/rest/v2/all?fields=alpha3Code'
  );
  const countries: CountryInfo[] = await response.json();

  const paths = countries.map((country) => ({
    params: { id: country.alpha3Code },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Country;
