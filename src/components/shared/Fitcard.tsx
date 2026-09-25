
import { IFit } from '@/types/fits.type';
import Image from 'next/image';
import React from 'react';

 interface IFitCardProps {
    fit: IFit
 }
const Fitcard = ({fit}: IFitCardProps) => {
    return (
        <div
                        
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



                            {/* Rating
                            <span className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm font-semibold text-white shadow-sm">
                                ⭐ {fit.rating}
                            </span> */}

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
                                <h3 className=" text-xl font-bold text-white">
                                    {fit.name}
                                </h3>
                            </div>



                            {/* Equipment */}
                            <div className="mt-5 flex items-center gap-2 text-sm">


                                <span className="text-white/40">
                                    {fit.equipment}
                                </span>
                            </div>




                            {/* Workout Stats */}
                            {/* <div className="mt-6 grid grid-cols-3 divide-x divide-white/10 rounded-2xl bg-white/5 py-4">

                                <div className="text-center">
                                    <p className="text-lg font-bold text-white">
                                        {fit.duration}
                                    </p>
                                    <p className="text-xs text-white/40">
                                        Minutes
                                    </p>
                                </div>

                                <div className="text-center">
                                    <p className="text-lg font-bold text-white">
                                        {fit.sets}
                                    </p>
                                    <p className="text-xs text-white/40">
                                        Sets
                                    </p>
                                </div>

                                <div className="text-center">
                                    <p className="text-lg font-bold text-white">
                                        {fit.reps}
                                    </p>
                                    <p className="text-xs text-white/40">
                                        Reps
                                    </p>
                                </div>

                            </div> */}


                            <hr className="mt-5 mb-5 opacity-10" />
                            {/* Button
                            <button className="mt-6 w-full rounded-xl bg-white/10 py-3 font-semibold text-white transition hover:bg-lime-400 hover:text-gray-900">
                                View Workout →
                            </button> */}


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
                    </div>
    );
};

export default Fitcard;