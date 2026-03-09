import React from 'react';

// --- IMAGE IMPORTS ---
// User provided image:
import heroImage from '../assets/affiliatesPage/affiliates_2.avif';

// Specific images for sections
import howItWorksIcon1 from '../assets/affiliatesPage/delegate.png';
import howItWorksIcon2 from '../assets/affiliatesPage/addToWatchlist.png';
import howItWorksIcon3 from '../assets/affiliatesPage/moneyEarn.png';

import campaignTrackingImage from '../assets/affiliatesPage/tracking_-_affiliates.png';
import convenientPaymentsImage from '../assets/affiliatesPage/earn_-_affiliates.png';

import trustedIcon1 from '../assets/affiliatesPage/easyToUse.png';
import trustedIcon2 from '../assets/affiliatesPage/lock.png';
import trustedIcon3 from '../assets/affiliatesPage/trusted.png';


// --- DATA CONSTANTS ---

const howItWorksData = [
    {
        title: "Become an affiliate",
        description: "After your application is approved, you’ll get access to promotional assets and Impact tracking software.",
        icon: howItWorksIcon1,
        fallbackColor: "bg-blue-100"
    },
    {
        title: "Promote Coinbase",
        description: "Link to Coinbase in articles, create new content, or place ads on your website",
        icon: howItWorksIcon2,
        fallbackColor: "bg-yellow-100"
    },
    {
        title: "Earn Commissions",
        description: "When new customers join Coinbase through your promotions, you could earn a commission.",
        icon: howItWorksIcon3,
        fallbackColor: "bg-green-100"
    }
];

const trustedData = [
    {
        title: "Easy to use",
        description: "We make getting into crypto easy with simple tools and USA-based customer service.",
        icon: trustedIcon1,
        fallbackColor: "bg-blue-100"
    },
    {
        title: "Secure",
        description: "We use industry-leading security practices to keep your account safe.",
        icon: trustedIcon2,
        fallbackColor: "bg-yellow-100"
    },
    {
        title: "Trusted",
        description: "Millions of people use Coinbase to buy and sell cryptocurrency every month.",
        icon: trustedIcon3,
        fallbackColor: "bg-gray-200"
    }
];


const Affiliates = () => {
    return (
        <div className="bg-white font-sans text-[#090909]">

            <section className="py-6 md:py-8 lg:py-10 overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-8 max-w-[640px]">
                        <h1 className="text-[56px] md:text-[88px] font-medium tracking-tight leading-[1.05]">
                            Become a <br /> Coinbase affiliate
                        </h1>
                        <div className="flex flex-col gap-6 text-[18px] md:text-[20px] leading-[1.6] text-[#050505]">
                            <p>
                                Help us introduce the world to bitcoin, cryptocurrency, and the new financial system.
                            </p>
                            <p className="text-[16px] md:text-[18px] text-[#5b616e]">
                                We are no longer accepting applications from UK affiliates, the UK affiliate program is now closed until further notice.
                            </p>
                        </div>
                        <div className="pt-4">
                            <button className="bg-black text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-gray-800 transition-all w-fit">
                                Become an affiliate
                            </button>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div className="w-full max-w-[600px]">
                            <img
                                src={heroImage}
                                alt="Coinbase Affiliate Illustration"
                                className="w-full h-auto object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. HOW IT WORKS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                        <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-tight">
                            How it works
                        </h2>
                        <p className="text-[18px] text-[#5b616e] max-w-md leading-relaxed">
                            Join our affiliate program and earn commission by promoting Coinbase.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {howItWorksData.map((item, idx) => (
                            <div key={idx} className="bg-[#f4f7f9] p-10 rounded-[32px] flex flex-col gap-6 h-full">
                                <div className={`w-12 h-12 rounded-full ${item.fallbackColor} flex items-center justify-center`}>
                                    <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[20px] font-bold text-[#090909]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[16px] text-[#5b616e] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. CAMPAIGN TRACKING SECTION */}
            <section className="py-6 md:py-8 lg:py-0 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Side */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-[500px]">
                            <img
                                src={campaignTrackingImage}
                                alt="Campaign Tracking Chart"
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-tight">
                            Campaign tracking
                        </h2>

                        <div className="flex flex-col gap-8">
                            {[
                                { title: "Performance data.", desc: "Get direct access to your campaign’s performance data" },
                                { title: "Campaign testing.", desc: "Test your campaigns with custom landing page tools and deep links" },
                                { title: "Custom reports.", desc: "Set up 20+ customizable performance reports" }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-black flex-shrink-0 flex items-center justify-center mt-1">
                                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-[18px] text-[#5b616e] leading-relaxed">
                                        <span className="font-bold text-[#090909]">{feature.title}</span> {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. CONVENIENT PAYMENTS SECTION */}
            <section className="py-6 md:py-8 lg:py-0 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Text Side (Left on Desktop) */}
                    <div className="flex flex-col gap-8 order-2 lg:order-1">
                        <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-tight">
                            Convenient payments
                        </h2>

                        <div className="flex flex-col gap-8">
                            {[
                                { title: "Paid locally.", desc: "Get compensated in your local currency, no matter where you live" },
                                { title: "Referral commissions.", desc: "Receive 50% of your referees’ trading fees for the first 3 months" },
                                { title: "Electronic payments.", desc: "Get paid electronically via PayPal or your bank account" }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-black flex-shrink-0 flex items-center justify-center mt-1">
                                        <svg width="12" height="12" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <p className="text-[18px] text-[#5b616e] leading-relaxed">
                                        <span className="font-bold text-[#090909]">{feature.title}</span> {feature.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Side (Right on Desktop) */}
                    <div className="flex justify-center order-1 lg:order-2">
                        <div className="w-full max-w-[500px]">
                            <img
                                src={convenientPaymentsImage}
                                alt="Payment Illustration"
                                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-500"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. TRUSTED PLATFORM SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-tight mb-16 max-w-2xl">
                        The most trusted cryptocurrency platform
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {trustedData.map((item, idx) => (
                            <div key={idx} className="bg-[#f4f7f9] p-10 rounded-[32px] flex flex-col gap-6 h-full">
                                <div className={`w-12 h-12 rounded-full ${item.fallbackColor} flex items-center justify-center`}>
                                    <img src={item.icon} alt="" className="w-6 h-6 object-contain" />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <h3 className="text-[20px] font-bold text-[#090909]">
                                        {item.title}
                                    </h3>
                                    <p className="text-[16px] text-[#5b616e] leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FINAL CTA SECTION (NEW) */}
            <section className="py-20 md:py-32 bg-white flex flex-col items-center text-center">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight leading-[1.05] text-[#090909]">
                        Become a Coinbase affiliate
                    </h2>
                    <p className="text-[18px] text-[#5b616e] mt-6 mb-10">
                        Promote Coinbase and earn money
                    </p>
                    <button className="bg-black text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-gray-800 transition-all">
                        Become an affiliate
                    </button>
                </div>
            </section>

        </div>
    );
};

export default Affiliates;