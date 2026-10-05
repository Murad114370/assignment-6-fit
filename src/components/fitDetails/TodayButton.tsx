'use client';

import { FitsContext } from '@/context/FitsContext';
import { IFit } from '@/types/fits.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const TodayButton = ({ fit }: { fit: IFit }) => {
    const { todayFits, setTodayFits } = useContext(FitsContext);

    const handleTodayFit = () => {
        const alreadyAdded = todayFits.some((item) => item.id === fit.id);

        if (alreadyAdded) {
            toast.info(`"${fit.name}" is already in today's plan`);
            return;
        }

        setTodayFits([...todayFits, fit]);
        toast.success(`You have added "${fit.name}" to today's plan`);
    };

    return (
        <button
            className="rounded-xl bg-lime-300 px-5 py-3 text-sm font-bold text-black transition hover:bg-lime-400"
            onClick={handleTodayFit}
        >
             Add to today&apos;s plan
        </button>
    );
};

export default TodayButton;