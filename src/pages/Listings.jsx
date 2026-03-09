import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Icons for the sections
import { FiCheckCircle } from 'react-icons/fi';

// Assets
import listingsNetworkImg from '../assets/AssetListingPage/2f0e9923993a414967d7.svg';
import businessCriteriaImg from '../assets/AssetListingPage/nuxChecklist-5.svg';
import preLaunchImg from '../assets/AssetListingPage/assetForward-4.svg';
import technicalImg from '../assets/AssetListingPage/stressTestedColdStorage-2.svg';

const faqs = [
    {
        question: "What's needed from project teams to review an asset?",
        answer: "Project teams need to provide detailed documentation about their token's utility, the underlying technology, team background, and tokenomics."
    },
    {
        question: "How does Coinbase prioritize reviews?",
        answer: "Coinbase prioritizes reviews based on consumer demand, liquidity, trading volume, and the potential impact of the asset on the crypto ecosystem."
    },
    {
        question: "How does Coinbase review assets?",
        answer: "Our review process includes rigorous checks on security, compliance, legal standing, and technical feasibility before an asset is approved."
    },
    {
        question: "What other factors are considered through the due diligence review?",
        answer: "We also consider market capitalization, community traction, social media sentiment, and the history of key contributors."
    },
    {
        question: "What types of tokens does Coinbase currently support?",
        answer: "Coinbase primarily supports ERC-20 tokens on Ethereum, Base, Optimism, Arbitrum, Polygon, as well as SPL tokens and native blockchain assets."
    },
    {
        question: "Is Rosetta implementation necessary to list my asset on Coinbase?",
        answer: "Rosetta implementation is highly recommended and often required for native blockchains to ensure smooth integration with Coinbase infrastructure."
    },
    {
        question: "Which assets are currently available on Coinbase Exchange?",
        answer: "You can find a full list of supported assets on our Explore page or directly within the Coinbase Exchange trading interface."
    },
    {
        question: "Why is an asset that's listed on Coinbase not available in my region?",
        answer: "Certain assets may be restricted in specific regions due to local regulatory requirements and compliance policies."
    },
    {
        question: "Why did you decide not to list certain assets?",
        answer: "We may decline listings if they do not meet our stringent security, legal, or compliance standards, or if there is insufficient market demand."
    },
    {
        question: "Are there any fees associated with a listing?",
        answer: "Coinbase does not charge application fees for listing reviews. Our goal is to list the best assets for our users securely and compliantly."
    },
    {
        question: "How can project teams educate Coinbase users about their token?",
        answer: "Project teams can participate in Coinbase Earn campaigns to reward users for learning about their asset's utility and technology."
    },
    {
        question: "If my asset is currently supported on Coinbase and we want to undergo an asset migration, what should we expect?",
        answer: "Asset migrations require close coordination with our engineering team to ensure zero disruption to user balances and trading systems."
    },
    {
        question: "What should I do to update my logo on Coinbase platforms?",
        answer: "Project teams can submit requests through the Asset Hub to update their logo, description, and other metadata on Coinbase."
    },
    {
        question: "My asset is listed on Coinbase and I'd like to partner on an opportunity like asset staking, yield farming, NFT drops, or similar functionality – who at Coinbase can I contact?",
        answer: "You can reach out via your existing Coinbase account representative or the partnerships portal within Asset Hub."
    }
];

export default function Listings() {
    const [openFaq, setOpenFaq] = useState(null);

    return (
        <div className="w-full min-h-screen bg-white font-sans">
            {/* Top Navigation Layout is handled globally in App.jsx, but Listings has a sub-nav */}
            <div className="w-full border-b border-gray-200 bg-white sticky top-[72px] z-40 hidden md:block">
                <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">
                    <h2 className="text-[24px] font-medium text-[#0a0b0d]">Listings</h2>
                    <div className="flex items-center gap-8 text-[14px] font-semibold text-[#0a0b0d]">
                        <a href="#get-listed" className="hover:text-gray-600 transition-colors">Get Listed</a>
                        <a href="#listing-standards" className="hover:text-gray-600 transition-colors">Listings Standards</a>
                    </div>
                </div>
            </div>

            {/* Hero Section */}
            <section className="w-full bg-white py-16 lg:py-24">
                <div className="w-full max-w-[800px] mx-auto px-6 flex flex-col items-center text-center">
                    <h1
                        className="text-[48px] md:text-[64px] lg:text-[72px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-6"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Coinbase Listings
                    </h1>
                    <p className="text-[18px] md:text-[20px] text-gray-500 leading-[1.6] mb-10 max-w-2xl">
                        At Coinbase, we believe in the power of innovation and are constantly monitoring the crypto landscape for promising projects to support on our platform.
                    </p>
                    <button className="bg-[#0052FF] hover:bg-[#0045D8] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors">
                        Request a review
                    </button>
                </div>
            </section>

            {/* Black 'Your asset, available on Coinbase' Section */}
            <section className="w-full bg-[#0a0b0d] py-16 lg:py-24 overflow-hidden">
                <div className="w-full max-w-[1280px] mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative">

                    {/* Left Side: Graphic */}
                    <div className="w-full lg:w-1/2 relative h-[400px] md:h-[500px] flex items-center justify-center">
                        <img
                            src={listingsNetworkImg}
                            alt="Coinbase Network Graphic"
                            className="w-full h-full lg:h-[130%] object-cover lg:object-contain object-left absolute left-[-10%] lg:left-[-20%] max-w-none"
                        />
                    </div>

                    {/* Right Side: Text */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start z-10">
                        <h2 className="text-white text-[48px] md:text-[56px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Your asset, available<br />on Coinbase
                        </h2>
                        <p className="text-[#8a919e] text-[18px] mb-8">
                            List on the Exchange, Custody, and all our trading interfaces.
                        </p>

                        <div className="flex flex-col gap-6 w-full">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white text-[#0a0b0d] rounded-full p-1"><FiCheckCircle className="w-4 h-4 rounded-full" /></div>
                                <p className="text-[#8a919e] text-[16px]">
                                    <span className="text-white font-medium">Global Reach:</span> Tap into millions of active, trading users
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white text-[#0a0b0d] rounded-full p-1"><FiCheckCircle className="w-4 h-4 rounded-full" /></div>
                                <p className="text-[#8a919e] text-[16px]">
                                    <span className="text-white font-medium">Robust Security:</span> Industry-leading security protocols
                                </p>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 bg-white text-[#0a0b0d] rounded-full p-1"><FiCheckCircle className="w-4 h-4 rounded-full" /></div>
                                <p className="text-[#8a919e] text-[16px]">
                                    <span className="text-white font-medium">Access:</span> Leverage our ecosystem of tools for developers
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* Review CTA Section */}
            <section className="w-full bg-white pt-24 pb-32 lg:pt-32 lg:pb-40 border-t border-gray-100">
                <div className="w-full max-w-[800px] mx-auto px-6 flex flex-col items-center text-center">
                    <h2 className="text-[#0a0b0d] text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-tight mb-6" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        Coinbase asset reviews
                    </h2>
                    <p className="text-[18px] md:text-[20px] text-gray-500 leading-[1.6] mb-10 max-w-3xl">
                        Once an asset meets our business criteria, we may choose to move forward with a due diligence review. If we need additional information in order to complete an initial review or have updates to share, we will reach out to the project team directly.
                        <br /><br />
                        If your project has a live token (or is considering launching a token) and feel it's a strong fit for our platform and customer base, we invite you to share more details with us.
                    </p>
                    <button className="bg-[#0a0b0d] hover:bg-[#1f2024] text-white px-8 py-4 rounded-full text-[16px] font-semibold transition-colors mb-20">
                        Request a review
                    </button>

                    <p className="text-gray-400 text-[14px] italic max-w-2xl px-4">
                        While we are not able to respond to all submissions, we will get in touch with you if we choose to move forward with a review or need more information from your team.
                    </p>
                </div>
            </section>

            {/* Asset Review Prioritization Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">

                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-24 mb-16 lg:mb-24">
                        <h2 className="text-[#0a0b0d] text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-tight lg:w-1/2" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Coinbase asset<br />review prioritization
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-500 leading-[1.6] lg:w-1/2 pt-2">
                            With thousands of live assets today, we prioritize reviews of assets by aiming to meet consumer demand while supporting a growing industry.
                        </p>
                    </div>

                    {/* Criteria Cards Container */}
                    <div className="flex flex-col gap-6 md:gap-8">

                        {/* Business Criteria Card */}
                        <div className="bg-[#f5f6f8] rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
                            <div className="w-full md:w-5/12 flex justify-center text-center">
                                {/* Use specific styling for the image to mimic the circular cutouts from the exact design or just place it cleanly */}
                                <img src={businessCriteriaImg} alt="Business Criteria" className="w-full max-w-[320px] h-auto object-contain rounded-2xl mix-blend-multiply" />
                            </div>
                            <div className="w-full md:w-7/12 flex flex-col">
                                <h3 className="text-[#0a0b0d] text-[24px] md:text-[28px] font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Business Criteria
                                </h3>
                                <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                    We prioritize reviews of assets based on set business criteria such as demand (i.e. trading volume, market cap), traction of token/application (i.e. token holders), & anticipated liquidity. We also perform additional business assessments regarding quantitative and qualitative signals such as social media sentiment and behavior, history of key project contributors, and information about how tokens are distributed.
                                </p>
                            </div>
                        </div>

                        {/* Pre-Launch Assets Card */}
                        <div className="bg-[#f5f6f8] rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
                            <div className="w-full md:w-5/12 flex justify-center text-center">
                                <img src={preLaunchImg} alt="Pre-Launch Assets" className="w-full max-w-[320px] h-auto object-contain rounded-2xl mix-blend-multiply" />
                            </div>
                            <div className="w-full md:w-7/12 flex flex-col">
                                <h3 className="text-[#0a0b0d] text-[24px] md:text-[28px] font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Pre-Launch Assets
                                </h3>
                                <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                    As project teams continue to issue new tokens, our team strives to stay current in this evolving landscape by supporting asset launches with trading support on day one. Evaluating assets ahead of launch is unique, and we have a separate set of business criteria to decide which projects we'll consider for a pre-launch review.
                                </p>
                            </div>
                        </div>

                        {/* Technical Considerations Card */}
                        <div className="bg-[#f5f6f8] rounded-[48px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16 lg:gap-24">
                            <div className="w-full md:w-5/12 flex justify-center text-center">
                                <img src={technicalImg} alt="Technical Considerations" className="w-full max-w-[320px] h-auto object-contain rounded-2xl mix-blend-multiply" />
                            </div>
                            <div className="w-full md:w-7/12 flex flex-col">
                                <h3 className="text-[#0a0b0d] text-[24px] md:text-[28px] font-medium mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                                    Technical Considerations
                                </h3>
                                <p className="text-gray-500 text-[16px] md:text-[18px] leading-[1.6]">
                                    We are currently equipped to support several token types (ERC-20 on Base, Ethereum, Optimism, Arbitrum, and Polygon as well as SPL's and ARC-20s) without substantial integration efforts. Native blockchains and other asset types require additional resources to support, which impacts our ability to prioritize certain assets.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Listing Process Section */}
            <section className="w-full bg-white py-24 lg:py-32">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    {/* Header Row */}
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 lg:mb-24">
                        <h2 className="text-[#0a0b0d] text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-tight lg:w-[45%]" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                            Coinbase<br />listing process
                        </h2>
                        <p className="text-[18px] lg:text-[20px] text-gray-500 leading-[1.6] lg:w-[50%] pt-2">
                            Coinbase adheres to thorough processes and standards for all asset listings.
                        </p>
                    </div>

                    {/* Process Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Box 1 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col h-full min-h-[360px]">
                            <div className="text-[#0a0b0d] text-[40px] md:text-[48px] font-bold mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>1</div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] font-semibold mb-3">Request a review</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Begin by filling out a request for review, and provide detailed information about your asset, including its purpose, technology, and team.
                                </p>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col h-full min-h-[360px]">
                            <div className="text-[#0a0b0d] text-[40px] md:text-[48px] font-bold mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>2</div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] font-semibold mb-3">Initial Review</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Our team conducts a preliminary assessment to ensure the asset aligns with our listing criteria. If we choose to move forward or have additional questions, our team will reach out to you.
                                </p>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col h-full min-h-[360px]">
                            <div className="text-[#0a0b0d] text-[40px] md:text-[48px] font-bold mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>3</div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] font-semibold mb-3">Due Diligence</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    We perform an in-depth analysis, evaluating factors such as technology, use case, market demand, and regulatory compliance.
                                </p>
                            </div>
                        </div>

                        {/* Box 4 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col h-full min-h-[360px]">
                            <div className="text-[#0a0b0d] text-[40px] md:text-[48px] font-bold mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>4</div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] font-semibold mb-3">Notification</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    After completing our due diligence, we will reach out to projects that have been chosen for listing.
                                </p>
                            </div>
                        </div>

                        {/* Box 5 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col h-full min-h-[360px]">
                            <div className="text-[#0a0b0d] text-[40px] md:text-[48px] font-bold mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>5</div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] font-semibold mb-3">Listing</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Coinbase conducts our standard listing process to enable transfers and move into trading mode when liquidity conditions are met.
                                </p>
                            </div>
                        </div>

                        {/* Box 6 */}
                        <div className="bg-[#f5f6f8] rounded-[32px] p-8 lg:p-10 flex flex-col h-full min-h-[360px]">
                            <div className="text-[#0a0b0d] text-[40px] md:text-[48px] font-bold mb-8" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>6</div>
                            <div className="mt-auto">
                                <h3 className="text-[#0a0b0d] text-[20px] font-semibold mb-3">Post-Listing Support</h3>
                                <p className="text-gray-500 text-[16px] leading-[1.6]">
                                    Enjoy ongoing support from Coinbase as you engage with our community and navigate the market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs Section */}
            <section className="w-full bg-white py-24 lg:py-32 border-t border-gray-100">
                <div className="w-full max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[#0a0b0d] text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-[1.05] tracking-tight mb-16" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        FAQs
                    </h2>

                    <div className="flex flex-col gap-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-[#f5f6f8] rounded-[24px] overflow-hidden">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full px-8 py-6 flex justify-between items-center text-left hover:bg-[#eceef2] transition-colors"
                                >
                                    <h3 className="text-[#0a0b0d] text-[18px] md:text-[20px] font-medium pr-8">{faq.question}</h3>
                                    <span className="text-[#0a0b0d] text-[24px] font-light min-w-[24px] flex justify-center">{openFaq === index ? '−' : '+'}</span>
                                </button>
                                {openFaq === index && (
                                    <div className="px-8 pb-8 pt-2">
                                        <p className="text-gray-500 text-[16px] leading-[1.6]">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
}
