import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUsers, FiMail } from 'react-icons/fi';
import { FaGoogle, FaApple } from 'react-icons/fa';
import logo from '../assets/coinbaseLogoNavigation-4.svg';

export default function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const res = await fetch(`${API_URL}/api/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                // Login successful
                navigate('/');
            } else {
                setError(data.message || 'Login failed');
            }
        } catch (err) {
            setError('Server error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

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
                    <h1 className="text-[32px] font-medium tracking-tight mb-2 text-center">
                        Sign in to Coinbase
                    </h1>
                    <p className="text-[#FFB119] text-[14px] font-medium text-center mb-8">
                        ⚠️ Demo app – DO NOT use your real password
                    </p>

                    {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}

                    <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-white/90">Email</label>
                            <input
                                type="email"
                                placeholder="Your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full bg-transparent border border-white/20 rounded-[8px] p-4 text-[16px] focus:outline-none focus:border-[#0052FF] transition-colors placeholder:text-white/40"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-medium text-white/90">Password</label>
                            <input
                                type="password"
                                placeholder="Your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full bg-transparent border border-white/20 rounded-[8px] p-4 text-[16px] focus:outline-none focus:border-[#0052FF] transition-colors placeholder:text-white/40"
                            />
                        </div>

                        <button 
                            disabled={loading || !email || !password}
                            className="w-full bg-[#0052FF] hover:bg-[#0045D8] disabled:bg-[#1a2b4b] disabled:text-white/50 text-white py-4 rounded-full font-bold text-[16px] transition-colors"
                        >
                            {loading ? 'Signing In...' : 'Continue'}
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
                            <FiUsers className="text-[20px]" />
                            Sign in with Passkey
                        </button>
                        <button className="w-full bg-[#1e2329] border border-transparent hover:border-white/10 transition-colors py-4 px-6 rounded-full flex items-center justify-center gap-3 font-bold text-[16px]">
                            <FaGoogle className="text-[18px]" />
                            Sign in with Google
                        </button>
                        <button className="w-full bg-[#1e2329] border border-transparent hover:border-white/10 transition-colors py-4 px-6 rounded-full flex items-center justify-center gap-3 font-bold text-[16px]">
                            <FaApple className="text-[20px]" />
                            Sign in with Apple
                        </button>
                    </div>

                    {/* Sign Up Link */}
                    <div className="mt-10 text-center">
                        <p className="text-[16px] font-medium text-white/90">
                            Don't have an account? <Link to="/signup" className="text-[#0052FF] hover:underline">Sign up</Link>
                        </p>
                    </div>

                    {/* Footer Links */}
                    <div className="mt-12 text-center flex flex-col gap-2">
                        <p className="text-[12px] text-white/40 leading-relaxed">
                            Not your device? Use a private window. See our
                            <a href="#" className="underline ml-1">Privacy Policy</a> for more info.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
