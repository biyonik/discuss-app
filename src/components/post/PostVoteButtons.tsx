'use client';
import { useState } from 'react';

interface VoteButtonsProps {
    postId: string;
    initialVotes?: number;
}

export default function VoteButtons({ postId, initialVotes = 0 }: VoteButtonsProps) {
    const [votes, setVotes] = useState(initialVotes);
    const [userVote, setUserVote] = useState<'up' | 'down' | null>(null);

    const handleVote = async (type: 'up' | 'down') => {
        // TODO: API call to vote
        console.log(`Voting ${type} on post ${postId}`);

        if (userVote === type) {
            // Remove vote
            setUserVote(null);
            setVotes(votes + (type === 'up' ? -1 : 1));
        } else {
            // Add or change vote
            const change = userVote ? (type === 'up' ? 2 : -2) : (type === 'up' ? 1 : -1);
            setUserVote(type);
            setVotes(votes + change);
        }
    };

    return (
        <div className="flex flex-col items-center space-y-1">
            <button
                onClick={() => handleVote('up')}
                className={`p-1 transition-colors ${
                    userVote === 'up'
                        ? 'text-purple-400'
                        : 'text-gray-400 hover:text-purple-400'
                }`}
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                </svg>
            </button>

            <span className={`text-sm font-medium ${
                userVote === 'up' ? 'text-purple-400' :
                    userVote === 'down' ? 'text-red-400' :
                        'text-gray-300'
            }`}>
        {votes}
      </span>

            <button
                onClick={() => handleVote('down')}
                className={`p-1 transition-colors ${
                    userVote === 'down'
                        ? 'text-red-400'
                        : 'text-gray-400 hover:text-red-400'
                }`}
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    );
}