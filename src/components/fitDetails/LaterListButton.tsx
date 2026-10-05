'use client';

import { FitsContext } from '@/context/FitsContext';
import { IFit } from '@/types/fits.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const LaterListButton = ({ fit }: { fit: IFit }) => {
    const { laterlist, setLaterFits } = useContext(FitsContext);

    const handleAddToLaterList = () => {
        const alreadyAdded = laterlist.some((item) => item.id === fit.id);

        if (alreadyAdded) {
            toast.info(`"${fit.name}" is already saved for later`);
            return;
        }

        setLaterFits([...laterlist, fit]);
        toast.success(`You have added "${fit.name}" to save for later`);
    };

    return (
        <button
            className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5"
            onClick={handleAddToLaterList}
        >
             Save for later
        </button>
    );
};

export default LaterListButton;