import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Assets
import heroImage from '../assets/TradingAndFinancingPage/Group_9.jpg';
import deployStratsImg from '../assets/TradingAndFinancingPage/Group_10.jpg';
import accessTrustImg from '../assets/TradingAndFinancingPage/Trust__1_.png';
import fullyIntegratedImg from '../assets/TradingAndFinancingPage/Report__1_.png';
import unlockValueImg from '../assets/TradingAndFinancingPage/AL__1_.png';
import actionBannerImg from '../assets/TradingAndFinancingPage/inst_home_action_banner_walking.jpg';

export default function TradingFinancing() {
    return (
        <div className="w-full min-h-screen bg-[#f9fafb] font-sans flex flex-col">

            {/* Hero Section */}
            <section className="w-full bg-white pt-24 lg:pt-32 pb-16 lg:pb-24 border-b border-gray-100">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h1 className="text-[48px] md:text-[64px] lg:text-[76px] font-medium leading-[1.05] tracking-tight mb-8 text-[#0a0b0d]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Institutional-grade crypto financing solutions
                        </h1>
                        <p className="text-[18px] md:text-[20px] text-[#0a0b0d] mb-12 max-w-[500px] leading-[1.6]">
                            Deploy advanced trading strategies with fully-integrated portfolio margin, instant leverage and shorting. Earn passive income with agency lending and access customizable financing solutions for institutional needs.
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
                            alt="Portfolio Margin Excess Dashboard"
                            className="w-full max-w-[600px] h-auto object-contain rounded-3xl"
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

            {/* Deploy Strategies Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={deployStratsImg}
                            alt="Asset Tiers and Credit Terms interface"
                            className="w-full max-w-[550px] h-auto object-contain rounded-[32px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Deploy institutional-grade trading strategies
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Leverage portfolio holdings</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Flexible financing solutions provide capital-efficient access to leverage, shorting, and yield, from a single integrated platform</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Superior short inventory</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Diverse sources of supply provide broad, deep, and stable availability of digital assets for shorting</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Market-leading liquidity</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Able to facilitate the largest and most sophisticated customer transactions</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Transparent and persistent margin requirements</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Sophisticated and programmable risk models consider overall portfolio composition, as well as accounting for asset volatility and liquidity</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Access financing Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Access digital asset financing you can trust
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Experienced in risk management</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Our teams have many decades of experience in managing risk, across assets and through market cycles</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Attuned to the market</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Our sophisticated modeling captures market outlier events, and is refined through regular evaluation and stress testing</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Designed to minimize operational risk</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Risk management is a first principle in our product design, and we provide unprecedented transparency to our clients</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={accessTrustImg}
                            alt="Financing Availability dashboard"
                            className="w-full max-w-[550px] h-auto object-contain rounded-[32px]"
                        />
                    </div>
                </div>
            </section>

            {/* Fully Integrated Capabilities Section */}
            <section className="w-full bg-white py-24 lg:py-32 mb-12">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={fullyIntegratedImg}
                            alt="Generate Financing Reports interface"
                            className="w-full max-w-[550px] h-auto object-contain rounded-[32px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Fully integrated capabilities
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Optimized portfolio management</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Market access, execution, reporting, margin and position management, as well as custody and staking — all seamlessly integrated in the Prime platform</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Enabling a wide range of investment strategies</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Deploy advanced trading strategies with the power of the Prime platform APIs and differentiated financing capabilities like availability files and locates</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Proven track record</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Delivering comprehensive and innovative prime services to some of the world's leading institutional investors since 2021</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Unlock the value of your portfolio Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Unlock the value of your portfolio
                        </h2>

                        <div className="flex flex-col gap-8">
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Earn Passive Income</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Generate passive income on digital assets in a low-touch framework professionally managed by the Coinbase Agency Lending team</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Trusted Agent with Unmatched Market Reach</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Coinbase acts as a fully-outsourced lending agent, leveraging our proprietary technology and deep relationships to provide market-leading risk adjusted returns to asset owners</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Over-Collateralized Lending & Competitive Liquidity</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Battle-tested collateral requirements and margin processes protect client assets — plus, fast loan recalls provides for easy liquidity</p>
                            </div>
                            <div>
                                <h3 className="text-[#0a0b0d] text-[20px] font-medium mb-2">Transparent and Efficient Operations</h3>
                                <p className="text-gray-500 text-[18px] leading-[1.5]">Our dedicated team leverages custom-built trading systems and operational processes; daily reporting provides full transparency at all times</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={unlockValueImg}
                            alt="Agency Lending Portfolio dashboard"
                            className="w-full max-w-[550px] h-auto object-contain rounded-[32px]"
                        />
                    </div>
                </div>
            </section>

            {/* Take the next step CTA Section */}
            <section className="w-full bg-white pt-24 lg:pt-32 flex flex-col items-center">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-[#0a0b0d] text-[48px] md:text-[56px] lg:text-[72px] font-medium leading-[1.05] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Take the next step in<br className="hidden md:block" /> institutional crypto.
                    </h2>

                    <button className="bg-[#0a0b0d] text-white font-semibold px-8 py-4 rounded-full hover:bg-gray-800 transition-colors mb-16">
                        Get started
                    </button>
                </div>

                {/* Full width image container */}
                <div className="w-full overflow-hidden px-4 md:px-8">
                    <img
                        src={actionBannerImg}
                        alt="People walking from above view"
                        className="w-full h-auto object-cover rounded-t-[32px] md:rounded-t-[48px] lg:rounded-t-[64px]"
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
