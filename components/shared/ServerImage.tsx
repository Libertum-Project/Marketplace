'use client';
import Image, { ImageProps } from 'next/image';

export const ServerImage = (props: ImageProps) => {
  return <Image {...props} alt={props.alt} />;
};
