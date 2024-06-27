import { useMemo } from "react";
import { BlogProvider } from "src/context/Blog";
import { Router } from "src/router";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import "./App.css";

export const App = () => {
  const endpoint =
    "https://wiser-few-tree.solana-devnet.quiknode.pro/da952002e47a627b6539b738fb379518240f8162/";
  const wallet = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallet} autoConnect>
        <BlogProvider>
          <Router />
        </BlogProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
