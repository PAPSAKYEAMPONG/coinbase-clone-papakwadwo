import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from "../assets/developerPlatformTrading/image-for-hero-in-cdp---trading-1765894877518.png";
import executionImage from "../assets/developerPlatformTrading/Execution___liquidity.png";
import custodyImage from "../assets/developerPlatformTrading/Subcustody___Collateral.png";
import financingImage from "../assets/developerPlatformTrading/Financing.png";
import stakingImage from "../assets/developerPlatformTrading/Staking.png";
import swapImage from "../assets/developerPlatformTrading/Onchain_swaps___defi_trading.png";

const DeveloperTrading = () => {
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
            <div className='w-full h-full pt-16 pb-12 px-4 md:px-10 lg:px-20'>
                <div className='border border-gray-200 rounded-full py-1.5 px-4 w-fit mb-12 flex items-center gap-2'>
                    {/* Coinbase Logo Icon */}
                    <div className='w-5 h-5 bg-black rounded-full text-white flex items-center justify-center font-bold text-[10px]'>C</div>
                    <span className='font-semibold text-gray-600 text-sm'>Trading</span>
                </div>

                <div className='w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20 pb-12'>
                    <div className='w-full md:w-[45%]'>
                        <h1 className='text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1] text-gray-900'>
                            Crypto trading<br />for your clients
                        </h1>
                    </div>
                    <div className='w-full md:w-[50%] pt-2'>
                        <p className='text-xl md:text-2xl lg:text-[1.75rem] text-gray-800 font-normal leading-tight mb-8 max-w-xl'>
                            Embed institutional-grade trading, custody, staking, and financing via our APIs.
                        </p>
                        <div className='flex items-center gap-4'>
                            <button className='bg-blue-600 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors text-lg'>
                                Get in touch
                            </button>
                            <button className='bg-gray-100 text-gray-900 font-bold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors text-lg'>
                                View docs
                            </button>
                        </div>
                    </div>
                </div>

                <div className='w-full'>
                    <img src={heroImage} alt="Candlestick Trading Chart" className='w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-[3rem] object-top hidden sm:block' />
                </div>
            </div>

            {/* Trading Solutions Header */}
            <div className='w-full py-24 md:py-32 px-4 md:px-10 lg:px-20 flex justify-center text-center'>
                <h1 className='text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-gray-900'>
                    Trading Solutions
                </h1>
            </div>

            {/* Execution and liquidity Section */}
            <div className='w-full h-full pb-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%]'>
                        <img src={executionImage} alt="Execution and Liquidity Chart" className='w-full h-auto object-contain rounded-[3rem] shadow-xl' />
                    </div>
                    <div className='w-full md:w-[50%] lg:pr-10'>
                        <h1 className='text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.05] mb-12 text-gray-900'>
                            Execution and liquidity
                        </h1>

                        <div className='flex flex-col gap-10'>
                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-900 mb-2'>Multi-venue liquidity access</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Access spot liquidity across top exchanges and venues through a single connection. Smart routing to compare venues, improve all-in pricing, and reduce market impact.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-900 mb-2'>Advanced algorithmic execution</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    TWAP, VWAP, iceberg orders, and more for automated, precision trading.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-900 mb-2'>Streaming quotes or RFQ</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Request firm, all-inclusive pricing from leading liquidity providers, or streaming quotes in real time for continuous price discovery.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>High-touch OTC desk</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Work directly with our institutional OTC trading team for large, discreet block trades.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custody and collateral Section */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] lg:pl-10 lg:pr-10'>
                        <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] mb-12 text-gray-900'>
                            Custody and collateral
                        </h1>

                        <div className='flex flex-col gap-10'>
                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Secure, institutional-grade custody</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Safeguard assets in segregated, offline storage wallets within a Qualified Custodian.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Fast 24/7 access</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Most transfers process within 15 minutes, and nearly all are processed within 2 hours.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Broad asset coverage</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Access 435+ digital assets from a single custody platform, reducing the need to manage multiple providers.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[50%] flex justify-end'>
                        <img src={custodyImage} alt="Custody Portfolio UI" className='w-full max-w-[550px] h-auto object-contain rounded-[3rem] shadow-xl' />
                    </div>
                </div>
            </div>

            {/* Financing Section */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] flex justify-start'>
                        <img src={financingImage} alt="Financing UI" className='w-full max-w-[500px] h-auto object-contain drop-shadow-2xl rounded-3xl' />
                    </div>
                    <div className='w-full md:w-[50%] lg:pr-10'>
                        <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] mb-8 text-gray-900'>
                            Financing
                        </h1>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Trade finance</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Bridge between traditional and digital asset markets with financing that lets you trade without full pre-funding, then settle post-trade on agreed terms.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Agency lending for yield</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Earn income on your digital assets through an agency lending program managed by Coinbase's agency lending team. No need to build your own lending desk. Eligible customers* can lend into a program that spans 85+ crypto assets, with margin calls and collateral management handled by Coinbase.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Staking Section */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] flex justify-end'>
                        <img src={stakingImage} alt="Staking Rewards UI" className='w-full max-w-[500px] h-auto object-contain drop-shadow-2xl rounded-3xl' />
                    </div>
                    <div className='w-full md:w-[50%] lg:pl-10'>
                        <h1 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight leading-[1.05] mb-8 text-gray-900'>
                            Staking
                        </h1>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Staking from custody</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Offer staking on over a dozen assets from the same custody environment, so assets do not need to be moved to less secure venues.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Rewards with institutional controls</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Allow customers to generate rewards on strategic holdings while maintaining institutional policies and oversight.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trading Tools Section */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] flex justify-start'>
                        <img src={swapImage} alt="Swap UI" className='w-full max-w-[500px] h-auto object-contain drop-shadow-2xl rounded-3xl' />
                    </div>
                    <div className='w-full md:w-[50%] lg:pr-10'>
                        <h1 className='text-4xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight leading-[1.05] mb-8 text-gray-900'>
                            Trading tools for<br />onchain builders
                        </h1>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>High performance onchain swaps</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Execute token-to-token swaps on Ethereum and Base with sub-500ms latency, aggregator-powered routing across major DEX liquidity, and with the ability to add slippage and gas optimization.
                                </p>
                            </div>

                            <div>
                                <h3 className='text-[1.35rem] font-bold text-gray-600 mb-2'>Built for Bots, Agents, and DeFi Apps</h3>
                                <p className='text-lg text-gray-500 font-medium leading-relaxed'>
                                    Power agentic systems, DeFi vaults, and trading bots using CDP wallets or your own wallet setup. The API supports both EOAs and Smart Accounts, offers optional gas sponsorship, and returns full swap metadata for compliance and backtesting.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Coinbase Section */}
            <div className='w-full h-full py-24 md:py-32 px-4 md:px-10 lg:px-20 border-t border-gray-200 mt-10'>
                <div className='w-full flex items-center justify-between mb-20'>
                    <h1 className='text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-gray-900'>
                        Why Coinbase?
                    </h1>
                    <button className='bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors text-lg hidden md:block'>
                        Get in touch
                    </button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16'>
                    <div className='flex flex-col border-t border-gray-300 pt-8'>
                        <div className='mb-6'>
                            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 20V10M18 20V4M6 20V14" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Turnkey trading stack</h3>
                        <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                            Launch institutional-grade trading through a single integration. The Trading bundle gives you multi-venue execution, custody, integrated financing and risk tooling out of the box, so teams can focus on strategy instead of complex infrastructure.
                        </p>
                    </div>

                    <div className='flex flex-col border-t border-gray-300 pt-8'>
                        <div className='mb-6'>
                            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Scale your product</h3>
                        <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                            Start with spot markets and scale into additional tradable assets such as futures and perpetuals as your business and regulatory posture evolves.
                        </p>
                    </div>

                    <div className='flex flex-col border-t border-gray-300 pt-8'>
                        <div className='mb-6'>
                            <svg className='w-6 h-6' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 21h18M3 10h18M5 10v11M19 10v11M12 10v11M4 10l8-7 8 7" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Built on institutional experience</h3>
                        <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                            The trading API and workflows are informed by years of serving hedge funds, asset managers, and other large institutions. Benefit from our deep understanding of institutional requirements.
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

            {/* The Future of Markets Section */}
            <div className='w-full py-32 px-4 md:px-10 lg:px-20 text-center'>
                <h1 className='text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight text-gray-900 mb-24'>
                    The future of<br />markets is onchain
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto'>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-5xl md:text-6xl font-normal text-gray-900 mb-4'>$215B</h2>
                        <p className='text-xs font-bold tracking-wider text-gray-500 uppercase'>In institutional trading volume in Q4'23</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-5xl md:text-6xl font-normal text-gray-900 mb-4'>$185M</h2>
                        <p className='text-xs font-bold tracking-wider text-gray-500 uppercase'>In institutional transaction revenue in Q4'23</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <h2 className='text-5xl md:text-6xl font-normal text-gray-900 mb-4'>420+</h2>
                        <p className='text-xs font-bold tracking-wider text-gray-500 uppercase'>Tradable assets</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeveloperTrading;
