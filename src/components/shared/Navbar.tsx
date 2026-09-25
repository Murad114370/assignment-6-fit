"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import logo from '@/assets/logo.png'

const Navbar = () => {
    const pathname = usePathname();

    const isWorkoutsActive = pathname === "/" || pathname === "/fits";

    return (
        <nav className=" border-b border-white/10 bg-black px-6 py-4">
            <div className=" container mx-auto flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-white">
                    <Image
                    src={logo}
                    alt={'Logo'}
                    width={30}
                    height={30} />

                    <span className="text-lg font-bold tracking-tight">FITLOG</span>
                </Link>

                {/* Center links */}
                <div className="flex items-center gap-6 text-sm font-semibold">
                    <Link
                        href="/"
                        className={
                            isWorkoutsActive
                                ? "text-lime-400"
                                : "text-white/70 transition hover:text-white"
                        }
                    >
                        Workouts
                    </Link>
                    <Link
                        href="/my-plan"
                        className={
                            pathname === "/my-plan"
                                ? "text-lime-400"
                                : "text-white/70 transition hover:text-white"
                        }
                    >
                        My Plan
                    </Link>
                </div>

                {/* Right side counters */}
                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-xl bg-[#121212] px-3 py-2 text-sm font-medium text-white">
                        Plan
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                            0
                        </span>
                    </div>
                    <div className="flex items-center gap-2 rounded-xl bg-[#121212] px-3 py-2 text-sm font-medium text-white">
                        Saved
                        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-xs font-bold text-black">
                            0
                        </span>
                    </div>
                </div>
            </div>
        </nav>

    );
};

export default Navbar;