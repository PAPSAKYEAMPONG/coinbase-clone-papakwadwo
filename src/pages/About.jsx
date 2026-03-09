import React from 'react';

import heroImg from '../assets/aboutPage/Unsplash-xE5SAT0WeTQ.avif';
import lockImg from '../assets/aboutPage/Lock_image.avif';
import complianceBlogImg1 from '../assets/aboutPage/0_IjELH5nf-6_Az3wk.avif';
import complianceBlogImg2 from '../assets/aboutPage/Lock_image.avif';
import complianceBlogImg3 from '../assets/aboutPage/identity.avif';
import complianceBlogImg4 from '../assets/aboutPage/0_IjELH5nf-6_Az3wk.avif';
import brianImg from '../assets/aboutPage/BRIAN_ARMSTRONG_01.avif';
import emilieImg from '../assets/aboutPage/EMILIE_CHOI_05.avif';
import alesiaImg from '../assets/aboutPage/ALESIA_HAAS_02.avif';
import workingImg from '../assets/aboutPage/working-at-cb-1.webp';
import ljImg from '../assets/aboutPage/LJ_Brock_Headshot_Warm_Background.avif';
import paulImg from '../assets/aboutPage/PAUL_GREWAL_01.avif';
import gregoryImg from '../assets/aboutPage/GREG_TUSAR_01.avif';
import maxImg from '../assets/aboutPage/MAX_BRANZBURG_01.avif';
import jesseImg from '../assets/aboutPage/Jesse_Pollak.avif';
import robImg from '../assets/aboutPage/rob_witoff.avif';

const stats = [
    { label: 'ANNUAL TRADING VOLUME*', value: '$1.2T' },
    { label: 'ASSETS ON PLATFORM*', value: '$376B' },
    { label: 'COUNTRIES', value: '100+' },
    { label: 'EMPLOYEES', value: '4,700+' },
];

const complianceBlogs = [
    {
        title: "How Coinbase monitors tokens we list for ongoing compliance",
        description: "Coinbase monitors the tokens we list to ensure they remain aligned with our listing standards.",
        image: complianceBlogImg1,
        color: "bg-blue-600"
    },
    {
        title: "A deep dive into sanctions compliance",
        description: "Coinbase is committed to compliance with relevant laws and regulations in the places we operate so customers can feel safe using our platform.",
        image: complianceBlogImg2,
        color: "bg-gray-800"
    },
    {
        title: "Identity verification and financial compliance",
        description: "Trust is built on dependable security and protections — which is why we make protecting your account & your digital assets our number one priority.",
        image: complianceBlogImg3,
        color: "bg-blue-500"
    },
    {
        title: "Regulators and Industry: Building a Path to Compliance 3.0",
        description: "Coinbase submitted its response to the U.S. Treasury Department’s request for comment on “Ensuring Responsible Development of Digital Assets,” which focuses on the risk of illicit finance in crypto.",
        image: complianceBlogImg4,
        color: "bg-blue-700"
    }
];

// UPDATED: Added the rest of the team from your screenshots
const executives = [
    { name: "Brian Armstrong", role: "Co-Founder & Chief Executive Officer", image: brianImg },
    { name: "Emilie Choi", role: "President & Chief Operating Officer", image: emilieImg },
    { name: "Alesia Haas", role: "Chief Financial Officer", image: alesiaImg },
    { name: "L.J. Brock", role: "Chief People Officer", image: ljImg },
    { name: "Paul Grewal", role: "Chief Legal Officer", image: paulImg },
    { name: "Gregory Tusar", role: "VP, Institutional Product", image: gregoryImg },
    { name: "Max Branzburg", role: "VP, Product", image: maxImg },
    { name: "Jesse Pollak", role: "VP, Engineering", image: jesseImg },
    { name: "Rob Witoff", role: "VP, Platform", image: robImg },
];

// NEW: Added Board of Directors data
const boardDirectors = [
    { name: "Brian Armstrong", role: "Co-Founder & Chief Executive Officer" },
    { name: "Fred Ehrsam", role: "Co-Founder & Board Director" },
    { name: "Fred Wilson", role: "Lead Independent Director" },
    { name: "Marc Andreessen", role: "Board Director" },
    { name: "Paul Clement", role: "Board Director" },
    { name: "Christa Davies", role: "Board Director" },
    { name: "Kelly Kramer", role: "Board Director" },
    { name: "Chris Lehane", role: "Board Director" },
    { name: "Tobias Lütke", role: "Board Director" },
    { name: "Gokul Rajaram", role: "Board Director" },
];

// NEW: Added Advisory Council data
const advisoryCouncil = [
    { name: "John Anzalone", role: "Founder of Impact Research Polling" },
    { name: "Dr. Mark T. Esper", role: "Former Secretary of Defense; Chairman, National Security Practice, Red Cell Partners" },
    { name: "Stephanie Murphy", role: "Former Congresswoman, Principal, Bridgelight Group LLC" },
    { name: "George Osborne", role: "Former Chancellor of the Exchequer of the United Kingdom" },
    { name: "Tim Ryan", role: "Former Congressman" },
    { name: "Patrick Toomey", role: "Former Senator" },
    { name: "Frances Townsend", role: "Frances Fragos Townsend Consulting, LLC" },
    { name: "David Urban", role: "Managing Director at BGR Group" },
    { name: "Antonio Villaraigosa", role: "Former Mayor of Los Angeles" },
    { name: "Keisha Lance Bottoms", role: "Former Mayor of Atlanta" },
    { name: "Kendrick Meek", role: "Former Congressman" },
    { name: "Bill Dudley", role: "Former President of Federal Reserve Bank of NY" },
    { name: "Kyrsten Sinema", role: "Former Senator" },
    { name: "Chris LaCivita", role: "President Donald Trump’s 2024 Co-Campaign Manager" },
    { name: "Luis Alberto Moreno", role: "Managing Director at Allen&Co" },
];

// --- COMPONENT ---

const About = () => {
    return (
        <div className="bg-white font-sans text-[#090909]">

            {/* 1. SUB-NAVIGATION */}
            <div className="border-b border-gray-100 hidden md:block sticky top-0 bg-white z-40">
                <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-end gap-8 text-[14px] font-medium text-gray-600">
                    <a href="#about" className="text-black border-b-2 border-black h-full flex items-center">About</a>
                    <a href="#careers" className="hover:text-black h-full flex items-center transition-colors">Careers</a>
                    <a href="#mission" className="hover:text-black h-full flex items-center transition-colors">Mission</a>
                    <a href="#press" className="hover:text-black h-full flex items-center transition-colors">Press</a>
                </div>
            </div>

            {/* 2. HERO SECTION */}
            <section className="py-16 md:py-24 overflow-hidden">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="rounded-[40px] overflow-hidden shadow-2xl">
                            <img
                                src={heroImg}
                                alt="Coinbase App on Phone"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col gap-6 order-1 lg:order-2">
                        <h1 className="text-[56px] md:text-[88px] font-medium tracking-tight leading-[1.05]">
                            About Coinbase
                        </h1>
                        <div className="text-[16px] md:text-[18px] leading-[1.6] font-normal flex flex-col gap-6 max-w-[540px]">
                            <p>
                                Crypto creates economic freedom by ensuring that people can participate fairly in the economy, and Coinbase is on a mission to increase economic freedom for more than 1 billion people. We're updating the century-old financial system by providing a trusted platform that makes it easy for people and institutions to engage with crypto assets, including trading, staking, safekeeping, spending, and fast, free global transfers.
                            </p>
                            <p>
                                We also provide critical infrastructure for onchain activity and support builders who share our vision that onchain is the new online. And together with the crypto community, we advocate for responsible rules to make the benefits of crypto available around the world.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. STATS SECTION */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 text-center">
                    <div className="max-w-[800px] mx-auto mb-16">
                        <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight leading-tight mb-8">
                            Coinbase powers the cryptoeconomy
                        </h2>
                        <div className="flex flex-col gap-6 text-[16px] md:text-[18px] text-[#5b616e]">
                            <p>
                                Customers around the world discover and begin their journeys with crypto through Coinbase.
                            </p>
                            <p>
                                245,000 ecosystem partners in over 100 countries trust Coinbase to easily and securely invest, spend, save, earn, and use crypto.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mt-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex flex-col gap-2">
                                <span className="text-[40px] md:text-[64px] font-medium tracking-tight">
                                    {stat.value}
                                </span>
                                <span className="text-[12px] md:text-[13px] font-bold text-[#5b616e] uppercase tracking-widest leading-relaxed">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-20 text-[12px] text-[#5b616e]">
                        * As of 12/31/25
                    </div>
                </div>
            </section>

            {/* 4. COMPLIANCE SECTION */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-8">
                        <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight leading-tight">
                            Our Commitment <br /> to Compliance
                        </h2>
                        <div className="text-[16px] md:text-[18px] leading-[1.6] text-[#5b616e] flex flex-col gap-6 max-w-[580px]">
                            <p>
                                A strong compliance foundation is critical to Coinbase's mission of being the most trusted crypto platform. To this end, we have developed a Compliance Program that is rooted in best practices from traditional financial services as well as innovative, sophisticated compliance technology to bring the crypto industry forward. We hold a high standard for what assets we list, what services we provide, and who has access to our products.
                            </p>
                            <p>
                                Check out the links below to learn more about our commitment to compliance and the technology we use to keep the crypto economy safe.
                            </p>
                        </div>

                        <div className="flex flex-col gap-6 mt-4">
                            {[
                                'Know-your-customer (KYC) verification',
                                'Compliance Requirements',
                                'Scaled Compliance Solutions'
                            ].map((item, idx) => (
                                <div key={idx} className="flex items-center gap-4 group cursor-pointer">
                                    <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10 3L4.5 8.5L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <span className="text-[16px] font-medium text-[#5b616e] group-hover:text-black border-b border-[#5b616e] group-hover:border-black transition-all">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="bg-[#f4f7f9] rounded-[48px] p-12 md:p-20 flex items-center justify-center overflow-hidden">
                            <img
                                src={lockImg}
                                alt="Compliance Lock Illustration"
                                className="w-full h-auto max-w-[500px] object-contain transform hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. RECENT COMPLIANCE BLOGS */}
            <section className="py-10 md:py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight mb-12">
                        Recent Compliance Blogs
                    </h2>

                    <div className="flex flex-col gap-6">
                        {complianceBlogs.map((blog, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col md:flex-row items-center bg-[#f4f7f9] rounded-[48px] overflow-hidden cursor-pointer hover:shadow-md transition-all duration-300"
                            >
                                <div className="w-full md:w-[45%] lg:w-[40%] h-[280px] md:h-auto flex items-center justify-center p-8 md:p-12 relative overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-auto object-contain max-h-[220px] relative z-10 group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="w-full md:w-[55%] lg:w-[60%] p-8 md:p-16 flex flex-col gap-4">
                                    <h3 className="text-[24px] md:text-[32px] font-medium leading-tight">
                                        {blog.title}
                                    </h3>
                                    <p className="text-[16px] md:text-[18px] text-[#5b616e] leading-relaxed">
                                        {blog.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. EXECUTIVE TEAM */}
            <section className="py-20 md:py-32 bg-white border-t border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight mb-16">
                        Our executive team
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {executives.map((exec, idx) => (
                            <div key={idx} className="flex flex-col gap-6 group cursor-pointer">
                                <div className="aspect-[4/5] rounded-[40px] overflow-hidden bg-[#e8e6df] relative flex items-center justify-center text-gray-400 font-medium">
                                    {/* Check if image exists, otherwise show placeholder text */}
                                    {exec.image ? (
                                        <img
                                            src={exec.image}
                                            alt={exec.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <span>No Image</span>
                                    )}
                                </div>

                                <div className="flex flex-col gap-1 border-t border-gray-200 pt-6">
                                    <h3 className="text-[24px] font-medium text-[#090909]">
                                        {exec.name}
                                    </h3>
                                    <p className="text-[16px] text-[#5b616e]">
                                        {exec.role}
                                    </p>
                                    <div className="mt-2 opacity-60 group-hover:opacity-100 transition-opacity">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. BOARD OF DIRECTORS */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight mb-16 text-[#090909]">
                        Our Board of Directors
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {boardDirectors.map((person, idx) => (
                            <div key={idx} className="flex flex-col gap-2 border-t border-gray-200 pt-6">
                                <h3 className="text-[18px] font-bold text-[#090909]">
                                    {person.name}
                                </h3>
                                <p className="text-[16px] text-[#5b616e] leading-snug">
                                    {person.role}
                                </p>
                                <div className="mt-2 opacity-60 hover:opacity-100 transition-opacity cursor-pointer w-fit">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. GLOBAL ADVISORY COUNCIL */}
            <section className="py-20 bg-white">
                <div className="max-w-[1280px] mx-auto px-6">
                    <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight mb-16 text-[#090909]">
                        Global Advisory Council
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {advisoryCouncil.map((person, idx) => (
                            <div key={idx} className="flex flex-col gap-2 border-t border-gray-200 pt-6">
                                <h3 className="text-[18px] font-bold text-[#090909]">
                                    {person.name}
                                </h3>
                                <p className="text-[16px] text-[#5b616e] leading-snug">
                                    {person.role}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 9. WORKING AT COINBASE */}
            <section className="py-20 md:py-32 bg-white">
                <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="flex flex-col gap-6 order-2 lg:order-1">
                        <h2 className="text-[40px] md:text-[56px] font-medium tracking-tight text-[#090909]">
                            Working at Coinbase
                        </h2>
                        <p className="text-[18px] text-[#5b616e] leading-relaxed max-w-md">
                            Our mission is to increase economic freedom in the world. Join us and make an impact at a global scale.
                        </p>
                        <a href="#" className="text-blue-600 font-medium hover:underline text-lg inline-flex items-center gap-1 mt-2">
                            View open positions
                        </a>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="rounded-[40px] overflow-hidden">
                            <img
                                src={workingImg}
                                alt="Working at Coinbase"
                                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 10. DISCLAIMER */}
            <section className="py-12 bg-[#f4f7f9] border-t border-gray-100">
                <div className="max-w-[1280px] mx-auto px-6">
                    <p className="text-[12px] md:text-[14px] text-[#5b616e] leading-relaxed">
                        By using this Site, you agree to the <a href="#" className="underline">Coinbase Terms of Service</a>, Coinbase branding guidelines, and all Coinbase rules and policies, as may be available and updated from time to time. All company, product and service names used in this website are for identification purposes only and do not imply endorsement. You acknowledge that Coinbase is the sole owner of Coinbase trademarks and promise not to use the Site content or Coinbase marks for personal or commercial use. Coinbase may review use of the branding materials at any time and reserves the right to terminate or modify any use.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;