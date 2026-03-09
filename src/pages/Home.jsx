import React from 'react';
import HeroImage from '/src/assets/Hero__4_.png';
import ReplaceBank from '/src/assets/Replace_Bank.png';
import ZeroFees from '/src/assets/zero_fees_us.png';
import Trade from '/src/assets/CB_LOLP__1_.png';
import Advanced from '/src/assets/Advanced.png';
import LearnUsdc from '/src/assets/0_4mVyVaU6yLa--GR_.png';
import LearnBank from '/src/assets/Replace_Bank.png';
import Takecareofyourmoney from '/src/assets/image.png';
import LearnBitcoin from '/src/assets/Learn_Illustration_Ultimate_Guide_Bitcoin.png';
import MarketTable from '../components/crypto/MarketTable';

export default function Home() {
    return (
        <div className="w-full bg-white flex flex-col items-center">

            {/* 1. HERO SECTION */}
            <section className="w-full max-w-[1400px] px-12 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center border-b border-gray-100">

                {/* Left Side: Hero Image provided by User */}
                <div className="order-2 lg:order-1 flex justify-center lg:justify-start lg:-ml-6 w-full relative">
                    <img
                        src={HeroImage}
                        alt="Coinbase Mobile App Interface"
                        className="w-full max-w-[500px] lg:max-w-[800px] object-cover rounded-[36px]"
                        style={{ clipPath: 'inset(0 0 0 0 round 36px 36px 36px 36px)' }}
                    />
                </div>

                {/* Right Side: Text & Form */}
                <div className="order-1 lg:order-2 flex flex-col items-center text-center lg:items-start lg:text-left pt-8 lg:pt-0 pl-0 lg:pl-[4rem] xl:pl-[0.5rem]">
                    <h1 className="text-[52px] md:text-[64px] md:text-[72px] md:text-[84px] font-small text-[#0a0b0d] leading-[1.05] tracking-tight mb-4" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
                        The future of<br />finance is here.
                    </h1>
                    <p className="text-sm md:text-[20px] text-[#0a0b0d] mb-10 font-small">
                        Trade crypto and more on a platform you can trust.
                    </p>

                    <form className="flex flex-col sm:flex-row w-full max-w-md lg:max-w-[480px] gap-3">
                        <input
                            type="email"
                            placeholder="satoshi@nakamoto.com"
                            className="flex-1 border border-[#cfd2d8] rounded-[4px] px-4 py-4 text-[16px] placeholder-gray-500 text-[#0a0b0d] focus:outline-none focus:ring-1 focus:ring-[#0052FF] focus:border-[#0052FF] transition"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#0052FF] hover:bg-[#0045D8] text-white font-medium rounded-full px-8 py-4 text-[16px] transition whitespace-nowrap"
                        >
                            Sign up
                        </button>
                    </form>
                </div>

            </section>

            {/* 2. MARKET TABLE SECTION */}
            <section className="w-full  mx-auto bg-gray-200">
                <MarketTable />
            </section>

            {/* section 3: Advanced Trading (Moved to top per real layout) */}
            <section className="w-full max-w-[1200px] mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                <div className="order-2 lg:order-1 flex justify-center w-full">
                    <img
                        src={Advanced}
                        alt="Coinbase Advanced Trading"
                        className="w-full max-w-[550px] md:max-w-[650px] object-contain rounded-[40px] drop-shadow-sm"
                    />
                </div>
                <div className="order-1 lg:order-2 flex flex-col items-start text-left lg:pr-8">
                    <h2
                        className="text-[20px] md:text-[28px] lg:text-[36px] font-medium text-[#0a0b0d] leading-[1.1] tracking-tight mb-6"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Powerful tools, designed<br className="hidden md:block lg:hidden xl:block" /> for the advanced trader.
                    </h2>
                    <p className="text-[10px] md:text-[17px] text-[#5b616e] mb-10 font-small leading-[1.6]">
                        Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
                    </p>
                    <button className="bg-[#0a0b0d] hover:bg-black text-white font-medium rounded-full px-8 py-4 text-[16px] transition whitespace-nowrap">
                        Start trading
                    </button>
                </div>
            </section>

            {/* section 4: Coinbase One */}
            <section className="w-full max-w-[1200px] mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                {/* Left Side: Text Description */}
                <div className="order-1 lg:order-1 flex flex-col items-start text-left lg:pr-12">

                    {/* Coinbase One Badge */}
                    <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-4 py-2 mb-8 shadow-sm">
                        <div className="w-5 h-5 bg-[#0a0b0d] rounded-full flex items-center justify-center">
                            <span className="text-white text-[10px] font-bold">C</span>
                        </div>
                        <span className="text-[13px] font-semibold tracking-wide text-gray-500">COINBASE ONE</span>
                    </div>

                    <h2
                        className="text-[40px] md:text-[48px] lg:text-[46px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-6"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Zero trading fees,<br />more rewards.
                    </h2>
                    <p className="text-[17px] md:text-[19px] text-[#5b616e] mb-10 font-medium leading-[1.6]">
                        Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
                    </p>
                    <button className="bg-[#0a0b0d] hover:bg-black text-white font-medium rounded-full px-8 py-4 text-[16px] transition whitespace-nowrap">
                        Claim free trial
                    </button>
                </div>

                {/* Right Side: Image inside Gray Container */}
                <div className="order-2 lg:order-2 flex justify-center w-full">
                    <div className="bg-[#f2f4f6] rounded-[48px] w-full max-w-[550px] aspect-[4/3] sm:aspect-square lg:aspect-[4/3] flex items-center justify-center overflow-hidden px-8 pt-12">
                        <img
                            src={ZeroFees}
                            alt="Coinbase One Zero Fees"
                            className="w-full max-w-[320px] object-contain drop-shadow-xl translate-y-4"
                        />
                    </div>
                </div>
            </section>


            {/* Section 5: Base App */}
            <section className="w-full max-w-[1200px] mx-auto px-6 py-20 lg:py-28 grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">

                {/* Left Side: Image (Order 1 on Desktop) */}
                <div className="order-2 lg:order-1 flex justify-center w-full">
                    <img
                        src={Trade}
                        alt="Base App Trading Features"
                        className="w-full max-w-[550px] object-contain drop-shadow-sm rounded-[48px]"
                    />
                </div>

                {/* Right Side: Text Description (Order 2 on Desktop) */}
                <div className="order-1 lg:order-2 flex flex-col items-start text-left lg:pl-0">

                    {/* Base App Badge */}
                    <div className="flex items-center gap-3 border border-gray-200 rounded-full px-4 py-2 mb-8 shadow-sm">
                        <div className="w-5 h-5 border-[3.5px] border-[#0052FF] rounded-full flex items-center justify-center">
                        </div>
                        <span className="text-[13px] font-semibold tracking-wide text-gray-500">BASE APP</span>
                    </div>

                    <h2
                        className="text-[40px] md:text-[48px] lg:text-[46px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-6"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Countless ways to earn<br />crypto with the Base App.
                    </h2>
                    <p className="text-[17px] md:text-[19px] text-[#5b616e] mb-10 font-medium leading-[1.6]">
                        An everything app to trade, create, discover, and chat, all in one place.
                    </p>
                    <button className="bg-[#0a0b0d] hover:bg-black text-white font-medium rounded-full px-8 py-4 text-[16px] transition whitespace-nowrap">
                        Learn more
                    </button>
                </div>

            </section>


            {/* Section 6: Crypto Basics (Learning) */}
            <div className="w-full bg-[#f8f9fa] border-t border-[#f2f4f6]">
                <section className="w-full max-w-[1200px] mx-auto px-6 py-20 lg:py-28">

                    {/* Header Row */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                        {/* Left: Title */}
                        <div className="flex-1">
                            <h2
                                className="text-[40px] md:text-[48px] lg:text-[56px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight"
                                style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                            >
                                New to crypto?<br />Learn some<br />crypto basics
                            </h2>
                        </div>

                        {/* Right: Text & Button */}
                        <div className="flex-1 max-w-[500px] flex flex-col items-start md:pb-2">
                            <p className="text-[17px] md:text-[19px] text-[#5b616e] mb-6 font-medium leading-[1.6]">
                                Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between
                            </p>
                            <button className="bg-[#0a0b0d] hover:bg-black text-white font-medium rounded-full px-8 py-4 text-[16px] transition whitespace-nowrap">
                                Read More
                            </button>
                        </div>
                    </div>

                    {/* 3 Cards Grid */}
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Card 1: USDC */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="mb-6 overflow-hidden rounded-[32px] aspect-[1.75] w-full">
                                <img src={LearnUsdc} alt="USDC Guide" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                            </div>
                            <h3 className="text-[24px] md:text-[28px] font-medium text-[#0a0b0d] leading-[1.2] tracking-tight mb-4">
                                USDC: The digital dollar for the global crypto economy
                            </h3>
                            <p className="text-[16px] text-[#5b616e] leading-[1.6]">
                                Coinbase believes crypto will be part of the solution for creating an open financial system that is both more efficient and more...
                            </p>
                        </div>

                        {/* Card 2: Bankless */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="mb-6 overflow-hidden rounded-[32px] aspect-[1.75] w-full">
                                <img src={LearnBank} alt="Crypto Bank Replace" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                            </div>
                            <h3 className="text-[24px] md:text-[28px] font-medium text-[#0a0b0d] leading-[1.2] tracking-tight mb-4">
                                Can crypto really replace your bank account?
                            </h3>
                            <p className="text-[16px] text-[#5b616e] leading-[1.6]">
                                If you're a big enough fan of crypto, you've probably heard the phrase "be your own bank" or the term "bankless" — the idea being that...
                            </p>
                        </div>

                        {/* Card 3: Best Time */}
                        <div className="flex flex-col group cursor-pointer">
                            <div className="mb-6 overflow-hidden rounded-[32px] aspect-[1.75] w-full">
                                <img src={LearnBitcoin} alt="Best time to invest" className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300" />
                            </div>
                            <h3 className="text-[24px] md:text-[28px] font-medium text-[#0a0b0d] leading-[1.2] tracking-tight mb-4">
                                When is the best time to invest in crypto?
                            </h3>
                            <p className="text-[16px] text-[#5b616e] leading-[1.6]">
                                Cryptocurrencies like Bitcoin can experience daily (or even hourly) price volatility. As with any kind of investment, volatility may cause...
                            </p>
                        </div>

                    </div>
                </section>
            </div>

            {/* Section 7: Final CTA (Take control) */}
            <section className="w-full max-w-[1200px] mx-auto px-6 pt-16 pb-12 lg:pt-24 lg:pb-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center border-b border-gray-100 mt-8">

                {/* Left Side: Text & Form */}
                <div className="flex flex-col items-start text-left lg:pr-8">
                    <h2
                        className="text-[48px] md:text-[64px] lg:text-[72px] font-medium text-[#0a0b0d] leading-[1.05] tracking-tight mb-4"
                        style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                    >
                        Take control<br />of your money
                    </h2>
                    <p className="text-[17px] md:text-[20px] text-[#0a0b0d] mb-8 font-medium">
                        Start your portfolio today and discover crypto
                    </p>

                    <form className="flex flex-col sm:flex-row w-full max-w-md lg:max-w-[480px] gap-3 relative z-10">
                        <input
                            type="email"
                            placeholder="satoshi@nakamoto.com"
                            className="flex-1 border border-[#cfd2d8] rounded-[4px] px-4 py-4 text-[16px] placeholder-gray-500 text-[#0a0b0d] focus:outline-none focus:ring-1 focus:ring-[#0052FF] focus:border-[#0052FF] transition"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-[#0052FF] hover:bg-[#0045D8] text-white font-medium rounded-full px-8 py-4 text-[16px] transition whitespace-nowrap"
                        >
                            Sign up
                        </button>
                    </form>
                </div>

                {/* Right Side: Image */}
                <div className="flex justify-center lg:justify-end w-full mt-10 lg:mt-0 relative z-0">
                    <img
                        src={Takecareofyourmoney}
                        alt="Take control of your money"
                        className="w-full max-w-[450px] md:max-w-[600px] object-contain drop-shadow-sm scale-[1.1] translate-x-4"
                    />
                </div>
            </section>

            {/* Disclaimer Text */}
            <div className="w-full mx-auto px-6 py-16 flex justify-center text-center pb-24">
                <p className="text-[12px] md:text-[13px] text-[#5b616e] leading-[1.8] max-w-[800px] font-medium">
                    <span className="block mb-6">DEX trading is offered by Coinbase Bermuda Technologies Ltd.</span>
                    Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or
                    solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii)
                    intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
                </p>
            </div>

        </div>
    );
}
