import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import WarningBanner from './components/common/WarningBanner';
import Home from './pages/Home';
import Explore from './pages/Explore';
import AssetDetail from './pages/AssetDetail';
import Learn from './pages/Learn';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CoinbaseOne from './pages/CoinbaseOne';
import PrivateClient from './pages/PrivateClient';
import AdvancedTrade from './pages/AdvancedTrade';
import CoinbaseWealth from './pages/CoinbaseWealth';
import Earn from './pages/Earn';
import Business from './pages/Business';
import Listings from './pages/Listings';
import Payments from './pages/Payments';
import TokenManager from './pages/TokenManager';
import TradingFinancing from './pages/TradingFinancing';
import Custody from './pages/Custody';
import Staking from './pages/Staking';
import OnchainWallet from './pages/OnchainWallet';
import Exchange from './pages/Exchange';
import InternationalExchange from './pages/InternationalExchange';
import VerifiedPools from './pages/VerifiedPools';
import DeveloperPayments from './pages/DeveloperPayments';
import DeveloperTrading from './pages/DeveloperTrading';
import DeveloperWallets from './pages/DeveloperWallets';
import DeveloperStablecoins from './pages/DeveloperStablecoins';
import DeveloperBanks from './pages/DeveloperBanks';
import About from './pages/About';
import Affiliates from './pages/Affiliates';
import Careers from './pages/Careers';
import Support from './pages/Support';
import Security from './pages/Security';


function App() {
  const location = useLocation();
  const hideNavFooter = ['/signin', '/signup'].includes(location.pathname);

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col overflow-x-hidden">
      <WarningBanner />
      {!hideNavFooter && <Navbar />}
      <main className="flex-grow flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/prices/:id" element={<AssetDetail />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/one" element={<CoinbaseOne />} />
          <Route path="/private-client" element={<PrivateClient />} />
          <Route path="/advanced-trade" element={<AdvancedTrade />} />
          <Route path="/wealth" element={<CoinbaseWealth />} />
          <Route path="/business" element={<Business />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/tokenmanager" element={<TokenManager />} />
          <Route path="/prime/financing" element={<TradingFinancing />} />
          <Route path="/prime/custody" element={<Custody />} />
          <Route path="/prime/staking" element={<Staking />} />
          <Route path="/prime/onchain-wallet" element={<OnchainWallet />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/international-exchange" element={<InternationalExchange />} />
          <Route path="/verified-pools" element={<VerifiedPools />} />
          <Route path="/developer-platform/payments" element={<DeveloperPayments />} />
          <Route path="/developer-platform/trading" element={<DeveloperTrading />} />
          <Route path="/developer-platform/wallets" element={<DeveloperWallets />} />
          <Route path="/developer-platform/stablecoins" element={<DeveloperStablecoins />} />
          <Route path="/developer-platform/banks" element={<DeveloperBanks />} />
          <Route path="/about" element={<About />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/support" element={<Support />} />
          <Route path="/security" element={<Security />} />
        </Routes>
      </main>
      {!hideNavFooter && <Footer />}
    </div>
  );
}

export default App;