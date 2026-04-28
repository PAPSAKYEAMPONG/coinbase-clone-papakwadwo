import React from 'react';
import logo from '../../assets/coinbaseLogoNavigation-4.svg';

export default function Footer() {
    return (
        <footer className="w-full bg-[#f8f9fa] pt-16 pb-12 border-t border-[#e5e7eb]">
            <div className="w-full max-w-[1280px] mx-auto px-6">

                {/* Main Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16 text-left">

                    {/* Column 1: Logo */}
                    <div className="col-span-1 hidden lg:block pr-8">
                        <img src={logo} alt="Coinbase" className="w-[60px] mb-6" />
                    </div>

                    {/* Column 2: Company & Learn */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Company</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">About</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Careers</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Affiliates</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Blog</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Press</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Security</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Investors</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Vendors</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Legal & privacy</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Cookie policy</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Cookie preferences</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Digital Asset Disclosures</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Learn</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Explore</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Market statistics</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Coinbase Bytes newsletter</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Crypto basics</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Tips & tutorials</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Crypto glossary</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Market updates</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">What is Bitcoin?</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">What is crypto?</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">What is a blockchain?</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">How to set up a crypto wallet?</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">How to send crypto?</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Taxes</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Individuals, Businesses & Institutions */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Individuals</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Buy & sell</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Earn free crypto</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Base App</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Coinbase One</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Debit Card</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Businesses</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Asset Listings</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Coinbase Business</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Payments</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Commerce</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Token Manager</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Institutions</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Prime</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Staking</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Exchange</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">International Exchange</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Derivatives Exchange</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Verified Pools</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Developers */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Developers</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Developer Platform</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Base</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Server Wallets</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Embedded Wallets</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Base Accounts (Smart Wallets)</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Onramp & Offramp</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">x402</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Trade API</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Paymaster</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">OnchainKit</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Data API</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Verifications</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Node</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">AgentKit</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Staking</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Faucet</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Exchange API</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">International Exchange API</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Prime API</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Derivatives API</a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 5: Support & Prices */}
                    <div className="flex flex-col gap-8">
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Support</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Help center</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Contact us</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Create account</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">ID verification</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Account information</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Payment methods</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Account access</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Supported crypto</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Status</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Asset prices</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Bitcoin price</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Ethereum price</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Solana price</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">XRP price</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[#0a0b0d] font-semibold text-[15px] mb-4">Stock prices</h3>
                            <ul className="flex flex-col gap-3">
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">NVIDIA price</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Apple price</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Microsoft price</a></li>
                                <li><a href="#" className="text-[#5b616e] hover:text-[#0052FF] hover:underline text-[14px] transition">Amazon price</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Socials & Copyright */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between border-t border-[#e5e7eb] pt-8 text-[#5b616e] text-[15px]">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4 md:mb-0">
                        <span>© 2026 Coinbase</span>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-[#0052FF] transition">Privacy</a>
                            <span>•</span>
                            <a href="#" className="hover:text-[#0052FF] transition">Terms & Conditions</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 cursor-pointer hover:text-[#0052FF] transition">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="2" y1="12" x2="22" y2="12"></line>
                            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        <span className="font-medium">Global</span>
                        <span>•</span>
                        <span>English</span>
                    </div>
                </div>
                {/* Disclaimer */}
                <div className="mt-12 pt-8 border-t border-[#e5e7eb]">
                    <p className="text-[#5b616e] text-[13px] leading-relaxed text-center italic">
                        ⚠️ Disclaimer: This website is a demo project created for educational purposes. It is not a real cryptocurrency platform. 
                        Please do not enter any real personal information, banking details, or passwords. 
                        All data entered is for simulation only and is not stored or processed by any real financial institution.
                    </p>
                </div>

            </div>
        </footer>
    );
}
