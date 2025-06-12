'use client';
import { useState, useEffect } from 'react';

export default function LoadingPage () {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 0;
                return prev + Math.random() * 15;
            });
        }, 200);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden flex items-center justify-center">
            {/* Animated Background */}
            <div className="fixed inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>

                {/* Floating orbs with faster animation */}
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>
                <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-ping delay-500"></div>
                <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-ping delay-1000"></div>

                {/* Moving grid */}
                <div
                    className="absolute inset-0 opacity-[0.02] animate-pulse"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-lg mx-auto px-6">
                {/* Loading Spinner */}
                <div className="mb-8 flex justify-center">
                    <div className="relative">
                        {/* Outer ring */}
                        <div className="w-24 h-24 border-4 border-gray-800 rounded-full animate-spin">
                            <div className="w-full h-full border-4 border-transparent border-t-purple-500 border-r-cyan-500 rounded-full animate-spin"></div>
                        </div>

                        {/* Inner ring */}
                        <div className="absolute inset-2 w-16 h-16 border-2 border-gray-700 rounded-full animate-spin">
                            <div className="w-full h-full border-2 border-transparent border-b-pink-500 border-l-blue-500 rounded-full animate-spin" style={{ animationDirection: 'reverse' }}></div>
                        </div>

                        {/* Center dot */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>
                </div>

                {/* Loading Text */}
                <div className="mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2 animate-pulse">
                        Yükleniyor...
                    </h2>
                    <p className="text-gray-400 animate-pulse">
                        Harika içerikler hazırlanıyor ✨
                    </p>
                </div>

                {/* Progress Bar */}
                <div className="mb-8">
                    <div className="w-full bg-gray-800/50 rounded-full h-2 overflow-hidden">
                        <div
                            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-300 ease-out"
                            style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                        {Math.round(Math.min(progress, 100))}% tamamlandı
                    </p>
                </div>

                {/* Floating Dots */}
                <div className="flex justify-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
                    <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-100"></div>
                    <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                </div>
            </div>
        </div>
    );
};