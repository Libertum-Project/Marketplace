import Image from 'next/image';
import Link from 'next/link';
import css from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={css.container}>
      <div>
        <Image
          src="/404.svg"
          alt="Not Found"
          width={300}
          height={300}
        />
      </div>

      <div className={css.errorMessagePage}>
        <div className={css.errorPage}>404</div>
        <div className={css.message}>
          Oops. This page has gone missing.
        </div>
        <div className={css.message}>
          You may have mistyped the address or the page may have moved.
        </div>
      </div>

      <div>
        <Link href="http://www.libertum.io" passHref>
          <p className={css.button}>
            Go Home
          </p>
        </Link>
      </div>
    </div>
  );
}
