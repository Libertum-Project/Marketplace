'use client';

import React, { createContext } from 'react';
import { ThirdwebProvider, embeddedWallet } from '@thirdweb-dev/react';

import { Polygon } from '@thirdweb-dev/chains';

const ThirdwebContext = createContext<any>(undefined);

export function ThirdwebContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientId = '04def6ed3834a997825d9b216dd2631a';
  return (
    <ThirdwebContext.Provider value={{}}>
      <ThirdwebProvider
        activeChain="polygon"
        clientId={clientId}
        supportedChains={[Polygon]}
        supportedWallets={[
          embeddedWallet({
            auth: {
              options: ['email', 'google', 'apple', 'facebook'],
            },
          }),
        ]}
      >
        {children}
      </ThirdwebProvider>
    </ThirdwebContext.Provider>
  );
}
