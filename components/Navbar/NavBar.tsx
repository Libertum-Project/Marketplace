import { type ReactElement } from 'react';

import { MobileNavbar } from './MobileNavbar/MobileNavbar';
import { DesktopNavbar } from './DesktopNavbar/DesktopNavbar';

export function NavBar(): ReactElement {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
}
