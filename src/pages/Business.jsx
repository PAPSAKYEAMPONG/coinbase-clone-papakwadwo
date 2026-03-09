import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Icons for the grid section
import { FiArrowRight } from 'react-icons/fi';

// Assets
import videoBg from '../assets/BusinessPage/thumbnail__13_.png';
import onboardingImg from '../assets/BusinessPage/signInNavigation-5.svg';
import paymentsImg from '../assets/BusinessPage/worldwide-3.svg';
import tradingImg from '../assets/BusinessPage/advancedTradingRebates-3.svg';
import usdcImg from '../assets/BusinessPage/usdcRewards-1.svg';
import taxesImg from '../assets/BusinessPage/signInNavigation-5.svg';
import secureImg from '../assets/BusinessPage/securityCoinShield-5.svg';

import payoutsImg from '../assets/BusinessPage/Payout.webp';
import invoicingImg from '../assets/BusinessPage/Invoice.webp';
import paymentLinksImg from '../assets/BusinessPage/Payment_Link.webp';
import tradingSectionImg from '../assets/BusinessPage/Trading.png';

const faqs = [
    { question: 'Where do I start?', answer: 'Simply click "Get started" to create your free Coinbase Business account. You\'ll need to provide some basic information about your company to get verified.' },
    { question: 'What countries are supported for Coinbase Business?', answer: 'Coinbase Business is available in over 100 countries worldwide. Please check our support page for the most up-to-date list of supported regions.' },
    { question: 'What customer support is available?', answer: 'We offer 24/7 dedicated support for our business clients through email, phone, and live chat depending on your account tier.' },
    { question: 'Are there minimum balances, monthly platform fees, or account management fees?', answer: 'There are no account management fees, minimum balances, or monthly platform fees to use the core Coinbase Business account.' },
    { question: 'What features are currently available?', answer: 'You can currently access spot trading, OTC services, custody, USDC rewards, API integrations, and payment processing solutions.' },
    { question: 'Which assets are supported?', answer: 'We support hundreds of cryptocurrencies including Bitcoin, Ethereum, USDC, and many more. The exact list depends on your local jurisdiction.' },
    { question: 'Can we onboard multiple entities, subsidiaries, or sub-accounts under one organization?', answer: 'Yes, our platform supports complex organizational structures including multiple entities and sub-accounts with custom user roles and permissions.' }
];

export default function Business() {
    const [openFaqIndex, setOpenFaqIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <div className="w-full min-h-screen bg-white font-sans">
            {/* Top Navigation Layout is handled globally in App.jsx, but Business has a sub-nav */}
            <div className="w-full border-b border-gray-200 bg-white sticky top-[72px] z-40 hidden md:block">
                <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
                    <h2 className="text-[24px] font-medium text-[#0a0b0d]">Business</h2>
                    <div className="flex items-center gap-8 text-[14px] font-semibold text-gray-600">
                        <a href="#payments" className="hover:text-[#0a0b0d] transition-colors">Payments</a>
                        <a href="#trading" className="hover:text-[#0a0b0d] transition-colors">Trading</a>
                        <a href="#apis" className="hover:text-[#0a0b0d] transition-colors">APIs & Integrations</a>
                        <a href="#customers" className="hover:text-[#0a0b0d] transition-colors">Customers</a>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="w-full bg-white pt-24 pb-16 lg:pt-32 lg:pb-24">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
                    <h1
                        className="text-[48px] md:text-[64px] lg:text-[88px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-6"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Enhance your business<br className="hidden md:block" /> with Coinbase
                    </h1>
                    <p className="text-[18px] md:text-[20px] font-medium text-[#0a0b0d] mb-10">
                        The all-in-one financial platform for modern companies
                    </p>
                    <button className="bg-[#0a0b0d] hover:bg-[#1f2024] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                        Get started
                    </button>
                </div>
            </section>

            {/* Video Player Section */}
            <section className="w-full bg-white pb-24 lg:pb-32 px-6">
                <div className="w-full max-w-[1280px] mx-auto">
                    {/* Dark Blue Container mock */}
                    <div className="w-full aspect-video md:aspect-[21/9] bg-[#001D4A] rounded-[32px] md:rounded-[48px] overflow-hidden relative flex flex-col items-center justify-center shadow-lg cursor-pointer group">

                        {/* Background Image / Logo */}
                        <img
                            src={videoBg}
                            alt="Coinbase Business"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Play Button */}
                        <div className="absolute right-6 bottom-6 md:right-12 md:bottom-12 w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-20 hover:bg-gray-100">
                            <svg className="w-5 h-5 md:w-6 md:h-6 ml-1 text-[#0a0b0d]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                </div>
            </section>

            {/* Built for Business Grid Section */}
            <section className="w-full bg-white py-16 lg:py-24 border-t border-gray-100">
                <div className="w-full max-w-[1280px] mx-auto px-6">

                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mb-16">
                        <h2 className="text-[40px] md:text-[56px] lg:text-[64px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight md:max-w-[50%]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Built for Business
                        </h2>
                        <div className="md:max-w-[45%] lg:max-w-[40%] pt-4">
                            <p className="text-[18px] lg:text-[20px] text-gray-500 leading-[1.6]">
                                Created for the way startups and small businesses work today — Coinbase Business is an operating account that helps you adapt your business to changing consumer preferences and global payment trends.
                            </p>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

                        {/* Card 1: Easy onboarding */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 md:p-12 flex flex-col items-start h-[360px] relative overflow-hidden group hover:bg-[#eef0f3] transition-colors cursor-pointer">
                            <img src={onboardingImg} alt="Easy onboarding" className="w-16 h-16 object-contain mb-auto transition-transform group-hover:scale-105" />
                            <div className="mt-8 z-10 w-full pr-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Easy onboarding
                                </h3>
                                <p className="text-[16px] text-gray-500 leading-[1.5]">
                                    Get up and running with Coinbase Business in no time with streamlined onboarding. Simply fill out your free application and open your account today.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Global payments */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 md:p-12 flex flex-col items-start h-[360px] relative overflow-hidden group hover:bg-[#eef0f3] transition-colors cursor-pointer">
                            <img src={paymentsImg} alt="Global payments" className="w-16 h-16 object-contain mb-auto transition-transform group-hover:scale-105" />
                            <div className="mt-8 z-10 w-full pr-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Global payments
                                </h3>
                                <p className="text-[16px] text-gray-500 leading-[1.5]">
                                    Accept instant global payments with lower transaction fees and no chargebacks. Automate payouts and cash flows using Coinbase's APIs.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Trading */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 md:p-12 flex flex-col items-start h-[360px] relative overflow-hidden group hover:bg-[#eef0f3] transition-colors cursor-pointer">
                            <img src={tradingImg} alt="Trading" className="w-16 h-16 object-contain mb-auto transition-transform group-hover:scale-105" />
                            <div className="mt-8 z-10 w-full pr-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Trading
                                </h3>
                                <p className="text-[16px] text-gray-500 leading-[1.5]">
                                    Buy, sell, and store Bitcoin and hundreds of cryptocurrencies — all from one secure, easy-to-use business account.
                                </p>
                            </div>
                        </div>

                        {/* Card 4: Earn rewards on USDC */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 md:p-12 flex flex-col items-start h-[360px] relative overflow-hidden group hover:bg-[#eef0f3] transition-colors cursor-pointer">
                            <img src={usdcImg} alt="Earn rewards on USDC" className="w-16 h-16 object-contain mb-auto transition-transform group-hover:scale-105" />
                            <div className="mt-8 z-10 w-full pr-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Earn rewards on USDC
                                </h3>
                                <p className="text-[16px] text-gray-500 leading-[1.5]">
                                    Earn more from your idle funds—get 3.35% APY on USDC holdings.
                                </p>
                            </div>
                        </div>

                        {/* Card 5: Taxes & accounting */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 md:p-12 flex flex-col items-start h-[360px] relative overflow-hidden group hover:bg-[#eef0f3] transition-colors cursor-pointer">
                            <img src={taxesImg} alt="Taxes & accounting" className="w-16 h-16 object-contain mb-auto transition-transform group-hover:scale-105" />
                            <div className="mt-8 z-10 w-full pr-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Taxes & accounting
                                </h3>
                                <p className="text-[16px] text-gray-500 leading-[1.5]">
                                    Seamless integration with common accounting software to simplify bookkeeping, ensure compliance, export tax reports, and more.
                                </p>
                            </div>
                        </div>

                        {/* Card 6: Trusted & secure */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 md:p-12 flex flex-col items-start h-[360px] relative overflow-hidden group hover:bg-[#eef0f3] transition-colors cursor-pointer">
                            <img src={secureImg} alt="Trusted & secure" className="w-16 h-16 object-contain mb-auto transition-transform group-hover:scale-105" />
                            <div className="mt-8 z-10 w-full pr-12">
                                <h3 className="text-[24px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Trusted & secure
                                </h3>
                                <p className="text-[16px] text-gray-500 leading-[1.5]">
                                    Enterprise-grade security with built-in transaction monitoring and sanctions screening. Coinbase helps detect suspicious activity and prevent prohibited transactions.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Payments made simple section */}
            <section className="w-full bg-[#0a0b0d] py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">

                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 lg:mb-24">
                        <h2 className="text-white text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[1.05] tracking-tight md:max-w-[50%]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Payments<br />made simple
                        </h2>

                        <div className="flex flex-col items-start md:max-w-[45%] lg:max-w-[40%] pt-2 lg:pt-6">
                            <p className="text-[18px] lg:text-[22px] text-[#8a919e] leading-[1.5] mb-8">
                                Make and collect global payments. Pay anyone, anywhere, instantly and for free, using stablecoins.
                            </p>
                            <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Learn more
                            </button>
                        </div>
                    </div>

                    {/* 3 Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full">

                        {/* Payouts Card */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 flex flex-col items-start">
                            <img src={payoutsImg} alt="Payouts" className="w-full h-auto object-contain rounded-2xl mb-8" />
                            <h3 className="text-white text-[24px] font-medium mb-3">
                                Payouts
                            </h3>
                            <p className="text-[#8a919e] text-[16px] leading-[1.6]">
                                Send money to individuals or businesses anywhere.
                            </p>
                        </div>

                        {/* Invoicing Card */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 flex flex-col items-start">
                            <img src={invoicingImg} alt="Invoicing" className="w-full h-auto object-contain rounded-2xl mb-8" />
                            <h3 className="text-white text-[24px] font-medium mb-3">
                                Invoicing
                            </h3>
                            <p className="text-[#8a919e] text-[16px] leading-[1.6]">
                                Create and manage invoices to get paid.
                            </p>
                        </div>

                        {/* Payment Links Card */}
                        <div className="bg-[#1a1b1f] rounded-[32px] p-8 flex flex-col items-start">
                            <img src={paymentLinksImg} alt="Payment Links" className="w-full h-auto object-contain rounded-2xl mb-8" />
                            <h3 className="text-white text-[24px] font-medium mb-3">
                                Payment Links
                            </h3>
                            <p className="text-[#8a919e] text-[16px] leading-[1.6]">
                                Create and share links to get paid quickly.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* The Future of Money Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">

                    {/* Header */}
                    <h2 className="text-[#0a0b0d] text-[48px] md:text-[64px] lg:text-[72px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        The future of money
                    </h2>
                    <p className="text-[18px] lg:text-[22px] text-gray-500 leading-[1.5] mb-20 max-w-3xl">
                        Stablecoin payments are already outpacing legacy rails in scale and flexibility.
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full">

                        {/* Stat 1 */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-[#0a0b0d] text-[56px] lg:text-[72px] font-medium leading-[1] mb-6">
                                50x
                            </h3>
                            <p className="text-[12px] md:text-[14px] text-gray-500 tracking-wider font-semibold uppercase leading-[1.6] max-w-[280px]">
                                Global stable coin growth since 2020, reaching almost $30T in 2024.
                            </p>
                        </div>

                        {/* Stat 2 */}
                        <div className="flex flex-col items-center md:border-l md:border-r border-gray-200 px-4">
                            <h3 className="text-[#0a0b0d] text-[56px] lg:text-[72px] font-medium leading-[1] mb-6">
                                80%
                            </h3>
                            <p className="text-[12px] md:text-[14px] text-gray-500 tracking-wider font-semibold uppercase leading-[1.6] max-w-[280px]">
                                The percentage of surveyed businesses already using or exploring stablecoins.
                            </p>
                        </div>

                        {/* Stat 3 */}
                        <div className="flex flex-col items-center">
                            <h3 className="text-[#0a0b0d] text-[56px] lg:text-[72px] font-medium leading-[1] mb-6">
                                30M+
                            </h3>
                            <p className="text-[12px] md:text-[14px] text-gray-500 tracking-wider font-semibold uppercase leading-[1.6] max-w-[280px]">
                                The number of people already using stablecoins monthly.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
            {/* Trading Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

                        {/* Left Side: Text */}
                        <div className="w-full lg:w-1/2 flex flex-col items-start">
                            <h2 className="text-[#0a0b0d] text-[48px] md:text-[64px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                Trading
                            </h2>
                            <p className="text-[18px] lg:text-[20px] text-gray-500 leading-[1.6] mb-10 max-w-lg">
                                Trade cryptocurrencies with confidence and security using your business account. Enjoy a seamless experience while ensuring your transactions are protected.
                            </p>
                            <button className="bg-[#0a0b0d] hover:bg-[#1f2024] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Learn more
                            </button>
                        </div>

                        {/* Right Side: Image/Widget Container */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <img
                                src={tradingSectionImg}
                                alt="Trading Widget"
                                className="w-full h-auto object-contain rounded-3xl shadow-xl hover:scale-105 transition-transform duration-500"
                            />

                        </div>

                    </div>
                </div>
            </section>
            {/* FAQs Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[#0a0b0d] text-[48px] md:text-[64px] font-medium leading-[1.05] tracking-tight mb-12" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        FAQs
                    </h2>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-[#f5f6f8] rounded-2xl overflow-hidden cursor-pointer transition-colors hover:bg-[#eef0f3]"
                                onClick={() => toggleFaq(index)}
                            >
                                <div className="flex justify-between items-center p-6 md:px-8 md:py-6">
                                    <h3 className="text-[#0a0b0d] text-[18px] md:text-[20px] font-medium pr-8">
                                        {faq.question}
                                    </h3>
                                    <span className="text-gray-500 text-2xl font-light shrink-0">
                                        {openFaqIndex === index ? '−' : '+'}
                                    </span>
                                </div>

                                <div
                                    className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <p className="text-gray-600 text-[16px] leading-[1.6]">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="w-full bg-white py-24 lg:py-40 border-t border-gray-100">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-[#0a0b0d] text-[48px] md:text-[64px] lg:text-[80px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Get started today
                    </h2>
                    <p className="text-[18px] lg:text-[20px] text-gray-500 leading-[1.5] mb-12 max-w-2xl">
                        Join the growing Coinbase Business community and take your business to the next level.
                    </p>
                    <button className="bg-[#0a0b0d] hover:bg-[#1f2024] text-white px-10 py-5 rounded-full text-[18px] font-semibold transition-colors">
                        Get started
                    </button>
                </div>
            </section>
        </div>
    );
}
