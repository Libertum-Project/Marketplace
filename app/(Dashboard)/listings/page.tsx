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
            After listing a property, you can monitor its performance and view
            relevant info like token purchases and property analytics here!
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
