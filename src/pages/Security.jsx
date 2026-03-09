import React from 'react';

import shieldImg from '../assets/security/Coinbase_Security_Shield.avif';

import iconPublic from '../assets/security/globalPayments-5.svg'; // Placeholder
import iconAssets from '../assets/security/security-3.svg'; // Placeholder
import iconPrivacy from '../assets/security/delegate-3.svg'; // Placeholder
import iconEncryption from '../assets/security/assetEncryption-5.svg'; // Placeholder
import iconTools from '../assets/security/completeQuiz-5.svg'; // Placeholder
import iconHelp from '../assets/security/coinbaseOneChat-3.svg'; // Placeholder

import tenYearBadge from '../assets/security/Sub1-720x720.png'; // Placeholder

import iconSupport from '../assets/security/Sub1-720x720.png'; // Placeholder
import iconHelpCenter from '../assets/security/Sub1-720x720.png'; // Placeholder
import iconLearn from '../assets/security/Sub1-720x720.png'; // Placeholder

import communityIllustration from '../assets/security/Trial-Sub-720x720.png'; // Placeholder
import differentIllustration from '../assets/security/Sub3-720x720__1_.png'; // Placeholder

import resourceThumb1 from '../assets/security/Top_5_Cryptocurrency_Security_Tips_from_Coinbase.jpeg'; // Placeholder
import resourceThumb2 from '../assets/security/Crypto_Security_101-_Tech_Support_Scams_.jpeg'; // Placeholder
import resourceThumb3 from '../assets/security/Crypto_Security_101-_Phishing_Scams_.jpeg'; // Placeholder
import resourceThumb4 from '../assets/security/Crypto_Security_101-_Trust_Trading_Scams.jpeg'; // Placeholder


const platformFeatures = [
    {
        title: "We’re a public company, built in the USA",
        description: "In April 2021, Coinbase became the largest public crypto company. That means we operate with more financial transparency...",
        icon: iconPublic,
        iconColor: "bg-blue-100"
    },
    {
        title: "We hold our customers’ assets 1:1",
        description: "Your crypto is your crypto. It’s that simple. Coinbase doesn't lend or take any action with your assets without your permission...",
        icon: iconAssets,
        iconColor: "bg-blue-600"
    },
    {
        title: "We respect your rights over your personal information",
        description: "We only collect the necessary personal data in order to provide you with the best protection and services we can...",
        icon: iconPrivacy,
        iconColor: "bg-blue-500"
    },
    {
        title: "We use state-of-the-art encryption and security",
        description: "The technology that powers our platform was developed with industry-leading security and encryption at its core...",
        icon: iconEncryption,
        iconColor: "bg-yellow-400"
    },
    {
        title: "We offer the finest tools to protect your account",
        description: "From auto-enrolled 2 factor-authentication (with security key support), password protection, to multi-approval withdrawals...",
        icon: iconTools,
        iconColor: "bg-indigo-500"
    },
    {
        title: "Get the help you need, when you need it",
        description: "You can always contact our support team by phone or messaging to speak with our virtual assistant...",
        icon: iconHelp,
        iconColor: "bg-blue-200"
    }
];

const helpResources = [
    { title: "Customer Support", desc: "24/7 live support", icon: iconSupport },
    { title: "Help Center", desc: "Quick solutions to common questions", icon: iconHelpCenter },
    { title: "Coinbase Learn", desc: "Guides, tips, market updates and more", icon: iconLearn },
];

const securityResources = [
    { title: "Top 5 Cryptocurrency Security Tips", tag: "Tips", image: resourceThumb1 },
    { title: "Tech Support Scams", tag: "Security 101", image: resourceThumb2 },
    { title: "Phishing Scams", tag: "Security 101", image: resourceThumb3 },
    { title: "Trust Trading Scams", tag: "Security 101", image: resourceThumb4 },
];

const Security = () => {
    return (
        <div className="bg-white font-sans text-[#090909]">

            {/* 1. SUB-NAVIGATION */}
            <div className="border-b border-gray-100 sticky top-0 bg-white z-40">
                <div className="max-w-[1280px] mx-auto px-6 h-14 flex items-center justify-between">
                    <div className="text-[20px] md:text-[24px] font-medium tracking-tight">Security</div>
                    <div className="hidden lg:flex items-center gap-8 text-[14px] font-medium text-gray-600">
                        <a href="#overview" className="text-black border-b-2 border-black h-full flex items-center">Overview</a>
                        <a href="#tips" className="hover:text-black transition-colors">Security Tips</a>
                        <a href="#phishing" className="hover:text-black transition-colors">Phishing Attacks</a>
                        <a href="#login" className="hover:text-black transition-colors">Login Security</a>
                        <a href="#wallet" className="hover:text-black transition-colors">Coinbase Wallet</a>
                    </div>
                    <div className="lg:hidden"></div>
                </div>
            </div>

            {/* 2. HERO SECTION */}
            <section className="py-16 md:py-24">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-1.5 w-fit">
                            <div className="w-2 h-2 rounded-full bg-black"></div>
                            <span className="text-[14px] font-medium text-gray-600 uppercase tracking-wider">Security</span>
                        </div>
                        <h1 className="text-[56px] md:text-[88px] font-medium tracking-tight leading-[1.05]">
                            The most trusted crypto exchange
                        </h1>
                        <p className="text-[18px] md:text-[20px] text-[#5b616e] leading-[1.6] max-w-[500px]">
                            We’re the most trusted place for people and businesses to buy, sell, and manage crypto
                        </p>
                        <div className="pt-4">
                            <button className="bg-[#0052FF] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#0045D8] transition-all w-fit">
                                Sign up now
                            </button>
                        </div>
                    </div>
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="w-full max-w-[500px] md:max-w-[600px]">
                            <img src={shieldImg} alt="Coinbase Security Shield" className="w-full h-auto object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. "THE PROOF IS IN OUR PLATFORM" */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight leading-tight mb-4">
                            The proof is in our platform.
                        </h2>
                        <p className="text-[18px] text-[#5b616e]">Here’s why you can trust us:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {platformFeatures.map((feature, idx) => (
                            <div key={idx} className="bg-[#f4f7f9] p-10 md:p-14 rounded-[32px] flex flex-col gap-6">
                                {/* IMAGE IMPLEMENTED HERE */}
                                <div className={`w-12 h-12 rounded-full ${feature.iconColor} flex items-center justify-center`}>
                                    <img src={feature.icon} alt="" className="w-6 h-6 object-contain" />
                                </div>

                                <div className="flex flex-col gap-4">
                                    <h3 className="text-[20px] font-bold text-[#090909]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-[16px] text-[#5b616e] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. "WE'RE OLD PROS" SECTION */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <div className="flex justify-center">
                        <div className="w-full max-w-[400px]">
                            {/* IMAGE IMPLEMENTED HERE */}
                            <img
                                src={tenYearBadge}
                                alt="10 Years of Security"
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-tight">
                            When it comes to security, we’re old pros.
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-relaxed">
                            For the past decade we’ve been leading the way into the crypto economy, and since day one our top priority has been earning your trust. We do everything we can to make sure our users are safe and secure, so that you can focus on building your portfolio.
                        </p>
                        <button className="bg-black text-white px-6 py-3 rounded-full font-bold w-fit hover:bg-gray-800 transition-all mt-4">
                            Get started
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. "WE'RE HERE TO HELP" SECTION */}
            <section className="py-20 bg-[#f4f7f9]/30">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight mb-4">
                            We’re here to help.
                        </h2>
                        <p className="text-[18px] text-[#5b616e]">Check out these resources to learn more:</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {helpResources.map((item, idx) => (
                            <div key={idx} className="bg-white p-10 rounded-[32px] shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col items-start h-full">
                                {/* IMAGE IMPLEMENTED HERE */}
                                <div className="w-12 h-12 mb-6 flex items-center justify-center">
                                    <img src={item.icon} alt={item.title} className="w-8 h-8 object-contain" />
                                </div>

                                <h3 className="text-[20px] font-bold mb-2">{item.title}</h3>
                                <p className="text-[16px] text-[#5b616e] mb-8 flex-grow">{item.desc}</p>
                                <button className="bg-black text-white px-5 py-2.5 rounded-full text-[14px] font-bold hover:bg-gray-800 transition-all">
                                    Learn more
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. COMMUNITY & DIFFERENT SECTIONS (Alternating) */}
            <section className="py-20 md:py-32 bg-white space-y-32">
                {/* Row 1 */}
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-tight">
                            We work with the community to keep improving
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-relaxed">
                            We understand the importance of security research in keeping our community secure. That’s why we pay rewards for the responsible disclosure of security vulnerabilities through our Bug Bounty program.
                        </p>
                        <button className="bg-black text-white px-6 py-3 rounded-full font-bold w-fit mt-4">
                            Learn more
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full max-w-[500px]">
                            {/* IMAGE IMPLEMENTED HERE */}
                            <img
                                src={communityIllustration}
                                alt="Community Security"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex justify-center order-2 lg:order-1">
                        <div className="w-full max-w-[500px]">
                            {/* IMAGE IMPLEMENTED HERE */}
                            <img
                                src={differentIllustration}
                                alt="Different than other exchanges"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6 order-1 lg:order-2">
                        <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-tight">
                            We’re different than other crypto exchanges
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-relaxed">
                            Coinbase is the largest publicly traded crypto company in the world. We’re proud to lead the way in providing extra transparency, comprehensive risk management practices & leading security protections to all of our users.
                        </p>
                        <button className="bg-black text-white px-6 py-3 rounded-full font-bold w-fit mt-4">
                            Discover more
                        </button>
                    </div>
                </div>
            </section>

            {/* 7. SECURITY RESOURCES (Horizontal Scroll/Grid) */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                        <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight">
                            Security Resources
                        </h2>
                        <p className="text-[18px] text-[#5b616e] max-w-md">
                            Curious to learn more? Check out these resources to learn how we keep you safe and how you can better protect yourself.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {securityResources.map((item, idx) => (
                            <div key={idx} className="group cursor-pointer">
                                <div className="aspect-square bg-[#f4f7f9] rounded-[32px] mb-6 overflow-hidden relative">
                                    {/* IMAGE IMPLEMENTED HERE */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <span className="text-[14px] font-bold text-[#5b616e] uppercase tracking-wide">
                                        {item.tag}
                                    </span>
                                    <h3 className="text-[20px] font-medium group-hover:text-blue-600 transition-colors">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Security;