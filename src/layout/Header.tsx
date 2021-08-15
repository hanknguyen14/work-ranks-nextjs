import Image from 'next/image';

import logo from '../../public/assets/images/logo.svg';

export function Header() {
  return (
    <header className="text-center">
      <Image className="text-center" src={logo} alt="World Rank logo" />
    </header>
  );
}
