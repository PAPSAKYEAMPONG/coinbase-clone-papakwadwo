import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import heroImage from "../assets/verifiedPools/vp_landing_1.jpg";
import swapImage from "../assets/verifiedPools/Group_316125391__1_.png";
import baseLogo from "../assets/verifiedPools/base_logo.webp";
import gauntletLogo from "../assets/verifiedPools/gauntlet-logo.png";
import oxLogo from "../assets/verifiedPools/Black.png";
import uniswapLogo from "../assets/verifiedPools/uniswap-logo.png";
import primeWalletImage from "../assets/verifiedPools/Prime_Onchain_Wallet.png";
import coinbaseWalletImage from "../assets/verifiedPools/Coinbase_Wallet.png";
import { FaCheckCircle, FaPlus, FaMinus } from 'react-icons/fa';

const VerifiedPools = () => {
    const [openAccordion, setOpenAccordion] = useState(null);

    const toggleAccordion = (index) => {
        if (openAccordion === index) {
            setOpenAccordion(null);
        } else {
            setOpenAccordion(index);
        }
    };

    return (
        <div className='w-full h-full bg-white text-black'>

            {/* Hero Section */}
            <div className='w-full h-full py-16 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[45%] lg:pr-10'>
                        <h1 className='text-6xl md:text-7xl lg:text-[5rem] font-medium tracking-tight leading-[1.05]'>Verified Pools</h1>
                        <p className='text-xl md:text-2xl text-gray-800 pt-8 leading-relaxed font-normal'>
                            Seamless access to transparent, verified liquidity pools—trade onchain with confidence.
                            <br />
                            <Link to="#" className='underline underline-offset-4 decoration-1 hover:text-blue-600 transition-colors'>Need your Coinbase Verification?</Link>
                        </p>
                        <div className='pt-10'>
                            <button className='bg-black text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors text-lg'>
                                Get started
                            </button>
                        </div>
                    </div>
                    <div className='w-full md:w-[55%]'>
                        <img src={heroImage} alt="Water ripple" className='rounded-[3rem] w-full object-cover shadow-sm' />
                    </div>
                </div>
            </div>

            {/* Verifications Section */}
            <div className='w-full py-32 px-4 md:px-10 lg:px-20 bg-[#0a0b0d] text-white flex flex-col items-center justify-center text-center'>
                <h1 className='text-5xl md:text-6xl lg:text-[4.5rem] font-medium tracking-tight'>Coinbase Verifications</h1>
                <p className='text-xl md:text-2xl text-gray-400 pt-6 pb-12 font-light'>Verify your wallet to unlock access to Verified Pools</p>
                <button className='bg-white text-black font-semibold py-4 px-8 rounded-full hover:bg-gray-200 transition-colors text-lg'>
                    Get verified
                </button>
            </div>

            {/* The new standard in onchain liquidity */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] flex justify-center'>
                        <img src={swapImage} alt="Swap interface" className='rounded-[3rem] w-[90%] md:w-full object-cover shadow-sm' />
                    </div>
                    <div className='w-full md:w-[50%] lg:pl-10'>
                        <h1 className='text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] pb-12'>The new standard<br />in onchain liquidity</h1>

                        <div className='flex flex-col gap-10'>
                            <div className='flex gap-6 items-start'>
                                <FaCheckCircle className='text-black text-3xl mt-1 shrink-0' />
                                <p className='text-lg md:text-xl text-gray-500 font-normal leading-relaxed'>
                                    <span className='font-semibold text-gray-900'>Institutional-Grade Security:</span> Verified Pools utilizes Coinbase Verifications to ensure users are accessing liquidity pools that meet institutional KYC/AML standards.
                                </p>
                            </div>
                            <div className='flex gap-6 items-start'>
                                <FaCheckCircle className='text-black text-2xl mt-1 shrink-0' />
                                <p className='text-lg md:text-xl text-gray-500 font-normal leading-relaxed'>
                                    <span className='font-semibold text-gray-900'>Accessibility:</span> Seamlessly connect to Verified Pools via Coinbase Wallet, Prime Onchain Wallet, or other eligible third-party wallets.
                                </p>
                            </div>
                            <div className='flex gap-6 items-start'>
                                <FaCheckCircle className='text-black text-2xl mt-1 shrink-0' />
                                <p className='text-lg md:text-xl text-gray-500 font-normal leading-relaxed'>
                                    <span className='font-semibold text-gray-900'>Transparency:</span> With self-custody and no intermediaries, Verified Pools offers direct, efficient trading that is transparent end-to-end.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Developed with onchain platforms */}
            <div className='w-full h-full pb-32 pt-10 px-4 md:px-10 lg:px-20'>
                <h1 className='text-5xl md:text-6xl font-medium tracking-tight pb-16'>Developed with onchain platforms</h1>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                    <div className='bg-[#f9f9f9] rounded-[2.5rem] p-10 flex flex-col'>
                        <img src={baseLogo} alt="Base" className='w-16 h-16 object-contain mb-16' />
                        <h2 className='text-2xl font-semibold mb-4'>Base</h2>
                        <p className='text-lg text-gray-500 leading-relaxed font-medium'>Verified Pools is built on Base, an Ethereum L2 blockchain solution, delivering improved transaction speed and reduced costs.</p>
                    </div>

                    <div className='bg-[#f9f9f9] rounded-[2.5rem] p-10 flex flex-col'>
                        <img src={gauntletLogo} alt="Gauntlet" className='w-12 h-12 object-contain mb-20' />
                        <h2 className='text-2xl font-semibold mb-4'>Gauntlet</h2>
                        <p className='text-lg text-gray-500 leading-relaxed font-medium'>Gauntlet is providing expertise in support of Verified Pools to optimize liquidity pool configurations and overall pool health.</p>
                    </div>

                    <div className='bg-[#f9f9f9] rounded-[2.5rem] p-10 flex flex-col'>
                        <img src={oxLogo} alt="0x" className='w-14 h-14 object-contain mb-16' />
                        <h2 className='text-2xl font-semibold mb-4'>0x</h2>
                        <p className='text-lg text-gray-500 leading-relaxed font-medium'>0x has integrated Verified Pools liquidity into its APIs, enabling verified wallets that swap through 0x to seamlessly access these liquidity pools when executing trades.</p>
                    </div>

                    <div className='bg-[#f9f9f9] rounded-[2.5rem] p-10 flex flex-col'>
                        <img src={uniswapLogo} alt="Uniswap" className='w-14 h-14 object-contain mb-16' />
                        <h2 className='text-2xl font-semibold mb-4'>Uniswap</h2>
                        <p className='text-lg text-gray-500 leading-relaxed font-medium'>Verified Pools was developed on the Uniswap v4 protocol for enhanced capital efficiency and custom smart contract functionality.</p>
                    </div>
                </div>

                <div className='w-full flex justify-center pt-20 pb-10'>
                    <button className='bg-black text-white font-semibold py-5 px-10 rounded-full hover:bg-gray-800 transition-colors text-lg'>
                        Learn more about the underlying technology
                    </button>
                </div>
            </div>

            {/* Connect with Prime Onchain Wallet */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[45%] lg:pr-10'>
                        <div className='border border-gray-300 rounded-full py-2 px-4 w-fit mb-6 flex items-center gap-2'>
                            <div className='w-3 h-3 bg-black rounded-full'></div>
                            <span className='font-semibold text-gray-700'>Institutions</span>
                        </div>
                        <h1 className='text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8'>Connect with Prime Onchain Wallet</h1>
                        <p className='text-lg md:text-xl text-gray-500 font-normal leading-relaxed mb-10'>
                            Connecting to Verified Pools with Prime Onchain Wallet offers a powerful, flexible, and safe way for institutions to participate in the DeFi ecosystem. Whether you're looking for tailored liquidity strategies or an autonomous experience, Verified Pools empowers you to manage your capital with confidence and flexibility.
                        </p>
                        <div className='flex flex-col gap-6 mb-10'>
                            <div className='flex gap-4 items-center'>
                                <FaCheckCircle className='text-black text-2xl shrink-0' />
                                <p className='text-lg text-gray-500 font-medium'>Trade with confidence on KYC-verified liquidity pools</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaCheckCircle className='text-black text-2xl shrink-0' />
                                <p className='text-lg text-gray-500 font-medium'>API & developer tools for seamless integration</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaCheckCircle className='text-black text-2xl shrink-0' />
                                <p className='text-lg text-gray-500 font-medium'>Incentive program for liquidity providers</p>
                            </div>
                        </div>
                        <Link to="#" className='underline underline-offset-4 decoration-1 font-semibold hover:text-gray-600 transition-colors text-lg'>Learn more</Link>
                    </div>
                    <div className='w-full md:w-[50%] flex justify-end'>
                        <img src={primeWalletImage} alt="Prime Onchain Wallet" className='w-full object-contain drop-shadow-lg rounded-[3rem]' />
                    </div>
                </div>
            </div>

            {/* Connect with Coinbase Wallet */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row-reverse items-center justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] lg:pl-10'>
                        <div className='border border-gray-300 rounded-full py-2 px-4 w-fit mb-6 flex items-center gap-2'>
                            <div className='w-4 h-4 rounded-full border-4 border-gray-300 relative'>
                                <div className='absolute inset-0 m-auto w-1.5 h-1.5 bg-black rounded-full'></div>
                            </div>
                            <span className='font-semibold text-gray-700'>Individuals</span>
                        </div>
                        <h1 className='text-5xl md:text-6xl font-medium tracking-tight leading-[1.1] mb-8'>Connect with<br />Coinbase Wallet</h1>
                        <p className='text-lg md:text-xl text-gray-500 font-normal leading-relaxed mb-10'>
                            Connecting to Verified Pools with Coinbase Wallet, is a seamless and intuitive way for individuals to trade crypto onchain. Whether you're swapping assets or providing liquidity, Verified Pools makes it easier than ever to participate in the onchain economy.
                        </p>
                        <div className='flex flex-col gap-6 mb-10'>
                            <div className='flex gap-4 items-center'>
                                <FaCheckCircle className='text-black text-2xl shrink-0' />
                                <p className='text-lg text-gray-500 font-medium'>A fast, user-friendly interface</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaCheckCircle className='text-black text-2xl shrink-0' />
                                <p className='text-lg text-gray-500 font-medium'>Self-custody, putting you in control of your crypto</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <FaCheckCircle className='text-black text-2xl shrink-0' />
                                <p className='text-lg text-gray-500 font-medium'>Protect your assets with industry-leading security</p>
                            </div>
                        </div>
                        <Link to="#" className='underline underline-offset-4 decoration-1 font-semibold hover:text-gray-600 transition-colors text-lg'>Learn more</Link>
                    </div>
                    <div className='w-full md:w-[50%] flex justify-start'>
                        <img src={coinbaseWalletImage} alt="Coinbase Wallet" className='w-full object-contain drop-shadow-lg rounded-[3rem]' />
                    </div>
                </div>
            </div>

            {/* Available Pools */}
            <div className='w-full py-16 px-4 md:px-10 lg:px-20 bg-[#f6f6f6] flex flex-col items-center justify-center text-center'>
                <h1 className='text-5xl md:text-6xl font-medium tracking-tight'>Available Pools</h1>
                <p className='text-lg md:text-xl text-gray-500 pt-4 pb-8 font-medium'>Explore the liquidity pools currently available on Verified Pools.</p>
                <button className='bg-black text-white font-semibold py-4 px-8 rounded-full hover:bg-gray-800 transition-colors text-lg'>
                    Explore pools
                </button>
            </div>

            {/* FAQs Section */}
            <div className='w-full h-full py-24 px-4 md:px-10 lg:px-20'>
                <h1 className='text-5xl md:text-6xl font-medium tracking-tight pb-16'>FAQs</h1>
                <div className='w-full flex flex-col gap-4'>
                    {[
                        { question: 'Which jurisdictions are eligible to access Verified Pools?', answer: 'Verified Pools are currently available to users in eligible jurisdictions.' },
                        { question: 'How to connect to Verified Pools with Prime Onchain Wallet?', answer: 'You can connect by selecting the Prime Onchain Wallet option on the connection screen and following the prompts.' },
                        { question: 'How do I connect to Verified Pools with Coinbase Wallet?', answer: 'Open your Coinbase Wallet extension or app, navigate to the browser, and connect to the Verified Pools URL.' },
                        { question: 'What liquidity pools are available?', answer: 'We offer a wide range of pools including major trading pairs. Check the Available Pools section for the full list.' },
                        { question: 'Do I have to use Coinbase Wallet or Prime Onchain Wallet to connect to Verified Pools?', answer: 'While recommended, you can also use other supported third-party Web3 wallets.' }
                    ].map((faq, index) => (
                        <div key={index} className='bg-[#f7f7f7] rounded-[1.5rem] px-8 py-7 cursor-pointer hover:bg-gray-100 transition-colors'>
                            <div className='flex justify-between items-center' onClick={() => toggleAccordion(index)}>
                                <h2 className='text-[1.3rem] font-semibold text-gray-900 pr-4'>{faq.question}</h2>
                                <span className='text-gray-500 font-light text-xl'>{openAccordion === index ? <FaMinus /> : <FaPlus />}</span>
                            </div>
                            {openAccordion === index && (
                                <p className='pt-6 text-lg text-gray-600 leading-relaxed'>{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legal / Disclaimers */}
            <div className='w-full h-full pb-24 pt-10 px-4 md:px-10 lg:px-20 bg-white'>
                <div className='w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20'>
                    <div className='w-full md:w-[50%] pr-0 md:pr-10'>
                        <h1 className='text-2xl font-semibold'>Legal</h1>
                        <p className='text-lg md:text-xl pt-4 text-gray-500 font-medium'>Verified Pools is an onchain product. Features and availability may vary by jurisdiction and are subject to change.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default VerifiedPools;
