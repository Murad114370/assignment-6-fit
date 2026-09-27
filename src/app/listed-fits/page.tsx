"use client";

import PlanRow from '@/components/shared/PlanRow';
import { FitsContext } from '@/context/FitsContext';
import { IFit } from '@/types/fits.type';
import Link from 'next/link';
import React, { useContext, useMemo, useState } from 'react';

type TabKey = "today" | "saved";
type SortKey = "duration" | "caloriesBurned" | "rating";

const sortOptions: { label: string; value: SortKey }[] = [
    { label: "Duration", value: "duration" },
    { label: "Calories", value: "caloriesBurned" },
    { label: "Rating", value: "rating" },
];

const ListedFits = () => {
    const { todayFits, laterlist, setTodayFits, setLaterFits } = useContext(FitsContext);
    const [activeTab, setActiveTab] = useState<TabKey>("today");
    const [sortBy, setSortBy] = useState<SortKey>("duration");

    const activeList: IFit[] = activeTab === "today" ? todayFits : laterlist;

    // Descending sort by whichever field is selected
    const sortedList = useMemo(() => {
        return [...activeList].sort((a, b) => b[sortBy] - a[sortBy]);
    }, [activeList, sortBy]);

    const stats = useMemo(() => {
        return {
            exercises: activeList.length,
            minutes: activeList.reduce((sum, fit) => sum + fit.duration, 0),
            calories: activeList.reduce((sum, fit) => sum + fit.caloriesBurned, 0),
        };
    }, [activeList]);

    const handleRemove = (id: number) => {
        if (activeTab === "today") {
            setTodayFits((prev) => prev.filter((fit) => fit.id !== id));
        } else {
            setLaterFits((prev) => prev.filter((fit) => fit.id !== id));
        }
    };

    const handleMarkAsDone = (id: number) => {
        handleRemove(id);
    };

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

                {/* Tabs + Sort */}
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

                    {/* Sort By dropdown */}
                    <div className="flex items-center gap-3 text-sm text-white/50">
                        Sort By
                        <div className="relative">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value as SortKey)}
                                className="appearance-none rounded-lg bg-[#121212] py-2 pl-3 pr-8 text-sm font-medium text-white outline-none ring-1 ring-white/10"
                            >
                                {sortOptions.map((option) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40"
                            >
                                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* List / Empty state */}
                {sortedList.length > 0 ? (
                    <div className="flex flex-col gap-4">
                        {sortedList.map((fit) => (
                            <PlanRow
                                key={fit.id}
                                fit={fit}
                                onDone={handleMarkAsDone}
                                onRemove={handleRemove}
                            />
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