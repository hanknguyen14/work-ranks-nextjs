import React from 'react';

import Image from 'next/image';
import { FormattedMessage } from 'react-intl';

import { CountryInfo } from '../ranking-table/country.interface';

export function Flag({ name, flag, region, population, area }: CountryInfo) {
  return (
    <div className="text-center p-8 rounded shadow bg-white">
      <Image src={flag} alt={`${name}'s flag`} width="280" height="215" />
      <h1 className="font-semibold text-3xl mt-2">{name}</h1>
      <h2 className="text-base text-blue-800">{region}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-blue-800 text-base mt-8">
            {population.toLocaleString()}
          </h3>
          <h4 className="text-sm text-gray-500">
            {' '}
            <FormattedMessage defaultMessage="Population" />
          </h4>
        </div>
        <div>
          <h3 className="text-blue-800 text-base mt-8">
            {area.toLocaleString()}
          </h3>
          <h4 className="text-sm text-gray-500">
            {' '}
            <FormattedMessage defaultMessage="Area" />
          </h4>
        </div>
      </div>
    </div>
  );
}
