import React from "react";

export default function CreatePost() {
    return (
        <div className="backdrop-blur-md bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 mb-6 hover:bg-gray-900/40 transition-all duration-300">
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full"></div>
                <input
                    type="text"
                    placeholder="Toplulukla ne paylaşmak istiyorsun?"
                    className="flex-1 bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                />
                <button className="bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300">
                    Paylaş
                </button>
            </div>
        </div>
    )
}