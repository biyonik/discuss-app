import type {Metadata} from "next";
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import React from "react";
import AnimatedBackground from "@/components/common/AnimatedBackground";
import Header from "@/components/common/Header";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Reddit Clone Application",
    description: "NextJS + HeroUI + Tailwind 4 + NextAuth + Prisma + SQLite",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
            <div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
                {/* Animated Background */}
                <AnimatedBackground/>
                <div className="relative z-10">
                    <Header />
                    <main>{children}</main>
                </div>
            </div>
        </body>
        </html>
    );
}
