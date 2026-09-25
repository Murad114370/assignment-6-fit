import { IFit } from '@/types/fits.type';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface IFitCardProps {
    fit: IFit
}

const Fitcard = ({ fit }: IFitCardProps) => {
    return (
        <Link
            href={`/fits/${fit.id}`}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#121212] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
                <Image
                    src={fit.image}
                    alt={fit.name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Card Content */}
            <div className="p-6">
                {/* Muscle Groups */}
                <div className="mt-3 flex flex-wrap gap-2 uppercase">
                    {fit.muscleGroups.map((muscle) => (
                        <span
                            key={muscle}
                            className="rounded-full bg-lime-300 px-3 py-1 text-[14px] font-bold text-black"
                        >
                            {muscle}
                        </span>
                    ))}
                </div>

                {/* Title */}
                <div className="mt-4 flex items-start justify-between gap-3 uppercase">
                    <h3 className="text-xl font-bold text-white">
                        {fit.name}
                    </h3>
                </div>

                {/* Equipment */}
                <div className="mt-5 flex items-center gap-2 text-sm">
                    <span className="text-white/40">
                        {fit.equipment}
                    </span>
                </div>

                <hr className="mt-5 mb-5 opacity-10" />

                {/* Workout Stats */}
                <div className="mt-5 flex items-center justify-between rounded-2xl bg-black/40 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                        ⏱️ {fit.duration} min
                    </div>
                    <div className="h-5 w-px bg-white/10" />
                    <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                        ⚡ {fit.caloriesBurned} kcal
                    </div>
                    <div className="h-5 w-px bg-white/10" />
                    <div className="flex items-center gap-2 text-sm font-medium text-white/80">
                        ⭐ {fit.rating}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Fitcard;