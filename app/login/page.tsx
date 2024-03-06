'use client';
import {
  ConnectEmbed,
  lightTheme,
  useShowConnectEmbed,
} from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import React from 'react';

const Page = () => {
  const showConnectEmbed = useShowConnectEmbed();
  return (
    <>
      {showConnectEmbed ? (
        <div className="w-full min-h-screen flex justify-center items-center">
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
