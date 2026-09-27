
"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { IFit } from '@/types/fits.type';

interface IPlanRowProps {
    fit: IFit;
    onDone: (id: number) => void;
    onRemove: (id: number) => void;
}

const PlanRow = ({ fit, onDone, onRemove }: IPlanRowProps) => {
    return (
        <div className="flex items-center gap-4 rounded-2xl bg-[#121212] p-4">
            {/* Thumbnail */}
            <div className="relative h-16 w-20 shrink-0 overflow-hidden rounded-xl">
                <Image
                    src={fit.image}
                    alt={fit.name}
                    fill
                    unoptimized
                    className="object-cover"
                />
            </div>

            {/* Name + stats */}
            <div className="flex-1">
                <h3 className="font-bold uppercase tracking-tight text-white">
                    {fit.name}
                </h3>
                <p className="text-sm text-white/40">{fit.equipment}</p>
                <div className="mt-1 flex items-center gap-4 text-sm text-white/70">
                    <span className="flex items-center gap-1.5">
                        ⏱️ {fit.duration} min
                    </span>
                    <span className="flex items-center gap-1.5">
                        🔥 {fit.caloriesBurned} kcal
                    </span>
                    <span className="flex items-center gap-1.5">
                        ⭐ {fit.rating}
                    </span>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
                <Link
                    href={`/fits/${fit.id}`}
                    className="rounded-xl border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/5"
                >
                    View Details
                </Link>
                <button
                    onClick={() => onDone(fit.id)}
                    className="flex items-center gap-1.5 rounded-xl bg-lime-400 px-4 py-2 text-sm font-bold text-black transition hover:bg-lime-300"
                >
                    ✓ Mark as Done
                </button>
                <button
                    onClick={() => onRemove(fit.id)}
                    className="px-2 text-white/40 transition hover:text-white"
                    aria-label="Remove"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default PlanRow;