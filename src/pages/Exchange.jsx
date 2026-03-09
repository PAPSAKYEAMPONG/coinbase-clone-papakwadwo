import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

import heroImage from '../assets/exchangePage/image-for-hero-in-exchange-1764196496194.png';
import deepLiquidityImage from '../assets/exchangePage/image-for-featurehighlight-in-exchange-1764196505439.png';
import apiImage from '../assets/exchangePage/image-for-featurehighlight-in-exchange-1764196513614.png';
import docImage1 from '../assets/exchangePage/image-in-exchange-1764196522766.png';
import docImage2 from '../assets/exchangePage/image-in-exchange-1764196530952.png';
import ctaImage from '../assets/exchangePage/image-for-center-in-exchange-1764196540434.png';

export default function Exchange() {
    return (
        <div className="w-full min-h-screen bg-[#0a0b0d] text-white font-sans flex flex-col">

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="w-full pt-20 pb-0 lg:pt-32 relative flex flex-col items-center text-center overflow-hidden">
                    <div className="w-full max-w-[900px] mx-auto px-6 z-10">
                        <h1 className="text-[52px] md:text-[68px] lg:text-[84px] font-medium leading-[1] tracking-tight mb-6" style={{ fontFamily: 'Coinbase Display, Inter, system-ui, sans-serif' }}>
                            Get direct access to<br />Coinbase Exchange
                        </h1>
                        <p className="text-[18px] md:text-[20px] lg:text-[22px] text-gray-400 mb-16 leading-[1.4] mx-auto max-w-[800px]">
                            Our high throughput APIs connect you to the deepest pool of liquidity of any regulated crypto spot exchange.
                        </p>
                    </div>

                    <div className="w-full max-w-[1280px] mx-auto px-6 flex justify-center mt-4">
                        <img
                            src={heroImage}
                            alt="Coinbase Exchange Trading Chart"
                            className="w-full max-w-[1000px] h-auto rounded-t-[32px] md:rounded-t-[48px] border-t border-x border-[#2b2d31] shadow-2xl object-cover"
                            style={{ borderBottom: 'none' }}
                        />
                    </div>
                </section>

                {/* Deep Liquidity Section */}
                <section className="w-full py-24 lg:py-32 bg-[#0a0b0d]">
                    <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                            <img
                                src={deepLiquidityImage}
                                alt="Trader looking at monitors"
                                className="w-full max-w-[560px] h-auto rounded-[32px] md:rounded-[48px] object-cover border border-[#2b2d31]"
                            />
                        </div>
                        <div className="w-full md:w-1/2 flex flex-col">
                            <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-tight mb-6" style={{ fontFamily: 'Coinbase Display, Inter, system-ui, sans-serif' }}>
                                Deep liquidity
                            </h2>
                            <p className="text-[18px] md:text-[20px] text-gray-400 leading-[1.6]">
                                Coinbase is one of the most liquid regulated crypto spot exchanges in the world. Get low cost of execution leveraging a dynamic fee structure for high-volume trading.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Easy-to-use APIs Section */}
                <section className="w-full py-24 lg:py-32 bg-[#0a0b0d]">
                    <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center gap-16 lg:gap-24">
                        <div className="w-full md:w-1/2 flex flex-col order-2 md:order-1">
                            <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-tight mb-6" style={{ fontFamily: 'Coinbase Display, Inter, system-ui, sans-serif' }}>
                                Easy-to-use APIs
                            </h2>
                            <p className="text-[18px] md:text-[20px] text-gray-400 leading-[1.6]">
                                Use our FIX / REST APIs and WebSocket feeds to get direct access to order placement and real time market data.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
                            <img
                                src={apiImage}
                                alt="API Code Snippet"
                                className="w-full max-w-[560px] h-auto rounded-[32px] md:rounded-[48px] object-cover border border-[#2b2d31]"
                            />
                        </div>
                    </div>
                </section>

                {/* Accessible futures market Section */}
                <section className="w-full py-24 lg:py-32 bg-[#0a0b0d] flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-medium leading-[1.1] tracking-tight mb-8" style={{ fontFamily: 'Coinbase Display, Inter, system-ui, sans-serif' }}>
                        An accessible<br className="hidden md:block" /> futures market.
                    </h2>
                    <p className="text-[18px] md:text-[20px] text-gray-400 max-w-[800px] leading-[1.6] mb-12">
                        Our acquisition of LMX Labs, a CFTC-regulated derivatives exchange, allows us to introduce Coinbase Derivatives to our offering. Our mission is to provide trusted and transparent futures markets as another way to access the cryptoeconomy.
                    </p>
                    <button className="bg-white hover:bg-gray-100 text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                        Learn more
                    </button>
                </section>

                {/* Document Cards Section */}
                <section className="w-full py-16 lg:py-24 bg-[#0a0b0d]">
                    <div className="w-full max-w-[1000px] mx-auto px-6 flex flex-col gap-8">
                        {/* Card 1 */}
                        <div className="w-full bg-[#111215] border border-[#2b2d31] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-sm hover:border-[#3b3d41] transition-colors">
                            <div className="w-full md:w-2/5 md:max-w-[360px] h-[220px] md:h-auto bg-white p-6 md:p-10 flex items-center justify-center">
                                <img src={docImage1} alt="Exchange Overview Document" className="w-full object-contain" />
                            </div>
                            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 text-white tracking-tight">Coinbase Exchange Overview</h3>
                                <p className="text-gray-400 text-[16px] lg:text-[18px] leading-[1.6] mb-4">
                                    Coinbase Exchange helps institutional clients access one of the deepest pools of liquidity of any regulated crypto spot exchange
                                </p>
                                <p className="text-gray-500 text-[14px] mb-8">2021-10-13</p>
                                <div>
                                    <button className="bg-[#2b2d31] hover:bg-[#3b3d41] text-white px-6 py-3 rounded-full text-[14px] font-semibold transition-colors w-auto">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="w-full bg-[#111215] border border-[#2b2d31] rounded-[24px] overflow-hidden flex flex-col md:flex-row shadow-sm hover:border-[#3b3d41] transition-colors">
                            <div className="w-full md:w-2/5 md:max-w-[360px] h-[220px] md:h-auto bg-white p-6 md:p-10 flex flex-col justify-center relative">
                                <img src={docImage2} alt="Exchange API Best Practices" className="w-full object-contain" />
                            </div>
                            <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                                <h3 className="text-[24px] lg:text-[28px] font-medium mb-4 text-white tracking-tight">Coinbase Exchange API Best Practices</h3>
                                <p className="text-gray-400 text-[16px] lg:text-[18px] leading-[1.6] mb-4">
                                    Document describing a few of our recommended best practices for our APIs.
                                </p>
                                <p className="text-gray-500 text-[14px] mb-8">2022-03-01</p>
                                <div>
                                    <button className="bg-[#2b2d31] hover:bg-[#3b3d41] text-white px-6 py-3 rounded-full text-[14px] font-semibold transition-colors w-auto">
                                        Download
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Final CTA Section */}
                <section className="w-full pt-24 pb-16 lg:pt-32 lg:pb-24 bg-[#0a0b0d] flex flex-col items-center justify-center text-center px-6">
                    <h2 className="text-[48px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-tight mb-10 max-w-[1000px]" style={{ fontFamily: 'Coinbase Display, Inter, system-ui, sans-serif' }}>
                        Ready to access Coinbase<br className="hidden md:block" /> Exchange directly?
                    </h2>
                    <button className="bg-white hover:bg-gray-100 text-[#0a0b0d] px-10 py-5 rounded-full text-[18px] font-semibold transition-colors mb-20">
                        Get Started
                    </button>

                    <div className="w-full max-w-[1280px] mx-auto bg-[#1c1d21] rounded-[32px] md:rounded-[48px] p-6 pb-0 md:p-12 md:pb-0 overflow-hidden flex justify-center items-end border border-[#2b2d31]">
                        <img
                            src={ctaImage}
                            alt="Coinbase Exchange Interface on Tablet"
                            className="w-full max-w-[1000px] h-auto object-cover rounded-t-[20px] md:rounded-t-[32px] shadow-2xl translate-y-4"
                        />
                    </div>
                </section>

                {/* Disclaimer Section */}
                <section className="w-full py-20 bg-[#111215] border-t border-[#2b2d31]">
                    <div className="w-full max-w-[1280px] mx-auto px-6 text-center">
                        <p className="text-[12px] text-gray-400 max-w-[1000px] mx-auto leading-[1.6]">
                            Disclaimer: This material is the property of Coinbase, Inc., its parent, and its affiliates and is for informational purposes and sophisticated investors only. This material is not: (i) an offer, or solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy, or (ii) intended to provide accounting, legal, or tax advice, or investment recommendations. Please note that all investments and investment strategies involve risk, including risk of loss, and thus may not be suitable for everyone. Please note that trading venues not used by Coinbase may offer better pricing. Recipients should consult their advisors before making any investment decision. Coinbase, Inc. is licensed to engage in virtual currency business activity by the New York State Department of Financial Services. Coinbase, Inc. is not registered or licensed with the U.S. Securities and Exchange Commission or the U.S. Commodity Futures Trading Commission. View our licensing information <a href="#" className="underline">here</a>.<br />
                            ¹ NFT custody is only available to Coinbase Custody International Ltd clients at this time.
                        </p>
                    </div>
                </section>
            </main>

            <Footer theme="dark" />
        </div>
    );
}
