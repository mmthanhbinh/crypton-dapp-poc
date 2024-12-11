import React from "react";
import "./App.css";
import "./assets/css/globals.css";
import '@rainbow-me/rainbowkit/styles.css';
// import "./assets/css/react-slick.css";
// import "slick-carousel/slick/slick.css";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { useRoutes } from "react-router-dom";
import Router from "./routes/Router";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import {
  arbitrum,
  base,
  mainnet,
  optimism,
  polygon,
  zora,
  bsc,
  gnosis,
  polygonAmoy,
  bscTestnet,
  sepolia,
  
} from 'wagmi/chains';
import { getDefaultConfig, getDefaultWallets, RainbowKitProvider, lightTheme, Theme} from '@rainbow-me/rainbowkit';
import {
  metaMaskWallet,
  phantomWallet,
  trustWallet,
  ledgerWallet,
} from '@rainbow-me/rainbowkit/wallets';
const { wallets } = getDefaultWallets();

const config = getDefaultConfig({
  appName: 'RainbowKit App',
  projectId: 'YOUR_PROJECT_ID',
  wallets: [
    ...wallets,
    {
      groupName: 'Other',
      wallets: [metaMaskWallet, phantomWallet, trustWallet, ledgerWallet],
    },
  ],
  chains: [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    base,
    gnosis,
    bsc,
    zora,
    sepolia,
    polygonAmoy,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [bscTestnet] : []),
  ],
  ssr: true,
});
const myCustomTheme: Theme = {
  colors: {
    accentColor: '#007bff',
    accentColorForeground: '#ffffff',
    actionButtonBorder: 'transparent',
    actionButtonBorderMobile: 'transparent',
    actionButtonSecondaryBackground: '#00dbe3',
    closeButton: '#000000',
    closeButtonBackground: '#ffffff',
    connectButtonBackground: '#00dbe3',
    connectButtonBackgroundError: '#ff4d4f',
    connectButtonInnerBackground: '#00dbe3',
    connectButtonText: '#ffffff',
    connectButtonTextError: '#ff4d4f',
    connectionIndicator: '#00ff00',
    downloadBottomCardBackground: '#00dbe3',
    downloadTopCardBackground: '#00dbe3',
    error: '#ff4d4f',
    generalBorder: '#e2e8f0',
    generalBorderDim: '#cbd5e0',
    menuItemBackground: '#00dbe3',
    modalBackdrop: 'rgba(0, 0, 0, 0.5)',
    modalBackground: '#00dbe3',
    modalBorder: '#e2e8f0',
    modalText: '#00aee7',
    modalTextDim: '#6c757d',
    modalTextSecondary: '#495057',
    profileAction: '#e2e8f0',
    profileActionHover: '#d1d5db',
    profileForeground: '##00aee7',
    selectedOptionBorder: '#007bff',
    standby: '#f8f9fa',
  },
  fonts: {
    body: 'Roboto, sans-serif',
  },
  radii: {
    actionButton: '8px',
    connectButton: '8px',
    menuButton: '8px',
    modal: '16px',
    modalMobile: '16px',
  },
  shadows: {
    connectButton: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    dialog: '0px 4px 16px rgba(0, 0, 0, 0.2)',
    profileDetailsAction: '0px 2px 8px rgba(0, 0, 0, 0.1)', // Thêm thuộc tính này
    selectedOption: '0px 2px 8px rgba(0, 0, 0, 0.1)',
    selectedWallet: '0px 1px 4px rgba(0, 0, 0, 0.1)', // Thêm thuộc tính này
    walletLogo: '0px 1px 4px rgba(0, 0, 0, 0.1)',
  },
  blurs: {
    modalOverlay: 'blur(8px)',
  },
};

const client = new QueryClient();
function App() {
  const routing = useRoutes(Router);
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={client}>
        <RainbowKitProvider theme={myCustomTheme}>
          <ThemeProvider theme={theme}>
            <div className="App">{routing}</div>
          </ThemeProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;
