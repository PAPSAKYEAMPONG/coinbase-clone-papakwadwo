import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from "../assets/developerPlatformPayments/image-for-hero-in-cdp-payments-1765768626939.png";
import moneyMovementImage from "../assets/developerPlatformPayments/Money_movement.png";
import paymentAcceptanceImage from "../assets/developerPlatformPayments/Payment_acceptance.png";
import storeFundsImage from "../assets/developerPlatformPayments/Store_funds_effortlessly.png";
import fundAccountsImage from "../assets/developerPlatformPayments/Fund_accounts_in_seconds.png";
import treasuryImage from "../assets/developerPlatformPayments/Treasury_management.png";

const DeveloperPayments = () => {
    return (
        <div className='w-full h-full bg-white text-black font-sans'>

            {/* Developer Platform Navbar */}
            <div className='w-full flex items-center justify-between px-4 md:px-10 lg:px-20 py-4 border-b border-gray-100 hidden md:flex'>
                <h1 className='text-xl md:text-2xl font-normal'>Developer Platform</h1>
                <ul className='flex items-center gap-8 text-[0.9rem] font-bold text-gray-900'>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>Developer Docs</Link></li>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>Discover</Link></li>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>Pricing</Link></li>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>SLO</Link></li>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>Jobs</Link></li>
                </ul>
            </div>

            {/* Hero Section */}
            <div className='w-full h-full pt-16 pb-20 px-4 md:px-10 lg:px-20'>
                <div className='border border-gray-200 rounded-full py-1.5 px-4 w-fit mb-12 flex items-center gap-2'>
                    <div className='w-4 h-4 rounded-full border-[3px] border-gray-300 relative'>
                        <div className='absolute inset-0 m-auto w-1 h-1 bg-black rounded-full'></div>
                    </div>
                    <span className='font-semibold text-gray-600 text-sm'>Payments</span>
                </div>

                <div className='w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20 pb-16'>
                    <div className='w-full md:w-[45%]'>
                        <h1 className='text-6xl md:text-7xl lg:text-[5.5rem] font-medium tracking-tight leading-[0.9] text-gray-900'>
                            Onchain<br />payments<br />made simple
                        </h1>
                    </div>
                    <div className='w-full md:w-[50%] pt-4'>
                        <p className='text-2xl md:text-3xl lg:text-4xl text-gray-800 font-normal leading-tight mb-8'>
                            Enable global money movement and merchant payments via stablecoins.
                        </p>
                        <button className='bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg'>
                            Get in touch
                        </button>
                    </div>
                </div>

                <div className='w-full'>
                    <img src={heroImage} alt="Abstract fluid blue rings" className='w-full h-[400px] md:h-[500px] object-cover rounded-[3rem] object-top hidden sm:block' />
                </div>
            </div>

            {/* Fast and Global Payment Solutions Header */}
            <div className='w-full py-24 md:py-32 px-4 md:px-10 lg:px-20 flex justify-center text-center'>
                <h1 className='text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 max-w-4xl'>
                    Fast and global<br />payment solutions
                </h1>
            </div>

            {/* Money Movement Section */}
            <div className='w-full h-full pb-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%]'>
                        <div className='bg-[#f7f7f7] rounded-[3rem] w-full flex items-center justify-center overflow-hidden h-[400px] md:h-[500px]'>
                            <img src={moneyMovementImage} alt="Money Movement Map" className='w-full h-full object-cover mix-blend-multiply' />
                        </div>
                    </div>
                    <div className='w-full md:w-[50%] lg:pr-10'>
                        <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] mb-12 text-gray-900'>
                            Money movement<br />and payouts
                        </h1>

                        <div className='flex flex-col gap-10'>
                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-900 mb-2'>Global payouts</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Send payments to users and businesses in 100+ countries in seconds. Funds seamlessly sent onchain to recipients' wallets or to their email addresses 24/7/365.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-900 mb-2'>Easy reconciliation</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Create and manage recipients for easy reconciliation.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-900 mb-2'>Global deposits from crypto to fiat (coming soon)</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Directly payout vendors, contractors or employees across the globe, leveraging Coinbase's stablecoin and fiat rails.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accept Payments Section */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] flex justify-end'>
                        <img src={paymentAcceptanceImage} alt="Payment Acceptance Wallet UI" className='w-full h-auto object-contain rounded-[3rem] shadow-xl' />
                    </div>
                    <div className='w-full md:w-[50%] lg:pr-10'>
                        <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] mb-12 text-gray-900'>
                            Accept payments
                        </h1>

                        <div className='flex flex-col gap-10'>
                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Crypto checkout</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    API layer for merchant platforms and payment firms. Embed turnkey infrastructure for a fast checkout, optimized for conversion.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Ecommerce engine</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    API layer for merchant platforms and PSPs. Handles authorization, capture, refunds, and subscriptions.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Store Funds Effortlessly Section */}
                <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                        <div className='w-full md:w-[50%] flex justify-start'>
                            <img src={storeFundsImage} alt="Wallet Balance UI" className='w-full max-w-[400px] h-auto object-contain drop-shadow-2xl rounded-3xl' />
                        </div>
                        <div className='w-full md:w-[50%] lg:pr-10'>
                            <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] mb-8 text-gray-900'>
                                Store funds effortlessly
                            </h1>
                            <p className='text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10'>
                                Provide end-user embedded wallets with USD accounts (custodial & non-custodial) or manage backend operations and treasury with server wallets.
                            </p>
                            <button className='bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors text-lg'>
                                Learn more about Wallets
                            </button>
                        </div>
                    </div>
                </div>

                {/* Fund Accounts Section */}
                <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                    <div className='w-full flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20'>
                        <div className='w-full md:w-[50%] flex justify-end'>
                            <img src={fundAccountsImage} alt="Buy USDC UI" className='w-full max-w-[400px] h-auto object-contain drop-shadow-2xl rounded-3xl' />
                        </div>
                        <div className='w-full md:w-[50%] lg:pl-10'>
                            <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] mb-8 text-gray-900'>
                                Fund accounts in seconds
                            </h1>
                            <p className='text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10'>
                                Onramp from fiat to stablecoins instantly. Empower your users around the globe to buy crypto with a Coinbase account, bank account, debit card, or Apple Pay.
                            </p>
                            <button className='bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors text-lg'>
                                Learn more about Onramp & Offramp
                            </button>
                        </div>
                    </div>
                </div>

                {/* Treasury Management Section */}
                <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                    <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                        <div className='w-full md:w-[50%] flex justify-start'>
                            <img src={treasuryImage} alt="Treasury Balance UI" className='w-full max-w-[450px] h-auto object-contain drop-shadow-2xl rounded-3xl' />
                        </div>
                        <div className='w-full md:w-[50%] lg:pr-10'>
                            <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] mb-8 text-gray-900'>
                                Treasury management
                            </h1>
                            <p className='text-lg md:text-xl text-gray-500 font-medium leading-relaxed mb-10'>
                                A single global account to optimize internal money movements using stablecoins with ability to earn rewards.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Why Coinbase Section */}
                <div className='w-full h-full py-24 md:py-32 px-4 md:px-10 lg:px-20 border-t border-gray-200 mt-10'>
                    <h1 className='text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight mb-20 text-gray-900'>
                        Why Coinbase?
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16'>
                        <div className='flex flex-col border-t border-gray-300 pt-8'>
                            <div className='mb-6'>
                                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M8 12L11 15L16 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>One-stop shop</h3>
                            <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                                You can use CDP's off-the-shelf solutions (or build your own stack) with a single API key. No need to manage multiple vendors, integrations, and stitch together disparate solutions.
                            </p>
                        </div>

                        <div className='flex flex-col border-t border-gray-300 pt-8'>
                            <div className='mb-6'>
                                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 17L9 11L13 15L21 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M15 7H21V13" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Improved economics</h3>
                            <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                                Traditional payment rails are outdated, slow, and costly. With advances in onchain scalability, onchain payments typically cost &lt;$0.01, are near instant, and you can even earn revenue from custom stablecoin usage that you drive.
                            </p>
                        </div>

                        <div className='flex flex-col border-t border-gray-300 pt-8'>
                            <div className='mb-6'>
                                <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3V21M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 8L8 16" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Future-proof</h3>
                            <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                                Coinbase is pioneering the future of Agentic payments with products like x402 and AgentKit, and empowering AI agents to operate autonomously with Server Wallets.
                            </p>
                        </div>

                        <div className='flex flex-col border-t border-gray-300 pt-8'>
                            <div className='mb-6'>
                                <div className='w-5 h-5 bg-black rounded-full'></div>
                            </div>
                            <h3 className='text-2xl font-bold text-gray-900 mb-4'>Built by Coinbase</h3>
                            <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                                Coinbase sets the industry benchmark for safeguarding digital assets, with battle-tested key management systems, 24/7 threat monitoring, and dedicated security teams.
                            </p>
                        </div>
                    </div>
                </div>

                {/* The Future of Payments Section */}
                <div className='w-full py-32 px-4 md:px-10 lg:px-20 text-center'>
                    <h1 className='text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-24'>
                        The future of<br />payments is onchain
                    </h1>

                    <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto'>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-5xl md:text-6xl font-normal text-gray-900 mb-4'>50x</h2>
                            <p className='text-xs font-bold tracking-wider text-gray-500 uppercase'>Global stablecoin growth since 2020</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-5xl md:text-6xl font-normal text-gray-900 mb-4'>30M+</h2>
                            <p className='text-xs font-bold tracking-wider text-gray-500 uppercase'>People using stablecoins monthly</p>
                        </div>
                        <div className='flex flex-col items-center'>
                            <h2 className='text-5xl md:text-6xl font-normal text-gray-900 mb-4'>~<span className='font-sans'>$</span>30T</h2>
                            <p className='text-xs font-bold tracking-wider text-gray-500 uppercase'>Market volume in 2024</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DeveloperPayments;
