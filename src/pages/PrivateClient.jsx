import React from 'react';
import { FiCheckCircle } from 'react-icons/fi'; // We might use this for the checkmarks or build custom
import portfolioImg from '../assets/PrivateClientPage/Corporates_portfolio.png';
import pillarImg from '../assets/PrivateClientPage/cb_wealth_image.jpg';
import delegateIcon from '../assets/PrivateClientPage/delegate-3.svg';
import securityShieldIcon from '../assets/PrivateClientPage/securityCoinShield-5.svg';
import custodyNavigationIcon from '../assets/PrivateClientPage/custodyNavigation-5.svg';

export default function PrivateClient() {
    return (
        <div className="w-full min-h-screen bg-[#f5f6f8] font-sans">
            {/* Nav space is handled globally, so we start straight into content */}

            {/* Hero Section */}
            <section className="w-full bg-[#f5f6f8] pt-16 lg:pt-24 pb-16 lg:pb-32 overflow-hidden relative">
                <div className="w-full max-w-[1280px] mx-auto px-6 h-full flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

                    {/* Left Content (Text) */}
                    <div className="flex flex-col items-start w-full lg:w-1/2 z-10">
                        <h1
                            className="text-[48px] md:text-[64px] lg:text-[72px] font-medium text-[#0a0b0d] leading-[1.1] mb-6 tracking-tight"
                            style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                        >
                            Coinbase Wealth
                        </h1>

                        <p className="text-[20px] md:text-[18px] font-medium text-[#0a0b0d] leading-[1.4] mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            The trusted crypto wealth platform for UHNW &amp; Family Offices.
                        </p>

                        <p className="text-[18px] text-[#5b616e] leading-[1.6] mb-12 max-w-[500px]">
                            Backed by the world's largest regulated crypto custodian and publicly-traded crypto company.
                        </p>

                        <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors shrink-0">
                            Self-onboard to Coinbase Wealth
                        </button>
                    </div>

                    {/* Right Content (Image) */}
                    <div className="flex justify-center lg:justify-end w-full lg:w-1/2 pt-12 lg:pt-0">
                        <img
                            src={portfolioImg}
                            alt="Coinbase Wealth Portfolio Interface"
                            className="w-full max-w-[800px] lg:max-w-none lg:w-[110%] object-contain shadow-[0_24px_64px_rgba(0,0,0,0.08)] rounded-[24px] lg:translate-x-[0%]"
                        />
                    </div>

                </div>
            </section>

            {/* Institutional-grade Services Section */}
            <section className="w-full bg-white py-16 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Left side: Image */}
                    <div className="w-full">
                        <div className="w-full border border-gray-100 rounded-[32px] overflow-hidden p-8 lg:p-16 flex items-center justify-center bg-white shadow-sm">
                            <img
                                src={pillarImg}
                                alt="Coinbase Wealth Institutional Services"
                                className="w-full max-w-[400px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Right side: Text and List */}
                    <div className="w-full flex flex-col items-start pr-0 lg:pr-8">
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium text-[#0a0b0d] leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Institutional-grade services for UHNW and professional advisors
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-[1.6] mb-12">
                            Coinbase Wealth gives ultra-high-net-worth individuals, family offices, and professional advisors access to the Coinbase Prime institutional platform— with secure custody, deep liquidity, and institutional-grade infrastructure, all in one place.
                        </p>

                        {/* List of features */}
                        <div className="flex flex-col gap-8 mb-12">
                            {[
                                { title: "Holistic offering:", text: "Clients can trade crypto, access financing, and hold crypto assets within our qualified custodian" },
                                { title: "24/7 trading access:", text: "Access to our multi-venue trading platform and advanced algos, with competitive fees" },
                                { title: "White-glove coverage:", text: "Direct support from dedicated sales managers and customized execution strategies through our institutional trading desk" },
                                { title: "Earning opportunities:", text: "Including staking, agency lending, USDC Rewards" },
                                { title: "Crypto financing:", text: "access the same spot margin (for levered long/short trading) and margin loan products used by the world's largest asset managers" },
                                { title: "Institutional-grade wallet integration:", text: "Get access to Prime Onchain Wallet" },
                                { title: "Advisor-ready solutions:", text: "Institutional-grade reporting and customizable, multi-user access designed for sophisticated wealth management operations" },
                                { title: "Education and insights:", text: "Access to our research team plus exclusive events" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4">
                                    <div className="mt-1 flex-shrink-0 w-6 h-6 bg-[#0a0b0d] rounded-full flex items-center justify-center">
                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.00019 7.8L1.2002 5L0.266846 5.93333L4.00019 9.66667L12.0002 1.66667L11.0668 0.733337L4.00019 7.8Z" fill="white" />
                                        </svg>
                                    </div>
                                    <p className="text-[16px] leading-[1.5] text-[#5b616e]">
                                        <b className="text-[#0a0b0d] font-medium">{item.title}</b> {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Bottom CTA */}
                        <div className="flex flex-col gap-6 w-full items-start">
                            <p className="text-[16px] text-[#5b616e] italic">
                                Need more information? <a href="#" className="underline hover:text-[#0a0b0d] transition-colors">Start a relationship with the Coinbase Wealth team here.</a>
                            </p>
                            <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                                Self-onboard to Coinbase Wealth
                            </button>
                        </div>
                    </div>

                </div>
            </section>

            {/* Best-in-class Protection Section */}
            <section className="w-full bg-[#f0f2f5] py-16 lg:py-24">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center">
                    <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-medium text-[#0a0b0d] leading-[1.1] mb-12 lg:mb-16 text-center max-w-[800px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Safeguard your assets with best-in-class protection
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

                        {/* Card 1 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-[460px]">
                            <div className="w-12 h-12 flex items-center justify-center mb-8">
                                <img src={delegateIcon} alt="Regulated and compliant" className="w-10 h-10 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Regulated and compliant
                                </h3>
                                <p className="text-[16px] text-[#5b616e] leading-[1.5]">
                                    As a publicly traded company, we adhere to the strictest standards of financial reporting, risk controls, and independent audits. With licensed entities across the U.S., Europe, and Asia, we offer global nexuses to our products.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-[460px]">
                            <div className="w-12 h-12 flex items-center justify-center mb-8">
                                <img src={securityShieldIcon} alt="Unmatched security" className="w-10 h-10 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Unmatched security
                                </h3>
                                <p className="text-[16px] text-[#5b616e] leading-[1.5]">
                                    Coinbase sets the industry benchmark for safeguarding digital assets, with battle-tested key management systems, 24/7 threat monitoring, and dedicated security infrastructure teams.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col items-start h-[460px]">
                            <div className="w-12 h-12 flex items-center justify-center mb-8">
                                <img src={custodyNavigationIcon} alt="Institutional-grade" className="w-10 h-10 object-contain" />
                            </div>
                            <div>
                                <h3 className="text-[20px] font-medium text-[#0a0b0d] mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Institutional-grade
                                </h3>
                                <p className="text-[16px] text-[#5b616e] leading-[1.5]">
                                    We've forged partnerships with some of the leading financial institutions and asset managers in the world. Coinbase Wealth delivers the all-in-one Coinbase Prime institutional platform directly to ultra-high-net-worth individuals, family offices, and professional advisors.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Start a Relationship CTA Footer Section */}
            <section className="w-full bg-[#0a0b0d] py-24 lg:py-15">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col items-center justify-center text-center">
                    <h2 className="text-[40px] md:text-[56px] lg:text-[68px] font-normal text-white leading-[1.1] mb-12 tracking-tight max-w-[800px]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Start a Coinbase Wealth relationship
                    </h2>
                    <button className="bg-white hover:bg-[#f5f6f8] text-[#0a0b0d] px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                        Get in touch
                    </button>
                </div>
            </section>

        </div>
    );
}
