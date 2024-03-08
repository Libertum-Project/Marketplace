'use client';
import {
  ConnectEmbed,
  lightTheme,
  useShowConnectEmbed,
} from '@thirdweb-dev/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = () => {
  const showConnectEmbed = useShowConnectEmbed();
  return (
    <>
      {showConnectEmbed ? (
        <div className="w-full min-h-screen flex flex-col justify-center items-center bg-primary-gradient gap-10">
          <Image
            src="/horizontal-logo.svg"
            width={274}
            height={36}
            alt="Logo"
          />
          <ConnectEmbed
            auth={{
              onLogin: () => {
                redirect('/');
              },
            }}
            theme={lightTheme({
              colors: {
                accentText: '#00B3B5',
                accentButtonBg: '#00B3B5',
              },
            })}
            showThirdwebBranding={false}
            style={{
              border: 'none',
              borderRadius: 0,
            }}
          />
        </div>
      ) : (
        redirect('/')
      )}
    </>
  );
};

export default Page;
