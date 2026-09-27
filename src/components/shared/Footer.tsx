import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from '@/assets/logo.png';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black px-6 py-5 ">
            <div className="container mx-auto flex flex-col items-center justify-between gap-3 sm:flex-row">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 text-white">
                    <Image src={logo} alt="Logo" width={20} height={20} />
                    <span className="text-sm font-bold tracking-tight">FITLOG</span>
                </Link>

                {/* Copyright */}
                <p className="text-sm text-white/40">
                    © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
                </p>
            </div>
        </footer>
    );
};

export default Footer;