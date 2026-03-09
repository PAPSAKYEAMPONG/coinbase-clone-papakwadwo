import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/coinbaseLogoNavigation-4.svg';

// Promotional images
import navUpsellImg from '../../assets/navigation-upsell.png';
import companyUpsellImg from '../../assets/company_upsell.png';
import businessesUpsellImg from '../../assets/onchain_payment_protocol.png';
import developersUpsellImg from '../../assets/developers_upsell_cdxv2_2.jpg';
import institutionsUpsellImg from '../../assets/institutions_upsell.png';

// Icons
import {
  FiSearch, FiGlobe, FiShield, FiAward, FiBarChart2, FiPercent, FiCreditCard,
  FiInfo, FiUsers, FiFileText, FiBriefcase, FiMessageSquare, FiShoppingCart,
  FiRefreshCw, FiGrid, FiCircle, FiBarChart, FiPocket, FiDollarSign, FiHome, FiLayers,
  FiClock, FiBox, FiRepeat, FiCopy, FiHexagon,
  // NEW ICONS FOR MOBILE
  FiMenu, FiX, FiChevronDown
} from 'react-icons/fi';

const megaMenus = {
  Individuals: {
    cols: [
      {
        items: [
          { title: 'Buy and sell', desc: 'Buy, sell, and use crypto', icon: <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center font-bold text-[10px] text-black">C</div> },
          { title: 'Base App', desc: 'Post, earn, trade, and chat, all in one place', icon: <div className="w-4 h-4 bg-black rounded-sm" /> },
          { title: 'Coinbase One', desc: 'Get zero trading fees and more', icon: <FiShield className="text-lg" />, href: '/one' },
          { title: 'Private Client', desc: 'For trusts, family offices, UHNWIs', icon: <FiAward className="text-lg" />, href: '/private-client' },
        ]
      },
      {
        items: [
          { title: 'Advanced', desc: 'Professional-grade trading tools', icon: <FiBarChart2 className="text-lg" />, href: '/advanced-trade' },
          { title: 'Earn', desc: 'Stake your crypto and earn rewards', icon: <FiPercent className="text-lg" />, href: '/earn' },
          { title: 'Coinbase Wealth', desc: 'Institutional-grade services for UHNW', icon: <FiAward className="text-lg" />, href: '/wealth' },
          { title: 'Credit Card', desc: 'Earn up to 4% bitcoin back', icon: <FiCreditCard className="text-lg" /> },
        ]
      }
    ],
    promo: {
      image: navUpsellImg,
      title: 'System Update 2025',
      desc: 'The next chapter of Coinbase. Live on X 12/17.',
      linkText: 'Learn more'
    }
  },
  Businesses: {
    cols: [
      {
        items: [
          { title: 'Business', desc: 'Crypto trading and payments for startups and SMBs', icon: <FiBriefcase className="text-lg" />, href: '/business' },
          { title: 'Asset Listings', desc: 'List your asset on Coinbase', icon: <FiGrid className="text-lg" />, href: '/listings' }
        ]
      },
      {
        items: [
          { title: 'Payments', desc: 'The stablecoin payments stack for commerce platforms', icon: <FiCreditCard className="text-lg" />, href: '/payments' },
          { title: 'Token Manager', desc: 'The platform for token distributions, vesting, and lockups', icon: <FiRefreshCw className="text-lg" />, href: '/tokenmanager' }
        ]
      }
    ],
    promo: {
      image: businessesUpsellImg,
      title: 'Commerce Payments Protocol',
      desc: 'A new standard for onchain payments.',
      linkText: 'Go to Payments'
    }
  },
  Institutions: {
    cols: [
      {
        header: 'Prime >',
        items: [
          { title: 'Trading and Financing', desc: 'Professional prime brokerage services', icon: <FiClock className="text-lg" />, href: '/prime/financing' },
          { title: 'Custody', desc: 'Securely store all your digital assets', icon: <FiShield className="text-lg" />, href: '/prime/custody' },
          { title: 'Staking', desc: 'Explore staking across our products', icon: <FiPercent className="text-lg" />, href: '/prime/staking' },
          { title: 'Onchain Wallet', desc: 'Institutional-grade wallet to get', icon: <FiBox className="text-lg" />, href: '/prime/onchain-wallet' }
        ]
      },
      {
        header: 'Markets',
        items: [
          { title: 'Exchange', desc: 'Spot markets for high-frequency trading', icon: <FiRepeat className="text-lg" />, href: '/exchange' },
          { title: 'International Exchange', desc: 'Access perpetual futures markets', icon: <FiGlobe className="text-lg" />, href: '/international-exchange' },
          { title: 'Derivatives Exchange', desc: 'Trade an accessible futures market', icon: <FiCopy className="text-lg" /> },
          { title: 'Verified Pools', desc: 'Transparent, verified liquidity', icon: <FiHexagon className="text-lg" />, href: '/verified-pools' }
        ]
      }
    ],
    promo: {
      image: institutionsUpsellImg,
      title: 'Our clients',
      desc: 'Trusted by institutions and government.',
      linkText: 'Learn more'
    }
  },
  Developers: {
    cols: [
      {
        header: 'Coinbase Developer Platform >',
        items: [
          { title: 'Payments', desc: 'Fast and global stablecoin payments with a single integration', icon: <FiCircle className="text-lg" />, href: '/developer-platform/payments' },
          { title: 'Trading', desc: 'Launch crypto trading and custody for your users', icon: <FiBarChart className="text-lg" />, href: '/developer-platform/trading' },
          { title: 'Wallets', desc: 'Deploy customizable and scalable wallets for your business', icon: <FiPocket className="text-lg" />, href: '/developer-platform/wallets' },
          { title: 'Stablecoins', desc: 'Access USDC and EURC securely', icon: <FiDollarSign className="text-lg" />, href: '/developer-platform/stablecoins' }
        ]
      },
      {
        header: 'Solutions for any company',
        items: [
          { title: 'Banks & Brokerages', desc: 'Secure, regulated offerings for retail, private banking, & institutional clients', icon: <FiHome className="text-lg" />, href: '/developer-platform/banks' },
          { title: 'Payment Firms', desc: 'Near-instant, low-cost, global payment rails for modern providers', icon: <FiCreditCard className="text-lg" />, href: '/developer-platform/payments' },
          { title: 'Startups', desc: 'Launch your business with the world\'s leader in crypto', icon: <FiLayers className="text-lg" />, href: '/developer-platform/startups' }
        ]
      }
    ],
    promo: {
      image: developersUpsellImg,
      title: 'World class crypto infrastructure.',
      desc: "Discover Coinbase's complete crypto-as-a-service platform.",
      linkText: 'Learn more'
    }
  },
  Company: {
    cols: [
      {
        items: [
          { title: 'About', desc: 'Powering the crypto economy', icon: <FiInfo className="text-lg" />, href: '/about' },
          { title: 'Affiliates', desc: 'Help introduce the world to crypto', icon: <FiUsers className="text-lg" />, href: '/affiliates' },
          { title: 'Blog', desc: 'Read the latest from Coinbase', icon: <FiFileText className="text-lg" /> }
        ]
      },
      {
        items: [
          { title: 'Careers', desc: 'Work with us', icon: <FiBriefcase className="text-lg" />, href: '/careers' },
          { title: 'Support', desc: 'Find answers to your questions', icon: <FiMessageSquare className="text-lg" />, href: '/support' },
          { title: 'Security', desc: 'The most trusted & secure', icon: <FiShield className="text-lg" />, href: '/security' }
        ]
      }
    ],
    promo: {
      image: companyUpsellImg,
      title: 'Learn all about Coinbase:',
      desc: "We're building the open financial system.",
      linkText: 'Create your account'
    }
  }
};

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile State
  const [mobileExpanded, setMobileExpanded] = useState(null); // Accordion State

  const navLinks = ['Individuals', 'Businesses', 'Institutions', 'Developers', 'Company'];

  // Toggle function for mobile accordion
  const toggleMobileAccordion = (link) => {
    setMobileExpanded(mobileExpanded === link ? null : link);
  };

  return (
    <nav className="relative flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100 lg:sticky top-0 z-50">

      {/* 1. Logo Section */}
      <div className="flex items-center h-full">
        <Link to="/" className="mr-8 z-50 relative">
          <div className="text-[#0052FF] font-bold text-2xl tracking-tighter flex items-center gap-1">
            {logo ? <img src={logo} alt="Coinbase" className="h-[20px]" /> : "Coinbase"}
          </div>
        </Link>

        {/* 2. Desktop Navigation (Hidden on Mobile) */}
        <div className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-gray-900 h-full relative">
          <Link to="/explore" className="hover:text-[#0052FF] transition-colors py-4">Cryptocurrencies</Link>

          {navLinks.map((link) => (
            <div
              key={link}
              className="py-4 cursor-pointer hover:text-[#0052FF] transition-colors h-full flex items-center"
              onMouseEnter={() => setActiveDropdown(link)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <span>{link}</span>

              {/* Desktop Dropdown */}
              {activeDropdown === link && megaMenus[link] && (
                <div
                  className="fixed left-0 top-[72px] w-full bg-white shadow-xl border-t border-gray-100 flex justify-center pb-12 pt-10 text-left cursor-default transform transition-all duration-300 pointer-events-auto"
                  onMouseEnter={() => setActiveDropdown(link)}
                >
                  <div className="w-full max-w-[1280px] px-6 grid grid-cols-12 gap-8">
                    {/* Columns */}
                    <div className="col-span-8 grid grid-cols-2 gap-8">
                      {megaMenus[link].cols.map((col, idx) => (
                        <div key={idx} className="flex flex-col gap-6">
                          {col.header && <h4 className="font-semibold text-[15px] text-gray-900">{col.header}</h4>}
                          <div className="flex flex-col gap-6">
                            {col.items.map((item, itemIdx) => {
                              const Comp = item.href ? Link : 'a';
                              const props = item.href ? { to: item.href } : { href: '#' };
                              return (
                                <Comp {...props} key={itemIdx} className="flex items-start gap-4 group">
                                  <div className="w-10 h-10 shrink-0 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-white group-hover:shadow-sm transition-all border border-transparent group-hover:border-gray-100">
                                    {item.icon}
                                  </div>
                                  <div className="flex flex-col pr-4">
                                    <h5 className="font-semibold text-gray-900 text-[15px] group-hover:text-[#0052FF] transition-colors leading-tight mb-[2px]">{item.title}</h5>
                                    <p className="text-[#5b616e] text-[13px] leading-snug">{item.desc}</p>
                                  </div>
                                </Comp>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Promo */}
                    <div className="col-span-4 pl-12 flex items-start">
                      <div className="flex gap-6 items-start">
                        <img src={megaMenus[link].promo.image} alt={megaMenus[link].promo.title} className="w-[140px] rounded-[24px] object-cover" />
                        <div className="flex flex-col items-start pr-4">
                          <h4 className="text-[20px] font-medium leading-tight mb-2 text-gray-900 tracking-tight">{megaMenus[link].promo.title}</h4>
                          <p className="text-[#5b616e] text-[16px] mb-4 leading-snug">{megaMenus[link].promo.desc}</p>
                          <a href="#" className="font-semibold text-gray-900 border-b border-gray-900 hover:text-[#0052FF] hover:border-[#0052FF] pb-[1px] transition-colors text-[14px]">
                            {megaMenus[link].promo.linkText}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3. Desktop Right Side Actions */}
      <div className="hidden lg:flex items-center gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-900 transition-colors"><FiSearch className="text-xl" /></button>
        <button className="p-2 hover:bg-gray-100 rounded-full text-gray-900 transition-colors"><FiGlobe className="text-xl" /></button>
        <Link to="/signin" className="text-[14px] font-semibold text-gray-900 hover:bg-gray-100 px-4 py-2 rounded-full transition-colors">Sign In</Link>
        <Link to="/signup" className="bg-[#0052FF] hover:bg-[#0045D8] text-white text-[14px] font-semibold px-4 py-2 rounded-full transition-colors">Sign up</Link>
      </div>

      {/* 4. Mobile Right Side Actions (Hamburger) */}
      <div className="flex lg:hidden items-center gap-4">
        <Link to="/signup" className="bg-[#0052FF] hover:bg-[#0045D8] text-white text-[14px] font-semibold px-4 py-2 rounded-full transition-colors">Sign up</Link>
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 text-gray-900">
          {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
        </button>
      </div>

      {/* 5. Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto lg:hidden pb-10">
          <div className="flex flex-col p-6 space-y-6">
            <Link to="/explore" className="text-[16px] font-semibold text-gray-900" onClick={() => setMobileMenuOpen(false)}>Cryptocurrencies</Link>

            {navLinks.map((link) => (
              <div key={link} className="border-b border-gray-100 pb-4">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleMobileAccordion(link)}
                >
                  <span className="text-[16px] font-semibold text-gray-900">{link}</span>
                  <FiChevronDown className={`transition-transform duration-200 ${mobileExpanded === link ? 'rotate-180' : ''}`} />
                </div>

                {/* Mobile Submenu Accordion */}
                {mobileExpanded === link && megaMenus[link] && (
                  <div className="mt-4 pl-2 flex flex-col gap-4">
                    {megaMenus[link].cols.map((col, idx) => (
                      <div key={idx} className="flex flex-col gap-4">
                        {col.header && <h5 className="text-xs font-bold text-gray-500 uppercase tracking-wider">{col.header}</h5>}
                        {col.items.map((item, i) => (
                          <Link
                            key={i}
                            to={item.href || '#'}
                            className="flex items-center gap-3 text-gray-700 hover:text-[#0052FF]"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <div className="text-gray-400">{item.icon}</div>
                            <span className="text-sm font-medium">{item.title}</span>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-4 mt-6">
              <Link to="/signin" className="w-full text-center py-3 rounded-full border border-gray-200 font-semibold text-gray-900" onClick={() => setMobileMenuOpen(false)}>
                Sign In
              </Link>
              <Link to="/signup" className="w-full text-center py-3 rounded-full bg-[#0052FF] font-semibold text-white" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}