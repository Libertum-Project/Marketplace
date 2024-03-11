import css from './hero.module.css';
import Link from 'next/link';
import { ServerImage } from '@/components/shared/ServerImage';

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div className="max-sm:hidden">
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={`${css.heroCommunity} max-sm:bg-primary-gradient`}>
        <div className={css.textCommunity}>
          <h1>Unlock the potential for earning by investing</h1>
          <div className={css.paragraphsCommunity}>
            <p>
              From residential havens to commercial hubs, each property presents
              unique opportunities for growth and prosperity.
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <ServerImage
            src="/assets/property.png"
            alt="N"
            width="336"
            height="206"
          />
          <div className="pl-10 pr-4 py-4 bg-white bg-opacity-5 rounded-xl border border-l-0 rounded-l-none border-teal-500">
            <div className={css.featuredProperties__title}>
              <span>New</span>
              <p>Featured Properties</p>
            </div>

            <Link href="/" className={css.featuredProperties__button}>
              See all featured
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
