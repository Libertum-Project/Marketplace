'use client';
import { useAddress, useConnectionStatus } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import { useEffect, useState, ComponentType, FC } from 'react';

import LoadingPage from '@/components/shared/Loading/Loading';
import { User } from '@/types/index';

function withAuth<P extends object>(Component: ComponentType<P>): FC<P> {
  return function WithAuth(props: P) {
    const [user, setUser] = useState<User | null>(null);
    const status = useConnectionStatus();
    const address = useAddress();

    const serverURL = process.env.NEXT_PUBLIC_SERVER_URL as string;
    const secretKey = process.env.NEXT_PUBLIC_SECRET_KEY as string;

    const saveUser = async () => {
      if (address) {
        try {
          const response = await fetch(`${serverURL}/users`, {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${secretKey}`,
              Accept: 'application/json',
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({ walletAddress: address })
          });

          if (!response.ok) {
            throw new Error('Failed to save user');
          }

          const data: User = await response.json();
          setUser(data);
        } catch (error) {
          console.error('Error saving user:', error);
        }
      }
    };

    useEffect(() => {
      if (address) {
        saveUser();
      }
    }, [address]);

    useEffect(() => {
      if (status === 'connected' && user) {
        if (user.isAuthenticated) {
          return;
        } else {
          redirect('/login/2fa');
        }
      }

      if (status === 'disconnected') {
        redirect('/login');
      }
    }, [status, user]);

    if (status === 'connecting' || (status === 'connected' && !user)) {
      return <LoadingPage />;
    }

    if (status === 'connected' && user && user.isAuthenticated) {
      return <Component {...props} />;
    }

    return <LoadingPage />;
  };
}

export default withAuth;
