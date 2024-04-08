import css from '../../comingsoon/comingsoon.module.css';
import Link from 'next/link';
import { ServerImage } from '@/components/shared/ServerImage';

const page = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.background}></div>
        <div className={css.frame}>
        <h2>Coming Soon: </h2>
          <ServerImage 
          src="/assets/earnDARK.svg"
          alt='earn image logo'
          width={400}
          height={200}
          />
          <p>
            Token analytics and staking tool
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
