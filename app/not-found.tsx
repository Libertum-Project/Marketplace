'use client';
import { NavBar } from '@/components/Navbar/NavBar';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import css from './not-found.module.css';

export default function NotFound() {
  return (
    <>
      <NavBar />

      <div className={css.container}>
        <div className={css.background}></div>
        <div className={css.frame}>
          <h2>
            {' '}
            <span className={css.error}>404:</span>Page not found
          </h2>
          <p>We don’t seem to be able to find a page at this address.</p>

          <Link href="/">
            <div className={css.button}>
              <p>Return to home</p>
            </div>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
