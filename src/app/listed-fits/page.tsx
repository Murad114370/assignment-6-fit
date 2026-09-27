"use client";

import Fitcard from '@/components/shared/Fitcard';
import { FitsContext } from '@/context/FitsContext';
import { IFit } from '@/types/fits.type';
import Link from 'next/link';
import React, { useContext, useMemo, useState } from 'react';

type TabKey = "today" | "saved";

const ListedFits = () => {
    const { todayFits, laterlist } = useContext(FitsContext);
    const [activeTab, setActiveTab] = useState<TabKey>("today");

    const activeList: IFit[] = activeTab === "today" ? todayFits : laterlist;

    const stats = useMemo(() => {
        return {
            exercises: activeList.length,
            minutes: activeList.reduce((sum, fit) => sum + fit.duration, 0),
            calories: activeList.reduce((sum, fit) => sum + fit.caloriesBurned, 0),
        };
    }, [activeList]);

    return (
        <div className="min-h-screen bg-black px-4 py-10 text-white">
            <div className="container mx-auto">

                {/* Heading */}
                <div className="mb-6">
                    <h2 className="text-4xl font-bold">My Plan</h2>
                    <p className="mt-2 text-white/50">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* Stats */}
                <div className="mb-6 grid grid-cols-3 divide-x divide-white/10 rounded-2xl bg-[#121212] py-5">
                    <div className="text-center">
                        <p className="text-sm text-white/40">Exercises</p>
                        <p className="mt-1 text-2xl font-bold text-lime-400">{stats.exercises}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-white/40">Minutes</p>
                        <p className="mt-1 text-2xl font-bold">{stats.minutes}</p>
                    </div>
                    <div className="text-center">
                        <p className="text-sm text-white/40">Calories</p>
                        <p className="mt-1 text-2xl font-bold">{stats.calories}</p>
                    </div>
                </div>

                {/* Tabs */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex gap-1 rounded-full bg-[#121212] p-1">
                        <button
                            onClick={() => setActiveTab("today")}
                            className={
                                activeTab === "today"
                                    ? "rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black"
                                    : "px-4 py-1.5 text-sm font-medium text-white/50 transition hover:text-white"
                            }
                        >
                            Today&apos;s Plan
                        </button>
                        <button
                            onClick={() => setActiveTab("saved")}
                            className={
                                activeTab === "saved"
                                    ? "rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-black"
                                    : "px-4 py-1.5 text-sm font-medium text-white/50 transition hover:text-white"
                            }
                        >
                            Saved
                        </button>
                    </div>
                </div>

                {/* List / Empty state */}
                {activeList.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {activeList.map((fit) => (
                            <Fitcard key={fit.id} fit={fit} />
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-white/15 py-20 text-center">
                        <h3 className="text-lg font-bold uppercase">Nothing Here Yet</h3>
                        <p className="mt-2 max-w-sm text-sm text-white/50">
                            Browse the library and add a lift to get today moving.
                        </p>
                        <Link
                            href="/"
                            className="mt-6 rounded-full bg-lime-400 px-5 py-2.5 text-sm font-bold text-black transition hover:bg-lime-300"
                        >
                            Go to workouts
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListedFits;