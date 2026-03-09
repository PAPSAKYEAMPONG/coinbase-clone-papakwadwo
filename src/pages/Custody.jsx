import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Assets
import heroImage from '../assets/CustodyPage/Custody_1_-_Hero.png';
import vaultStorageImg from '../assets/CustodyPage/Custody_2.png';
import stakingImg from '../assets/CustodyPage/Custody_3.png';
import assetsLogosImg from '../assets/CustodyPage/Custody_3__1_.png';
import walletImg from '../assets/CustodyPage/prime_custody_-_get_onchain.png';
import tableImg from '../assets/CustodyPage/Custody_4.png';
import stakingLogosImg from '../assets/CustodyPage/Prime_Custody_1.png';
import actionBannerImg from '../assets/CustodyPage/inst_home_action_banner_walking.jpg';

export default function Custody() {
    return (
        <div className="w-full min-h-screen bg-[#f9fafb] font-sans flex flex-col">

            {/* Hero Section */}
            <section className="w-full bg-white pt-24 lg:pt-32 pb-16 lg:pb-24 border-b border-gray-100">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-medium leading-[1.05] tracking-tight mb-8 text-[#0a0b0d]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Secure digital asset custody
                        </h1>
                        <p className="text-[18px] md:text-[20px] text-[#0a0b0d] mb-12 max-w-[500px] leading-[1.6]">
                            Join the most robust, regulated institutions who have chosen to use our platform to store and manage their digital assets.
                        </p>
                        <div>
                            <button className="bg-[#0a0b0d] hover:bg-gray-800 text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Get started
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={heroImage}
                            alt="Prime Custody Portfolio Dashboard"
                            className="w-full max-w-[600px] h-auto object-contain rounded-[16px]"
                        />
                    </div>
                </div>
            </section>

            {/* Crypto Insights Newsletter */}
            <section className="w-full bg-[#f4f5f8] py-24 lg:py-32 flex justify-center items-center px-6">
                <div className="max-w-[800px] flex flex-col items-center text-center">
                    <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Sign up for crypto insights delivered straight to your inbox
                    </h2>

                    <div className="flex flex-col sm:flex-row items-center w-full max-w-[600px] gap-4">
                        <input
                            type="email"
                            placeholder="Email entry"
                            className="flex-grow w-full px-4 py-4 rounded-[12px] border border-gray-300 bg-white text-[#0a0b0d] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0052FF]"
                        />
                        <button className="w-full sm:w-auto bg-[#0a0b0d] text-white font-semibold px-8 py-4 rounded-[12px] hover:bg-gray-800 transition-colors">
                            Submit
                        </button>
                    </div>
                </div>
            </section>

            {/* Secure your digital assets Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={vaultStorageImg}
                            alt="Compound vault storage interface"
                            className="w-full max-w-[550px] h-auto object-contain rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Secure your digital assets
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Access Coinbase Vault storage</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">More than cold storage, Coinbase Vault storage combines physical security, consensus computation, and strict process controls into one world-class solution.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Partner with a regulated entity</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Coinbase Custody Trust Company is a fiduciary under New York state banking law and a Qualified Custodian. Our systems and processes are regularly audited: Coinbase Custody Trust Company maintains SOC 1 Type II and SOC 2 Type II audits by Deloitte & Touche.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Find confidence in our approach</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Our key generation and cold-storage technology are derived from 12+ years of in-house development.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Access a broad range of digital assets Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Access a broad range<br className="hidden lg:block" /> of digital assets
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Get broad asset support</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Clients can access 470+ assets today, with more being added regularly. We are committed to growing our roster of supported assets.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Participate in governance</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Get the option to manually vote on proposals or delegate your vote (on-chain or via snapshot) to a third party for select assets — all without removing assets from cold storage.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={assetsLogosImg}
                            alt="Colored bars with crypto asset logos"
                            className="w-full max-w-[550px] h-auto object-contain rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                        />
                    </div>
                </div>
            </section>

            {/* Easily stake assets Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={stakingImg}
                            alt="Polkadot staking interface"
                            className="w-full max-w-[550px] h-auto object-contain rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Easily stake assets<br className="hidden lg:block" /> for additional<br className="hidden lg:block" /> yield opportunities
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Earn rewards directly in Coinbase Prime</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Earn rewards without removing digital assets from Vault storage — ensuring they stay safe and secure.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Find the right staking solution</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">From liquid and traditional staking to running a dedicated validator, we can help you get started with a flexible staking solution to fit your institution's needs.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Grow opportunities with multiple assets</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">We support staking for Avalanche, Axelar, Cardano, Cosmos, Celo, Ether, LsETH, Kusama, NEAR, Polkadot, Polygon, Solana, Stacks, Sui, and Tezos. Each asset has varying rewards and minimums mandated at the protocol level. Asset availability may depend on client jurisdiction and custody entity.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Get onchain Section */}
            <section className="w-full bg-white py-24 lg:py-32 mb-12">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Get onchain with our<br className="hidden lg:block" /> institutional-grade wallet
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Your home for onchain operations</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Store assets on our supported networks and interact with any smart contract or onchain app using our non-custodial wallet.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Coinbase Prime integration</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Leave behind fragmented solutions and seamlessly operate onchain through your existing Prime account.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Onchain experience built for institutions</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Institutional-grade key management and policy engine designed for secure onchain operations— all with SOC 2 compliance.</p>
                            </div>

                            <a href="#" className="text-[#0052FF] text-[18px] hover:underline hover:text-blue-700 mt-2">
                                Learn more about Prime Onchain Wallet here.
                            </a>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={walletImg}
                            alt="Prime Onchain Wallet diagram"
                            className="w-full max-w-[550px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Tailor your setup Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={tableImg}
                            alt="Vault Withdrawal Table"
                            className="w-full max-w-[550px] h-auto object-contain rounded-[16px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Tailor your setup to meet<br className="hidden lg:block" /> your organization's needs
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Choose your level of Prime</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Our full version of Coinbase Prime offers advanced trading, secure custody, and financing solutions. Or you can choose to only have access to our world-class custody solution with Coinbase Prime: Custody Only.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Face the right custodial entity</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Find a suite of custodial wallet services to meet your legal, regulatory, and compliance needs.</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Gain control over your security</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Customize your security controls and consensus settings or adjust user roles and permissions to fit your organization's workflow.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Looking to provide your clients with secure staking solutions? Section */}
            <section className="w-full bg-[#f9fafb] py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Looking to provide your<br className="hidden lg:block" /> clients with secure<br className="hidden lg:block" /> staking solutions?
                        </h2>

                        <p className="text-gray-500 text-[18px] leading-[1.6] mb-12 max-w-[500px]">
                            Access best-in-class staking infrastructure without the overhead and operational burden of running your own validators. Leverage our experience serving fintechs, dapps, LST providers, and wallets with secure, reliable, easy-to-use staking solutions.
                        </p>

                        <div>
                            <button className="bg-[#0a0b0d] hover:bg-gray-800 text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Learn more
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={stakingLogosImg}
                            alt="Floating circular staking asset logos"
                            className="w-full max-w-[550px] h-auto object-contain"
                        />
                    </div>
                </div>
            </section>

            {/* Take the next step CTA Section */}
            <section className="w-full bg-white pt-24 lg:pt-32 pb-16 lg:pb-32 flex flex-col items-center">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-[#0a0b0d] text-[48px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Take the next step in<br className="hidden md:block" /> institutional crypto.
                    </h2>

                    <button className="bg-[#0a0b0d] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors mb-16 lg:mb-24">
                        Get started
                    </button>
                </div>

                {/* Full width image container */}
                <div className="w-full max-w-[1440px] overflow-hidden px-4 md:px-8 lg:px-12 flex justify-center">
                    <img
                        src={actionBannerImg}
                        alt="People walking from above view"
                        className="w-full max-h-[600px] object-cover rounded-[32px] md:rounded-[48px] lg:rounded-[64px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    />
                </div>
            </section>

            {/* Disclaimer */}
            <section className="w-full bg-white py-16 border-b border-gray-200">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <p className="text-[#8a919e] text-[13px] leading-[1.6] max-w-[1000px] mb-6">
                        Disclaimer: This material is the property of Coinbase, Inc., its parent, and its affiliates and is for informational purposes. This material is not accounting, investment, legal, or tax advice. Please note that all investments involve risk, including risk of loss, and thus may not be suitable for everyone. Recipients should consult their advisors before making any investment decision. Trading venues not connected to Coinbase Prime may offer better pricing. Coinbase, Inc. is licensed to engage in virtual currency business activity by the New York State Department of Financial Services and is not licensed with the U.S. Securities and Exchange Commission or the U.S. Commodity Futures Trading Commission.
                    </p>
                    <a href="#" className="text-[#8a919e] text-[13px] underline hover:text-gray-600 block mb-6">
                        View our licensing information here.
                    </a>
                    <p className="text-[#8a919e] text-[13px] leading-[1.6] max-w-[1000px]">
                        Coinbase Custody Trust Company, LLC is chartered as a limited purpose trust company by the New York State Department of Financial Services to engage in virtual currency business.
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
