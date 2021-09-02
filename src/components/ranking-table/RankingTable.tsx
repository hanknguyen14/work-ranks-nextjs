import React from 'react';

import { FormattedMessage } from 'react-intl';

import { CountryInfo } from './country.interface';
import { Row } from './Row';

export function RankingTable({ countries = [] }: { countries: CountryInfo[] }) {
  if (!countries.length) {
    return null;
  }
  return (
    <div className="container mx-auto pt-8">
      <table className="table-fixed w-full text-center">
        <thead>
          <tr>
            <th className="text-gray-400 font-medium text-base">
              <FormattedMessage defaultMessage="Name" />
            </th>
            <th className="text-gray-400 font-medium text-base">
              <FormattedMessage defaultMessage="Population" />
            </th>
            <th className="hidden md:table-cell text-gray-400 font-medium text-base">
              <FormattedMessage defaultMessage="Area (km)" />
            </th>
            <th className="hidden md:table-cell text-gray-400 font-medium text-base">
              <FormattedMessage defaultMessage="Gini" />
            </th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <Row
              flag={country.flag}
              name={country.name}
              population={country.population}
              gini={country.gini}
              area={country.area}
              key={country.name}
              alpha3Code={country.alpha3Code}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
