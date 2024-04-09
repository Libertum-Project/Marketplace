import css from './hero.module.css';
import Link from 'next/link';
import { ServerImage } from '@/components/shared/ServerImage';

const Hero = () => {
  return (
    <div className={css.heroContainer}>
      <div className="max-lg:hidden">
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={`${css.heroCommunity} max-lg:bg-primary-gradient z-[-1]`}>
        <div className={css.textCommunity}>
          <h1>Featured Properties</h1>
          <div className={css.paragraphsCommunity}>
            <p>
            Discover our latest featured properties offering unique opportunities for growth and prosperity, from residential havens to commercial hubs.
            </p>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-end">
          {/* <ServerImage
            src="/assets/photoMarket.png"
            alt="N"
            width="336"
            height="336"
            className="cover mr-[-2rem] z-10"
            priority={true}
          /> */}

        </div>
      </div>
    </div>
  );
};

export default Hero;
