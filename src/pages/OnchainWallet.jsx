import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import { FiMinimize2, FiHome } from 'react-icons/fi';
import institutionsIcon from '../assets/onchainWalletPage/institutions-3.svg';
import multiPlatformIcon from '../assets/onchainWalletPage/multiPlatform-3.svg';
import walletImage1 from '../assets/onchainWalletPage/2.png';
import walletImage2 from '../assets/onchainWalletPage/1.png';
import securityIcon from '../assets/onchainWalletPage/3.png';
import warningUI from '../assets/onchainWalletPage/1.png';


export default function OnchainWallet() {
    return (
        <div className="w-full min-h-screen bg-white text-gray-900 font-sans flex flex-col">

            <main className="flex-grow">

                {/* Hero Section */}
                <section className="w-full pt-16 pb-12 lg:pt-20 lg:pb-16 bg-white">
                    <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row gap-12 lg:gap-16 items-start">
                        <div className="w-full md:w-[55%]">
                            <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-medium leading-[1] tracking-tight text-gray-900" style={{ fontFamily: 'Coinbase Display, Inter, system-ui, sans-serif' }}>
                                Get onchain with<br className="hidden lg:block" /> our institutional-<br className="hidden lg:block" />grade wallet
                            </h1>
                        </div>
                        <div className="w-full md:w-[45%] flex flex-col items-start pt-2 md:pt-4 lg:pt-6">
                            <p className="text-[20px] md:text-[24px] lg:text-[28px] text-gray-900 leading-[1.3] mb-8 tracking-tight">
                                The easiest and most trusted<br className="hidden xl:block" /> gateway to operate onchain
                            </p>
                            <button className="bg-[#0a0b0d] hover:bg-[#1a1b1e] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Get started
                            </button>
                        </div>
                    </div>
                </section>

                {/* Features Grid Section */}
                <section className="w-full pt-8 pb-16 lg:pt-12 lg:pb-24 bg-white">
                    <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Coinbase Display, Inter, system-ui, sans-serif' }}>
                            Onchain made simple
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                            {/* Card 1 */}
                            <div className="bg-[#f5f8fa] rounded-[32px] p-8 lg:p-12 flex flex-col">
                                <div className="w-16 h-16 mb-12">
                                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="24" height="24" fill="#0052FF" />
                                        <rect x="24" y="24" width="24" height="24" fill="#0052FF" />
                                        <circle cx="12" cy="12" r="4" fill="#1A1B1E" />
                                        <circle cx="36" cy="36" r="4" fill="#1A1B1E" />
                                        <path d="M24 12L36 24L24 36L12 24L24 12Z" fill="white" />
                                    </svg>
                                </div>
                                <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Your home for<br className="hidden lg:block" /> onchain operations</h3>
                                <p className="text-gray-500 text-[16px] lg:text-[18px] leading-[1.6]">
                                    Store assets and interact with any smart contract or onchain app using our non-custodial wallet.
                                </p>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#f5f8fa] rounded-[32px] p-8 lg:p-12 flex flex-col">
                                <div className="w-16 h-16 mb-12 flex items-center justify-center bg-white rounded-xl shadow-sm border border-gray-100 p-3">
                                    <img src={multiPlatformIcon} alt="Integration" className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Coinbase Prime integration</h3>
                                <p className="text-gray-500 text-[16px] lg:text-[18px] leading-[1.6]">
                                    Leave behind fragmented solutions and seamlessly operate onchain through your Prime account— our full-service brokerage platform.
                                </p>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-[#f5f8fa] rounded-[32px] p-8 lg:p-12 flex flex-col">
                                <div className="w-16 h-16 mb-12 text-[#0052FF]">
                                    <img src={institutionsIcon} alt="Institutions" className="w-full h-full object-contain" />
                                </div>
                                <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Onchain experience built for institutions</h3>
                                <p className="text-gray-500 text-[16px] lg:text-[18px] leading-[1.6]">
                                    Institutional-grade key management and policy engine designed for secure onchain operations— all with SOC 2 compliance.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* intro Section */}
                <section className="w-full pt-32 pb-24 lg:pt-40 lg:pb-32 bg-white flex flex-col items-center justify-center text-center px-6">
                    <h1 className="text-[56px] md:text-[72px] lg:text-[88px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Verified Pools now available
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-gray-500 mb-10 max-w-[800px] leading-[1.6]">
                        Connect to Verified Pools with Prime Onchain Wallet. Seamlessly access onchain liquidity while benefiting from the institutional-grade security of Prime.
                    </p>
                    <button className="bg-[#0a0b0d] hover:bg-[#1a1b1e] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                        Learn more
                    </button>
                </section>


                {/* Go onchain Section */}
                <section className="w-full py-24 lg:py-32 bg-white border-t border-gray-100">
                    <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <img
                                src={walletImage1}
                                alt="Prime Onchain Wallet interface showing balances"
                                className="w-full max-w-[600px] h-auto object-cover rounded-[32px] md:rounded-[48px] shadow-sm"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <h2 className="text-[48px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Go onchain,<br className="hidden lg:block" /> directly from Prime
                            </h2>

                            <div className="flex flex-col gap-10">
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Store all assets in one place</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Store any assets on our 10+ supported networks with flexible and secure controls. Governance and other smart contract interactions are supported by default for all tokens.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Trade onchain to tap into DEX liquidity</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Trade on the DEX of your choice or use our swap feature, which checks pricing across 75+ DEXs. Access 33,000+ tokens and swap across major chains. Our swap simulations help prevent asset loss by flagging potential failures before you trade.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Securely interact with onchain apps</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Customize your approval process with our policy engine and use human-readable transaction simulations to see estimated asset changes and potential risks before execution. Transactions are updated with the latest fees before signing, providing greater accuracy through real-time adjustments.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Seamlessly integrate your reporting</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Access detailed activity reports with transaction labeling and pre/post-onchain asset changes to streamline your reporting.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Enterprise-grade security and tooling Section */}
                <section className="w-full py-24 lg:py-32 bg-white">
                    <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 flex flex-col order-2 lg:order-1">
                            <h2 className="text-[48px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Enterprise-grade<br className="hidden lg:block" /> security and tooling
                            </h2>

                            <div className="flex flex-col gap-10">
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Convenient recovery</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Our powerful and resilient recovery methods help clients avoid losing access to their wallet even in some of the most extreme scenarios.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Team member permissioning</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Leverage the same flexible team member permissioning as Coinbase Prime for enhanced security.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Unified reporting</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Coinbase Prime and Onchain Wallet reporting are unified to account for all onchain activity and provide a clear audit trail for our clients.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Customizable policy engine</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Clients can tailor their Onchain Wallet approval process using our policy engine to enhance workflow efficiency and decide which users on their account can initiate, approve, and sign transactions.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
                            <img
                                src={securityIcon}
                                alt="Mobile UI showing Key Recovery Complete"
                                className="w-full max-w-[600px] h-auto object-cover rounded-[32px] md:rounded-[48px] shadow-sm"
                            />
                        </div>
                    </div>
                </section>

                {/* Intuitive Risk Controls Section */}
                <section className="w-full py-24 lg:py-32 bg-white">
                    <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                            <img
                                src={warningUI}
                                alt="UI showing unsafe site warning"
                                className="w-full max-w-[600px] h-auto object-cover rounded-[32px] md:rounded-[48px] shadow-sm bg-[#f5f8fa]"
                            />
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-col">
                            <h2 className="text-[48px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Intuitive risk controls
                            </h2>

                            <div className="flex flex-col gap-10">
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Destination protection</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Operate in a more secure, controlled environment by allow-listing addresses your team can interact with.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Transaction preview</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        See an estimate of token balances that will change before completing a transaction.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Risk warnings</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Receive integrated compliance and security information alerts on transactions and high risk warnings when applicable.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-[20px] font-medium mb-2 text-gray-900 tracking-tight">Dapp blocklist</h3>
                                    <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                        Get advanced warning before accessing dapps that have been identified as dangerous.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="w-full py-24 lg:py-32 bg-white flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-[48px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-tight mb-10 max-w-[1000px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Interested in<br className="hidden md:block" /> learning more about<br className="hidden md:block" /> Prime Onchain Wallet?
                    </h2>
                    <button className="bg-[#0a0b0d] hover:bg-[#1a1b1e] text-white px-10 py-5 rounded-full text-[18px] font-semibold transition-colors mb-16">
                        Contact us
                    </button>
                    <p className="text-[12px] text-gray-500 max-w-[1000px]">
                        Disclaimer: This material is the property of Coinbase, Inc., its parent, and its affiliates and is for informational purposes. This material is not
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    );
}
