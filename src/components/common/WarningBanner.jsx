import React from 'react';

const WarningBanner = () => {
    return (
        <div className="w-full bg-[#FFB119] text-[#0A0B0D] py-2 px-4 text-center text-sm font-bold z-[1000] sticky top-0 shadow-sm">
            <p>
                ⚠️ STUDENT PROJECT: This is NOT affiliated with Coinbase. For educational purposes only.
            </p>
        </div>
    );
};

export default WarningBanner;
