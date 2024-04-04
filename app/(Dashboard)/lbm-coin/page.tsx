import css from '../../comingsoon/comingsoon.module.css';
import Link from 'next/link';

const page = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.background}></div>
        <div className={css.frame}>
          <h2>Coming Soon</h2>
          <p>
            The page you’re looking for doesn’t exist yet, but it’s coming soon
            so be sure to check back.
          </p>

          <Link href="/">
            <div className={css.button}>
              <p>Return to home</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default page;
