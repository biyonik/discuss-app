'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { User } from 'next-auth';

interface UserMenuProps {
    user: User;
}

export default function UserMenu({ user }: UserMenuProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-800/50 transition-colors"
            >
                <Image
                    src={user.image || '/default-avatar.png'}
                    alt={user.name || 'User'}
                    width={32}
                    height={32}
                    className="rounded-full"
                />
                <span className="text-gray-300">{user.name}</span>
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 backdrop-blur-md bg-gray-900/90 border border-gray-800/50 rounded-xl shadow-lg">
                    <div className="py-2">
                        <Link
                            href="/profile"
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                        >
                            Profil
                        </Link>
                        <Link
                            href="/my-posts"
                            className="block px-4 py-2 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                        >
                            Postlarım
                        </Link>
                        <hr className="my-2 border-gray-800/50" />
                        <button
                            onClick={() => signOut()}
                            className="block w-full text-left px-4 py-2 text-gray-300 hover:bg-gray-800/50 hover:text-white transition-colors"
                        >
                            Çıkış Yap
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}