'use client';
import React, { createContext } from 'react';
import {
  ThirdwebProvider,
  coinbaseWallet,
  embeddedWallet,
  localWallet,
  metamaskWallet,
  walletConnect,
} from '@thirdweb-dev/react';

import { Base } from '@thirdweb-dev/chains';

const ThirdwebContext = createContext<any>(undefined);

export function ThirdwebContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const clientId = process.env.NEXT_PUBLIC_THIRD_WEB_CLIENT_ID;
  return (
    <ThirdwebContext.Provider value={{}}>
      <ThirdwebProvider
        theme="light"
        activeChain={Base}
        clientId={clientId}
        supportedChains={[Base]}
        supportedWallets={[
          metamaskWallet({ recommended: true }),
          coinbaseWallet(),
          walletConnect(),
          localWallet(),
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
