import React, { useRef, useState } from 'react';
import advancedHeroImg from '../assets/AdvancedPage/advanced_hero.png';
import spotPairsIcon from '../assets/AdvancedPage/advancedTradingRebates-3.svg'; // Using this for toggles for now
import lowFeesIcon from '../assets/AdvancedPage/lowFees-4.svg';
import derivativesIcon from '../assets/AdvancedPage/derivativesNavigation-6.svg';
import rewardsIcon from '../assets/AdvancedPage/rewardsNavigation-5.svg';
import assetsIcon from '../assets/AdvancedPage/stableCoinMetaphor-4.svg'; // Using this for scales
import securityIcon from '../assets/AdvancedPage/securityCoinShield-5.svg';
import cbLockIllo from '../assets/AdvancedPage/Line16_MockUp_v01_resized_2000w.webp';
import lineMockup from '../assets/AdvancedPage/Line17_MockUp_v01.webp';
import blueLock from '../assets/AdvancedPage/CBR_LOLP_lockIllo_v01_1.webp';
import tradingEdgeMockup from '../assets/AdvancedPage/Static_3.webp';
import speedControlMockup from '../assets/AdvancedPage/Line16_MockUp_v01_resized_2000w.webp';
import cb1Logo from '../assets/AdvancedPage/cb1-logo.svg';
import learnTechAnalysis from '../assets/AdvancedPage/Learn_Illustration_What_is_Technical_Analysis.webp';
import learnCharts from '../assets/AdvancedPage/how_to_read_advanced-trading_charts.webp';
import learnOrders from '../assets/AdvancedPage/limit-orders__1.webp';

export default function AdvancedTrade() {
    const carouselRef = useRef(null);
    const [activeSlide, setActiveSlide] = useState(0);

    const handleScroll = () => {
        if (!carouselRef.current) return;
        const scrollPosition = carouselRef.current.scrollLeft;
        const slideWidth = carouselRef.current.clientWidth;
        // Determine which slide is mostly in view
        const newActiveSlide = Math.round(scrollPosition / slideWidth);
        setActiveSlide(newActiveSlide);
    };

    const scrollToIndex = (index) => {
        if (!carouselRef.current) return;
        const slideWidth = carouselRef.current.clientWidth;
        carouselRef.current.scrollTo({
            left: index * slideWidth,
            behavior: 'smooth'
        });
        setActiveSlide(index);
    };

    return (
        <div className="w-full min-h-screen bg-[#0a0b0d] font-sans text-white">

            {/* Top Navigation Bar / Subnav simulation (Optional, maybe we just do the Hero) */}
            <div className="w-full border-b border-gray-800 bg-[#0a0b0d]">
                <div className="w-full max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
                    <h1 className="text-xl md:text-2xl font-medium" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Coinbase Advanced
                    </h1>
                    <div className="hidden lg:flex items-center gap-6 text-[14px] font-medium text-gray-300">
                        <a href="#" className="text-white">Spot</a>
                        <a href="#" className="hover:text-white transition-colors">Derivatives</a>
                        <a href="#" className="hover:text-white transition-colors">API</a>
                        <a href="#" className="hover:text-white transition-colors">VIP</a>
                        <a href="#" className="hover:text-white transition-colors">Learn</a>
                        <a href="#" className="hover:text-white transition-colors">Twitter</a>
                        <a href="#" className="text-white flex items-center gap-1">
                            Explore now
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="w-full pt-16 lg:pt-5 pb-16 lg:pb-32 overflow-hidden relative">
                <div className="w-full max-w-[1280px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                    {/* Left Content */}
                    <div className="flex flex-col items-start w-full lg:w-[45%] z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 mb-8">
                            <div className="w-4 h-4 rounded-full bg-white flex items-center justify-center">
                                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                            </div>
                            <span className="text-[14px] font-medium text-gray-300">Coinbase Advanced</span>
                        </div>

                        <h2 className="text-[56px] md:text-[72px] lg:text-[88px] font-normal text-white leading-[1.05] mb-8 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Low fees.<br />
                            Powerful<br />
                            trading.
                        </h2>

                        <p className="text-[18px] md:text-[20px] text-gray-300 leading-[1.5] mb-10 max-w-[480px]">
                            From 500+ spot pairs with as low as 0.0% maker fees, to advanced charting powered by TradingView, to powerful APIs.
                        </p>

                        <div className="flex items-center gap-6">
                            <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Get started
                            </button>
                            <a href="#" className="text-white hover:text-gray-300 transition-colors font-medium text-[16px] flex items-center gap-2">
                                Explore Coinbase Advanced
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="19" x2="19" y2="5"></line>
                                    <polyline points="9 5 19 5 19 15"></polyline>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="w-full lg:w-[55%] flex justify-center lg:justify-end relative">
                        <img
                            src={advancedHeroImg}
                            alt="Coinbase Advanced Trading Interface Mockups"
                            className="w-full max-w-[800px] lg:max-w-none lg:w-[80%] object-contain"
                        />
                    </div>

                </div>
            </section>

            {/* Features Grid Section */}
            <section className="w-full bg-[#0a0b0d] pb-24 lg:pb-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-[#141519] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full">
                            <div className="w-12 h-12 flex flex-col justify-center mb-12 lg:mb-16">
                                {/* Toggles visual - using SVG if available, or custom CSS */}
                                <img src={spotPairsIcon} alt="Spot pairs" className="w-12 h-12 object-contain" />
                                {/* (Fallback if SVG is wrong) 
                                <div className="flex flex-col gap-2 w-10">
                                    <div className="h-4 w-full bg-gray-600 rounded-full flex items-center px-1"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                                    <div className="h-4 w-full bg-[#0052FF] rounded-full flex items-center justify-end px-1"><div className="w-3 h-3 bg-white rounded-full"></div></div>
                                </div>
                                */}
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    550+ spot pairs
                                </h3>
                                <p className="text-[16px] text-gray-400 leading-[1.5]">
                                    Trade in and out in a flash with 552 spot pairs, including 237 USDC pairs and 22 stablepairs.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#141519] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full">
                            <div className="w-12 h-12 flex items-center justify-center mb-12 lg:mb-16">
                                <img src={lowFeesIcon} alt="Low fees" className="w-8 h-8 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    As low as 0.0% maker fees
                                </h3>
                                <p className="text-[16px] text-gray-400 leading-[1.5]">
                                    Enjoy low, volume-based fees on spot pairs with zero subscription fees and no minimum portfolio sizes.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#141519] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full">
                            <div className="w-12 h-12 flex items-center justify-center mb-12 lg:mb-16">
                                <img src={derivativesIcon} alt="Derivatives" className="w-8 h-8 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Explore derivatives
                                </h3>
                                <p className="text-[16px] text-gray-400 leading-[1.5]">
                                    Trade derivatives, built for the retail investor.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="bg-[#141519] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full">
                            <div className="w-12 h-12 flex items-center justify-center mb-12 lg:mb-16">
                                <img src={rewardsIcon} alt="Rewards" className="w-8 h-8 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Up to 3.35% USDC rewards
                                </h3>
                                <p className="text-[16px] text-gray-400 leading-[1.5]">
                                    Earn rewards when you fund your trading balance with USDC, even on partial or unfilled orders¹.
                                </p>
                            </div>
                        </div>

                        {/* Card 5 */}
                        <div className="bg-[#141519] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full">
                            <div className="w-12 h-12 flex items-center justify-center mb-12 lg:mb-16">
                                <img src={assetsIcon} alt="Customer assets" className="w-10 h-10 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    We hold customer assets 1:1
                                </h3>
                                <p className="text-[16px] text-gray-400 leading-[1.5]">
                                    Your crypto is your crypto. Coinbase doesn't lend or take any action with your assets without your permission.
                                </p>
                            </div>
                        </div>

                        {/* Card 6 */}
                        <div className="bg-[#141519] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-full">
                            <div className="w-12 h-12 flex items-center justify-center mb-12 lg:mb-16">
                                <img src={securityIcon} alt="Security" className="w-8 h-8 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-3" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    State-of-the-art security
                                </h3>
                                <p className="text-[16px] text-gray-400 leading-[1.5]">
                                    Secure and multifaceted risk management programs include 2FA, mobile biometrics, Yubikey support, Allowlist, and more.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Statistics Section */}
            <section className="w-full bg-[#16181d] py-16 lg:py-24 border-t border-gray-800">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-normal text-white leading-[1.1] mb-20 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Powerful and reputable
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 w-full">
                        {/* Stat 1 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <span className="text-[50px] font-normal text-white leading-none tracking-tight font-sans">
                                $154B
                            </span>
                            <span className="text-[12px] font-bold text-gray-500 tracking-[0.05em] uppercase">
                                Quarterly Volume Traded
                            </span>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <span className="text-[50px] font-normal text-white leading-none tracking-tight font-sans">
                                $193B
                            </span>
                            <span className="text-[12px] font-bold text-gray-500 tracking-[0.05em] uppercase">
                                Safeguarded Assets
                            </span>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center text-center gap-3">
                            <span className="text-[50px] font-normal text-white leading-none tracking-tight font-sans">
                                552
                            </span>
                            <span className="text-[12px] font-bold text-gray-500 tracking-[0.05em] uppercase">
                                Spot Pairs
                            </span>
                        </div>
                    </div>
                </div>
            </section>

            {/* UX Header Section */}
            <section className="w-full bg-[#0a0b0d] py-24 lg:py-22 flex flex-col items-center justify-center text-center px-6">
                <h2 className="text-[48px] md:text-[64px] lg:text-[60px] font-normal text-white leading-[1.1] tracking-tight max-w-[1000px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    A simple and intuitive UX
                </h2>
            </section>

            {/* Interactive Carousel Section (Static Mockup) */}
            <section className="w-full bg-[#0a0b0d] pb-24 lg:pb-32 px-6 overflow-hidden">
                <div className="w-full max-w-[1440px] mx-auto flex flex-col items-center">

                    {/* Carousel Container */}
                    <div
                        ref={carouselRef}
                        onScroll={handleScroll}
                        className="w-full flex gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-8"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >

                        {/* Slide 1: TradingView */}
                        <div className={`transition-opacity duration-300 bg-[#000000] rounded-[48px] p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-16 min-w-full lg:min-w-[calc(100%-120px)] snap-center flex-shrink-0 ${activeSlide === 0 ? 'opacity-100' : 'opacity-40'}`}>
                            {/* Left: Image */}
                            <div className="w-full lg:w-[45%] flex justify-center">
                                <img src={cbLockIllo} alt="Indicators Search Menu" className="w-full max-w-[400px] object-contain" />
                            </div>

                            {/* Right: Text */}
                            <div className="w-full lg:w-[55%] flex flex-col items-start pr-0 lg:pr-12">
                                <h3 className="text-[48px] md:text-[56px] lg:text-[64px] font-normal text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Powered by<br />TradingView
                                </h3>
                                <p className="text-[20px] text-white leading-[1.6] mb-10 max-w-[600px]">
                                    Take your analysis to the next level with advanced charting tools and customization. Leverage EMA, MA, MACD, RSI, Bollinger Bands, custom drawing tools, and more.
                                </p>
                                <button className="bg-white hover:bg-[#f5f6f8] text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                    View charts
                                </button>
                            </div>
                        </div>

                        {/* Slide 2: Customize */}
                        <div className={`transition-opacity duration-300 bg-[#000000] rounded-[48px] p-10 lg:p-14 flex flex-col lg:flex-row items-center gap-16 min-w-full lg:min-w-[calc(100%-120px)] snap-center flex-shrink-0 ${activeSlide === 1 ? 'opacity-100' : 'opacity-40'}`}>
                            {/* Left: Image */}
                            <div className="w-full lg:w-[65%] flex justify-center py-6">
                                <img src={lineMockup} alt="Customizable trading interface" className="w-full max-w-[600px] object-contain" />
                            </div>

                            {/* Right: Text */}
                            <div className="w-full lg:w-[55%] flex flex-col items-start pr-0 lg:pr-12">
                                <h3 className="text-[48px] md:text-[56px] lg:text-[64px] font-normal text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Customize your<br />trade page
                                </h3>
                                <p className="text-[20px] text-white leading-[1.6] mb-10 max-w-[600px]">
                                    Configure and expand charts/layout to suit your needs.
                                </p>
                                <button className="bg-white hover:bg-[#f5f6f8] text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                    Customize now
                                </button>
                            </div>
                        </div>

                    </div>

                    {/* Carousel Controls */}
                    <div className="w-full max-w-[1280px] mt-8 flex items-center justify-between">
                        {/* Progress Indicators */}
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-2 rounded-full bg-gray-600 flex overflow-hidden">
                                <div className={`h-full bg-white rounded-full transition-all duration-300 ${activeSlide === 0 ? 'w-full' : 'w-0'}`}></div>
                            </div>
                            <div className="w-12 h-2 rounded-full bg-gray-800 flex overflow-hidden">
                                <div className={`h-full bg-white rounded-full transition-all duration-300 ${activeSlide === 1 ? 'w-full' : 'w-0'}`}></div>
                            </div>
                            <button className="ml-4 w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M8 5v14l11-7z"></path>
                                </svg>
                            </button>
                        </div>

                        {/* Next/Prev Buttons */}
                        <div className="flex items-center gap-4">
                            <button
                                onClick={() => scrollToIndex(Math.max(0, activeSlide - 1))}
                                disabled={activeSlide === 0}
                                className={`w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white transition-colors ${activeSlide === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="15 18 9 12 15 6"></polyline>
                                </svg>
                            </button>
                            <button
                                onClick={() => scrollToIndex(Math.min(1, activeSlide + 1))}
                                disabled={activeSlide === 1}
                                className={`w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center text-white transition-colors ${activeSlide === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'}`}
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="9 18 15 12 9 6"></polyline>
                                </svg>
                            </button>
                        </div>
                    </div>

                </div>
                {/* Hide scrollbar styles purely for this section */}
                <style dangerouslySetInnerHTML={{
                    __html: `
                    .hide-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                `}} />
            </section>

            {/* Trading Edge Section */}
            <section className="w-full bg-[#0a0b0d] py-24 lg:py-22 px-6 lg:px-16 xl:px-24 border-t border-gray-800">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-12">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[44px] font-normal text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Up your trading edge
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-400 leading-[1.6] mb-10 max-w-[600px]">
                            Get ahead of the game with TradingView charts, technical indicators, and custom watchlists. For even more control, unlock real-time market data with high throughput APIs.
                        </p>
                        <button className="bg-white hover:bg-[#f5f6f8] text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                            Learn about Coinbase Advanced API
                        </button>
                    </div>

                    {/* Right: Phone Mockup */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[400px] lg:max-w-[450px]">
                            <img src={tradingEdgeMockup} alt="Coinbase Advanced Mobile App" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                </div>
            </section>

            {/* Security Section */}
            <section className="w-full bg-[#0a0b0d] py-24 lg:py-32 px-6 border-t border-gray-800">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Animated/Static Lock Graphic */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[400px] lg:max-w-[500px] flex items-center justify-center">
                            <img src={blueLock} alt="Security graphic" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-12">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-normal text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Your security is our priority
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-400 leading-[1.6] mb-10 max-w-[600px]">
                            As the largest publicly-traded crypto exchange, Coinbase prudently manages assets for our customers with state-of-the-art encryption and security programs. Know that your assets are held 1:1 and are never lent without your consent.
                        </p>
                        <button className="bg-white hover:bg-[#f5f6f8] text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                            Learn more
                        </button>
                    </div>

                </div>
            </section>

            {/* Speed Control Section */}
            <section className="w-full bg-[#0a0b0d] py-24 lg:py-32 px-6 lg:px-16 xl:px-24 border-t border-gray-800">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-12">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[44px] font-normal text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Speed. Control. Flexibility.
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-400 leading-[1.6] mb-10 max-w-[600px]">
                            Execute fast trades with real-time order books across 552 markets, now with 237 new USDC trading pairs and free trading on 22 stable pairs. On top of that, manage risk in volatile markets with limit orders and stop-limit orders.
                        </p>
                        <button className="bg-white hover:bg-[#f5f6f8] text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                            See fees breakdown
                        </button>
                    </div>

                    {/* Right: Phone Mockup */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                        <div className="w-full max-w-[400px] lg:max-w-[450px]">
                            <img src={tradingEdgeMockup} alt="Speed Control Mobile App" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                </div>
            </section>

            {/* But wait, there's more Section */}
            <section className="w-full bg-[#0a0b0d] py-24 lg:py-32 px-6 lg:px-16 xl:px-24 border-t border-gray-800">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                    {/* Left: Huge CB1 Logo */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
                        <div className="w-full max-w-[400px] lg:max-w-[450px]">
                            <img src={cb1Logo} alt="Coinbase One Logo" className="w-full h-auto object-contain" />
                        </div>
                    </div>

                    {/* Right: Text Content */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start pr-0 lg:pr-12">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[44px] font-normal text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            But wait, there's more
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-400 leading-[1.6] mb-8 max-w-[600px]">
                            Your Coinbase account lets you trade, earn, spend, send, and borrow. When you aren't trading, earn 3.35%* rewards automatically just by holding USDC¹ or stake your ETH, ADA, SOL, ATOM or XTZ to earn up to 10% APY².
                        </p>
                        <p className="text-[14px] text-gray-500 leading-[1.6] max-w-[600px]">
                            *APYs when displayed are indicative and not guaranteed and may vary over time. Learn more about APY calculations
                        </p>
                    </div>

                </div>
            </section>

            {/* Fast-track VIP Fees Section */}
            <section className="w-full bg-[#16181d] py-24 lg:py-12 px-6">
                <div className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center">

                    <h2 className="text-[40px] md:text-[56px] lg:text-[54px] font-normal text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Fast-track to as low as 0.0%<br className="hidden md:block" /> maker fees on spot pairs
                    </h2>

                    <p className="text-[18px] lg:text-[20px] text-gray-400 leading-[1.6] mb-10 max-w-[700px]">
                        VIP trader at another crypto exchange? Submit proof of your trading volume and get upgraded to lower fees than you pay today on Coinbase Advanced. Must trade over $500K in monthly trading volume to qualify for a 60 day fee upgrade.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <button className="bg-white hover:bg-[#f5f6f8] text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors w-full sm:w-auto">
                            Apply Now
                        </button>
                        <button className="bg-[#2b2d35] hover:bg-[#3b3d45] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors w-full sm:w-auto">
                            See offer details
                        </button>
                    </div>

                </div>
            </section>

            {/* Learn Section */}
            <section className="w-full bg-[#0a0b0d] py-24 lg:py-32 px-6 lg:px-16 xl:px-24 border-t border-gray-800">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-16">

                    {/* Header Row */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-4">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[72px] font-normal text-white leading-[1.1] tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Just starting out?
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-400 leading-[1.6] max-w-[420px] pb-2">
                            Learn the tools and terminology you need to take advance your trades.
                        </p>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* Card 1 */}
                        <div className="bg-[#141519] rounded-[32px] p-6 lg:p-10 flex flex-col transition-colors cursor-pointer hover:bg-[#1a1b20]">
                            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-10 bg-black flex items-center justify-center">
                                <img src={learnTechAnalysis} alt="Technical Analysis" className="w-[100%] h-[100%] object-cover" />
                            </div>
                            <h3 className="text-white text-[24px] font-semibold mb-4 leading-tight">
                                What are fundamental analysis & technical analysis?
                            </h3>
                            <p className="text-gray-400 text-[16px] leading-[1.6]">
                                Technical analysis looks at patterns in market data to identify trends. Fundamental analysis is a more "big...
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#141519] rounded-[32px] p-6 lg:p-10 flex flex-col transition-colors cursor-pointer hover:bg-[#1a1b20]">
                            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-10 bg-black flex items-center justify-center relative">
                                <img src={learnCharts} alt="Reading trading charts" className="w-[100%] h-[100%] object-cover" />
                            </div>
                            <h3 className="text-white text-[24px] font-semibold mb-4 leading-tight">
                                How to read advanced trading charts
                            </h3>
                            <p className="text-gray-400 text-[16px] leading-[1.6]">
                                Learn how to read financial charts in part three of our guide to advanced trading — tools and terminology to...
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#141519] rounded-[32px] p-6 lg:p-10 flex flex-col transition-colors cursor-pointer hover:bg-[#1a1b20]">
                            <div className="w-full aspect-[4/3] rounded-[24px] overflow-hidden mb-10 bg-black flex items-center justify-center relative">
                                <img src={learnOrders} alt="Limit, market, stop-limit orders" className="w-[100%] h-[100%] object-cover" />
                            </div>
                            <h3 className="text-white text-[24px] font-semibold mb-4 leading-tight">
                                How to trade with limit, market, and stop-limit orders
                            </h3>
                            <p className="text-gray-400 text-[16px] leading-[1.6]">
                                What are limit orders, market orders, and stop limit orders? Find out in part two of our guide to the advanced...
                            </p>
                        </div>

                    </div>

                    {/* Learn Footer CTA */}
                    <div className="w-full flex flex-col items-center text-center mt-20 gap-10">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-normal text-white leading-[1.1] tracking-tight max-w-[800px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            See more articles on Advanced by visiting Coinbase Learn.
                        </h2>
                        <button className="bg-white hover:bg-[#f5f6f8] text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors w-full sm:w-auto">
                            Check it out
                        </button>
                    </div>

                </div>
            </section>

            {/* Newsletter Section */}
            <section className="w-full bg-[#16181d] py-24 px-6 border-b border-gray-800">
                <div className="w-full max-w-[800px] mx-auto flex flex-col items-center text-center">
                    <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-normal text-white leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Stay in the loop
                    </h2>
                    <p className="text-[18px] lg:text-[20px] text-gray-400 leading-[1.6] mb-10">
                        Sign up for the latest Advanced updates and follow @coinbasetraders on Twitter.
                    </p>

                    <form className="w-full flex justify-center gap-4 flex-col sm:flex-row max-w-[500px]">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="bg-transparent border border-gray-700 rounded-[12px] px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 w-full sm:w-[320px] hover:border-gray-500 transition-colors"
                        />
                        <button
                            type="button"
                            className="bg-[#2b2d35] hover:bg-[#3b3d45] text-white px-8 py-3 rounded-full text-[16px] font-semibold transition-colors w-full sm:w-auto"
                        >
                            Sign up now
                        </button>
                    </form>
                </div>
            </section>

            {/* Disclaimers Section */}
            <section className="w-full bg-[#0a0b0d] py-16 px-6 lg:px-16 xl:px-24">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col items-center gap-6 text-center">
                    <p className="text-[12px] text-gray-500 leading-[1.6] max-w-[1000px]">
                        Coinbase Advanced is for experienced traders and is subject to the Trading Rules. Fees on the two experiences vary. Content is for informational purposes and not investment advice. Investing in crypto comes with risk.<br />
                        Futures products and services on Coinbase Advanced are offered by Coinbase Financial Markets, a member of NFA and is subject to NFA's regulatory oversight and examinations. However, you should be aware that NFA does not have regulatory oversight authority over underlying or spot virtual currency products or transactions or virtual currency exchanges, custodians or markets.<br />
                        ¹Upon purchase of USDC, you will be automatically opted in to rewards. If you'd like to opt out or learn more about rewards, you can click here. The rewards rate is subject to change and may vary by region. Please check the latest list of eligible regions here. Customers will be able to see the latest applicable rates directly within their accounts.
                    </p>
                    <p className="text-[12px] text-gray-500 leading-[1.6] max-w-[1000px]">
                        ²The rewards rate is based on the estimated protocol rate, which is subject to change. Customers will be able to see the latest applicable rates directly within their accounts. Enrollment in staking is available only in eligible jurisdictions and for eligible networks. You can request to unstake anytime, but you will not be able to sell or send your staked assets until the unstaking process is complete. This could take from a few minutes to several weeks, depending on the asset. For more information, see the <a href="#" className="underline hover:text-gray-300">help center</a>.
                    </p>
                </div>
            </section>

        </div>
    );
}
