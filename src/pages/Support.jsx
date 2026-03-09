import React from 'react';
import { FiSearch, FiSettings, FiSmile, FiBook, FiLock, FiChevronRight, FiGlobe, FiGrid } from 'react-icons/fi';

const Support = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-[#090909]">

            {/* 1. CUSTOM SUPPORT HEADER */}
            <header className="border-b border-gray-100 py-4 px-6 md:px-10 lg:px-20 bg-white sticky top-0 z-50">
                <div className="max-w-[1280px] mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <span className="text-[#0052FF] font-bold text-xl tracking-tighter">coinbase</span>
                        <span className="text-[12px] font-bold text-gray-500 tracking-widest mt-1">HELP</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <FiGlobe className="text-gray-600 cursor-pointer hover:text-black transition-colors" />
                        <FiGrid className="text-gray-600 cursor-pointer hover:text-black transition-colors" />
                        <button className="bg-[#0052FF] text-white px-6 py-2 rounded-full font-bold text-[14px] hover:bg-[#0045D8] transition-colors">
                            Sign in
                        </button>
                    </div>
                </div>
            </header>

            {/* 2. HERO SECTION */}
            <section className="py-20 flex flex-col items-center text-center px-6">
                <h1 className="text-[40px] md:text-[56px] font-medium tracking-tight mb-12">
                    Hi there, <br /> How can we help?
                </h1>

                {/* Info Box */}
                <div className="bg-[#f0f5ff] rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-4 max-w-[800px] w-full mb-10 text-left">
                    <div className="w-6 h-6 rounded-full bg-[#0052FF] flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[12px] font-bold">i</span>
                    </div>
                    <div>
                        <p className="font-bold text-[16px]">Sign in for the best experience</p>
                        <p className="text-[14px] text-gray-600">
                            We'll be able to identify your account and resolve your issue more quickly.
                            <button className="text-[#0052FF] font-bold ml-2 hover:underline">Sign in</button>
                            <button className="text-[#0052FF] font-bold ml-4 hover:underline">I can't sign in</button>
                        </p>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="max-w-[800px] w-full relative group">
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400">
                        <FiSearch size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search articles"
                        className="w-full bg-[#f4f7f9] py-5 pl-16 pr-6 rounded-full text-[16px] outline-none border-2 border-transparent focus:border-blue-100 focus:bg-white transition-all shadow-sm"
                    />
                </div>
            </section>

            {/* 3. SUPPORT LINKS */}
            <section className="pb-32 px-6">
                <div className="max-w-[800px] mx-auto flex flex-col">
                    {[
                        { icon: <FiSettings />, label: "Self-serve links", badge: "New" },
                        { icon: <FiSmile />, label: "Ask anything" },
                        { icon: <FiBook />, label: "Support by topic" },
                        { icon: <FiLock />, label: "Lock or unlock my account" }
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-6 hover:bg-[#f4f7f9] cursor-pointer group border-b border-gray-100 first:border-t"
                        >
                            <div className="flex items-center gap-6">
                                <div className="text-xl text-gray-600 group-hover:text-black transition-colors">
                                    {item.icon}
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="font-medium text-[18px]">{item.label}</span>
                                    {item.badge && (
                                        <span className="bg-[#eef1ff] text-[#0052FF] text-[10px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                                            {item.badge}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <FiChevronRight className="text-gray-400 group-hover:text-black transition-colors" />
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. CUSTOM SUPPORT FOOTER */}
            <footer className="bg-white border-t border-gray-100 py-24 px-6 md:px-10 lg:px-20">
                <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12">

                    {/* Brand Column */}
                    <div className="flex flex-col gap-6 lg:col-span-2">
                        <span className="text-[#0052FF] font-bold text-2xl tracking-tighter">coinbase</span>
                        <p className="text-[#5b616e] text-[14px]">© 2026 Coinbase</p>
                        <div className="flex gap-4 text-[#5b616e] text-[14px]">
                            <span className="cursor-pointer hover:text-black hover:underline">Blog</span>
                            <span className="cursor-pointer hover:text-black hover:underline">Twitter</span>
                            <span className="cursor-pointer hover:text-black hover:underline">Facebook</span>
                        </div>
                    </div>

                    {/* Support Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-[16px]">Support</h4>
                        <ul className="flex flex-col gap-3 text-[#5b616e] text-[14px]">
                            <li className="cursor-pointer hover:text-black hover:underline">Submit a complaint</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Live status</li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-[16px]">Legal</h4>
                        <ul className="flex flex-col gap-3 text-[#5b616e] text-[14px]">
                            <li className="cursor-pointer hover:text-black hover:underline">Legal & Privacy</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Terms & Conditions</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Cookie policy</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Cookie preferences</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Digital asset disclosures</li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="flex flex-col gap-4">
                        <h4 className="font-bold text-[16px]">Company</h4>
                        <ul className="flex flex-col gap-3 text-[#5b616e] text-[14px]">
                            <li className="cursor-pointer hover:text-black hover:underline">Careers</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Affiliates</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Blog</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Press</li>
                            <li className="cursor-pointer hover:text-black hover:underline">Investors</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Support;
