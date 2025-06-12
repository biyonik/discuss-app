import { Post } from "@prisma/client";
import React from "react";

interface PostActionButtonsGroupProps {
    post: Post
}

export default function PostActionButtonsGroup({post}: PostActionButtonsGroupProps) {
    return (
        <div className="flex items-center space-x-6 text-gray-400">
            <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
                <span className="text-sm">1 yorum</span>
            </button>

            <button className="flex items-center space-x-2 hover:text-white transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <span className="text-sm">Paylaş</span>
            </button>
        </div>
    )
}