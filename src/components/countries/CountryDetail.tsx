import React from 'react';

import {
  CountryInfo,
  Currency,
  Language,
} from '../ranking-table/country.interface';

export function CountryDetail({
  languages,
  currencies,
  gini,
  ...country
}: Pick<
  CountryInfo,
  'languages' | 'currencies' | 'subregion' | 'capital' | 'nativeName' | 'gini'
>) {
  const languagesValue = languages?.reduce(
    (values: string[], currentValue: Language): string[] => {
      const { name } = currentValue;
      return [name, ...values];
    },
    []
  );
  const currenciesValues = currencies?.reduce(
    (values: string[], currentValue: Currency): string[] => {
      const { name, symbol } = currentValue;
      return [`${name}(${symbol})`, ...values];
    },
    []
  );

  return (
    <div className="col-span-2 p-8 rounded shadow bg-white">
      <h3 className="w-100">Details</h3>
      <div className="grid grid-cols-1 gap-4 mt-5">
        {Object.entries(country).map(([key, value]: [string, string]) => (
          <div
            className="grid grid-cols-2 gap-4 py-3 border-b-2 border-gray-100"
            key={key}
          >
            <div className="text-sm text-gray-500 capitalize">{key}</div>
            <div className="text-blue-800 text-sm text-right">{value}</div>
          </div>
        ))}
        {[
          { key: 'Language', value: languagesValue },
          { key: 'Currencies', value: currenciesValues },
        ].map(({ key, value }) => (
          <div
            className="grid grid-cols-2 gap-4 py-3 border-b-2 border-gray-100"
            key={key}
          >
            <div className="text-sm text-gray-500 capitalize">{key}</div>
            <div className="text-blue-800 text-sm text-right">
              {value?.join(', ')}
            </div>
          </div>
        ))}
        <div className="grid grid-cols-2 gap-4 py-3 border-b-2 border-gray-100">
          <div className="text-sm text-gray-500">Gini</div>
          <div className="text-blue-800 text-sm text-right">
            <div className="inline-block h-1 w-9/12 shadow rounded-full	overflow-hidden">
              <div
                className="h-full bg-green-300"
                style={{ width: `${gini}%` }}
              />
            </div>
            <span className="pl-1 text-gray-900 text-xs text-base">
              {gini}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
