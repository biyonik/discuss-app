import { db } from '@/lib/db';
import Sidebar from "@/components/common/Sidebar";
import PostCard from "@/components/post/PostCard";
import CreatePostPrompt from "@/components/post/create/CreatePostPrompt";


export default async function HomePage() {
    const posts = await db.post.findMany({
        include: {
            user: true,
            topic: true,
            _count: {
                select: { comments: true }
            }
        },
        orderBy: {
            createdAt: 'desc'
        },
        take: 20
    });

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <Sidebar />

                <div className="lg:col-span-3">
                    {/*<CreatePostPrompt />*/}
                    <CreatePostPrompt />
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <PostCard key={post.id} post={post} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}