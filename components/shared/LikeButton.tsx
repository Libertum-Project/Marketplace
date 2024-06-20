import { useState } from 'react';
import Image from 'next/image';
import { Button } from '../ui/button';

interface Props {
  position?: 'top' | 'center';
}

export const LikeButton = ({ position = 'top' }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [userLiked, setUserLiked] = useState(false);

  const toggleLiked = () => {
    setUserLiked(!userLiked);
    setIsLiked(!isLiked);
  };

  return (
    <Button
      className={`${position === 'top' ? 'absolute' : 'static'} right-4 top-4 bg-transparent hover:bg-transparent p-0`}
      onClick={toggleLiked}
    >
      <Image
        src={userLiked || isLiked ? '/assets/icons/property-liked.svg' : '/assets/icons/property-unliked.svg'}
        alt="like"
        width={49}
        height={48}
      />
    </Button>
  );
};
