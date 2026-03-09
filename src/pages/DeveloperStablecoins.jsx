import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from "../assets/developersPlatformStableCoin/CB_Custom_StableCoin_v005_0002.png";
import usdcIcon from "../assets/developersPlatformStableCoin/usdcToken-1.svg";
import globalIcon from "../assets/developersPlatformStableCoin/globalConnections-5.svg";
import fiatIcon from "../assets/developersPlatformStableCoin/fiat-4.svg";
import brandingIcon from "../assets/developersPlatformStableCoin/bundle-3.svg";
import mintingImage from "../assets/developersPlatformStableCoin/Frame__18_.png";
import flipcashLogo from "../assets/developersPlatformStableCoin/Flipcash_logo_white.svg";
import solflareLogo from "../assets/developersPlatformStableCoin/Solflare_Logo_Sol-Yellow_lg.png";
import r2Logo from "../assets/developersPlatformStableCoin/R2-logo-txt-1__1_.png";
import burningImage from "../assets/developersPlatformStableCoin/Frame__19_.png";

const DeveloperStablecoins = () => {
    return (
        <div className='w-full h-full bg-white text-black font-sans'>

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
            <div className='w-full pt-16 pb-0 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-start justify-between gap-10 md:gap-20 pb-12'>
                    <div className='w-full md:w-[50%]'>
                        <h1 className='text-5xl md:text-6xl lg:text-[5.5rem] font-medium tracking-tight leading-[1] text-gray-900'>
                            Coinbase Custom Stablecoins
                        </h1>
                    </div>
                    <div className='w-full md:w-[45%] pt-2'>
                        <p className='text-xl md:text-2xl lg:text-[1.75rem] text-gray-800 font-normal leading-tight mb-10'>
                            Tap into Coinbase’s infrastructure and distribution, deepen brand loyalty, and turn your Stablecoin’s supply into revenue
                        </p>
                        <button className='bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-colors text-lg'>
                            Get Started
                        </button>
                    </div>
                </div>

                <div className='w-full overflow-hidden px-4 md:px-0'>
                    <img src={heroImage} alt="Custom Stablecoin Render" className='w-full h-auto object-contain rounded-[3rem] shadow-2xl mt-10' />
                </div>
            </div>

            {/* Why Build with Coinbase Section */}
            <div className='w-full bg-black text-white py-32 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-start justify-between gap-12 mb-24 max-w-7xl mx-auto'>
                    <h2 className='text-5xl md:text-6xl lg:text-[4.75rem] font-medium tracking-tight leading-[1.1] md:w-[50%]'>
                        Why Build with Coinbase
                    </h2>
                    <p className='text-xl md:text-2xl text-gray-400 font-medium md:w-[45%] leading-relaxed pt-4'>
                        Coinbase has been building and powering the crypto economy since 2012. Our Custom Stablecoin infrastructure combines the backing of USDC and other stablecoins with the ability to launch, scale, and monetize your own branded asset.
                    </p>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto'>
                    {/* Card 1 */}
                    <div className='bg-[#1a1a1a] rounded-[3rem] p-10 flex flex-col items-start min-h-[500px] justify-between border border-white/5 hover:border-white/10 transition-colors'>
                        <div className='w-14 h-14 mb-10'>
                            <img src={usdcIcon} alt="Flexible Collateral" className='w-full h-full invert opacity-80' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold mb-4'>Build on Flexible Collateral</h3>
                            <p className='text-[1.05rem] text-gray-400 leading-relaxed font-medium'>
                                Launch your own stablecoin fully backed 1:1 by flexible USD-stablecoin collateral, including USDC, held in Coinbase custody and powered by the same segregated, audited, and regulated custody infrastructure that safeguards our institutional clients.
                            </p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className='bg-[#1a1a1a] rounded-[3rem] p-10 flex flex-col items-start min-h-[500px] justify-between border border-white/5 hover:border-white/10 transition-colors'>
                        <div className='w-14 h-14 mb-10'>
                            <img src={globalIcon} alt="Global Distribution" className='w-full h-full invert opacity-80' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold mb-4'>Access Global Distribution and Liquidity</h3>
                            <p className='text-[1.05rem] text-gray-400 leading-relaxed font-medium'>
                                Position your stablecoin for adoption from day one with built-in access to users across the Coinbase ecosystem and no-fee, 1:1 interoperability with USDC and other Coinbase custom stablecoins.
                            </p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className='bg-[#1a1a1a] rounded-[3rem] p-10 flex flex-col items-start min-h-[500px] justify-between border border-white/5 hover:border-white/10 transition-colors'>
                        <div className='w-14 h-14 mb-10'>
                            <img src={fiatIcon} alt="Supply into Revenue" className='w-full h-full invert opacity-80' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold mb-4'>Turn Supply Into Revenue</h3>
                            <p className='text-[1.05rem] text-gray-400 leading-relaxed font-medium'>
                                Earn revenue based on the total circulating supply of your custom stablecoin — accrued daily and paid out weekly directly to your Coinbase Prime account.
                            </p>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className='bg-[#1a1a1a] rounded-[3rem] p-10 flex flex-col items-start min-h-[500px] justify-between border border-white/5 hover:border-white/10 transition-colors'>
                        <div className='w-14 h-14 mb-10'>
                            <img src={brandingIcon} alt="Custom Branding" className='w-full h-full invert opacity-80' />
                        </div>
                        <div>
                            <h3 className='text-2xl font-bold mb-4'>Custom Asset Branding</h3>
                            <p className='text-[1.05rem] text-gray-400 leading-relaxed font-medium'>
                                Create a stablecoin that reflects your brand. Deliver differentiated financial experiences within your product that deepen customer loyalty and reinforce brand value.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* How Minting Works Section */}
            <div className='w-full bg-black text-white py-32 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-20 max-w-7xl mx-auto'>
                    <div className='w-full md:w-[45%]'>
                        <h2 className='text-5xl md:text-6xl font-medium tracking-tight mb-12'>How Minting Works</h2>
                        <ol className='flex flex-col gap-8 text-xl font-medium text-gray-400'>
                            <li className='flex gap-4'>
                                <span className='text-white'>1.</span>
                                <span>Deposit USDC into your Coinbase Prime account (or use existing balance)</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-white'>2.</span>
                                <span>Mint your Custom Stablecoin 1:1 on Coinbase Prime</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-white'>3.</span>
                                <span>Send your Custom Stablecoin to your platform, end users, or external partners</span>
                            </li>
                        </ol>
                    </div>

                    <div className='w-full md:w-[50%]'>
                        <img src={mintingImage} alt="Sample Mint Workflow" className='w-full h-auto object-contain rounded-[3rem]' />
                    </div>
                </div>
            </div>



            {/* How Burning Works Section */}
            <div className='w-full bg-[#1a1c20] text-white py-32 px-4 md:px-10 lg:px-20'>
                <div className='w-full flex flex-col md:flex-row items-center justify-between gap-20 max-w-7xl mx-auto'>
                    <div className='w-full md:w-[50%]'>
                        <img src={burningImage} alt="Sample Burn Workflow" className='w-full h-auto object-contain rounded-[3rem]' />
                    </div>

                    <div className='w-full md:w-[45%]'>
                        <h2 className='text-5xl md:text-6xl font-medium tracking-tight mb-12 leading-tight'>How Burning Works</h2>
                        <ol className='flex flex-col gap-8 text-xl font-medium text-gray-400'>
                            <li className='flex gap-4'>
                                <span className='text-white'>1.</span>
                                <span className='leading-tight'>Deposit Custom Stablecoin into your Coinbase Prime account (or use existing asset balance)</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-white'>2.</span>
                                <span className='leading-tight'>Burn your Custom Stablecoin 1:1 on Coinbase Prime</span>
                            </li>
                            <li className='flex gap-4'>
                                <span className='text-white'>3.</span>
                                <span className='leading-tight'>Receive USDC into your Coinbase Prime account</span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>

            {/* Early Exploration Partners Section */}
            <div className='w-full bg-black text-white py-32 px-4 md:px-10 lg:px-20'>
                <h2 className='text-5xl md:text-7xl font-medium tracking-tight text-center mb-24'>
                    Early Exploration Partners
                </h2>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                    {[
                        { name: "Flipcash", logo: flipcashLogo },
                        { name: "Solflare", logo: solflareLogo },
                        { name: "R2", logo: r2Logo }
                    ].map((partner, idx) => (
                        <div key={idx} className='bg-black border border-white/10 rounded-[2.5rem] p-16 flex items-center justify-center hover:bg-[#111111] transition-colors h-64 shadow-2xl'>
                            <img src={partner.logo} alt={partner.name} className='max-w-[80%] max-h-16 object-contain invert brightness-200' />
                        </div>
                    ))}
                </div>
            </div>

            {/* Build on the Industry Standard Section */}
            <div className='w-full bg-black text-white py-48 px-4 md:px-10 lg:px-20 text-center border-t border-white/5'>
                <div className='max-w-4xl mx-auto flex flex-col items-center'>
                    <h2 className='text-6xl md:text-8xl font-medium tracking-tight leading-[1] mb-10'>
                        Build on the<br />Industry Standard
                    </h2>
                    <p className='text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed'>
                        Partner with the most trusted crypto exchange to deploy a stablecoin built for enterprise scale.
                    </p>
                    <button className='bg-white text-black font-bold py-5 px-12 rounded-full hover:bg-gray-200 transition-colors text-xl'>
                        Get Started
                    </button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className='w-full bg-white py-40 px-4 md:px-10 lg:px-20 border-t border-gray-100'>
                <div className='max-w-7xl mx-auto'>
                    <h2 className='text-7xl md:text-[6.5rem] font-medium text-gray-900 mb-20 leading-none'>FAQ</h2>
                    <div className='flex flex-col gap-3'>
                        {[
                            "What is the difference between a Custom Stablecoin and USDC?",
                            "Who owns smart contract management and compliance, security, and audit requirements?",
                            "How do Custom Stablecoins fit in with Coinbase's other products?"
                        ].map((question, idx) => (
                            <div key={idx} className='bg-[#f4f7f9] rounded-full py-10 px-10 md:px-16 flex items-center justify-between cursor-pointer hover:bg-gray-200 transition-all'>
                                <h3 className='text-xl md:text-2xl font-medium text-gray-900 pr-10'>
                                    {question}
                                </h3>
                                <span className='text-3xl text-gray-400 font-light'>+</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DeveloperStablecoins;
