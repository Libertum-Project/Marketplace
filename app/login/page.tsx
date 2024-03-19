'use client';
import {
  ConnectEmbed,
  lightTheme,
  useShowConnectEmbed,
  useConnectionStatus,
} from '@thirdweb-dev/react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useLayoutEffect } from 'react';

const Page = () => {
  const showConnectEmbed = useShowConnectEmbed();
  const status = useConnectionStatus();

  useLayoutEffect(() => {
    if (status == 'connected') redirect('/dashboard');
  });
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
                redirect('/dashboard');
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
        status == 'connected' && redirect('/dashboard')
      )}
    </>
  );
};

export default Page;
