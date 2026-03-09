import React from 'react';
import earthImage from '../assets/careers/Earth_-_Neutral_bkg_-_FINAL2.avif';

const cultureCards = [
    {
        title: "Apolitical",
        description: "Our mission is ambitious and important. We don’t engage in social or political activism that is unrelated to our mission while at work. We seek to make the workplace a refuge from division, so we can stay focused on making progress toward the mission."
    },
    {
        title: "Remote-first, not remote-only",
        description: "Most roles are remote-first, with in-office requirements noted when applicable. As a remote employee, you'll be asked to join periodic in-person events. We believe flexibility boosts productivity, while in-person collaboration drives innovation."
    },
    {
        title: "Championship team",
        description: "We have high expectations for performance and delivering results, and thrive as a team of individual star performers. Outperformance is met with outsized reward. Unremarkable performance gets a generous severance package."
    }
];

const Careers = () => {
    return (
        <div className="min-h-screen font-sans overflow-x-hidden">

            <div className="bg-[#000000] text-white">

                {/* 1. SUB-NAVIGATION */}
                <div className="border-b border-white/10 sticky top-0 bg-[#000000] z-50">
                    <div className="max-w-[1280px] mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                        <div className="text-[20px] md:text-[24px] font-medium tracking-tight">Careers</div>

                        <div className="hidden lg:flex items-center gap-6 text-[13px] font-bold text-white/70">
                            <a href="#overview" className="text-white">Overview</a>
                            <a href="#mission" className="hover:text-white transition-colors">Mission & Culture</a>
                            <a href="#groups" className="hover:text-white transition-colors">Product Groups</a>
                            <a href="#internships" className="hover:text-white transition-colors">Internships</a>
                            <a href="#interview" className="hover:text-white transition-colors">How to Interview</a>
                            <a href="#ability" className="hover:text-white transition-colors">Extraordinary Ability</a>
                        </div>


                    </div>
                </div>

                {/* 2. HERO SECTION */}
                <section className="pt-20 md:pt-32 pb-10 flex flex-col items-center text-center px-6">
                    <div className="max-w-[900px]">
                        <h1 className="text-[56px] md:text-[88px] font-medium tracking-tight leading-[1.05] mb-10">
                            Working at Coinbase isn't for the faint of heart.
                        </h1>

                        <div className="max-w-[640px] mx-auto flex flex-col items-center gap-10">
                            <p className="text-[16px] md:text-[18px] text-white/70 leading-[1.6]">
                                You will be pushed beyond what you think you're capable of. You will be surrounded by others who excel in their disciplines and expect the same from you. But for those who embrace the challenge, it can be the most impactful work of your career.
                            </p>

                            <button className="bg-[#0052FF] text-white px-8 py-4 rounded-full text-[16px] font-bold hover:bg-[#0045D8] transition-all w-fit">
                                View open roles
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 w-full max-w-[1200px] flex justify-center">
                        <img
                            src={earthImage}
                            alt="Earth at night"
                            className="w-full h-auto object-contain scale-110 md:scale-125 pointer-events-none"
                        />
                    </div>
                </section>
            </div>

            <div className="bg-white text-[#090909]">

                {/* 3. WHO WE ARE */}
                <section className="py-20 md:py-32 px-6">
                    <div className="max-w-[900px] mx-auto text-center flex flex-col gap-8">
                        <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight">
                            Who we are
                        </h2>
                        <div className="text-[18px] md:text-[20px] leading-[1.6] text-[#5b616e] flex flex-col gap-8">
                            <p>
                                We are <span className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-blue-600">builders</span> and <span className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-blue-600">techno-optimists</span>. We believe crypto is the most important technology to create more <span className="underline decoration-1 underline-offset-4 cursor-pointer hover:text-blue-600">economic freedom</span> in the world.
                            </p>
                            <p>
                                We believe in sound money, property rights, free trade, decentralization, and putting power back in the hands of the individual.
                            </p>
                            <p>
                                Let's help 1 billion people access an open financial system daily through our products.
                            </p>
                        </div>
                    </div>
                </section>

                {/* 4. WELCOME TO COINBASE */}
                <section className="py-20 md:py-32 px-6 bg-white">
                    <div className="max-w-[1280px] mx-auto">
                        <div className="text-center max-w-[800px] mx-auto mb-16">
                            <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight mb-6">
                                Welcome to Coinbase
                            </h2>
                            <p className="text-[18px] text-[#5b616e] leading-relaxed">
                                Our cultural tenets describe how we treat each other and operate day-to-day, so everyone understands how we interact and get work done in service of our mission.
                            </p>
                            <button className="mt-8 bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition-all">
                                Explore our culture
                            </button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {cultureCards.map((card, idx) => (
                                <div key={idx} className="bg-[#fcfcfc] p-10 rounded-[32px] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <h3 className="text-[24px] font-medium mb-4">{card.title}</h3>
                                    <p className="text-[16px] text-[#5b616e] leading-relaxed">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 5. ALTERNATIVE WAYS TO JOIN */}
                <section className="py-20 md:py-32 px-6 bg-white">
                    <div className="max-w-[1280px] mx-auto">
                        <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight text-center mb-16 text-[#090909]">
                            Alternative ways <br /> to join the team
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Card 1 */}
                            <div className="bg-[#f4f7f9] p-12 rounded-[32px] flex flex-col justify-between gap-8 h-full">
                                <div>
                                    <h3 className="text-[24px] font-medium mb-4 text-[#090909]">Extraordinary ability</h3>
                                    <p className="text-[16px] text-[#5b616e] leading-relaxed">
                                        Have you achieved the extraordinary, but don’t see a role that fits? Apply now by telling us your story.
                                    </p>
                                </div>
                                <button className="bg-black text-white px-6 py-3 rounded-full font-bold w-fit hover:bg-gray-800 transition-all">
                                    Learn more
                                </button>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-[#f4f7f9] p-12 rounded-[32px] flex flex-col justify-between gap-8 h-full">
                                <div>
                                    <h3 className="text-[24px] font-medium mb-4 text-[#090909]">Contract roles</h3>
                                    <p className="text-[16px] text-[#5b616e] leading-relaxed">
                                        Support our core mission with a contract role via our Managed Service Provider.
                                    </p>
                                </div>
                                <button className="bg-black text-white px-6 py-3 rounded-full font-bold w-fit hover:bg-gray-800 transition-all">
                                    Find contract roles
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 6. BLUE CTA BANNER */}
                <section className="bg-[#0052FF] py-24 px-6 text-center text-white">
                    <div className="max-w-[900px] mx-auto">
                        <h2 className="text-[40px] md:text-[64px] font-medium tracking-tight leading-[1.1] mb-10">
                            Join us in our mission to increase economic freedom in the world
                        </h2>
                        <button className="bg-white text-[#0052FF] px-8 py-4 rounded-full text-[16px] font-bold hover:bg-gray-100 transition-all">
                            View open roles
                        </button>
                    </div>
                </section>

                {/* 7. LEGAL FOOTER */}
                <section className="py-20 px-6 max-w-[1280px] mx-auto bg-white">
                    <div className="text-[14px] text-[#5b616e] flex flex-col gap-6">
                        <h4 className="font-bold text-[#090909]">Commitment to Equal Opportunity</h4>
                        <p>
                            Coinbase is committed to diversity in its workforce and is proud to be an Equal Opportunity Employer. All qualified applicants will receive consideration for employment without regard to race, color, religion, creed, gender, national origin, age, disability, veteran status, sex, gender expression or identity, sexual orientation or any other basis protected by applicable law. Coinbase will also consider for employment qualified applicants with criminal histories in a manner consistent with applicable federal, state and local law. For US applicants, you may view the Know Your Rights notice <span className="underline cursor-pointer">here</span>. Additionally, Coinbase participates in the <span className="underline cursor-pointer">E-Verify program</span> in certain locations, as required by law.
                        </p>
                        <p>
                            Coinbase is also committed to providing reasonable accommodations to individuals with disabilities. If you need a reasonable accommodation because of a disability for any part of the employment process, please contact us at accommodations[at]coinbase.com to let us know the nature of your request and your contact information. For quick access to screen reading technology compatible with this site <span className="underline cursor-pointer">click here to download</span> a free compatible screen reader (<span className="underline cursor-pointer">free step by step tutorial can be found here</span>).
                        </p>

                        <h4 className="font-bold text-[#090909] mt-4">Global Data Privacy Notice for Job Candidates and Applicants</h4>
                        <p>
                            Depending on your location, the General Data Protection Regulation (GDPR) and California Consumer Privacy Act (CCPA) may regulate the way we manage the data of job applicants. Our full notice outlining how data will be processed as part of the application procedure for applicable locations is available <span className="underline cursor-pointer">here</span>. By submitting your application, you are agreeing to our use and processing of your data as required.
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Careers;