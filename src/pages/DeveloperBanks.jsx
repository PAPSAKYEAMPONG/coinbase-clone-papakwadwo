import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from "../assets/developerPlatformBanks/image-for-hero-in-cdp-banks-1765830330824.png";
import custodialImg from "../assets/developerPlatformBanks/Custodial_solutions.png";
import brokerageImg from "../assets/developerPlatformBanks/Turnkey_Crypto_Brokerage.png";
import financeImg from "../assets/developerPlatformBanks/Trade_finance.png";

const DeveloperBanks = () => {
    const solutions = [
        {
            title: "Custodial solutions",
            description: "Custody leveraging Coinbase’s vault-grade security, 24/7 access, and flexible wallet solutions.",
            image: custodialImg
        },
        {
            title: "Crypto brokerage",
            description: "Offer turnkey buy / sell / hold across spot, U.S. regulated futures, and perpetual futures for retail and institutional traders.",
            image: brokerageImg
        },
        {
            title: "Trade finance",
            description: "Working capital to execute trades, and funding. USD, USDC, BTC, ETH, and more.",
            image: financeImg
        }
    ];

    const useCases = [
        "Retail",
        "Wealth",
        "Capital Markets",
        "Investment Management",
        "Investment Banking",
        "Infrastructure and Compliance"
    ];

    return (
        <div className='w-full h-full bg-white text-black font-sans overflow-x-hidden'>

            {/* Developer Platform Navbar */}
            <div className='w-full flex items-center justify-between px-4 md:px-10 lg:px-20 py-4 border-b border-gray-100 hidden md:flex'>
                <h1 className='text-xl md:text-2xl font-normal text-gray-900'>Developer Platform</h1>
                <ul className='flex items-center gap-8 text-[0.9rem] font-bold text-gray-900'>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>Developer Docs</Link></li>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>Discover</Link></li>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>Pricing</Link></li>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>SLO</Link></li>
                    <li><Link to="#" className='hover:text-blue-600 transition-colors'>Jobs</Link></li>
                </ul>
            </div>

            {/* Hero Section */}
            <div className='w-full pt-16 pb-20 px-4 md:px-10 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12'>
                <div className='w-full md:w-[50%]'>
                    <div className='inline-flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-lg px-3 py-1.5 mb-8'>
                        <div className='w-4 h-4 bg-black rounded-full flex items-center justify-center'>
                            <div className='w-1.5 h-1.5 bg-white rounded-full'></div>
                        </div>
                        <span className='text-sm font-bold text-gray-600'>Banks</span>
                    </div>
                    <h1 className='text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tight leading-[1] text-gray-900 mb-8'>
                        Crypto infrastructure<br />for the world's<br />top banks
                    </h1>
                    <p className='text-xl md:text-2xl text-gray-600 font-normal leading-normal mb-10 max-w-xl'>
                        Integrate once, build across your business - all the tools banks need to build secure and regulated offerings for retail, private banking, and institutional clients.
                    </p>
                    <div className='flex flex-wrap gap-4'>
                        <button className='bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-colors text-lg'>
                            Get in touch
                        </button>
                        <button className='bg-gray-100 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-colors text-lg'>
                            View docs
                        </button>
                    </div>
                </div>
                <div className='w-full md:w-[50%] flex justify-end'>
                    <img src={heroImage} alt="Crypto infrastructure render" className='w-full max-w-2xl h-auto object-contain rounded-[3rem] shadow-2xl' />
                </div>
            </div>



            {/* Solutions for Banks Section */}
            <div className='w-full py-16 px-4 md:px-10 lg:px-20 bg-[#f9f9f9]'>
                <div className='max-w-[1440px] mx-auto'>
                    <h2 className='text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-10 px-4'>
                        Solutions for Banks
                    </h2>

                    <div className='w-full flex gap-4 overflow-x-auto pb-8 px-4 no-scrollbar'>
                        {solutions.map((item, idx) => (
                            <div key={idx} className='min-w-[240px] md:min-w-[320px] flex-shrink-0 bg-white rounded-[2rem] p-3 flex flex-col border border-gray-100 shadow-sm'>
                                <div className='w-full aspect-video rounded-[1.5rem] overflow-hidden mb-4 bg-gray-50 flex items-center justify-center'>
                                    <img src={item.image} alt={item.title} className='max-w-[70%] max-h-[70%] object-contain' />
                                </div>
                                <div className='px-4 pb-4'>
                                    <h3 className='text-lg md:text-xl font-bold text-gray-900 mb-2'>{item.title}</h3>
                                    <p className='text-sm text-gray-500 leading-snug font-medium'>
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Use Cases Section */}
            <div className='w-full py-20 px-4 md:px-10 lg:px-20 bg-white'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-5xl md:text-[4.5rem] font-medium text-gray-900 mb-12 tracking-tight'>Use cases</h2>
                    <div className='flex flex-col gap-2'>
                        {useCases.map((item, idx) => (
                            <div key={idx} className='bg-[#f4f7f9] rounded-full py-6 px-10 md:px-12 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-all'>
                                <h3 className='text-xl md:text-2xl font-medium text-gray-900 leading-none'>
                                    {item}
                                </h3>
                                <span className='text-2xl text-gray-400 font-light'>+</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Coinbase Section */}
            <div className='w-full py-32 px-4 md:px-10 lg:px-20 bg-white border-t border-gray-100'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-5xl md:text-[4.5rem] font-medium text-gray-900 mb-20 tracking-tight'>Why Coinbase?</h2>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16'>
                        {/* Item 1 */}
                        <div className='flex flex-col border-t border-gray-100 pt-10'>
                            <div className='mb-6 text-gray-900 scale-90 origin-left'>
                                <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7L12 12L22 7L12 2Z" /><path d="M2 17L12 22L22 17" /><path d="M2 12L12 17L22 12" /></svg>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-4 leading-tight'>The product depth to build crypto products for all of your customers</h3>
                            <p className='text-base font-medium text-gray-500 leading-relaxed'>
                                Through our deep suite of product and feature building blocks, you can start building with Coinbase and continue to expand across your business. From an initial retail brokerage build, to expansion into wealth management, to infrastructure and compliance.
                            </p>
                        </div>

                        {/* Item 2 */}
                        <div className='flex flex-col border-t border-gray-100 pt-10'>
                            <div className='mb-6 text-gray-900 scale-90 origin-left'>
                                <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18" /><path d="M3 7v1h18V7H3z" /><path d="M5 21V8" /><path d="M9 21V8" /><path d="M15 21V8" /><path d="M19 21V8" /><path d="M1 7h22" /><path d="M12 2l11 5H1L12 2z" /></svg>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-4 leading-tight'>Institutional experience</h3>
                            <p className='text-base font-medium text-gray-500 leading-relaxed'>
                                We’ve forged partnerships with some of the leading financial institutions and asset managers in the world, and understand institutional-scale partnership. We have the team, product depth, and resources to help leading firms succeed as they build in crypto.
                            </p>
                        </div>

                        {/* Item 3 */}
                        <div className='flex flex-col border-t border-gray-100 pt-10'>
                            <div className='mb-6 text-gray-900 scale-90 origin-left'>
                                <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-4 leading-tight'>Global compliance</h3>
                            <p className='text-base font-medium text-gray-500 leading-relaxed'>
                                As a public company, our financials are reported quarterly, and independently audited annually. While headquartered in the US, we implement a rigorous global compliance framework and continue to seek approval from international regulatory bodies to support product expansion.
                            </p>
                        </div>

                        {/* Item 4 */}
                        <div className='flex flex-col border-t border-gray-100 pt-10'>
                            <div className='mb-6 text-gray-900 scale-90 origin-left'>
                                <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
                            </div>
                            <h3 className='text-xl font-bold text-gray-900 mb-4 leading-tight'>Accelerated time to market</h3>
                            <p className='text-base font-medium text-gray-500 leading-relaxed'>
                                Developing crypto infrastructure is complex and expensive. By leveraging Coinbase's proven systems, our partners can build best-in-class solutions with minimal lift. We keep partners ahead of the curve as the industry develops and understand crypto to the core.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className='w-full py-20 px-4 md:px-10 lg:px-20 text-center border-t border-gray-100 bg-white'>
                <p className='text-sm text-gray-400 max-w-4xl mx-auto leading-relaxed'>
                    No representation or warranty is made, express or implied, with respect to the future performance of any digital asset, financial instrument or other market or economic measure. Recipients should consult their advisors before making any investment decision. Coinbase, Inc. is not registered or licensed in any capacity with the U.S. Securities and Exchange Commission or the U.S. Commodity Futures Trading Commission. Not all products and features are available in all jurisdictions.
                </p>
            </div>        </div>
    );
};

export default DeveloperBanks;
