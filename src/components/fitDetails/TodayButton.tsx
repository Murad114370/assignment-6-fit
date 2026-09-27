'use client';


import { FitsContext } from '@/context/FitsContext';
import { IFit } from '@/types/fits.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayButton = ({fit}: {fit: IFit}) => {

    const {todayFits, setTodayFits} = useContext(FitsContext)

    // console.log(fitsProvider, "fitsProvider");

    const handleTodayFit = () => {

        console.log('today fit btn triggered', fit);

        setTodayFits([...todayFits, fit])
        toast.success(`You have added "${fit.name}" today's plan`)
    }

    return (
        <button className="rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-400 " onClick={() => handleTodayFit()}>
                            ⚡ Add to today&apos;s plan
                        </button>
    );
};

export default TodayButton;