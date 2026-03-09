import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from "../assets/developerPlatformWallets/Wallets.png";
import embeddedWalletsImage from "../assets/developerPlatformWallets/Embedded_Wallets.png";
import serverWalletsImage from "../assets/developerPlatformWallets/Server_Wallets.png";
import complianceImage from "../assets/developerPlatformWallets/image-for-featurehighlight-in-cdp---wallets-1765749130025.png";
import scaleImage from "../assets/developerPlatformWallets/image-for-featurehighlight-in-cdp---wallets-1765749138988.png";
import demoImage from "../assets/developerPlatformWallets/embedded_wallets_demo_app.png";
import caseStudyImage from "../assets/developerPlatformWallets/image-for-promo-carousel-item-in-cdp---wallets-1765749161338.png";

const DeveloperWallets = () => {
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
                <div className='border border-gray-200 rounded-lg py-1.5 px-3 w-fit mb-12 flex items-center gap-2'>
                    {/* Coinbase Logo Icon */}
                    <div className='w-5 h-5 bg-black rounded-full text-white flex items-center justify-center font-bold text-[10px]'>C</div>
                    <span className='font-semibold text-gray-700 text-sm'>Wallets</span>
                </div>

                <div className='w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20 pb-12'>
                    <div className='w-full md:w-[45%]'>
                        <h1 className='text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight leading-[1] text-gray-900'>
                            Complete wallet infrastructure
                        </h1>
                    </div>
                    <div className='w-full md:w-[50%] pt-2'>
                        <p className='text-xl md:text-2xl lg:text-[1.75rem] text-gray-800 font-normal leading-tight mb-8 max-w-lg'>
                            Offer embedded wallets for seamless user experiences.
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
                    <img src={heroImage} alt="Abstract Wallet Infrastructure" className='w-full h-[300px] md:h-[500px] lg:h-[600px] object-cover rounded-[3rem] shadow-2xl' />
                </div>
            </div>

            {/* Wallet Solutions Section */}
            <div className='w-full py-24 px-4 md:px-10 lg:px-20'>
                <h2 className='text-5xl md:text-[4.5rem] font-medium tracking-tight text-gray-900 mb-20 text-center'>
                    Wallet solutions
                </h2>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto'>
                    {/* Embedded Wallets Card */}
                    <div className='bg-gray-50 rounded-[3rem] p-12 flex flex-col items-center text-center'>
                        <img src={embeddedWalletsImage} alt="Embedded Wallets" className='w-full h-auto object-contain rounded-3xl mb-12 shadow-md' />
                        <h3 className='text-3xl font-bold text-gray-900 mb-4'>Embedded Wallets</h3>
                        <p className='text-lg font-medium text-gray-500 mb-10 leading-relaxed max-w-md'>
                            Bring users onchain with familiar authentication methods like email and social logins. Embedded Wallets enable users to interact with the blockchain without the complexity.
                        </p>
                        <button className='bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors text-lg'>
                            Learn more
                        </button>
                    </div>

                    {/* Server Wallets Card */}
                    <div className='bg-gray-50 rounded-[3rem] p-12 flex flex-col items-center text-center'>
                        <img src={serverWalletsImage} alt="Server Wallets" className='w-full h-auto object-contain rounded-3xl mb-12 shadow-md' />
                        <h3 className='text-3xl font-bold text-gray-900 mb-4'>Server Wallets</h3>
                        <p className='text-lg font-medium text-gray-500 mb-10 leading-relaxed max-w-md'>
                            Create API-managed wallets for agents and automated systems. Policy controls and USDC rewards included, no private keys required.
                        </p>
                        <button className='bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors text-lg'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>

            {/* Enterprise-grade compliance Section */}
            <div className='w-full py-24 px-4 md:px-10 lg:px-20 bg-white'>
                <h2 className='text-5xl md:text-[4.5rem] font-medium tracking-tight text-gray-900 mb-24 text-center'>
                    Coinbase-grade scale
                </h2>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 max-w-7xl mx-auto'>
                    <div className='w-full md:w-[50%]'>
                        <img src={complianceImage} alt="Security Compliance Chart" className='w-full h-auto object-contain rounded-[3rem] shadow-2xl' />
                    </div>
                    <div className='w-full md:w-[50%] flex flex-col gap-12'>
                        <h3 className='text-4xl md:text-5xl font-medium tracking-tight text-gray-900 leading-tight'>
                            Enterprise-grade compliance
                        </h3>
                        <div className='flex flex-col gap-8'>
                            <div>
                                <h4 className='text-xl font-bold text-gray-600 mb-2'>Trusted Execution Environment (TEE)</h4>
                                <p className='text-lg font-medium text-gray-500'>
                                    Private keys generated and stored securely, never exposed.
                                </p>
                            </div>
                            <div className='border-t border-gray-100 pt-8'>
                                <h4 className='text-xl font-bold text-gray-600 mb-2'>CDP Security Suite (CS2)</h4>
                                <p className='text-lg font-medium text-gray-500'>
                                    Smart policy controls, enclave isolation, and API key protection.
                                </p>
                            </div>
                            <div className='border-t border-gray-100 pt-8'>
                                <h4 className='text-xl font-bold text-gray-600 mb-2'>Built-in compliance</h4>
                                <p className='text-lg font-medium text-gray-500'>
                                    KYT screening and compliance controls to meet enterprise standards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Built to scale Section */}
            <div className='w-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 max-w-7xl mx-auto'>
                    <div className='w-full md:w-[50%]'>
                        <h2 className='text-5xl md:text-6xl font-medium tracking-tight text-gray-900 mb-8'>
                            Built to scale
                        </h2>
                        <div className='flex flex-col gap-10'>
                            <div>
                                <h4 className='text-xl font-bold text-gray-600 mb-2'>Multi-chain and multi-asset</h4>
                                <p className='text-lg font-medium text-gray-500'>
                                    Support for EVM chains and Solana.
                                </p>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold text-gray-600 mb-2'>Built for reliability</h4>
                                <p className='text-lg font-medium text-gray-500'>
                                    Infrastructure designed to handle millions of wallets.
                                </p>
                            </div>
                            <div>
                                <h4 className='text-xl font-bold text-gray-600 mb-2'>USDC rewards</h4>
                                <p className='text-lg font-medium text-gray-500'>
                                    Earn rewards on USDC held in your wallets.
                                </p>
                            </div>
                            <button className='bg-black text-white font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors text-lg w-fit mt-4'>
                                Contact sales
                            </button>
                        </div>
                    </div>
                    <div className='w-full md:w-[50%]'>
                        <img src={scaleImage} alt="Built to scale graph" className='w-full h-auto object-contain rounded-[3rem] shadow-2xl' />
                    </div>
                </div>
            </div>

            {/* Experience Embedded Wallets in action Section */}
            <div className='w-full py-32 px-4 md:px-10 lg:px-20 text-center'>
                <h2 className='text-5xl md:text-[5rem] font-medium tracking-tight text-gray-900 mb-10'>
                    Experience Embedded<br />Wallets in action
                </h2>
                <div className='flex items-center justify-center gap-4 mb-20'>
                    <button className='bg-black text-white font-bold py-4 px-10 rounded-full hover:bg-gray-800 transition-colors text-lg'>
                        Try demo
                    </button>
                    <button className='bg-gray-100 text-gray-900 font-bold py-4 px-10 rounded-full hover:bg-gray-200 transition-colors text-lg'>
                        Get in touch
                    </button>
                </div>
                <div className='w-full max-w-7xl mx-auto'>
                    <img src={demoImage} alt="Embedded Wallets Demo" className='w-full h-auto rounded-[3rem] shadow-2xl' />
                </div>
            </div>

            {/* Why Coinbase Section (Updated Content) */}
            <div className='w-full py-24 md:py-32 px-4 md:px-10 lg:px-20 border-t border-gray-100 mt-20'>
                <h1 className='text-5xl md:text-[5rem] font-medium tracking-tight text-gray-900 mb-24'>
                    Why Coinbase?
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16'>
                    <div className='flex flex-col border-t border-gray-200 pt-10'>
                        <div className='mb-6'>
                            <svg className='w-6 h-6 text-gray-900' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" /><path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>One-stop shop</h3>
                        <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                            You can use CDP's off-the-shelf solutions (or build your own stack) with a single API key. No need to manage multiple vendors, integrations, and stitch together disparate solutions.
                        </p>
                    </div>

                    <div className='flex flex-col border-t border-gray-200 pt-10'>
                        <div className='mb-6'>
                            <svg className='w-6 h-6 text-gray-900' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Flexible and composable</h3>
                        <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                            Use our wallets standalone or combine them with our broader suite spanning payments, trading, stablecoins, data, and more.
                        </p>
                    </div>

                    <div className='flex flex-col border-t border-gray-200 pt-10'>
                        <div className='mb-6'>
                            <svg className='w-6 h-6 text-gray-900' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 3L19 12L5 21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-900 mb-4'>Used by the best</h3>
                        <p className='text-lg font-medium text-gray-500 leading-relaxed'>
                            Coinbase is the trusted crypto infrastructure partner to 250+ of the world's leading banks, fintechs, crypto companies, and payment firms.
                        </p>
                    </div>

                    <div className='flex flex-col border-t border-gray-200 pt-10'>
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

            {/* Case Study Promo Section */}
            <div className='w-full py-32 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20 max-w-7xl mx-auto bg-gray-50 rounded-[3rem] p-12 md:p-20'>
                    <div className='w-full md:w-[50%]'>
                        <img src={caseStudyImage} alt="Case Study Highlight" className='w-full h-auto object-contain rounded-[2rem] shadow-xl' />
                    </div>
                    <div className='w-full md:w-[50%] lg:pl-10'>
                        <h2 className='text-4xl md:text-5xl lg:text-[4rem] font-medium tracking-tight text-gray-900 leading-[1.1] mb-8'>
                            FereAI builds scalable trading agents with CDP Server Wallets
                        </h2>
                        <p className='text-xl text-gray-600 mb-10 leading-relaxed'>
                            Learn how FereAI is building infrastructure for AI agents that trade autonomously onchain.
                        </p>
                        <button className='bg-black text-white font-bold py-4 px-10 rounded-full hover:bg-gray-800 transition-colors text-lg'>
                            Learn more
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeveloperWallets;
