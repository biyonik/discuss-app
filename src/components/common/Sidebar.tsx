import { db } from '@/lib/db';
import Link from 'next/link';

export default async function Sidebar() {
    const topics = await db.topic.findMany({
        include: {
            _count: {
                select: { posts: true }
            }
        },
        orderBy: {
            posts: {
                _count: 'desc'
            }
        },
        take: 10
    });

    return (
        <aside className="lg:col-span-1">
            <div className="backdrop-blur-md bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 hover:bg-gray-900/40 transition-all duration-300">
                <h3 className="text-lg font-semibold mb-4 text-purple-400">Popüler Konular</h3>
                <div className="space-y-3">
                    {topics.map((topic) => (
                        <Link
                            key={topic.id}
                            href={`/topics/${topic.slug}`}
                            className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-800/50 transition-colors cursor-pointer group"
                        >
              <span className="text-gray-300 group-hover:text-white transition-colors">
                {topic.slug}
              </span>
                            <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-1 rounded-full">
                {topic._count.posts}
              </span>
                        </Link>
                    ))}
                </div>

                <Link
                    href="/topics"
                    className="block mt-4 text-center text-sm text-purple-400 hover:text-purple-300 transition-colors"
                >
                    Tüm konuları gör →
                </Link>
            </div>
        </aside>
    );
}