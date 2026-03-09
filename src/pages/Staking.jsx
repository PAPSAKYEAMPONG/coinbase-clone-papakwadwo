import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Icons
import { FiLock, FiShield, FiCheck } from 'react-icons/fi';

// Assets
import heroBgImg from '../assets/StakingPage/Screenshot_2025-06-18_at_11.18.02_C3_A2__AM.png';
import infraImg from '../assets/StakingPage/FEATURES-STAKING-2025.png';
import ethSolNodesImg from '../assets/StakingPage/Screenshot_2025-06-18_at_1.16.11_C3_A2__PM.png';

import solApyBlogImg from '../assets/StakingPage/CB_BlogHeader_SOL_12182025.png';
import ethApyBlogImg from '../assets/StakingPage/CB_INSTO_BlogHeader_v004.png';
import ethGuideBlogImg from '../assets/StakingPage/blog_header2.png';
import stakingProtectBlogImg from '../assets/StakingPage/security_blog_header.png'; // Using available fallback for now
import stakingPerformBlogImg from '../assets/StakingPage/institutions_upsell.png'; // Using available fallback for now

// Asset Logos
import ethLogo from '../assets/StakingPage/ETH-STAKING-2025.png';
import solLogo from '../assets/StakingPage/SOL-STAKING-2025.png';
import adaLogo from '../assets/StakingPage/ADA-STAKING-2025.png';
import atomLogo from '../assets/StakingPage/ATOM-STAKING-2025.png';
import aptLogo from '../assets/StakingPage/APT-STAKING-2025.png';
import dotLogo from '../assets/StakingPage/DOT-STAKING-2025.png';
import nearLogo from '../assets/StakingPage/NEAR-STAKING-2025.png';
import avaxLogo from '../assets/StakingPage/AVAX-STAKING-2025.png';
import suiLogo from '../assets/StakingPage/SUI-STAKING-2025.png';
import tiaLogo from '../assets/StakingPage/TIA-STAKING-2025.png';
import maticLogo from '../assets/StakingPage/MATIC-STAKING-2025.png';
import xtzLogo from '../assets/StakingPage/XTZ-STAKING-2025.png';

export default function Staking() {

    const assets = [
        { name: 'Ethereum', logo: ethLogo },
        { name: 'Solana', logo: solLogo },
        { name: 'Cardano', logo: adaLogo },
        { name: 'Cosmos', logo: atomLogo },
        { name: 'Aptos', logo: aptLogo },
        { name: 'Polkadot', logo: dotLogo },
        { name: 'NEAR', logo: nearLogo },
        { name: 'Avalanche', logo: avaxLogo },
        { name: 'Sui', logo: suiLogo },
        { name: 'Celestia', logo: tiaLogo },
        { name: 'Polygon', logo: maticLogo },
        { name: 'Tezos', logo: xtzLogo },
    ];

    return (
        <div className="w-full min-h-screen bg-[#0a0b0d] text-white font-sans flex flex-col">


            {/* Hero Section */}
            <section className="w-full pt-24 lg:pt-32 pb-16 lg:pb-24 border-b border-gray-800">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    <div className="w-full lg:w-[45%] flex flex-col pt-8">
                        <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-medium leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Stake securely, earn competitively
                        </h1>
                        <p className="text-[18px] md:text-[20px] text-gray-400 mb-10 max-w-[500px] leading-[1.6]">
                            Our cutting-edge staking infrastructure is backed by the most trusted name in crypto and built by industry experts.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-white text-[#0a0b0d] hover:bg-gray-200 px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Get in touch
                            </button>
                            <button className="bg-[#1f2328] hover:bg-[#2d333b] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors border border-gray-700">
                                Follow us on X
                            </button>
                        </div>
                    </div>
                    <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                        <img
                            src={heroBgImg}
                            alt="Circuit board design"
                            className="w-full max-w-[700px] h-auto object-cover rounded-[32px] md:rounded-[48px]"
                        />
                    </div>
                </div>
            </section>

            {/* Industry-leading infrastructure Section */}
            <section className="w-full py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Industry-leading infrastructure
                        </h2>

                        <p className="text-gray-400 text-[18px] md:text-[20px] mb-12">
                            Our enterprise-grade stack includes:
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg></div>
                                <span className="text-[18px] md:text-[20px] font-medium">Slashing coverage</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M2.13 15.57a10 10 0 1 0 3.84-10.58L2.5 8"></path></svg></div>
                                <span className="text-[18px] md:text-[20px] font-medium">Multi-region, multi-cloud diversity</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg></div>
                                <span className="text-[18px] md:text-[20px] font-medium">Reporting</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></div>
                                <span className="text-[18px] md:text-[20px] font-medium">Double signing prevention</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg></div>
                                <span className="text-[18px] md:text-[20px] font-medium">API access</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>
                                <span className="text-[18px] md:text-[20px] font-medium">24/7 on-call support</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="text-gray-400"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div>
                                <span className="text-[18px] md:text-[20px] font-medium">99% uptime guarantee</span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={infraImg}
                            alt="Coinbase Infrastructure lines"
                            className="w-full max-w-[650px] h-auto object-contain rounded-[48px]"
                        />
                    </div>
                </div>
            </section>

            {/* Security Features Section */}
            <section className="w-full py-24 lg:py-32 mb-12">
                <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* Unparalleled Security */}
                    <div className="bg-[#1a1b1e] rounded-[32px] p-8 lg:p-12 border border-[#2d2e33]">
                        <div className="w-12 h-12 mb-8 text-white">
                            <FiLock size={40} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Unparalleled security</h3>
                        <p className="text-gray-400 text-[16px] lg:text-[18px] leading-[1.6]">
                            We leverage Coinbase Prime's institutional-grade key management and custody, built on cutting-edge encryption. We have also completed a <a href="#" className="underline hover:text-white transition-colors">SOC 2 Type 1</a> audit with Deloitte.
                        </p>
                    </div>

                    {/* Zero slashing events */}
                    <div className="bg-[#1a1b1e] rounded-[32px] p-8 lg:p-12 border border-[#2d2e33]">
                        <div className="w-12 h-12 mb-8 text-white">
                            <FiShield size={40} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Zero slashing events</h3>
                        <p className="text-gray-400 text-[16px] lg:text-[18px] leading-[1.6]">
                            Protecting customer funds is our priority. With our industry-leading protections, Coinbase validators have never lost assets due to slashing—on any of the networks we support.
                        </p>
                    </div>

                    {/* Built by experts */}
                    <div className="bg-[#1a1b1e] rounded-[32px] p-8 lg:p-12 border border-[#2d2e33]">
                        <div className="w-12 h-12 mb-8 text-white">
                            <FiCheck size={40} strokeWidth={2.5} />
                        </div>
                        <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Built by experts</h3>
                        <p className="text-gray-400 text-[16px] lg:text-[18px] leading-[1.6]">
                            Our team has deep crypto expertise and diverse technical backgrounds across applied cryptography, blockchain development, immutable cloud infrastructure, and more.
                        </p>
                    </div>
                </div>
            </section>

            {/* Supported Networks Section */}
            <section className="w-full py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col">
                    <div className="mb-16">
                        <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Supported networks
                        </h2>
                        <p className="text-gray-400 text-[18px] md:text-[20px] max-w-[600px] leading-[1.6]">
                            Access the leading staking networks and Actively Validated Services (AVS).
                        </p>
                    </div>

                    {/* Logo Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
                        {assets.map((asset, index) => (
                            <div
                                key={index}
                                className="bg-[#1a1b1e] aspect-square rounded-[32px] flex items-center justify-center p-8 hover:bg-[#25262b] transition-colors cursor-pointer border border-[#2d2e33]"
                            >
                                <img
                                    src={asset.logo}
                                    alt={`${asset.name} logo`}
                                    className="w-full max-w-[80px] h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Staking for institutions Section */}
            <section className="w-full py-24 lg:py-32 bg-[#0a0b0d]">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[48px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Staking for<br className="hidden lg:block" /> institutions
                        </h2>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p className="text-gray-400 text-[18px] md:text-[20px] leading-[1.6]">
                            Coinbase Prime integrates staking with secure custody, trading, financing, and other prime services to provide a turnkey solution for institutions.
                        </p>
                    </div>
                </div>

                <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-16 lg:mt-24">
                    {/* Detailed reporting */}
                    <div className="bg-[#1a1b1e] rounded-[32px] p-8 lg:p-12 border border-[#2d2e33]">
                        <div className="w-12 h-12 mb-8 text-white">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>
                        </div>
                        <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Detailed reporting</h3>
                        <p className="text-[#8a919e] text-[16px] lg:text-[18px] leading-[1.6]">
                            Understand staked asset performance with reports that include staked balances, distributed rewards by type, pending rewards, notional USD values, and rewards rates. Generate reports for custom time frames, across portfolios, wallets, and validators.*
                        </p>
                    </div>

                    {/* Regulated & secure */}
                    <div className="bg-[#1a1b1e] rounded-[32px] p-8 lg:p-12 border border-[#2d2e33]">
                        <div className="w-12 h-12 mb-8 text-white">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="10" width="16" height="10" rx="2" ry="2"></rect><path d="M12 10V6"></path><path d="M8 6h8"></path><path d="M12 2v4"></path></svg>
                        </div>
                        <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Regulated & secure</h3>
                        <p className="text-[#8a919e] text-[16px] lg:text-[18px] leading-[1.6]">
                            Coinbase Custody Trust Company is a Qualified Custodian, chartered and supervised under New York state banking law. We have a 10+ year track record of client asset security and Coinbase Prime maintains <a href="#" className="underline hover:text-white transition-colors">SOC 1 and SOC 2 Type 2</a> audits.
                        </p>
                    </div>

                    {/* Built for scale */}
                    <div className="bg-[#1a1b1e] rounded-[32px] p-8 lg:p-12 border border-[#2d2e33]">
                        <div className="w-12 h-12 mb-8 text-white">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>
                        </div>
                        <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 tracking-tight">Built for scale</h3>
                        <p className="text-[#8a919e] text-[16px] lg:text-[18px] leading-[1.6]">
                            Coinbase is the most trusted staking provider, with more staked ETH than any other institutional provider. Our operations are backed by a flawless slashing track record. We support the largest institutional investors with high performance and reliability.
                        </p>
                    </div>
                </div>
            </section>

            {/* Best in class Ethereum & Solana staking Section */}
            <section className="w-full py-24 lg:py-32 border-b border-gray-800">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-[45%] flex flex-col">
                        <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Best in class Ethereum<br className="hidden lg:block" /> & Solana staking
                        </h2>

                        <p className="text-gray-400 text-[18px] md:text-[20px] mb-12 leading-[1.6] max-w-[500px]">
                            We are pioneers in staking architecture and are proud to run performant validators with multi-region, multi-client, multi-provider infrastructure for both Ethereum and Solana.
                        </p>

                        <div className="flex flex-col gap-6 items-start">
                            <a href="#" className="text-gray-400 hover:text-white text-[16px] md:text-[18px] font-medium underline transition-colors">ETH Performance Report</a>
                            <a href="#" className="text-gray-400 hover:text-white text-[16px] md:text-[18px] font-medium underline transition-colors">SOL Performance Report</a>
                        </div>
                    </div>
                    <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
                        <img
                            src={ethSolNodesImg}
                            alt="Node infrastructure graphic"
                            className="w-full max-w-[700px] h-auto object-cover rounded-[32px] md:rounded-[48px]"
                        />
                    </div>
                </div>
            </section>

            {/* Resources Section */}
            <section className="w-full py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col">
                    <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Resources
                    </h2>

                    <div className="flex flex-col gap-8 lg:gap-12">
                        {/* Blog 1 */}
                        <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center lg:items-start pb-12 border-b border-gray-800 cursor-pointer">
                            <div className="w-full md:w-[40%] overflow-hidden rounded-[24px]">
                                <img src={solApyBlogImg} alt="Calculating Solana Staking APY" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full md:w-[60%] flex flex-col pt-4 md:pt-8">
                                <h3 className="text-[28px] md:text-[36px] font-medium mb-4 group-hover:text-blue-500 transition-colors tracking-tight">Calculating Solana Staking APY</h3>
                                <p className="text-[#8a919e] text-[18px] leading-[1.6]">
                                    When staking through a provider, understanding how APY is calculated is critical. This article breaks down the two types of Solana staking APY Coinbase measures and how we calculate them.
                                </p>
                            </div>
                        </div>

                        {/* Blog 2 */}
                        <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center lg:items-start pb-12 border-b border-gray-800 cursor-pointer">
                            <div className="w-full md:w-[40%] overflow-hidden rounded-[24px]">
                                <img src={stakingProtectBlogImg} alt="How Coinbase Protects Your Staked Assets" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full md:w-[60%] flex flex-col pt-4 md:pt-8">
                                <h3 className="text-[28px] md:text-[36px] font-medium mb-4 group-hover:text-blue-500 transition-colors tracking-tight">How Coinbase Protects Your Staked Assets</h3>
                                <p className="text-[#8a919e] text-[18px] leading-[1.6]">
                                    Our commitment to protecting customer assets begins with robust, multi-layer security measures built into our staking product, and encompasses a full security stack. Read more on our staking security in this deep dive.
                                </p>
                            </div>
                        </div>



                        {/* Blog 3 */}
                        <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center lg:items-start pb-12 border-b border-gray-800 cursor-pointer">
                            <div className="w-full md:w-[40%] overflow-hidden rounded-[24px]">
                                <img src={ethApyBlogImg} alt="How We Calculate Ethereum Staking APY" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full md:w-[60%] flex flex-col pt-4 md:pt-8">
                                <h3 className="text-[28px] md:text-[36px] font-medium mb-4 group-hover:text-blue-500 transition-colors tracking-tight">How We Calculate Ethereum Staking APY</h3>
                                <p className="text-[#8a919e] text-[18px] leading-[1.6]">
                                    Understanding rewards performance is crucial for institutional stakers. As part of our commitment to transparency, we're publishing our inaugural blog on the topic.
                                </p>
                            </div>
                        </div>

                        {/* Blog 4 */}
                        <div className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center lg:items-start pb-12 border-b border-gray-800 cursor-pointer">
                            <div className="w-full md:w-[40%] overflow-hidden rounded-[24px]">
                                <img src={ethGuideBlogImg} alt="Guide to Ethereum Staking" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="w-full md:w-[60%] flex flex-col pt-4 md:pt-8">
                                <h3 className="text-[28px] md:text-[36px] font-medium mb-4 group-hover:text-blue-500 transition-colors tracking-tight">Guide to Ethereum Staking</h3>
                                <p className="text-[#8a919e] text-[18px] leading-[1.6]">
                                    This guide breaks down the Ethereum staking process and how investors can earn yield on their ETH holdings with Coinbase Prime.
                                </p>
                            </div>
                        </div>




                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
