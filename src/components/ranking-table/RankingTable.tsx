import React from 'react';

import logo from '../../../public/assets/images/logo.svg';
import { Row } from './Row';

export function RankingTable() {
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
          <Row
            flag={logo}
            countryName="UK"
            population="15000000"
            area="858"
            gini="49%"
          />
        </tbody>
      </table>
    </div>
  );
}
