'use client';
import { useConnectionStatus } from '@thirdweb-dev/react';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import LoadingPage from '@/components/shared/Loading/Loading';

function withAuth(Component: any) {
  return function WithAuth(props: any) {
    const status = useConnectionStatus();

    if (status == 'connecting') return <LoadingPage />;
    if (status == 'connected') return <Component {...props} />;
    if (status == 'disconnected') redirect('/login');

    return <LoadingPage />;
  };
}

export default withAuth;
