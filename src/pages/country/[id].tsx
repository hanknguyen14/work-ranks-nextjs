import React from 'react';

import { CountryDetail } from '../../components/countries/CountryDetail';
import { Flag } from '../../components/countries/Flag';
import { CountryInfo } from '../../components/ranking-table/country.interface';
import { Header } from '../../layout/Header';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';

const Country = ({ country }: { country: CountryInfo }) => {
  const {
    name,
    flag,
    region,
    population,
    area,
    languages,
    currencies,
    subregion,
    capital,
    nativeName,
    gini,
  } = country;
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
        <Flag {...{ name, flag, region, population, area }} />
        <CountryDetail
          {...{ languages, currencies, subregion, capital, nativeName, gini }}
        />
      </div>
    </Main>
  );
};

export async function getStaticProps({ params }: any) {
  const response = await fetch(
    `https://restcountries.eu/rest/v2/alpha/${params.id}?fields=flag;name;capital;currencies;languages;subregion;nativeName;region;gini;area;population`
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

  const pathsEn = countries.map((country) => ({
    params: { id: country.alpha3Code },
    locale: 'en',
  }));

  const pathsVi = countries.map((country) => ({
    params: { id: country.alpha3Code },
    locale: 'vi',
  }));

  return {
    paths: [...pathsEn, ...pathsVi],
    fallback: false,
  };
}

export default Country;
