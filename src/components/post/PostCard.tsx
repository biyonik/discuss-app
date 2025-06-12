import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { tr } from 'date-fns/locale';

import { Post, User, Topic, Comment } from '@prisma/client';
import VoteButtons from "@/components/post/PostVoteButtons";

type PostWithExtras = Post & {
    user: User;
    topic: Topic;
    _count: {
        comments: number;
    };
};

interface PostCardProps {
    post: PostWithExtras;
}

export default function PostCard({ post }: PostCardProps) {
    const timeAgo = formatDistanceToNow(post.createdAt, {
        addSuffix: true,
        locale: tr
    });

    return (
        <article className="backdrop-blur-md bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:bg-gray-900/40 hover:border-gray-700/50 transition-all duration-300 group">
            <div className="flex items-start space-x-4">
                {/* Vote buttons */}
                <VoteButtons postId={post.id} />

                {/* Post content */}
                <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                        <Link
                            href={`/topics/${post.topic.slug}`}
                            className="text-xs bg-gradient-to-r from-purple-600/20 to-cyan-600/20 text-purple-400 px-2 py-1 rounded-full border border-purple-500/20 hover:bg-purple-600/30 transition-colors"
                        >
                            {post.topic.slug}
                        </Link>
                        <span className="text-gray-400 text-sm">u/{post.user.name}</span>
                        <span className="text-gray-500 text-sm">•</span>
                        <span className="text-gray-400 text-sm">{timeAgo}</span>
                    </div>

                    <Link href={`/posts/${post.id}`}>
                        <h2 className="text-lg font-medium text-white mb-3 group-hover:text-purple-300 transition-colors cursor-pointer">
                            {post.title}
                        </h2>
                    </Link>

                    <div className="flex items-center space-x-6 text-gray-400">
                        <Link
                            href={`/posts/${post.id}`}
                            className="flex items-center space-x-2 hover:text-white transition-colors"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm">{post._count.comments} yorum</span>
                        </Link>

                        <button className="flex items-center space-x-2 hover:text-white transition-colors">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                            </svg>
                            <span className="text-sm">Paylaş</span>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
}