'use client';
import { useState, useEffect } from 'react';

const VideoBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 950px)');
    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      handleResize();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className="absolute top-0 z-[9] min-w-full min-h-full bg-gradient-radial from-[#000041] to-[#0E0E1E] bg-blend-multiply"></div>
      ) : (
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 z-[9] min-w-full min-h-full"
        >
          <source src="./bg-video-1.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default VideoBackground;
