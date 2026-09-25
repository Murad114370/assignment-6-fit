import Image from 'next/image';
import React from 'react';
import { notFound } from 'next/navigation';
import { IFit } from '@/types/fits.type';

const getFit = async (id: string): Promise<IFit | undefined> => {
    const response = await fetch("http://localhost:3000/fitsData.json");

    if (!response.ok) {
        throw new Error(`Failed to fetch fits data: ${response.status}`);
    }

    const data: IFit[] = await response.json();
    return data.find((fit) => String(fit.id) === id);
};

const detailRows = (fit: IFit) => [
    { label: "Equipment", value: fit.equipment },
    { label: "Difficulty", value: fit.difficulty },
    { label: "Sets", value: fit.sets },
    { label: "Reps", value: fit.reps },
    { label: "Duration", value: `${fit.duration} min` },
    { label: "Calories", value: `${fit.caloriesBurned} kcal` },
    { label: "Rating", value: fit.rating },
];

// Next.js 15: params is a Promise and must be awaited
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const fit = await getFit(id);

    if (!fit) {
        notFound();
    }

    return (
        <section className="min-h-screen bg-black px-4 py-10 text-white">
            <div className="container mx-auto grid gap-10 lg:grid-cols-2">

                {/* Image */}
                <div className="relative h-[300px] w-full overflow-hidden rounded-2xl lg:h-full lg:min-h-[480px]">
                    <Image
                        src={fit.image}
                        alt={fit.name}
                        fill
                        unoptimized
                        className="object-cover"
                    />
                </div>

                {/* Content */}
                <div>
                    <h1 className="text-3xl font-bold uppercase tracking-tight">
                        {fit.name}
                    </h1>
                    <p className="mt-2 max-w-md text-white/50">
                        {fit.description}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                        {fit.muscleGroups.map((muscle) => (
                            <span
                                key={muscle}
                                className="rounded-full bg-lime-300 px-3 py-1 text-xs font-bold text-black"
                            >
                                {muscle}
                            </span>
                        ))}
                    </div>

                    <div className="mt-6 divide-y divide-white/10 rounded-2xl bg-[#121212] px-5">
                        {detailRows(fit).map((row) => (
                            <div
                                key={row.label}
                                className="flex items-center justify-between py-3.5 text-sm"
                            >
                                <span className="uppercase tracking-wide text-white/40">
                                    {row.label}
                                </span>
                                <span className="font-semibold text-white">
                                    {row.value}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8">
                        <h2 className="text-lg font-bold">Instructions</h2>
                        <ol className="mt-3 space-y-2">
                            {fit.instructions.map((step, i) => (
                                <li key={i} className="flex gap-3 text-sm text-white/70">
                                    <span className="font-semibold text-white/40">
                                        {i + 1}.
                                    </span>
                                    {step}
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <button className="rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-400">
                            ⚡ Add to today&apos;s plan
                        </button>
                        <button className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5">
                            🔖 Save for later
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Page;