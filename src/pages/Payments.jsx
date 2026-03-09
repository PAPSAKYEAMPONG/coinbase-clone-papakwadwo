import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Icons
import { FiPlay, FiCheckCircle } from 'react-icons/fi';

// Assets
import heroThumbnail from '../assets/PaymentsPage/Payments_LP_Video_Thumbnail_mobile.png';
import stablecoinCheckoutImg from '../assets/PaymentsPage/StablecoinCheckout__3_.png';
import ecommerceEngineImg from '../assets/PaymentsPage/EcommerceEngine__3_.png';
import shopifyLogo from '../assets/PaymentsPage/shopify-mono-black.png';
import protocolImg from '../assets/PaymentsPage/PaymentProtocol__3_.png'; // Assuming this is the < $ > graphic

export default function Payments() {
    return (
        <div className="w-full min-h-screen bg-white font-sans flex flex-col">

            {/* Dark Hero Section */}
            <section className="w-full bg-[#0a0b0d] text-white pt-24 lg:pt-32 flex flex-col relative overflow-hidden">
                <div className="w-full max-w-[1280px] mx-auto px-6 h-full flex flex-col justify-between">

                    {/* Content Layout */}
                    <div className="flex flex-col lg:flex-row justify-between gap-16 lg:gap-8 relative z-10 mb-16 lg:mb-24">

                        {/* Left Content */}
                        <div className="w-full lg:w-1/2 flex flex-col">
                            {/* Payments Badge */}
                            <div className="mb-10 inline-flex self-start">
                                <span className="inline-flex items-center gap-2 border border-gray-600 rounded-full px-4 py-2 text-[11px] font-bold tracking-widest uppercase text-gray-300">
                                    <span className="w-2.5 h-2.5 rounded-full border-[3px] border-white"></span>
                                    PAYMENTS
                                </span>
                            </div>

                            <h1 className="text-[56px] md:text-[80px] lg:text-[104px] font-medium leading-[0.85] tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                The future<br />of payments<br />is here.
                            </h1>
                        </div>

                        {/* Right Content */}
                        <div className="w-full lg:w-1/2 flex flex-col justify-center lg:items-start lg:pl-16">
                            <p className="text-[20px] md:text-[24px] lg:text-[32px] font-normal leading-[1.25] mb-10 max-w-[500px]">
                                Move money at the speed of the internet.<br className="hidden md:block" /> Stablecoin payments settle instantly, 24/7, without borders.
                            </p>
                            <div>
                                <button className="bg-white hover:bg-gray-100 text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                    Get in touch
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Graphic/Video Graphic at bottom, spanning full width */}
                <div className="w-full w-max-[1400px] mx-auto px-6 relative">
                    <div className="relative w-full aspect-video md:aspect-[21/9] rounded-t-[48px] overflow-hidden bg-[#0A1AFFFF]">
                        {/* The mock video thumbnail */}
                        <img
                            src={heroThumbnail}
                            alt="Payments Video Cover"
                            className="w-full h-full object-cover object-top"
                        />

                        {/* Play Button Overlay */}
                        <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 w-16 h-16 md:w-20 md:h-20 bg-[#0a0b0d] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <FiPlay className="text-white text-2xl md:text-3xl ml-1" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Grid Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                        {/* Card 1: Always On */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full min-h-[320px]">
                            {/* Simple CSS Icon substitute for the custom SVG */}
                            <div className="w-12 h-12 bg-[#0a0b0d] rounded-full flex items-center justify-center mb-16">
                                <span className="text-white font-bold text-xl">L</span>
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] md:text-[24px] font-semibold mb-3">Always On</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Real-time settlement, any time, any day.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Global by Default */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full min-h-[320px]">
                            <div className="w-12 h-12 bg-[#0a0b0d] rounded-full flex items-center justify-center mb-16 overflow-hidden relative">
                                <div className="absolute inset-0 border-[4px] border-[#0a0b0d] rounded-full z-10"></div>
                                {/* Simple globe look */}
                                <div className="w-full h-full bg-white flex flex-wrap gap-[1px] p-[2px]">
                                    <div className="w-[45%] h-[45%] bg-[#0a0b0d] rounded-tl-sm"></div>
                                    <div className="w-[45%] h-[45%] bg-[#0a0b0d] rounded-tr-sm"></div>
                                    <div className="w-[45%] h-[45%] bg-[#0a0b0d] rounded-bl-sm"></div>
                                    <div className="w-[45%] h-[45%] bg-[#0a0b0d] rounded-br-sm"></div>
                                </div>
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] md:text-[24px] font-semibold mb-3">Global by Default</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Reach customers and partners anywhere in the world.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Lower Costs */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full min-h-[320px]">
                            <div className="flex items-center gap-1 mb-16">
                                <div className="w-10 h-10 bg-[#0a0b0d] rounded-full flex items-center justify-center">
                                    <span className="text-white text-lg">★</span>
                                </div>
                                <div className="w-4 h-10 border-l-[3px] border-y-[3px] border-[#0a0b0d] rounded-l-full"></div>
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] md:text-[24px] font-semibold mb-3">Lower Costs</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Significantly cheaper than traditional payment rails.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Flexible */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full min-h-[320px]">
                            <div className="w-14 h-8 bg-[#0a0b0d] rounded-md flex items-center justify-center gap-[3px] mb-16">
                                <div className="w-2 h-2 bg-white rounded-sm"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-sm"></div>
                            </div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] md:text-[24px] font-semibold mb-3">Flexible</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Accept stablecoin payments and automatically convert to USD.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* The Future of Commerce Stats Section */}
            <section className="w-full bg-[#0052FF] text-white py-16 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-12 lg:gap-16">

                    {/* Top Row: Title and Paragraph */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
                        <h2 className="text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[1.05] tracking-tight lg:w-1/2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            The future of commerce
                        </h2>
                        <p className="text-[18px] md:text-[20px] font-medium lg:w-1/2 leading-[1.6]">
                            Stablecoin payments are already outpacing legacy rails<br className="hidden lg:block" /> in scale and flexibility.
                        </p>
                    </div>

                    {/* Bottom Row: 3 Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 w-full">
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h3 className="text-[56px] md:text-[64px] font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>50x</h3>
                            <p className="text-[12px] font-bold tracking-wider uppercase opacity-90 leading-relaxed max-w-[280px] lg:max-w-xs">
                                GLOBAL STABLECOIN GROWTH SINCE 2020, REACHING ALMOST $30T IN 2024.
                            </p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h3 className="text-[56px] md:text-[64px] font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>80%</h3>
                            <p className="text-[12px] font-bold tracking-wider uppercase opacity-90 leading-relaxed max-w-[280px] lg:max-w-xs">
                                THE PERCENTAGE OF SURVEYED INSTITUTIONS ALREADY USING OR ACTIVELY EXPLORING STABLECOINS.
                            </p>
                        </div>
                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h3 className="text-[56px] md:text-[64px] font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>30M+</h3>
                            <p className="text-[12px] font-bold tracking-wider uppercase opacity-90 leading-relaxed max-w-[280px] lg:max-w-xs">
                                THE NUMBER OF PEOPLE ALREADY USING STABLECOINS MONTHLY.
                            </p>
                        </div>
                    </div>

                </div>
            </section>

            {/* Stablecoin Checkout Feature Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Graphic */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={stablecoinCheckoutImg}
                            alt="Stablecoin Checkout 3D Basket"
                            className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
                            style={{ filter: 'drop-shadow(0px 20px 40px rgba(0, 82, 255, 0.15))' }}
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Stablecoin Checkout
                        </h2>
                        <p className="text-gray-500 text-[18px] md:text-[20px] mb-12">
                            Consumer-grade UX for global buyers
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Reach global customers with a familiar checkout experience
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Built-in KYT screening and compliance tools
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Ideal for emerging markets where card infrastructure falls short
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Embeddable UI that works across platforms
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* E-commerce Engine Section */}
            <section className="w-full bg-[#f9fafb] py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Content */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            E-commerce Engine
                        </h2>
                        <p className="text-gray-500 text-[18px] md:text-[20px] mb-12 max-w-[400px]">
                            Plug-and-play infrastructure for merchants, marketplaces, and PSPs
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    The best of traditional payments—rebuilt for stablecoins
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Instant, final settlement—with no chargeback risk or volatility exposure
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Handles auth/capture, refunds, ledgering, subscriptions
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Easy API integration—no blockchain expertise required
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Graphic */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={ecommerceEngineImg}
                            alt="E-commerce Engine 3D Gears"
                            className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
                            style={{ filter: 'drop-shadow(0px 20px 40px rgba(0, 82, 255, 0.15))' }}
                        />
                    </div>

                </div>
            </section>

            {/* Commerce Payments Protocol Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left Graphic */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <img
                            src={protocolImg}
                            alt="Commerce Payments Protocol Graphics"
                            className="w-full max-w-[500px] h-auto object-contain drop-shadow-2xl"
                            style={{ filter: 'drop-shadow(0px 20px 40px rgba(0, 82, 255, 0.15))' }}
                        />
                    </div>

                    {/* Right Content */}
                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Commerce<br className="hidden lg:block" /> Payments Protocol
                        </h2>
                        <p className="text-gray-500 text-[18px] md:text-[20px] mb-12">
                            Smart contract rails for modern commerce
                        </p>

                        <div className="flex flex-col gap-8">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    A programmable, onchain escrow system that behaves like traditional payments—with superpowers
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Smart contracts enable escrow, delayed capture, and conditional release
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Fully auditable, open-source, and secure
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-[#0a0b0d] text-white rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                                <p className="text-gray-500 text-[16px] md:text-[18px]">
                                    Compatible with enterprise workflows and trust-minimized transactions
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Used by leading retailers Section */}
            <section className="w-full bg-white py-24 lg:py-32 border-b border-gray-100">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-24">

                    <div className="w-full lg:w-1/2 flex flex-col">
                        <h2 className="text-[#0a0b0d] text-[40px] md:text-[48px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Used by leading retailers
                        </h2>
                        <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6] max-w-[500px]">
                            The Coinbase Payments suite is featured on <span className="underline cursor-pointer hover:text-gray-800">Shopify</span>, bringing USDC payments to millions of merchants, with no additional lift or integration steps.
                        </p>
                    </div>

                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <img
                            src={shopifyLogo}
                            alt="Shopify Logo"
                            className="h-20 md:h-24 w-auto object-contain opacity-90"
                        />
                    </div>

                </div>
            </section>

            {/* Looking for more? Section */}
            <section className="w-full bg-[#0a0b0d] text-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[48px] lg:text-[56px] font-medium leading-[1.05] tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Looking for more?
                    </h2>
                    <p className="text-[#8a919e] text-[18px] md:text-[20px] mb-12">
                        We're extending our product to support across the full payments lifecycle—built on stablecoin rails.
                    </p>

                    <div className="flex flex-col gap-8 mb-16">
                        <div className="flex items-start gap-4">
                            <div className="mt-1 bg-white text-[#0a0b0d] rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                            <p className="text-[#8a919e] text-[16px] md:text-[18px]">
                                <span className="text-white font-medium">USDC Rewards:</span> Enable loyalty, cashback, or yield features natively
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1 bg-white text-[#0a0b0d] rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                            <p className="text-[#8a919e] text-[16px] md:text-[18px]">
                                <span className="text-white font-medium">Cross-Border Payouts:</span> Global disbursements with fewer intermediaries and faster delivery
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1 bg-white text-[#0a0b0d] rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                            <p className="text-[#8a919e] text-[16px] md:text-[18px]">
                                <span className="text-white font-medium">24/7 Settlement:</span> Real-time support for all payment types, including refunds and subscriptions
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="mt-1 bg-white text-[#0a0b0d] rounded-full p-[2px]"><FiCheckCircle className="w-4 h-4" /></div>
                            <p className="text-[#8a919e] text-[16px] md:text-[18px]">
                                <span className="text-white font-medium">Treasury Tools:</span> Smarter balance and float management with onchain visibility
                            </p>
                        </div>
                    </div>

                    <button className="bg-white hover:bg-gray-100 text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                        Get in touch
                    </button>
                </div>
            </section>


        </div>
    );
}
