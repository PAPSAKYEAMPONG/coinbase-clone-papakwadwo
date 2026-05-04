import React, { useState, useEffect, useRef } from 'react';

const USD_TO_GHS = 15.8; // Fallback FX rate

export default function MarketTable() {
    const [activeTab, setActiveTab] = useState('Tradable');
    const [allCoins, setAllCoins] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [lastUpdated, setLastUpdated] = useState('');

    // Ref to hold raw data so we can apply local simulation ticks to it
    const rawDataRef = useRef([]);

    // 1. Fetch real API data from Backend
    async function fetchRealData(tab) {
        try {
            setLoading(true);
            setError(false);

            // Fetch live USD to GHS forex rate
            let currentUsdToGhs = USD_TO_GHS;
            try {
                const fxRes = await fetch('https://open.er-api.com/v6/latest/USD');
                const fxData = await fxRes.json();
                if (fxData?.rates?.GHS) currentUsdToGhs = fxData.rates.GHS;
            } catch (e) {
                console.warn("FX fetch failed, using fallback.");
            }

            // Determine endpoint based on tab
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            let endpoint = `${API_URL}/api/crypto`;
            if (tab === 'Top gainers') {
                endpoint = `${API_URL}/api/crypto/gainers`;
            } else if (tab === 'New on Coinbase') {
                endpoint = `${API_URL}/api/crypto/new`;
            }

            const res = await fetch(endpoint);

            if (!res.ok) throw new Error("Backend API Error");
            const data = await res.json();

            const mapped = data.map(coin => ({
                id: coin._id || coin.id || coin.symbol,
                name: coin.name,
                logo: coin.image, 
                currentUsd: coin.price,
                fxRate: currentUsdToGhs,
                change: coin.change24h ?? 0,
            }));

            // If the database is empty, fallback to some mock data to prevent empty state during testing
            if (mapped.length === 0) {
                console.warn("Database is empty, using fallback data for UI demonstration.");
                mapped.push({
                    id: 'btc', name: 'Bitcoin', logo: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png', currentUsd: 65000, fxRate: currentUsdToGhs, change: 2.5
                }, {
                    id: 'eth', name: 'Ethereum', logo: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png', currentUsd: 3500, fxRate: currentUsdToGhs, change: 1.8
                });
            }

            rawDataRef.current = mapped;
            setAllCoins(mapped);
            setLastUpdated(new Date().toLocaleTimeString());
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // Initial Fetch & when tab changes
    useEffect(() => {
        fetchRealData(activeTab);
    }, [activeTab]);

    // 2. Simulated Live Ticker Loop (Every 4 seconds)
    useEffect(() => {
        const tickInterval = setInterval(() => {
            if (rawDataRef.current.length > 0) {
                const tickedData = rawDataRef.current.map(coin => {
                    const jitter = 1 + (Math.random() * 0.001 - 0.0005);
                    return {
                        ...coin,
                        currentUsd: coin.currentUsd * jitter
                    };
                });
                rawDataRef.current = tickedData;
                setAllCoins(tickedData); // Trigger re-render with new values
            }
        }, 4000);
        return () => clearInterval(tickInterval);
    }, []);

    // 3. Derive displayed assets
    const displayedAssets = allCoins.slice(0, 6).map(coin => {
        const isPositive = coin.change >= 0;
        const ghs = coin.currentUsd * coin.fxRate;
        return {
            ...coin,
            priceDisplay: 'GHS ' + ghs.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
            changeDisplay: Math.abs(coin.change).toFixed(2) + '%',
            isPositive
        };
    });

    return (
        <div className="w-full max-w-[1200px] mx-auto px-0 py-12 lg:py-16 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center border-b border-gray-100">

            {/* Left Side: Text Description */}
            <div className="flex flex-col items-start text-left lg:pr-8">
                <h2
                    className="text-[36px] md:text-[44px] font-medium text-[#0a0b0d] leading-[1.1] tracking-tight mb-4"
                    style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
                >
                    Explore crypto like Bitcoin,<br />Ethereum, and Dogecoin.
                </h2>
                <p className="text-[16px] md:text-[18px] text-gray-500 mb-8 font-medium">
                    Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
                </p>
                <button className="bg-[#0a0b0d] hover:bg-black text-white font-medium rounded-full px-6 py-3 text-[15px] transition whitespace-nowrap">
                    See more assets
                </button>
            </div>

            {/* Right Side: Dark Table */}
            <div className="w-full bg-[#0a0b0d] rounded-[20px] overflow-hidden shadow-xl text-white">

                {/* Tabs */}
                <div className="flex items-center gap-4 px-6 pt-6 pb-3 border-b border-[#2b2d30]/50">
                    {['Tradable', 'Top gainers', 'New on Coinbase'].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`text-[14px] font-medium px-4 py-2 rounded-full transition-colors ${activeTab === tab
                                ? 'bg-[#2b2d30] text-white'
                                : 'text-gray-400 hover:text-white'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Table Content */}
                <div className="flex flex-col px-6 pb-4 pt-4 gap-4 min-h-[360px]">

                    {/* Loading State */}
                    {loading && (
                        <div className="text-gray-400 text-[15px] text-center py-10 animate-pulse">
                            <span className="inline-block w-6 h-6 border-2 border-gray-400 border-t-transparent rounded-full animate-spin mb-3"></span>
                            <p>Fetching live markets...</p>
                        </div>
                    )}

                    {/* Error State */}
                    {error && !loading && (
                        <div className="text-red-400 text-[15px] text-center py-12">
                            ⚠️ Failed to load markets.{' '}
                            <button onClick={() => fetchRealData(activeTab)} className="underline text-white hover:text-gray-300">
                                Retry
                            </button>
                        </div>
                    )}

                    {/* Live Asset Rows */}
                    {!loading && !error && displayedAssets.map((asset) => (
                        <div
                            key={asset.id}
                            className="flex items-center justify-between group cursor-pointer hover:bg-[#1a1b1d] -mx-3 px-3 py-2 rounded-xl transition"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={asset.logo}
                                    alt={asset.name}
                                    className="w-8 h-8 object-contain rounded-full bg-white"
                                />
                                <span className="font-medium text-[18px] text-white">
                                    {asset.name}
                                </span>
                            </div>

                            <div className="flex flex-col items-end">
                                <span className="font-medium text-[16px] text-white transition-all duration-300">
                                    {asset.priceDisplay}
                                </span>
                                <span className={`text-[13px] font-medium flex items-center gap-1 ${asset.isPositive ? 'text-[#098551]' : 'text-[#cf2030]'}`}>
                                    {asset.isPositive ? (
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    ) : (
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="7" x2="17" y2="17"></line>
                                            <polyline points="17 7 17 17 7 17"></polyline>
                                        </svg>
                                    )}
                                    {asset.changeDisplay}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Last Updated Footer */}
                {lastUpdated && !loading && !error && (
                    <div className="text-center text-gray-500 text-[12px] pb-6 pt-2 flex items-center justify-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                        Live updates active
                    </div>
                )}

            </div>
        </div>
    );
}