import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from '@/lib/db';
import NextAuth from "next-auth";
import GitHub from "@auth/core/providers/github";

const GITHUB_CLIENT_ID = process.env.AUTH_GITHUB_ID
const GITHUB_CLIENT_SECRET = process.env.AUTH_GITHUB_SECRET

if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET) {
    throw new Error("Missing Github OAuth credentials!");
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(db),
    providers: [GitHub],
    callbacks: {
        session({ session, user }) {
            session.user!.email = user.email
            return session
        },
    },
})