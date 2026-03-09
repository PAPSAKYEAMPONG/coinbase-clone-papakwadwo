import React from 'react';
import { FiMenu, FiSearch, FiBell, FiPieChart } from 'react-icons/fi';
import { BsCircleHalf, BsLayers, BsCashStack } from 'react-icons/bs';
import { MdOutlineDynamicFeed } from 'react-icons/md';
import coinbaseLogo from '../../assets/coinbaseLogoNavigation-4.svg';

export default function PhoneHeroGraphic() {
    return (
        <div className="relative w-full max-w-[400px] h-full min-h-[550px] bg-gradient-to-b from-[#0045D8] to-[#0052FF] rounded-t-[40px] pt-4 px-3 flex flex-col mx-auto lg:mx-0 overflow-hidden shadow-2xl">
            {/* Phone Frame */}
            <div className="flex-1 bg-white rounded-t-[32px] rounded-b-[0px] rounded-b-none p-5 pb-0 shadow-xl flex flex-col relative z-10 border-x-4 border-t-4 border-white">

                {/* Top Header */}
                <div className="flex items-center justify-between mb-6">
                    <FiMenu className="text-gray-800 text-xl cursor-pointer" />

                    <div className="flex items-center gap-2">
                        <div className="flex items-center bg-gray-100 rounded-full px-3 py-1.5 w-[140px]">
                            <FiSearch className="text-gray-500 text-sm mr-2" />
                            <span className="text-gray-500 text-sm font-medium">Search</span>
                        </div>

                        <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
                            <div className="bg-white rounded-full p-1 shadow-sm px-2 flex items-center justify-center">
                                {/* Coinbase C SVG simplified or 'C' text */}
                                <span className="font-bold text-xs" style={{ fontFamily: 'sans-serif' }}>C</span>
                            </div>
                            <div className="px-2 cursor-pointer flex items-center justify-center">
                                <MdOutlineDynamicFeed className="text-gray-400 rotate-90 text-sm" />
                            </div>
                        </div>
                    </div>

                    <FiBell className="text-gray-800 text-xl cursor-pointer" />
                </div>

                {/* Balance Section */}
                <div className="mb-2 relative">
                    <h2 className="text-[34px] font-bold text-gray-900 tracking-tight leading-none">$33,683.80</h2>

                    <div className="absolute right-0 top-0">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200 transition">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"></polyline></svg>
                        </div>
                    </div>

                    <div className="flex items-center text-[#098551] text-sm font-medium mt-1 gap-1">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                        $131.36 (1.38%) 1D
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 ml-1"><polyline points="9 18 15 12 9 6"></polyline></svg>
                    </div>
                </div>

                {/* Chart Area Mock */}
                <div className="relative h-32 w-full mt-4 -mx-5 px-5" style={{ width: 'calc(100% + 2.5rem)' }}>
                    <svg className="absolute bottom-0 w-full h-[120%]" preserveAspectRatio="none" viewBox="0 0 300 100">
                        <defs>
                            <linearGradient id="chart-gradient" x1="0" x2="0" y1="0" y2="1">
                                <stop offset="0%" stopColor="#0052FF" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#0052FF" stopOpacity="0.0" />
                            </linearGradient>
                        </defs>
                        {/* Dashed background pattern for the grid */}
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#f0f0f0" strokeWidth="0.5" />
                        </pattern>
                        <rect width="300" height="100" fill="url(#grid)" />

                        {/* The fill area */}
                        <path d="M0 60 C30 50, 40 70, 70 65 C100 60, 110 50, 140 55 C170 60, 190 40, 220 45 C250 50, 260 35, 290 20 L300 15 L300 100 L0 100 Z" fill="url(#chart-gradient)" />
                        {/* The line */}
                        <path d="M0 60 C30 50, 40 70, 70 65 C100 60, 110 50, 140 55 C170 60, 190 40, 220 45 C250 50, 260 35, 290 20 L300 15" fill="none" stroke="#0052FF" strokeWidth="2" />

                        <circle cx="295" cy="17" r="4" fill="#0052FF" />
                        <circle cx="295" cy="17" r="8" fill="#0052FF" fillOpacity="0.2" />
                    </svg>
                </div>

                {/* Time Filters */}
                <div className="flex justify-between items-center text-xs font-semibold text-gray-500 mb-6 mt-2 relative z-10 px-2">
                    <span className="cursor-pointer hover:text-gray-900">1H</span>
                    <span className="cursor-pointer bg-[#0052FF]/10 text-[#0052FF] px-2 py-1 rounded-full">1D</span>
                    <span className="cursor-pointer hover:text-gray-900">1W</span>
                    <span className="cursor-pointer hover:text-gray-900">1M</span>
                    <span className="cursor-pointer hover:text-gray-900">1Y</span>
                    <span className="cursor-pointer hover:text-gray-900">ALL</span>
                </div>

                {/* Assets List Mock */}
                <div className="flex flex-col gap-4 mt-2">

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-700">
                                <BsCircleHalf />
                            </div>
                            <span className="font-bold text-gray-900">Crypto</span>
                        </div>
                        <span className="text-gray-900 font-medium">$14,186.12</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-700">
                                <FiPieChart />
                            </div>
                            <span className="font-bold text-gray-900">Stocks</span>
                        </div>
                        <span className="text-gray-900 font-medium">$8,133.98</span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-700">
                                <BsLayers />
                            </div>
                            <span className="font-bold text-gray-900">Derivatives</span>
                        </div>
                        <span className="text-[#098551] font-medium flex items-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            $148.84
                        </span>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-700">
                                <BsCircleHalf style={{ transform: 'rotate(90deg)' }} />
                            </div>
                            <span className="font-bold text-gray-900">Predictions</span>
                        </div>
                        <span className="text-[#098551] font-medium flex items-center gap-1">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                            $42.69
                        </span>
                    </div>

                    <div className="flex items-center justify-between pb-8">
                        <div className="flex items-center gap-3">
                            <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center text-gray-700">
                                <BsCashStack />
                            </div>
                            <span className="font-bold text-gray-900">Cash</span>
                        </div>
                        <span className="text-gray-900 font-medium">$10,124.22</span>
                    </div>

                </div>

            </div>
        </div>
    );
}
