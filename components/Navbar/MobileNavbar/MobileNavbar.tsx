'use client';
import { type ReactElement } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/public/horizontal-logo.svg';

import css from './MobileNavbar.module.css';
import menuBtn from './menu.svg';
import close from './close.svg';
import { MobileModal } from './modal/MobileModal';

export function MobileNavbar(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleOpenMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    const bodyElement = document.getElementById('body');
    if (bodyElement) {
      const allowScroll = window.innerHeight < 700;
      bodyElement.style.overflow = isMenuOpen ? 'auto' : allowScroll ? 'auto' : 'hidden';
    }
  };

  return (
    <>
      <nav className={css.mobileNavBarContainer}>
        <div className={css.mobileNavBar}>
          <Link href={'./'} onClick={isMenuOpen ? handleToggleOpenMenu : undefined}>
            <Image src={logo} alt="libertum logo" width="140.727" height="18" />
          </Link>
          {isMenuOpen ? (
            <button className={css.menuBtn} onClick={handleToggleOpenMenu}>
              <Image src={close} alt="close" width={24} height={24} />
            </button>
          ) : (
            <button className={css.menuBtn} onClick={handleToggleOpenMenu}>
              <Image src={menuBtn} alt="Menu" />
            </button>
          )}
        </div>
      </nav>
      {isMenuOpen && <MobileModal handleToggleOpenMenu={handleToggleOpenMenu} />}
    </>
  );
}
