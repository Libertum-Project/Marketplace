"use client";
import { type ReactElement } from "react";
import { ObviousConfig, getConnectors } from "@itsobvioustech/embed";

import {
  arbitrum,
  avalanche,
  base,
  bsc,
  mainnet,
  optimism,
  polygon,
  polygonZkEvm,
} from "viem/chains";

import { WagmiConfig, configureChains, createConfig } from "wagmi";

import { publicProvider } from "wagmi/providers/public";
const { chains, publicClient } = configureChains(
  [mainnet, polygon, arbitrum, avalanche, optimism, base, polygonZkEvm, bsc],
  [publicProvider()],
);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: getConnectors({
    chains,
    metadata: {
      name: "Obvious Embed",
      description: "Smart Wallet",
      url: "https://obvious.technology/embed",
      icons: [
        "https://resources.obvious.technology/icons/obvious-logo-icon.png",
      ],
    },
    projectId: "bdfe5d828a4c75a644b4bc9d1229d319",
  }),
  publicClient,
});

export function EmbedProvider({
  children,
}: {
  children: React.ReactNode;
}): ReactElement {
  return (
    <WagmiConfig config={wagmiConfig}>
      <ObviousConfig
        embedKey="43f8c48a-4006-47a4-8102-86bd8403c1a7"
        theme="light" // light or dark
      >
        {children}
      </ObviousConfig>
    </WagmiConfig>
  );
}
