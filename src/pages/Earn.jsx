import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Assets
import { FiChevronRight } from 'react-icons/fi';
import earnHeroMockup from '../assets/EarnPage/earn_site_hero_2x.webp';
import usdcEarnImg from '../assets/EarnPage/USDC_-_Earn_image.jpeg';
import defiLendingImg from '../assets/EarnPage/GTM25_DeFi_LOLP_DeFiLend_1080x1080.webp';
import easyIcon from '../assets/EarnPage/easyToUse-3.svg';
import safeIcon from '../assets/EarnPage/securityCoinShield-5.svg';
import flexibleIcon from '../assets/EarnPage/multipleAssets-3.svg';
import whatIsStakingImg from '../assets/EarnPage/Learn_Illustration_What_is_Staking.png';
import ethStakingImg from '../assets/EarnPage/V2_ETHBanner_Blog__2_.webp';
import cbEthImg from '../assets/EarnPage/cbETH.jpg';
import developersValidatorsImg from '../assets/EarnPage/Staking_developers_validators.png';
import upsellImg from '../assets/EarnPage/GettyImages1253576076.jpg';

// Coin Icons for the table
import cbEthIcon from '../assets/EarnPage/a55046bc53c5de686bf82a2d9d280b006bd8d2aa1f3bbb4eba28f0c69c7597da.png'; // cbETH icon placeholder

export default function Earn() {
    // Accordion State
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        if (openFaq === index) {
            setOpenFaq(null);
        } else {
            setOpenFaq(index);
        }
    };

    // Generic Coin Icon Component since actual PNGs are missing
    const CoinIcon = ({ char, bgClass }) => (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-[18px] shrink-0 ${bgClass}`}>
            {char}
        </div>
    );

    return (
        <div className="w-full min-h-screen bg-[#f5f6f8] font-sans text-gray-900 overflow-x-hidden">
            {/* Nav space is handled globally, so we start straight into content */}

            {/* Hero Section */}
            <section className="w-full bg-[#f5f6f8] pt-12 lg:pt-20 pb-16 lg:pb-32 overflow-hidden relative border-b border-gray-200">
                <div className="w-full max-w-[1280px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Left Content (Text) */}
                    <div className="flex flex-col items-start w-full lg:w-[45%] z-10">
                        {/* Token Tag */}
                        <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                            <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center font-bold text-[10px] text-gray-600">
                                {/* Using a tiny generic icon for the tag */}
                                <div className="w-[6px] h-[6px] rounded-full bg-gray-400"></div>
                            </div>
                            <span className="text-[14px] font-normal text-gray-700">Earn</span>
                        </div>

                        <h1
                            className="text-[56px] md:text-[80px] lg:text-[66px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-8"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                            Earn up to<br />
                            14% APY on<br />
                            your crypto<br />
                            with staking.
                        </h1>

                        <p className="text-[20px] md:text-[16px] font-medium text-gray-700 leading-[1.4] mb-12 max-w-[500px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Put your crypto to work with staking, USDC rewards, and lending.*
                        </p>

                        <button className="bg-[#0a0b0d] hover:bg-[#1f2024] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors shrink-0">
                            Get started
                        </button>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="flex justify-center lg:justify-end w-full lg:w-[50%] relative">
                        <img
                            src={earnHeroMockup}
                            alt="Coinbase Earn Mobile Mockups"
                            className="w-full max-w-[800px] lg:max-w-none lg:w-[130%] object-contain lg:translate-x-[0] rounded-[32px] overflow-hidden"
                            style={{ filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.08))' }}
                        />
                    </div>

                </div>
            </section>

            {/* Earn rewards on USDC Section */}
            <section className="w-full bg-white py-24 lg:py-32 overflow-hidden border-b border-gray-200">
                <div className="w-full max-w-[1080px] mx-auto px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center justify-center">

                    {/* Left: Illustration */}
                    <div className="w-full flex justify-center lg:justify-start">
                        <img
                            src={usdcEarnImg}
                            alt="Earn rewards on USDC Illustration"
                            className="w-full max-w-[500px] lg:max-w-[100%] object-contain lg:-ml-12"
                        />
                    </div>

                    {/* Right: Text Content */}
                    <div className="flex flex-col items-start w-full">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[38px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Earn rewards on USDC
                        </h2>

                        <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.5] mb-10 max-w-[480px]">
                            Earn 3.35% rewards by simply holding USDC in your Coinbase account.
                        </p>

                        <button className="bg-[#0a0b0d] hover:bg-[#1f2024] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                            Get started
                        </button>
                    </div>

                </div>
            </section>

            {/* Earn more with Lending Section */}
            <section className="w-full bg-white py-24 lg:py-32 overflow-hidden relative">
                <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left: Text Content */}
                    <div className="flex flex-col items-start w-full z-10 lg:pr-12">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Earn more with Lending
                        </h2>

                        <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.6] mb-10 max-w-[480px]">
                            Lend your USDC. Earn up to 10.3%¹. Withdraw anytime. Powered by Morpho.
                        </p>

                        <button className="bg-[#0a0b0d] hover:bg-[#1f2024] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                            Get started
                        </button>
                    </div>

                    {/* Right: Illustration */}
                    <div className="w-full flex justify-center lg:justify-end">
                        <img
                            src={defiLendingImg}
                            alt="Earn more with Lending Illustration"
                            className="w-full max-w-[600px] lg:max-w-none rounded-[32px] lg:w-[85%] object-cover shadow-2xl"
                        />
                    </div>

                </div>
            </section>

            {/* Flexible Lending Section */}
            <section className="w-full bg-white py-24 px-6 border-b border-gray-200">
                <div className="w-full max-w-[1280px] mx-auto flex flex-col gap-16">

                    {/* Top Text Row */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight max-w-[600px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Flexible lending made simple
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.5] max-w-[420px] lg:mt-4">
                            In just a few taps, deposit your USDC, start earning, and withdraw anytime.
                        </p>
                    </div>

                    {/* Features Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">

                        {/* Feature 1 */}
                        <div className="flex flex-col items-start pt-8 border-t border-gray-200">
                            <span className="text-[28px] font-bold text-[#0a0b0d] mb-6 block leading-none -mt-[56px] relative bg-white pb-2 pr-2">%</span>
                            <h3 className="text-[20px] font-bold text-[#0a0b0d] mb-3 mt-4">High yield.</h3>
                            <p className="text-[16px] text-gray-600 leading-[1.6]">
                                Find competitive APYs when you lend in a few taps.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="flex flex-col items-start pt-8 border-t border-gray-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mb-6 stroke-[#0a0b0d] -mt-[52px] relative bg-white pb-2 pr-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.3" />
                            </svg>
                            <h3 className="text-[20px] font-bold text-[#0a0b0d] mb-3 mt-4">No lockups.</h3>
                            <p className="text-[16px] text-gray-600 leading-[1.6]">
                                Get your money back whenever you need it. Your earnings accrue automatically.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="flex flex-col items-start pt-8 border-t border-gray-200">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mb-6 stroke-[#0a0b0d] -mt-[52px] relative bg-white pb-2 pr-2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                <path d="M12 2v20" />
                            </svg>
                            <h3 className="text-[20px] font-bold text-[#0a0b0d] mb-3 mt-4">Confidence built in.</h3>
                            <p className="text-[16px] text-gray-600 leading-[1.6]">
                                Securely earn onchain yields through Coinbase, powered by Morpho on Base and Steakhouse Financial.
                            </p>
                        </div>

                    </div>

                    {/* Disclosure Note */}
                    <div className="w-full text-center mt-12">
                        <p className="text-[12px] text-gray-500 max-w-[800px] mx-auto leading-[1.6]">
                            ¹ Rates and available APY subject to change. While your funds have no lockup period, access may be delayed during rare periods of high withdrawal requests. For more information see terms.
                        </p>
                    </div>

                </div>
            </section>

            {/* Get paid to stake Section */}
            <section className="w-full bg-[#f5f6f8] py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">

                    {/* Header Row */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight max-w-[600px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Get paid to stake
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.5] max-w-[480px] lg:mt-4">
                            You get rewarded for helping blockchain networks verify routine transactions for a small tradeoff in liquidity.
                        </p>
                    </div>

                    {/* 3 Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {/* Card 1 */}
                        <div className="bg-white rounded-[32px] p-8 lg:p-12 flex flex-col justify-start items-start min-h-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <img src={easyIcon} alt="It's easy" className="w-12 h-12 mb-12" />
                            <div>
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>It's easy</h3>
                                <p className="text-[16px] text-gray-600 leading-[1.6]">
                                    Sign up in seconds to start earning. No crypto expertise needed.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white rounded-[32px] p-8 lg:p-12 flex flex-col justify-start items-start min-h-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <img src={safeIcon} alt="It's safe" className="w-12 h-12 mb-12" />
                            <div>
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>It's safe</h3>
                                <p className="text-[16px] text-gray-600 leading-[1.6]">
                                    Your assets never leave your account. Our customers have never lost crypto while staking with Coinbase.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-white rounded-[32px] p-8 lg:p-12 flex flex-col justify-start items-start min-h-[320px] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <img src={flexibleIcon} alt="It's flexible" className="w-12 h-12 mb-12" />
                            <div>
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>It's flexible</h3>
                                <p className="text-[16px] text-gray-600 leading-[1.6]">
                                    Start with as little as $1, and get immediate liquidity with instant unstaking.*
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Disclaimer Text */}
                    <p className="text-[14px] text-gray-500 max-w-[900px] leading-[1.6]">
                        *If enabled, you will begin earning rewards once you purchase the minimum balance of the asset. You can request to unstake anytime. But you must wait until the unstaking process is completed by the network before you can transfer or sell your asset. You can also instantly unstake for a 1% fee. For more information, see the <a href="#" className="underline">help center</a>.
                    </p>

                </div>
            </section>

            {/* A trusted way to earn in crypto Section */}
            <section className="w-full bg-white py-24 lg:py-32 border-b border-gray-200">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col gap-24">

                    {/* Top Row: Title and Text */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight max-w-[500px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            A trusted way to earn in crypto
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.6] max-w-[420px]">
                            Staking is a proven way to earn in crypto and Coinbase makes staking simple and secure for customers.
                        </p>
                    </div>

                    {/* Bottom Row: Stats Container */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">

                        {/* Stat 1 */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-[48px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Up to 14%
                            </h3>
                            <p className="text-[11px] lg:text-[12px] font-bold text-gray-500 tracking-[1px] uppercase max-w-[200px] leading-[1.5]">
                                VARIABLE REWARD RATES SET BY EACH BLOCKCHAIN
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-[48px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                $450M+
                            </h3>
                            <p className="text-[11px] lg:text-[12px] font-bold text-gray-500 tracking-[1px] uppercase max-w-[220px] leading-[1.5]">
                                REWARDS EARNED BY COINBASE CUSTOMERS IN 2024
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center text-center">
                            <h3 className="text-[48px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                $0
                            </h3>
                            <p className="text-[11px] lg:text-[12px] font-bold text-gray-500 tracking-[1px] uppercase max-w-[200px] leading-[1.5]">
                                IN LOSSES FROM STAKING ON COINBASE
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* More about how staking works Section */}
            <section className="w-full bg-[#f5f6f8] py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">

                    {/* Header Row */}
                    <div className="w-full flex flex-col lg:flex-row justify-between items-start gap-8 mb-16">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight max-w-[600px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            More about how staking works
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.5] max-w-[420px] lg:mt-4">
                            Coinbase offers staking as a way of earning rewards. Read more about how it works.
                        </p>
                    </div>

                    {/* 4 Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24 border-b border-gray-200">
                        {/* Card 1 */}
                        <a href="#" className="bg-white rounded-[32px] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                            <img src={whatIsStakingImg} alt="What is Staking" className="w-full h-[280px] object-cover" />
                            <div className="p-8 lg:p-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>What is Staking?</h3>
                                <p className="text-[16px] text-gray-600 leading-[1.6]">
                                    Staking lets you earn rewards by helping verify transactions and secure the blockchain. It is faster and more efficient that other methods.
                                </p>
                            </div>
                        </a>

                        {/* Card 2 */}
                        <a href="#" className="bg-white rounded-[32px] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                            <img src={ethStakingImg} alt="ETH Staking" className="w-full h-[280px] object-cover" />
                            <div className="p-8 lg:p-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>How does ETH staking work?</h3>
                                <p className="text-[16px] text-gray-600 leading-[1.6]">
                                    Ethereum (ETH) is the largest proof-of-stake network and one of the most popular assets to stake. Learn more.
                                </p>
                            </div>
                        </a>

                        {/* Card 3 */}
                        <a href="#" className="bg-white rounded-[32px] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300">
                            <img src={cbEthImg} alt="cbETH" className="w-full h-[280px] object-cover" />
                            <div className="p-8 lg:p-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Wrap your staked ETH into cbETH</h3>
                                <p className="text-[16px] text-gray-600 leading-[1.6]">
                                    If you ever need faster liquidity, you can wrap your staked ETH into cbETH. Coinbase Wrapped Staked ETH ("cbETH") is a utility token that represents staked ETH.
                                </p>
                            </div>
                        </a>

                        {/* Card 4 */}
                        <a href="#" className="bg-white rounded-[32px] overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 relative">
                            {/* Simple Blue Background graphic representation for CB1 */}
                            <div className="w-full h-[280px] bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center">
                                {/* Approximate CB1 Logo styling */}
                                <div className="w-[120px] h-[120px] rounded-full border-[16px] border-white flex items-center justify-center bg-transparent">
                                    <span className="text-white text-[80px] font-bold leading-none -mt-2">1</span>
                                </div>
                            </div>
                            <div className="p-8 lg:p-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Get boosted staking rewards with Coinbase One</h3>
                                <p className="text-[16px] text-gray-600 leading-[1.6]">
                                    A Coinbase One membership gets you boosted staking rewards, zero trading fees, priority support, and more. Start your free trial.
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* Check out all the ways you can earn by staking (Table Section) */}
            <section className="w-full bg-white py-24 lg:py-32 border-b border-gray-200">
                <div className="w-full max-w-[1280px] mx-auto px-6">

                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#0a0b0d] leading-[1.1] tracking-tight mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Check out all the ways you can earn by staking
                    </h2>

                    <div className="flex items-center gap-4 mb-8">
                        <h3 className="text-[24px] font-medium text-[#0a0b0d]">Staking assets</h3>
                        <span className="text-[16px] text-gray-500">43 assets</span>
                    </div>

                    {/* Table Header */}
                    <div className="hidden md:flex items-center justify-between pb-4 border-b border-gray-200 text-[14px] font-medium text-gray-500 mb-4 px-4">
                        <div className="w-[30%]">Asset</div>
                        <div className="w-[20%] text-left">Est. Reward Rate</div>
                        <div className="w-[25%] text-left">Staking Market Cap</div>
                        <div className="w-[25%] text-right pr-8">Action</div>
                    </div>

                    {/* Table Rows */}
                    <div className="flex flex-col gap-2">
                        {/* Ethereum */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-4 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                                <img src={cbEthIcon} alt="Ethereum" className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <h4 className="text-[16px] font-medium text-[#0a0b0d]">Ethereum</h4>
                                    <span className="text-[14px] text-gray-500 uppercase">ETH</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-2">
                                <span>Est. Reward Rate</span>
                                <span className="text-[#098551] font-medium">1.91% APY</span>
                            </div>
                            <div className="hidden md:block w-[20%] text-left text-[16px] text-[#098551] font-medium">
                                1.91% APY
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-4">
                                <span>Staking Market Cap</span>
                                <span className="text-[#0a0b0d]">GHS 785.9B</span>
                            </div>
                            <div className="hidden md:block w-[25%] text-left text-[16px] text-[#0a0b0d]">
                                GHS 785.9B
                            </div>
                            <div className="w-full md:w-[25%] flex justify-start md:justify-end">
                                <button className="w-full md:w-auto bg-[#0052FF] hover:bg-[#0045d8] text-white px-6 py-2 rounded-full text-[14px] font-semibold transition-colors">
                                    Start Earning
                                </button>
                            </div>
                        </div>

                        {/* Cardano */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-4 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                                <img src={cbEthIcon} alt="Cardano" className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <h4 className="text-[16px] font-medium text-[#0a0b0d]">Cardano</h4>
                                    <span className="text-[14px] text-gray-500 uppercase">ADA</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-2">
                                <span>Est. Reward Rate</span>
                                <span className="text-[#098551] font-medium">1.51% APY</span>
                            </div>
                            <div className="hidden md:block w-[20%] text-left text-[16px] text-[#098551] font-medium">
                                1.51% APY
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-4">
                                <span>Staking Market Cap</span>
                                <span className="text-[#0a0b0d]">GHS 57.0B</span>
                            </div>
                            <div className="hidden md:block w-[25%] text-left text-[16px] text-[#0a0b0d]">
                                GHS 57.0B
                            </div>
                            <div className="w-full md:w-[25%] flex justify-start md:justify-end">
                                <button className="w-full md:w-auto bg-[#0052FF] hover:bg-[#0045d8] text-white px-6 py-2 rounded-full text-[14px] font-semibold transition-colors">
                                    Start Earning
                                </button>
                            </div>
                        </div>

                        {/* Avalanche */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-4 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                                <img src={cbEthIcon} alt="Avalanche" className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <h4 className="text-[16px] font-medium text-[#0a0b0d]">Avalanche</h4>
                                    <span className="text-[14px] text-gray-500 uppercase">AVAX</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-2">
                                <span>Est. Reward Rate</span>
                                <span className="text-[#098551] font-medium">4.47% APY</span>
                            </div>
                            <div className="hidden md:block w-[20%] text-left text-[16px] text-[#098551] font-medium">
                                4.47% APY
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-4">
                                <span>Staking Market Cap</span>
                                <span className="text-[#0a0b0d]">GHS 21.0B</span>
                            </div>
                            <div className="hidden md:block w-[25%] text-left text-[16px] text-[#0a0b0d]">
                                GHS 21.0B
                            </div>
                            <div className="w-full md:w-[25%] flex justify-start md:justify-end">
                                <button className="w-full md:w-auto bg-[#0052FF] hover:bg-[#0045d8] text-white px-6 py-2 rounded-full text-[14px] font-semibold transition-colors">
                                    Start Earning
                                </button>
                            </div>
                        </div>

                        {/* Cosmos */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-4 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                                <img src={cbEthIcon} alt="Cosmos" className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <h4 className="text-[16px] font-medium text-[#0a0b0d]">Cosmos</h4>
                                    <span className="text-[14px] text-gray-500 uppercase">ATOM</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-2">
                                <span>Est. Reward Rate</span>
                                <span className="text-[#098551] font-medium">14.22% APY</span>
                            </div>
                            <div className="hidden md:block w-[20%] text-left text-[16px] text-[#098551] font-medium">
                                14.22% APY
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-4">
                                <span>Staking Market Cap</span>
                                <span className="text-[#0a0b0d]">GHS 5.5B</span>
                            </div>
                            <div className="hidden md:block w-[25%] text-left text-[16px] text-[#0a0b0d]">
                                GHS 5.5B
                            </div>
                            <div className="w-full md:w-[25%] flex justify-start md:justify-end">
                                <button className="w-full md:w-auto bg-[#0052FF] hover:bg-[#0045d8] text-white px-6 py-2 rounded-full text-[14px] font-semibold transition-colors">
                                    Start Earning
                                </button>
                            </div>
                        </div>

                        {/* BNB */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-4 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                                <img src={cbEthIcon} alt="BNB" className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <h4 className="text-[16px] font-medium text-[#0a0b0d]">BNB</h4>
                                    <span className="text-[14px] text-gray-500 uppercase">BNB</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-2">
                                <span>Est. Reward Rate</span>
                                <span className="text-[#098551] font-medium">1.76% APY</span>
                            </div>
                            <div className="hidden md:block w-[20%] text-left text-[16px] text-[#098551] font-medium">
                                1.76% APY
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-4">
                                <span>Staking Market Cap</span>
                                <span className="text-[#0a0b0d]">GHS 170.9B</span>
                            </div>
                            <div className="hidden md:block w-[25%] text-left text-[16px] text-[#0a0b0d]">
                                GHS 170.9B
                            </div>
                            <div className="w-full md:w-[25%] flex justify-start md:justify-end pr-[110px]">
                                {/* Empty action area as per screenshot design (for some rows) or just spacing */}
                            </div>
                        </div>

                        {/* Bitcoin */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-4 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                                <img src={cbEthIcon} alt="Bitcoin" className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <h4 className="text-[16px] font-medium text-[#0a0b0d]">Bitcoin</h4>
                                    <span className="text-[14px] text-gray-500 uppercase">BTC</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-2">
                                <span>Est. Reward Rate</span>
                                <span className="text-[#098551] font-medium">0.00% APY</span>
                            </div>
                            <div className="hidden md:block w-[20%] text-left text-[16px] text-[#098551] font-medium">
                                0.00% APY
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-4">
                                <span>Staking Market Cap</span>
                                <span className="text-[#0a0b0d]">GHS 42.3B</span>
                            </div>
                            <div className="hidden md:block w-[25%] text-left text-[16px] text-[#0a0b0d]">
                                GHS 42.3B
                            </div>
                            <div className="w-full md:w-[25%] flex justify-start md:justify-end pr-[110px]">
                            </div>
                        </div>

                        {/* Bittensor */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-gray-100 hover:bg-gray-50 rounded-xl px-4 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                                <img src={cbEthIcon} alt="Bittensor" className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <h4 className="text-[16px] font-medium text-[#0a0b0d]">Bittensor</h4>
                                    <span className="text-[14px] text-gray-500 uppercase">TAO</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-2">
                                <span>Est. Reward Rate</span>
                                <span className="text-[#098551] font-medium">14.72% APY</span>
                            </div>
                            <div className="hidden md:block w-[20%] text-left text-[16px] text-[#098551] font-medium">
                                14.72% APY
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-4">
                                <span>Staking Market Cap</span>
                                <span className="text-[#0a0b0d]">GHS 16.1B</span>
                            </div>
                            <div className="hidden md:block w-[25%] text-left text-[16px] text-[#0a0b0d]">
                                GHS 16.1B
                            </div>
                            <div className="w-full md:w-[25%] flex justify-start md:justify-end pr-[110px]">
                            </div>
                        </div>

                        {/* Coinbase Wrapped Staked ETH */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between py-4 hover:bg-gray-50 rounded-xl px-4 transition-colors">
                            <div className="flex items-center gap-4 w-full md:w-[30%] mb-4 md:mb-0">
                                <img src={cbEthIcon} alt="cbETH" className="w-10 h-10 rounded-full object-cover shrink-0" />
                                <div>
                                    <h4 className="text-[16px] font-medium text-[#0a0b0d]">Coinbase Wrapped Staked ETH</h4>
                                    <span className="text-[14px] text-gray-500 uppercase">cbETH</span>
                                </div>
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-2">
                                <span>Est. Reward Rate</span>
                                <span className="text-[#098551] font-medium">3.02% APY</span>
                            </div>
                            <div className="hidden md:block w-[20%] text-left text-[16px] text-[#098551] font-medium">
                                3.02% APY
                            </div>
                            <div className="w-full flex justify-between md:hidden text-[14px] text-gray-500 mb-4">
                                <span>Staking Market Cap</span>
                                <span className="text-[#0a0b0d]">GHS 0.0</span>
                            </div>
                            <div className="hidden md:block w-[25%] text-left text-[16px] text-[#0a0b0d]">
                                GHS 0.0
                            </div>
                            <div className="w-full md:w-[25%] flex justify-start md:justify-end pr-[110px]">
                            </div>
                        </div>

                    </div>

                    {/* Pagination Controls Placeholder */}
                    <div className="flex justify-center items-center gap-4 mt-8 mb-12">
                        <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 cursor-not-allowed">
                            <FiChevronRight className="rotate-180" />
                        </button>
                        <button className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-colors">
                            <FiChevronRight />
                        </button>
                    </div>

                    {/* Disclaimer Text */}
                    <p className="text-[12px] text-gray-500 leading-[1.6]">
                        The rewards rate is based on the estimated protocol rate, which is subject to change. Customers will be able to see the latest applicable rates directly within their accounts. Enrollment in staking is available only in eligible jurisdictions and for eligible networks. Any rewards earned in unstaked form will be automatically restaked. You can request to unstake anytime, but you will not be able to sell or send your staked assets until the unstaking process is complete. This could take from a few minutes to several weeks, depending on the asset.
                    </p>

                </div>
            </section>

            <section className="w-full bg-white py-24 lg:py-32 pb-48 lg:pb-64 overflow-hidden relative">
                <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                    {/* Left: Text Content */}
                    <div className="flex flex-col items-start w-full z-10 lg:pr-12">
                        <h2 className="text-[40px] md:text-[48px] lg:text-[49px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Earn staking rewards across Coinbase Products
                        </h2>

                        <p className="text-[18px] lg:text-[20px] text-gray-600 leading-[1.6] mb-10 max-w-[480px]">
                            We offer simple and trusted staking solutions for individuals, institutions, and developers.
                        </p>

                        <button className="bg-[#0a0b0d] hover:bg-[#1f2024] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                            Explore staking options
                        </button>
                    </div>

                    {/* Right: Illustration */}
                    <div className="flex justify-center lg:justify-end w-full relative">
                        <img
                            src={developersValidatorsImg}
                            alt="Earn staking rewards across Coinbase Products"
                            className="w-full max-w-[400px] lg:max-w-[480px] h-auto object-contain mt-12 lg:mt-0 lg:mr-8"
                        />
                    </div>

                </div>
            </section>

            {/* Frequently Asked Questions */}
            <section className="w-full bg-white py-24 lg:py-12 border-b border-gray-200">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Frequently asked questions
                    </h2>

                    <div className="flex flex-col gap-4">
                        {[
                            "What is staking?",
                            "What's the tradeoff?",
                            "How does staking work on Coinbase?",
                            "Which Proof of Stake asset(s) earn staking rewards?",
                            "Who is eligible to stake on Coinbase?",
                            "What are some risks associated with staking?",
                            "What's the difference between asset prices and APY?",
                            "Do staked assets ever leave my account?",
                            "How do I transfer my crypto to Coinbase to earn rewards?",
                            "Is there a fee associated with these services?",
                            "Will I be taxed on my staking rewards?"
                        ].map((question, index) => (
                            <div
                                key={index}
                                className="bg-[#f5f6f8] rounded-[16px] overflow-hidden cursor-pointer"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="flex items-center justify-between p-6">
                                    <h3 className="text-[18px] font-bold text-[#0a0b0d]">{question}</h3>
                                    <span className="text-[#0a0b0d] text-[24px] font-light min-w-[24px] text-center">
                                        {openFaq === index ? '−' : '+'}
                                    </span>
                                </div>
                                {/* Expandable content placeholder */}
                                {openFaq === index && (
                                    <div className="px-6 pb-6 text-gray-600 leading-[1.6]">
                                        Detailed answer regarding {question.toLowerCase()} is displayed here in the expanded accordion view.
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upsell Section */}
            <section className="w-full bg-[#f5f6f8] py-16 lg:py-24 pb-32 lg:pb-48 border-t border-gray-100">
                <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left side text */}
                    <div className="flex flex-col items-start text-left lg:pr-12">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Don't have a<br />Coinbase account?
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-500 leading-[1.6] mb-10 max-w-[480px]">
                            We're committed to creating more economic freedom through accessible, safe, and secure financial tools for everyone.
                        </p>
                        <button className="bg-[#0a0b0d] hover:bg-[#0a0b0d] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                            Create an account
                        </button>
                    </div>

                    {/* Right side Image */}
                    <div className="flex justify-center lg:justify-end w-full pt-8 lg:pt-0">
                        <img
                            src={upsellImg}
                            alt="Create a Coinbase account"
                            className="w-full max-w-[600px] h-auto rounded-[32px] lg:rounded-[48px] object-cover"
                        />
                    </div>

                </div>
            </section>

        </div>
    );
}
