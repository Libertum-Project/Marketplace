'use client';
import { useAddress } from '@thirdweb-dev/react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { likeProperty } from '@/lib/user';

interface Props {
  property: any;
}

const LikeProperty = ({ property }: Props) => {
  const address = useAddress();

  const pathname = usePathname();

  return (
    <Button
      className="absolute right-4 top-4 bg-transparent hover:bg-transparent p-0"
      onClick={() => likeProperty(address as string, pathname, property.id)}
    >
      <Image
        src={`${
          property.favourite
            ? '/assets/icons/property-liked.svg'
            : '/assets/icons/property-unliked.svg'
        }`}
        alt="like"
        width={49}
        height={48}
      />
    </Button>
  );
};

export default LikeProperty;
