'use client';
import {useState, useEffect} from 'react';
import Link from 'next/link';

export default function NotFound() {
    const [mousePos, setMousePos] = useState({x: 0, y: 0});

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({x: e.clientX, y: e.clientY});
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden flex items-center justify-center">
            <div className="fixed inset-0 z-0">
                <div
                    className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-cyan-900/20"></div>

                {/* Floating orbs */}
                <div
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div
                    className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

                {/* Grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
                        backgroundSize: '50px 50px'
                    }}
                ></div>

                {/* Mouse follower */}
                <div
                    className="absolute w-96 h-96 bg-gradient-radial from-purple-500/5 to-transparent rounded-full pointer-events-none transition-all duration-1000 ease-out"
                    style={{
                        left: mousePos.x - 192,
                        top: mousePos.y - 192,
                    }}
                ></div>
            </div>

            <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
                <div className="mb-8">
                    <h1 className="text-9xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                        404
                    </h1>
                </div>

                <div className="mb-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 animate-bounce">
                        Sayfa Bulunamadı!
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        Aradığınız sayfa galaksinin uzak bir köşesinde kaybolmuş olabilir. 🚀
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
                    <a
                        href="/"
                        className="group bg-gradient-to-r from-purple-600 to-cyan-600 px-8 py-4 rounded-xl font-medium hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105"
                    >
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="currentColor"
                   viewBox="0 0 20 20">
                <path fillRule="evenodd"
                      d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                      clipRule="evenodd"/>
              </svg>
              <span>Ana Sayfaya Dön</span>
            </span>
                    </a>

                    <button
                        onClick={() => window.history.back()}
                        className="group backdrop-blur-md bg-gray-900/30 border border-gray-800/50 px-8 py-4 rounded-xl font-medium hover:bg-gray-900/40 hover:border-gray-700/50 transition-all duration-300 transform hover:scale-105"
                    >
            <span className="flex items-center space-x-2">
              <svg className="w-5 h-5 group-hover:-rotate-12 transition-transform" fill="currentColor"
                   viewBox="0 0 20 20">
                <path fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"/>
              </svg>
              <span>Geri Git</span>
            </span>
                    </button>
                </div>
                <div className="relative">
                    <div className="absolute -top-20 left-10 text-purple-400/30 animate-bounce delay-100">
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="absolute -top-16 right-16 text-cyan-400/30 animate-bounce delay-300">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                    </div>

                    <div className="absolute -bottom-8 left-20 text-pink-400/30 animate-bounce delay-500">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}