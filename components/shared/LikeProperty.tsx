'use client';
import { useAddress } from '@thirdweb-dev/react';
import { Button } from '../ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { likeProperty } from '@/lib/user';
import { useEffect, useState } from 'react';

interface Props {
  property: any;
}

const LikeProperty = ({ property }: Props) => {
  const [isLiked, setIsLiked] = useState(false);
  const [userLiked, setUserLiked] = useState(false);
  const address = useAddress();
  const pathname = usePathname();
  const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;
  const requestOptions = {
    method: 'GET',
    headers: {
      authorization: `Bearer ${secretKey}`,
    },
  };

  const fetchProperties = async () => {
    if (address) {
      const data = await fetch(
        `https://libertum--marketplace.azurewebsites.net/users/${address}`,
        requestOptions
      );
      const info = await data.json();

      const propertiesIndex = new Map(
        info.favoriteProperties.map((property: any) => [property.id, property])
      );

      const isFavorite = propertiesIndex.has(property.id);
      setIsLiked(isFavorite);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <Button
      className="absolute right-4 top-4 bg-transparent hover:bg-transparent p-0"
      onClick={async () => {
        setUserLiked(!userLiked);
        await likeProperty(address as string, pathname, property.id);
        await fetchProperties();
      }}
    >
      <Image
        src={`${
          userLiked || isLiked
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
