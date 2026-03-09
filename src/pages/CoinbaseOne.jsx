import React from 'react';
import { Link } from 'react-router-dom';
import cbOneHero from '../assets/CoinBaseOnePage/CB_one_hero.png';
import zeroFeesImage from '../assets/CoinBaseOnePage/zero_fees_us.png';
import advancedImage from '../assets/CoinBaseOnePage/visual-spot__1_.png';
import onchainBenefitsImage from '../assets/CoinBaseOnePage/Onchain_benefits_copy.png';
import IconSupport from '../assets/CoinBaseOnePage/coinbaseOneChat-3.svg';
import IconTax from '../assets/CoinBaseOnePage/monitoringPerformance-5.svg';
import IconPrizes from '../assets/CoinBaseOnePage/congratulations-4.svg';
import coinTrackerLogo from '../assets/CoinBaseOnePage/CoinTracker.png';
import summLogo from '../assets/CoinBaseOnePage/SUMM_Brandmark_RGB_Off_Black.png';

// Onchain Partner Logos
import aerodromeLogo from '../assets/CoinBaseOnePage/Aerodrome.png';
import definitiveLogo from '../assets/CoinBaseOnePage/Definitive.png';
import dimoLogo from '../assets/CoinBaseOnePage/dimo.png';
import eulerLogo from '../assets/CoinBaseOnePage/Euler.png';
import openseaLogo from '../assets/CoinBaseOnePage/OpenSea.png';
import opencoverLogo from '../assets/CoinBaseOnePage/OpenCover.png';
import pancakeswapLogo from '../assets/CoinBaseOnePage/PancakeSwap.png';
import sleapLogo from '../assets/CoinBaseOnePage/Sleap.png';
import sofamonLogo from '../assets/CoinBaseOnePage/sofamon.png';
import toshiLogo from '../assets/CoinBaseOnePage/TOSHI.png';
import veniceLogo from '../assets/CoinBaseOnePage/Venice.png';
import zoraLogo from '../assets/CoinBaseOnePage/Zora.png';

export default function CoinbaseOne() {
    return (
        <div className="w-full bg-white flex flex-col justify-start">

            {/* Hero Section */}
            <section className="w-full max-w-[1280px] mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[85vh]">

                {/* Left Content */}
                <div className="flex flex-col items-start text-left lg:pr-12 order-2 lg:order-1 mt-8 lg:mt-0">

                    {/* Badge */}
                    <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                        <div className="w-5 h-5 bg-[#0a0b0d] rounded-full flex items-center justify-center">
                            <span className="text-white text-[11px] font-bold leading-none translate-y-[1px]">C</span>
                        </div>
                        <span className="text-[14px] font-medium text-gray-600">Coinbase One</span>
                    </div>

                    {/* Heading */}
                    <h1
                        className="text-[52px] md:text-[64px] lg:text-[76px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-6"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Get more out of crypto with one membership
                    </h1>

                    {/* Description */}
                    <p className="text-[18px] md:text-[20px] text-[#0a0b0d] mb-10 leading-[1.4] max-w-[500px]">
                        Zero trading fees, boosted staking rewards, and more—starting at $4.99/month.
                    </p>

                    {/* CTA Button */}
                    <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white font-medium rounded-full px-8 py-4 text-[16px] transition whitespace-nowrap">
                        Start your free trial
                    </button>
                </div>

                {/* Right Content (Image) */}
                <div className="flex justify-center lg:justify-end w-full order-1 lg:order-2">
                    <img
                        src={cbOneHero}
                        alt="Coinbase One Membership Interface"
                        className="w-full max-w-[480px] lg:max-w-[550px] object-contain rounded-[32px]"
                    />
                </div>

            </section>

            {/* Pricing Section */}
            <section className="w-full max-w-[1280px] mx-auto px-6 py-16 lg:py-24">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[40px] md:text-[52px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Discover the<br />best of Coinbase
                    </h2>
                    <p className="text-[#5b616e] text-[18px]">
                        Find the right plan for you
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid md:grid-cols-3 gap-6">

                    {/* Basic Tier */}
                    <div className="border border-gray-100 rounded-[32px] p-10 lg:p-12 flex flex-col bg-white hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-[28px] font-medium text-gray-900 mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Basic</h3>

                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Monthly price</span>
                                <span className="text-gray-500 text-[15px]">$4.99 • $49.99/year</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Zero trading fees</span>
                                <span className="text-gray-500 text-[15px]">Up to $500/month</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Account protection</span>
                                <span className="text-gray-500 text-[15px]">$1,000 coverage</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Staking rewards boost</span>
                                <span className="text-gray-500 text-[15px]">+5% boost</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Member sweepstakes</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">24/7 priority support</span>
                                <span className="text-gray-500 text-[15px]">—</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">25% RAT spot rebate</span>
                                <span className="text-gray-500 text-[15px]">—</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Free wires</span>
                                <span className="text-gray-500 text-[15px]">—</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Token sale boost</span>
                                <span className="text-gray-500 text-[15px]">Request up to 1.5x more</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Exclusive tax deals</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Onchain partner deals</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Preferred Tier */}
                    <div className="border border-transparent rounded-[32px] p-10 lg:p-12 flex flex-col bg-[#f5f6f8]">
                        <h3 className="text-[28px] font-medium text-gray-900 mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Preferred</h3>

                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Monthly price</span>
                                <span className="text-gray-500 text-[15px]">$29.99 • $299.99/year</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Zero trading fees</span>
                                <span className="text-gray-500 text-[15px]">Up to $10,000/month</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Account protection</span>
                                <span className="text-gray-500 text-[15px]">$10,000 coverage</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Staking rewards boost</span>
                                <span className="text-gray-500 text-[15px]">+10% boost</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Member sweepstakes</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">24/7 priority support</span>
                                <span className="text-gray-500 text-[15px]">24/7 priority support</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">25% RAT spot rebate</span>
                                <span className="text-gray-500 text-[15px]">Up to 100 USDC/month</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Free wires</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Token sale boost</span>
                                <span className="text-gray-500 text-[15px]">Request up to 2.5x more</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Exclusive tax deals</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Onchain partner deals</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>
                        </div>
                    </div>

                    {/* Premium Tier */}
                    <div className="border border-gray-100 rounded-[32px] p-10 lg:p-12 flex flex-col bg-white hover:shadow-xl transition-shadow duration-300">
                        <h3 className="text-[28px] font-medium text-gray-900 mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>Premium</h3>

                        <div className="flex flex-col gap-10">
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Monthly price</span>
                                <span className="text-gray-500 text-[15px]">$299.99 • $2,999.99/year</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Zero trading fees</span>
                                <span className="text-gray-500 text-[15px]">Unlimited</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Account protection</span>
                                <span className="text-gray-500 text-[15px]">$250,000 coverage</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Staking rewards boost</span>
                                <span className="text-gray-500 text-[15px]">+15% boost</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Member sweepstakes</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">24/7 priority support</span>
                                <span className="text-gray-500 text-[15px]">Concierge</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">25% RAT spot rebate</span>
                                <span className="text-gray-500 text-[15px]">Unlimited</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Free wires</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Token sale boost</span>
                                <span className="text-gray-500 text-[15px]">Request up to 5x more</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Exclusive tax deals</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>

                            <div className="flex flex-col gap-1">
                                <span className="font-semibold text-gray-900 text-[15px]">Onchain partner deals</span>
                                <span className="text-gray-500 text-[15px]">Available</span>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Zero Trading Fees Section */}
            <section className="w-full max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left side: Image in gray container */}
                    <div className="order-2 lg:order-1 flex justify-center w-full">
                        <div className="bg-[#f5f6f8] rounded-[48px] w-full max-w-[550px] flex items-center justify-center p-12 lg:p-16">
                            <img
                                src={zeroFeesImage}
                                alt="Zero trading fees interface"
                                className="w-full max-w-[320px] object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="order-1 lg:order-2 flex flex-col items-start text-left">
                        <h2
                            className="text-[40px] md:text-[52px] lg:text-[56px] font-medium text-[#0a0b0d] leading-[1.1] tracking-tight mb-6"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                            Unlock zero trading fees
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-[1.6] max-w-[500px]">
                            Pay zero trading fees on hundreds of assets (a spread applies) and thousands of DEX assets (external DEX fees apply). Trading volume limits may apply.
                        </p>
                    </div>

                </div>
            </section>

            {/* Advanced Spot Fees Section */}
            <section className="w-full max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left side: Content */}
                    <div className="order-2 lg:order-1 flex flex-col items-start text-left">
                        <h2
                            className="text-[40px] md:text-[52px] lg:text-[56px] font-medium text-[#0a0b0d] leading-[1.1] tracking-tight mb-6"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                            Get 25% back on<br />spot fees when you<br />trade on Advanced
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-[1.6] max-w-[500px]">
                            Immediately receive 25% back on Coinbase Advanced spot fees in USDC after your order is executed (receive up to $100 in rebates every month).
                        </p>
                    </div>

                    {/* Right side: Image */}
                    <div className="order-1 lg:order-2 flex justify-center w-full">
                        <img
                            src={advancedImage}
                            alt="Coinbase Advanced Trading Interface"
                            className="w-full max-w-[550px] object-contain rounded-[48px]"
                        />
                    </div>

                </div>
            </section>

            {/* Onchain Benefits Section */}
            <section className="w-full max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

                    {/* Left side: Image in gray container */}
                    <div className="order-2 lg:order-1 flex justify-center w-full">
                        <div className="bg-[#f5f6f8] rounded-[48px] w-full max-w-[550px] flex items-center justify-center p-12 lg:p-16">
                            <img
                                src={onchainBenefitsImage}
                                alt="Onchain Benefits interface"
                                className="w-full max-w-[320px] object-contain drop-shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="order-1 lg:order-2 flex flex-col items-start text-left text-[#0a0b0d]">
                        <h2
                            className="text-[40px] md:text-[52px] lg:text-[56px] font-medium leading-[1.1] tracking-tight mb-6"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                            Access exclusive<br />onchain benefits
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-[1.6] max-w-[500px]">
                            Get up to $10 in gas on Base every month and claim exclusive onchain partner deals ($100+ value).
                        </p>
                    </div>

                </div>
            </section>

            {/* Access Much More Section */}
            <section className="w-full max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
                <div className="flex flex-col mb-12">
                    <h2
                        className="text-[40px] md:text-[52px] lg:text-[56px] font-medium text-[#0a0b0d] leading-[1.1] tracking-tight"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        ...and access much more
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {/* Priority Support Card */}
                    <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-h-[320px]">
                        <div>
                            <img src={IconSupport} alt="Priority Support" className="w-12 h-12 mb-8" />
                        </div>
                        <div>
                            <h3 className="text-[20px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Priority support
                            </h3>
                            <p className="text-[16px] text-[#5b616e] leading-[1.5]">
                                Get answers when you need them — call your dedicated support team 24 hours a day, 365 days a year.
                            </p>
                        </div>
                    </div>

                    {/* Pre-filled Tax Forms Card */}
                    <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-h-[320px]">
                        <div>
                            <img src={IconTax} alt="Pre-filled tax forms" className="w-12 h-12 mb-8" />
                        </div>
                        <div>
                            <h3 className="text-[20px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Pre-filled tax forms
                            </h3>
                            <p className="text-[16px] text-[#5b616e] leading-[1.5]">
                                Navigate crypto tax season with ease.
                            </p>
                        </div>
                    </div>

                    {/* Exclusive Prizes Card */}
                    <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-h-[320px]">
                        <div>
                            <img src={IconPrizes} alt="Exclusive prizes" className="w-12 h-12 mb-8" />
                        </div>
                        <div>
                            <h3 className="text-[20px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Exclusive prizes
                            </h3>
                            <p className="text-[16px] text-[#5b616e] leading-[1.5]">
                                Enter members-only sweepstakes every month for a chance to win exclusive prizes like 1 BTC.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Limited-time Partner Deals Section */}
            <section className="w-full max-w-[1280px] mx-auto px-6 py-16 lg:py-24">
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8 text-[#0a0b0d]">
                    <h2
                        className="text-[40px] md:text-[52px] lg:text-[56px] font-medium leading-[1.1] tracking-tight max-w-[500px]"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Limited-time partner deals
                    </h2>
                    <p className="text-[18px] text-[#5b616e] leading-[1.6] max-w-[500px]">
                        We're proud to partner with some of the best names in and outside of crypto, with more on the way soon:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {/* CoinTracker Card */}
                    <div className="bg-[#f5f6f8] rounded-[48px] p-10 lg:p-14 flex flex-col justify-between items-start min-h-[460px]">
                        <div>
                            <img src={coinTrackerLogo} alt="CoinTracker logo" className="w-[60px] h-auto mb-10 mix-blend-multiply" />
                        </div>
                        <div>
                            <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                CoinTracker
                            </h3>
                            <p className="text-[18px] text-[#5b616e] leading-[1.6]">
                                Get a free Base plan, or $59 off any other plan. Generate accurate reports and file in minutes with the only solution that auto-imports with TurboTax, H&R Block, or your own CPA.
                            </p>
                        </div>
                    </div>

                    {/* Summ Card */}
                    <div className="bg-[#f5f6f8] rounded-[48px] p-10 lg:p-14 flex flex-col justify-between items-start min-h-[460px]">
                        <div>
                            <img src={summLogo} alt="Summ logo" className="w-[60px] h-auto mb-10 mix-blend-multiply" />
                        </div>
                        <div>
                            <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Summ
                            </h3>
                            <p className="text-[18px] text-[#5b616e] leading-[1.6]">
                                Accurate, CPA-endorsed tax reports, without the guesswork and connects with TurboTax and H&R Block. With Summ (formerly Crypto Tax Calculator), Coinbase One members get $1 Rookie plan (save $48), and up to 50% off all other plans (save up to $499).
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Onchain Partners Dark Section */}
            <section className="w-full bg-[#0a0b0d] py-16 lg:py-24 overflow-hidden">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <h2
                        className="text-[40px] md:text-[52px] lg:text-[56px] font-medium text-white leading-[1.1] tracking-tight mb-12"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Onchain partners
                    </h2>

                    {/* Scrollable Container / Wrap Grid */}
                    <div className="flex overflow-x-auto pb-8 -mx-6 px-6 lg:mx-0 lg:px-0 lg:grid lg:grid-cols-4 gap-6 hide-scrollbar">

                        {/* Aerodrome */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={aerodromeLogo} alt="Aerodrome logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Aerodrome
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Lock AERO to vote onchain and get rewards. Every four weeks, users with new locks of 2500+ veAERO share in a Flight School bonus, with member locks weighted 30% higher.
                                </p>
                            </div>
                        </div>

                        {/* Definitive */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={definitiveLogo} alt="Definitive logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Definitive
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Get zero trading fees on your first $50K in trading volume across Base, Solana, and more. Route your trades across 100+ onchain liquidity pools and leverage TWAP, Limit and Stop Orders.
                                </p>
                            </div>
                        </div>

                        {/* DIMO */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={dimoLogo} alt="DIMO logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    DIMO
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Mint your car onchain to get 50 $DIMO, plus enjoy 20% off a DIMO car adapter to maximize your rewards. For a limited time, get a free pair of DIMO x Base socks with every order.
                                </p>
                            </div>
                        </div>

                        {/* Euler */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={eulerLogo} alt="Euler logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Euler
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    5% extra yield on USDC
                                </p>
                            </div>
                        </div>

                        {/* OpenCover */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={opencoverLogo} alt="OpenCover logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    OpenCover
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Protect your onchain portfolio against protocol hacks and failures with OpenCover, the #1 provider of crypto cover on L2. Get 10% off the Base DeFi Pass and your first cover for free up to $1,000.
                                </p>
                            </div>
                        </div>

                        {/* Opensea */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={openseaLogo} alt="Opensea logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Opensea
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Claim bonus rewards and XP
                                </p>
                            </div>
                        </div>

                        {/* PancakeSwap */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={pancakeswapLogo} alt="PancakeSwap logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    PancakeSwap
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Get a portion of a $8,453 CAKE airdrop every two weeks when you trade over $100 in volume on Base, BNB Chain or Arbitrum.
                                </p>
                            </div>
                        </div>

                        {/* Sleap */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={sleapLogo} alt="Sleap logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Sleap
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    $50 hotel voucher + discounts
                                </p>
                            </div>
                        </div>


                        {/* Sofamon */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={sofamonLogo} alt="Sofamon logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Sofamon
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Customize your avatar and dress it up with a free spin to win rare Coinbase wearables!
                                </p>
                            </div>
                        </div>

                        {/* TOSHI */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={toshiLogo} alt="TOSHI logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    TOSHI
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Coinbase One x TOSHI NFT airdrop
                                </p>
                            </div>
                        </div>

                        {/* Venice */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={veniceLogo} alt="Venice logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Venice
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    20% off Venice Pro
                                </p>
                            </div>
                        </div>

                        {/* Zora */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 lg:p-10 flex flex-col justify-between items-start min-w-[300px] lg:min-w-0 min-h-[460px] shrink-0">
                            <div>
                                <img src={zoraLogo} alt="Zora logo" className="w-12 h-12 mb-8 rounded-[12px] object-cover" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-white mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Zora
                                </h3>
                                <p className="text-[16px] text-[#8a919e] leading-[1.5]">
                                    Get 1111 sparks free to buy and trade images, videos, memes, and more.
                                </p>
                            </div>
                        </div>

                    </div>


                </div>
            </section>

            {/* Frequently Asked Questions Section */}
            <section className="w-full bg-white py-16 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    {/* Header Top */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-start mb-12 gap-6">
                        <h2
                            className="text-[40px] md:text-[52px] lg:text-[56px] font-medium text-[#0a0b0d] leading-[1.1] tracking-tight max-w-[400px]"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                            Frequently<br className="hidden lg:block" /> asked questions
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-[1.6] max-w-[450px] lg:text-left lg:pt-4">
                            We've answered your frequently asked questions below! Don't see yours? <a href="#" className="underline hover:text-[#0a0b0d] transition-colors">Contact support</a>.
                        </p>
                    </div>

                    {/* FAQ List */}
                    <div className="flex flex-col gap-3">
                        {[
                            "How do I pay for Coinbase One?",
                            "Is this available to all users?",
                            "Can I share my Coinbase One membership?",
                            "Can I be reimbursed for previous trading fees?",
                            "Is Coinbase One the same as Coinbase Pro?",
                            "Does the zero trading fees benefit include decentralized exchange (DEX) trading?"
                        ].map((question, index) => (
                            <div
                                key={index}
                                className="w-full bg-[#f5f6f8] hover:bg-[#eceef0] transition-colors cursor-pointer rounded-[16px] px-8 py-6 flex justify-between items-center group"
                            >
                                <span className="text-[18px] font-medium text-[#0a0b0d]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    {question}
                                </span>
                                <span className="text-[#0a0b0d] text-[24px] font-light group-hover:scale-110 transition-transform">
                                    +
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fine Print / Disclaimer Section */}
            <section className="w-full bg-white py-12 pb-24">
                <div className="w-full max-w-[960px] mx-auto px-6 flex flex-col gap-6 text-[12px] md:text-[14px] text-[#5b616e] leading-[1.6]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                    <p>
                        A Coinbase One subscription renews automatically and requires recurring payments. Membership benefits may be changed or removed without notice. Some membership benefits are not available in all regions and are not available to all users. All imagery is for illustrative purposes only; actual rates may vary.
                    </p>
                    <p>
                        Zero trading fees: Crypto trading only. Coinbase Advanced, DEX fees, and derivatives excluded. Coinbase includes a spread in the price when you buy, sell, or convert cryptocurrencies. For Basic and Preferred tiers, a trading volume limit (found in member home) applies. Trades over this limit incur trading fees.
                    </p>
                    <p>
                        Boosted staking rewards: Staking is not available in all regions. The APY you receive depends on the rewards received from the network, which can change over time. Coinbase takes a commission on all rewards received, and the APY for our customers reflects this commission. Customers will be able to see the latest rate directly within their accounts.
                    </p>
                    <p>
                        Coinbase One Card is offered through Coinbase, Inc. and Cardless, Inc. Cards issued by First Electronic Bank. American Express is a registered trademark of American Express and is used by the issuer pursuant to a license.
                    </p>
                    <p>
                        The Coinbase One Card is subject to creditworthiness and other eligibility criteria. An active, paid Coinbase One membership is required to open and maintain a Coinbase One Card account and earn bitcoin back. For Coinbase One Basic, an annual plan is required. If your membership becomes inactive or is canceled, your Coinbase One Card account may be closed. Bitcoin back rewards rates are based on the cardholder's assets held on Coinbase. We'll share more when the Card becomes available.
                    </p>
                    <p>
                        Not all transactions are eligible to earn bitcoin back, including transactions that are a cash equivalent and gambling or betting transactions. Coinbase may, at its sole discretion, determine a transaction is not eligible to earn bitcoin back and may deny, restrict, or claw back bitcoin rewards accordingly. All bitcoin rewards are offered by Coinbase. Bitcoin rewards can decline in value. Rewards Program Terms &amp; Conditions are subject to change.
                    </p>
                    <p>
                        ¹ Valid for new users who make a cryptocurrency purchase on Coinbase. Limited while supplies last or Coinbase revokes this incentive at its sole discretion. Coinbase reserves the right to change the terms, eligibility criteria, and payouts for all incentives at any time, for any reason. Void where prohibited or if Coinbase determines that the customer is not eligible for the offer. <a href="#" className="underline hover:text-[#0a0b0d] transition-colors">Terms apply</a>.
                    </p>
                </div>
            </section>

        </div >
    );
}
