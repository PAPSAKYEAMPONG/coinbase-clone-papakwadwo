import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaApple } from 'react-icons/fa';
import logo from '../assets/coinbaseLogoNavigation-4.svg';

export default function SignUp() {
    return (
        <div className="min-h-screen bg-[#000000] text-white font-sans flex flex-col p-6">
            {/* Header / Logo */}
            <div className="mb-12">
                <Link to="/">
                    <img src={logo} alt="Coinbase" className="h-[32px] w-[32px]" />
                </Link>
            </div>

            {/* Form Container */}
            <div className="flex-grow flex flex-col items-center justify-center -mt-10">
                <div className="w-full max-w-[400px]">
                    <div className="mb-8">
                        <h1 className="text-[32px] font-medium tracking-tight mb-2">
                            Create your account
                        </h1>
                        <p className="text-[#FFB119] text-[14px] font-medium mb-4">
                            ⚠️ Demo app – DO NOT use your real password
                        </p>
                        <p className="text-[16px] text-white/60 leading-snug">
                            Access all that Coinbase has to offer with a single account.
                        </p>
                    </div>

                    <form className="flex flex-col gap-6 w-full">
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-white/90">Email</label>
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full bg-transparent border border-white/20 rounded-[8px] p-4 text-[16px] focus:outline-none focus:border-[#0052FF] transition-colors placeholder:text-white/40"
                            />
                        </div>

                        <button className="w-full bg-[#1a2b4b] text-white/50 py-4 rounded-full font-bold text-[16px] cursor-not-allowed">
                            Continue
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center gap-4 my-8">
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                        <span className="text-white/40 text-[12px] font-medium uppercase tracking-widest">OR</span>
                        <div className="h-[1px] flex-grow bg-white/10"></div>
                    </div>

                    {/* Social Buttons */}
                    <div className="flex flex-col gap-3">
                        <button className="w-full bg-[#1e2329] border border-transparent hover:border-white/10 transition-colors py-4 px-6 rounded-full flex items-center justify-center gap-3 font-bold text-[16px]">
                            <FaGoogle className="text-[18px]" />
                            Sign up with Google
                        </button>
                        <button className="w-full bg-[#1e2329] border border-transparent hover:border-white/10 transition-colors py-4 px-6 rounded-full flex items-center justify-center gap-3 font-bold text-[16px]">
                            <FaApple className="text-[20px]" />
                            Sign up with Apple
                        </button>
                    </div>

                    {/* Sign In Link */}
                    <div className="mt-10 text-center">
                        <p className="text-[16px] font-medium text-white/90">
                            Already have an account? <Link to="/signin" className="text-[#0052FF] hover:underline">Sign in</Link>
                        </p>
                    </div>

                    {/* Footer Legal Messaging */}
                    <div className="mt-12 text-center">
                        <p className="text-[12px] text-white/40 leading-relaxed px-4">
                            By creating an account you certify that you are over the age of 18 and agree to our
                            <a href="#" className="underline mx-1">Privacy Policy</a> and
                            <a href="#" className="underline ml-1">Cookie Policy</a>.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
