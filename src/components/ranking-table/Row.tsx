import Image from 'next/image';
import Link from 'next/link';

import { CountryInfo } from './country.interface';

export function Row({
  alpha3Code,
  flag,
  name,
  population,
  area,
  gini = 90,
}: CountryInfo) {
  return (
    <Link passHref href={`/country/${alpha3Code}`}>
      <tr className="bg-white rounded cursor-pointer">
        <td className="flex">
          <Image
            className="hidden md:table-cell"
            src={flag}
            alt={`${name} logo`}
            width="30"
            height="30"
          />
          <span className="pl-3 text-gray-900 font-medium text-base">
            {name}
          </span>
        </td>
        <td className="text-blue-900 font-medium text-base">{population}</td>
        <td className="hidden md:table-cell text-gray-900 font-medium text-base">
          {area}
        </td>
        <td className="hidden md:table-cell">
          <div className="inline-block h-1 w-9/12 shadow rounded-full	overflow-hidden">
            <div
              className="h-full bg-green-300"
              style={{ width: `${gini}%` }}
            />
          </div>
          <span className="pl-1 text-gray-900 text-xs text-base">{gini}%</span>
        </td>
      </tr>
    </Link>
  );
}
