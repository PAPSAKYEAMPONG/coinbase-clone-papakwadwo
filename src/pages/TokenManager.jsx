import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Icons
import { FiRefreshCw, FiNavigation, FiShield, FiSettings } from 'react-icons/fi';

// Assets
import heroImage from '../assets/TokenManagerPage/coinbase-token-manager.png';
import vestingImg from '../assets/TokenManagerPage/card-vesting-lockups.png';
import launchImg from '../assets/TokenManagerPage/card-token-launch.png';
import airdropsImg from '../assets/TokenManagerPage/card-airdrops.png';
import taxImg from '../assets/TokenManagerPage/card-global-tax.png';

export default function TokenManager() {
    return (
        <div className="w-full min-h-screen bg-white font-sans flex flex-col">

            {/* Hero Section */}
            <section className="w-full bg-white pt-24 lg:pt-32 pb-16 lg:pb-24 flex flex-col items-center text-center px-6">

                {/* Small Badge */}
                <div className="mb-8 inline-flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 bg-white shadow-sm">
                    <div className="w-4 h-4 rounded-full bg-[#0a0b0d] flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <span className="text-[14px] font-medium text-[#0a0b0d]">Token Manager</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-[48px] md:text-[72px] lg:text-[96px] font-medium leading-[1.0] tracking-tight mb-8 max-w-[1000px] text-[#0a0b0d]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    The institutional standard<br className="hidden md:block" /> for token operations
                </h1>

                {/* Subheadline */}
                <p className="text-[18px] md:text-[20px] text-gray-500 mb-12 max-w-[600px] leading-[1.6]">
                    Trusted by top crypto teams to streamline token operations from pre-token launch to post-launch.
                </p>

                {/* CTA Button */}
                <button className="bg-[#0a0b0d] hover:bg-gray-800 text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors flex items-center justify-center gap-2">
                    Sign in to Token Manager
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                    </svg>
                </button>

                {/* Hero Graphic Container */}
                <div className="w-full max-w-[1200px] mt-16 lg:mt-24 border border-gray-100 rounded-[32px] overflow-hidden shadow-2xl relative">
                    <img
                        src={heroImage}
                        alt="Token Manager Today Chart Dashboard"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            {/* Automated vesting and lockups */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Automated vesting<br className="hidden lg:block" /> and lockups
                        </h2>
                        <p className="text-gray-500 text-[18px] md:text-[20px] leading-[1.6]">
                            Forget spreadsheets and custom scripts. Set and forget your token distribution schedules with custodian integrations or smart contract-based vesting and lockups.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={vestingImg}
                            alt="Employee token grant vesting graphic"
                            className="w-full max-w-[500px] h-auto object-contain rounded-[32px]"
                        />
                    </div>
                </div>
            </section>

            {/* Token launch management */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={launchImg}
                            alt="Token launch management steps graphic"
                            className="w-full max-w-[500px] h-auto object-contain rounded-[32px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Token launch management
                        </h2>
                        <p className="text-gray-500 text-[18px] md:text-[20px] leading-[1.6]">
                            Navigate the complexities of token launches with a platform built for scale. We bridge the gap between allocation planning to secure custody, ensuring your asset is market-ready from day one.
                        </p>
                    </div>
                </div>
            </section>

            {/* Bulk token distributions */}
            <section className="w-full bg-white py-24 lg:py-32 mb-16">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Bulk token distributions<br className="hidden lg:block" /> in one click
                        </h2>
                        <p className="text-gray-500 text-[18px] md:text-[20px] leading-[1.6]">
                            Execute massive airdrops and post-token sale distributions without the engineering headache. Our batched transaction engine handles bulk transfers, so you can send tokens to 10,000+ stakeholders as easily as sending an email.
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={airdropsImg}
                            alt="Bulk token distribution Airdrop graphic"
                            className="w-full max-w-[500px] h-auto object-contain rounded-[32px]"
                        />
                    </div>
                </div>
            </section>

            {/* Tax withholding and payroll integrations */}
            <section className="w-full bg-[#f9fafb] py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={taxImg}
                            alt="Tax withholding integration graphic displaying Stakeholders and Tax rate"
                            className="w-full max-w-[500px] h-auto object-contain rounded-[32px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Tax withholding and<br className="hidden lg:block" /> payroll integrations
                        </h2>
                        <p className="text-gray-500 text-[18px] md:text-[20px] leading-[1.6]">
                            Automate tax withholding and reporting across jurisdictions. We integrate directly with your payroll systems to make every token grant and unlock compliant for your global workforce.
                        </p>
                    </div>
                </div>
            </section>

            {/* Trusted by industry leaders */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">

                    {/* Top Text Block */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 mb-20 w-full">
                        <h2 className="text-[#0a0b0d] text-[48px] md:text-[56px] lg:text-[72px] font-medium leading-[1.0] tracking-tight w-full lg:w-1/2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Trusted by<br className="hidden lg:block" /> industry leaders
                        </h2>
                        <div className="w-full lg:w-1/2 lg:pl-16">
                            <p className="text-gray-500 text-[18px] md:text-[20px] leading-[1.6] mb-8 max-w-lg">
                                Join over 100+ top crypto teams using Coinbase Token Manager to automate their vesting, lockups, and distributions
                            </p>
                            <button className="bg-[#0a0b0d] hover:bg-gray-800 text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Get started
                            </button>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-8">
                        {/* Card 1 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-12 h-full flex flex-col min-h-[360px]">
                            <div className="mb-auto">
                                <FiRefreshCw className="text-3xl text-[#0a0b0d] font-bold" strokeWidth={3} />
                            </div>
                            <div className="mt-20">
                                <h3 className="text-[#0a0b0d] text-[24px] font-semibold mb-4">End-to-end token management</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Manage all aspects of the token lifecycle, from pre to post launch, seamlessly integrated with our institutional-grade custody solution.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-12 h-full flex flex-col min-h-[360px]">
                            <div className="mb-auto">
                                <FiNavigation className="text-3xl text-[#0a0b0d] font-bold transform -rotate-45" strokeWidth={3} />
                            </div>
                            <div className="mt-20">
                                <h3 className="text-[#0a0b0d] text-[24px] font-semibold mb-4">Unmatched launch expertise</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Benefit from the insights of 100+ token launches. We help you navigate the operational pitfalls of TGE so you don't have to learn the hard way.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-12 h-full flex flex-col min-h-[360px]">
                            <div className="mb-auto">
                                <div className="w-10 h-10 bg-[#0a0b0d] relative rounded-t-md rounded-bl-md" style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 60%, 50% 100%, 0% 60%)' }}>
                                    <div className="absolute inset-0 flex justify-center items-center pb-2">
                                        <div className="w-4 h-2 border-b-2 border-r-2 border-white transform rotate-45"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-20">
                                <h3 className="text-[#0a0b0d] text-[24px] font-semibold mb-4">Compliance-first architecture</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    From automating tax withholding to navigating evolving crypto laws, rely on a system designed to help you stay compliant in a rapidly changing world.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-12 h-full flex flex-col min-h-[360px]">
                            <div className="mb-auto relative">
                                <FiSettings className="text-4xl text-[#0a0b0d]" strokeWidth={3} />
                            </div>
                            <div className="mt-20">
                                <h3 className="text-[#0a0b0d] text-[24px] font-semibold mb-4">The institutional standard</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Market-leading features, backed by the infrastructure trusted by the world's leading institutions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unlock power CTA */}
            <section className="w-full bg-[#0a0b0d] text-white py-32 lg:py-40 flex flex-col items-center text-center px-6">
                <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[1.0] tracking-tight mb-8 max-w-[900px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    Unlock the full power of<br className="hidden md:block" /> Coinbase for your token
                </h2>
                <p className="text-[#8a919e] text-[18px] md:text-[20px] mb-12 max-w-[600px] leading-[1.6]">
                    A unified workflow that connects your token operations to the world's most trusted exchange.
                </p>
                <button className="bg-white hover:bg-gray-100 text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                    Get started
                </button>
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
