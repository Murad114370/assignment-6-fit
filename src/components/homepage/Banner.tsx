import Image from "next/image";
import React from "react";
import logo from "@/assets/banner.png";

const Banner = () => {
    return (
        <header className="bg-[#090a0c] px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
            <div className="container mx-auto  rounded-2xl border border-[#252830] bg-[#15171c]">

                <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-10  min-h-[520px] md:min-h-[500px]   lg:px-14 lg:py-10">

                    {/* Left Content */}
                    <div className="text-center lg:text-left">

                        {/* Small Heading */}
                        <p className="mb-5 text-xs font-bold uppercase tracking-[0.12em] text-lime-400 sm:mb-6">
                            Workout Library
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-3xl font-bold uppercase   text-white md:text-6xl ">
                            Train with intent. Log <br/>
                            every set.
                        </h1>

                        {/* Description */}
                        <p className="mx-auto mt-5 max-w-[500px] text-sm leading-6 text-gray-400 sm:text-base lg:mx-0">
                            FitLog is a dark, no-nonsense gym companion: pick a lift,
                            lock it <br /> into today's plan, and watch the week's work add up.
                        </p>

                        {/* Button */}
                        <button className="mt-7 rounded-md border-none bg-lime-400 px-5 py-3 text-sm font-bold uppercase text-black transition duration-200 hover:bg-lime-300 hover:shadow-[0_0_20px_rgba(163,230,53,0.25)]">
                            Browse Workouts
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="mt-8 flex w-full items-center justify-center sm:mt-10 lg:mt-0 lg:w-[40%]">
                        <Image
                            src={logo}
                            alt="Workout illustration"
                            width={380}
                            height={380}
                            priority
                            className="
                                h-[230px]
                                w-[230px]
                                object-contain
                                sm:h-[270px]
                                sm:w-[270px]
                                md:h-[300px]
                                md:w-[300px]
                                lg:h-[350px]
                                lg:w-[350px]
                            "
                        />
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Banner;