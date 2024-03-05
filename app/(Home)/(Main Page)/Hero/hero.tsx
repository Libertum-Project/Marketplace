'use client'
import { type ReactElement,  useState, useEffect } from "react";
import Image from "next/image";
import css from "./hero.module.css";
import Link from "next/link";
import photosMarket  from "../../../../public/assets/photosMarket.svg";

export function Hero(): ReactElement {

  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
  const mediaQuery = window.matchMedia("(max-width: 950px)");
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 950);
      setIsMobile(mediaQuery.matches);
    };
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className={css.heroContainer}>
      {isMobile ? 
        <div className={css.backgroundNoVideo}></div> 
        : 
        <video autoPlay muted loop className={css.video}>
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video> 
      }
      <div className={css.heroCommunity}>
        <div className={css.textCommunity}>
          <h1>Unlock the potential for earning by investing</h1>
          <div className={css.paragraphsCommunity}>
            <p>
            From residential havens to commercial hubs, each property presents unique opportunities for growth and prosperity. 
            </p>          
          </div>
        </div>

        <div className={css.featuredProperties}>
        <Image
                src={photosMarket}
                alt="N"
                width="336"
                height="206"
                className={css.featuredProperties__image}
          />
          <div className={css.featuredProperties__box}>
            <div className={css.featuredProperties__title}>
            <span>New</span>
            <p>Featured Properties</p>
            </div>
            
            <Link href="/" className={css.featuredProperties__button}>See all featured</Link>
          </div>
        </div>
      </div>
    </div>
  );
}