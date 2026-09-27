import React from "react";
import Fitcard from "@/components/shared/Fitcard";
import { IFit } from "@/types/fits.type";

const getFits = async () => {
    try{

        const response = await fetch(`${process.env.NEXT_PUBLIC_SERVER_BASE_URL}/fitsData.json`);
        const data = await response.json();
        return data;
    }catch(error){
        console.error("Error fetching fits data",error);
        return[];
    }
};

const Fits = async () => {
    const fitsData = await getFits();

    return (
        <section className="container mx-auto my-20 px-4 ">

            {/* Section Heading */}
            <div className="mb-10">
                <h2 className="text-4xl font-bold text-white">
                    THE LIBRARY
                </h2>

                <p className="mt-2 text-white/50">
                    Twelve lifts covering every major muscle group.
                </p>
            </div>

            {/* Cards */}
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                {fitsData.map((fit: IFit, ind: number) => {

                        return <Fitcard key={ind} fit={fit} />
                    
                })}

            </div>
        </section>
    );
};

export default Fits;