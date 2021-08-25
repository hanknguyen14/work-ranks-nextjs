import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import logo from '../../public/assets/images/logo.svg';

export function Header() {
  return (
    <Link passHref href="/">
      <header className="text-center cursor-pointer">
        <Image className="text-center" src={logo} alt="World Rank logo" />
      </header>
    </Link>
  );
}
