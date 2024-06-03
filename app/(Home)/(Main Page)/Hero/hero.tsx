import Link from 'next/link';

import { ServerImage } from '@/components/shared/ServerImage';
import VideoBackground from './VideoBackground';

import css from './hero.module.css';

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div className="max-lg:hidden">
        <VideoBackground />
      </div>

      <div className={`${css.heroCommunity} max-lg:bg-primary-gradient z-[-1]`}>
        <div className={css.textCommunity}>
          <h1>The Future of Real Estate Investing is Now</h1>
          <div className={css.paragraphsCommunity}>
            <p>
              From residential havens to commercial hubs, each property presents
              unique opportunities for growth and prosperity.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-end">
          <ServerImage
            src="/assets/photoMarket.png"
            alt="N"
            width="336"
            height="336"
            className="cover mr-[-2rem] z-10"
            priority={true}
          />

          <div className="pl-10 pr-4 py-4 bg-white bg-opacity-5 rounded-xl border border-l-0 rounded-l-none border-libertumGreen">
            <div className={css.featuredProperties__title}>
              <span>New</span>
              <p>Featured Properties</p>
            </div>

            <Link
              href="/allFeatured"
              className={css.featuredProperties__button}
            >
              See all featured
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
