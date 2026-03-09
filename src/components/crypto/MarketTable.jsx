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

    // 1. Fetch real API data every 60 seconds
    async function fetchRealData() {
        try {
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

            // Fetch top 30 coins from CoinGecko so we can power all tabs
            const res = await fetch(
                'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false&price_change_percentage=24h'
            );

            if (!res.ok) throw new Error("CoinGecko API Error");
            const data = await res.json();

            const mapped = data.map(coin => ({
                id: coin.id,
                name: coin.name,
                logo: coin.image, // Using CoinGecko's provided logo URL!
                currentUsd: coin.current_price,
                fxRate: currentUsdToGhs,
                change: coin.price_change_percentage_24h ?? 0,
            }));

            rawDataRef.current = mapped;
            setAllCoins(mapped);
            setLastUpdated(new Date().toLocaleTimeString());
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    // Initial Fetch & 60s Polling Loop
    useEffect(() => {
        fetchRealData();
        const baseInterval = setInterval(fetchRealData, 60000);
        return () => clearInterval(baseInterval);
    }, []);

    // 2. Simulated Live Ticker Loop (Every 4 seconds)
    // Crypto APIs only update every few minutes. This applies a tiny +/- 0.05% jitter 
    // to the local state so the user visually sees the numbers "changing" actively.
    useEffect(() => {
        const tickInterval = setInterval(() => {
            if (rawDataRef.current.length > 0) {
                const tickedData = rawDataRef.current.map(coin => {
                    // Random multiplier between 0.9995 and 1.0005
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

    // 3. Derive displayed assets based on the active tab
    const getDisplayedAssets = () => {
        if (!allCoins.length) return [];
        let list = [];

        if (activeTab === 'Tradable') {
            // First 6 coins by market cap
            list = allCoins.slice(0, 6);
        } else if (activeTab === 'Top gainers') {
            // Sort top 30 by highest 24h percentage change
            list = [...allCoins].sort((a, b) => b.change - a.change).slice(0, 6);
        } else if (activeTab === 'New on Coinbase') {
            // Grab interesting smaller caps from the bottom of our 30 item list
            list = allCoins.slice(20, 26);
        }

        // Format for display
        return list.map(coin => {
            const isPositive = coin.change >= 0;
            const ghs = coin.currentUsd * coin.fxRate;
            return {
                ...coin,
                priceDisplay: 'GHS ' + ghs.toLocaleString('en-GH', { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
                changeDisplay: Math.abs(coin.change).toFixed(2) + '%',
                isPositive
            };
        });
    };

    const displayedAssets = getDisplayedAssets();

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
                            <button onClick={fetchRealData} className="underline text-white hover:text-gray-300">
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
                                    src={asset.logo} // Used from CoinGecko direct API
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
                {lastUpdated && (
                    <div className="text-center text-gray-500 text-[12px] pb-6 pt-2 flex items-center justify-center">
                        <span className="inline-block w-2 h-2 rounded-full bg-black-500 mr-2 animate-pulse"></span>

                    </div>
                )}

            </div>
        </div>
    );
}