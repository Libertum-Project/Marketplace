import Link from 'next/link';

import css from '../../comingsoon/comingsoon.module.css';

const page = () => {
  return (
    <div>
      <div className="flex w-full p-5 justify-center items-center bg-libertumOrange shadow-sm">
        <p className="text-white ">This page is under construction. Thanks for your patience</p>
      </div>
      <div className={css.container}>
        <div className={css.background}></div>
        <div className={css.frame}>
          <h2>Coming Soon</h2>
          <p>
            After listing a property, you can monitor its performance and view relevant info like token purchases and
            property analytics here!
          </p>

          <Link href="/">
            <div className={css.button}>
              <p>Return to home</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default page;
