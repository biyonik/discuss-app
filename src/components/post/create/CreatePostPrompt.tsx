import Link from 'next/link';
import Image from 'next/image';
import { auth } from '@/auth';

export default async function CreatePostPrompt() {
    const session = await auth();

    if (!session?.user) {
        return (
            <div className="backdrop-blur-md bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 mb-6">
                <div className="text-center">
                    <h3 className="text-lg font-medium text-white mb-2">Toplulukla paylaş!</h3>
                    <p className="text-gray-400 mb-4">Giriş yaparak yeni postlar oluşturabilirsin.</p>
                    <Link
                        href="/api/auth/signin"
                        className="inline-block bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                    >
                        Giriş Yap
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="backdrop-blur-md bg-gray-900/30 border border-gray-800/50 rounded-xl p-6 mb-6 hover:bg-gray-900/40 transition-all duration-300">
            <div className="flex items-center space-x-4">
                <Image
                    src={session.user.image || '/default-avatar.png'}
                    alt={session.user.name || 'User'}
                    width={40}
                    height={40}
                    className="rounded-full"
                />
                <Link
                    href="/posts/create"
                    className="flex-1 bg-gray-800/50 border border-gray-700/50 rounded-lg px-4 py-3 text-gray-400 hover:bg-gray-800/70 hover:border-gray-600/50 transition-all cursor-pointer"
                >
                    Toplulukla ne paylaşmak istiyorsun?
                </Link>
                <Link
                    href="/posts/create"
                    className="bg-gradient-to-r from-purple-600 to-cyan-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                >
                    Paylaş
                </Link>
            </div>
        </div>
    );
}