import React from 'react';

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
            <th className="text-gray-400 font-medium text-base">Name</th>
            <th className="text-gray-400 font-medium text-base">Population</th>
            <th className="hidden md:table-cell text-gray-400 font-medium text-base">
              Area (km)
            </th>
            <th className="hidden md:table-cell text-gray-400 font-medium text-base">
              Gini
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
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
