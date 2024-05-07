'use client';
import { useAddress, useConnectionStatus } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

import LoadingPage from '@/components/shared/Loading/Loading';

function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const status = useConnectionStatus();
    const address = useAddress();

    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY;

    const saveUser = async () => {
      if (address) {
        await fetch('https://libertum--marketplace.azurewebsites.net/users', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${secretKey}`,
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=utf-8',
          },
          body: JSON.stringify({ wallet_address: address }),
        });
      }
    };

    useEffect(() => {
      saveUser();
    }, [address]);

    if (status == 'connecting') return <LoadingPage />;
    if (status == 'connected') return <Component {...props} />;
    if (status == 'disconnected') redirect('/login');

    return <LoadingPage />;
  };
}

export default withAuth;
