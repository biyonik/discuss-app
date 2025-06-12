import Link from 'next/link';
import UserMenu from "@/components/user/UserMenu";
import SignInButton from "@/components/auth/SignInButton";
import {auth} from "@/auth";

export default async function Header() {
    const session = await auth();

    return (
        <header className="backdrop-blur-md bg-gray-900/30 border-b border-gray-800/50 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-lg">
                            ND
                        </div>
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            NextDiscuss
                        </h1>
                    </Link>

                    <nav className="hidden md:flex items-center space-x-6">
                        <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                            Ana Sayfa
                        </Link>
                        <Link href="/popular" className="text-gray-300 hover:text-white transition-colors">
                            Popüler
                        </Link>
                        <Link href="/topics" className="text-gray-300 hover:text-white transition-colors">
                            Konular
                        </Link>

                        {session?.user ? (
                            <UserMenu user={session.user} />
                        ) : (
                            <SignInButton />
                        )}
                    </nav>
                </div>
            </div>
        </header>
    );
}
