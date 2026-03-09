import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function AssetDetail() {
    return (
        <div className="w-full min-h-screen bg-white font-sans flex flex-col">
            <Navbar />

            <main className="flex-grow flex flex-col items-center justify-center p-8">
                <h1 className="text-4xl font-bold mb-4">Asset Detail Page</h1>
                <p className="text-gray-500 text-lg">
                    This page is currently being rebuilt.
                </p>
            </main>

            <Footer />
        </div>
    );
}
