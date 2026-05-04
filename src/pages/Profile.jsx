import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const res = await fetch(`${API_URL}/api/auth/profile`, {
                    credentials: 'true' // Allow cookies to be sent
                });
                
                const data = await res.json();
                
                if (res.ok) {
                    setUser(data);
                } else {
                    // Redirect to login if not authorized
                    navigate('/signin');
                }
            } catch (err) {
                setError('Failed to fetch profile. Ensure backend is running.');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            await fetch(`${API_URL}/api/auth/logout`, {
                method: 'POST',
                credentials: 'true'
            });
            navigate('/signin');
        } catch (err) {
            console.error('Logout failed', err);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-gray-500">Loading profile...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <p className="text-red-500">{error}</p>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                    <div className="h-16 w-16 rounded-full bg-[#0052FF] flex items-center justify-center text-white text-2xl font-bold">
                        {user?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
                        <p className="text-gray-500">{user?.email}</p>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-100 flex justify-between items-center">
                    <p className="text-sm text-gray-500">Member since {new Date(user?._id ? parseInt(user._id.substring(0, 8), 16) * 1000 : Date.now()).toLocaleDateString()}</p>
                    <button 
                        onClick={handleLogout}
                        className="bg-red-50 text-red-600 hover:bg-red-100 px-4 py-2 rounded-lg font-medium transition-colors"
                    >
                        Sign out
                    </button>
                </div>
            </div>
        </div>
    );
}
