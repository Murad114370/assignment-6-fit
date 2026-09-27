'use client';


import { FitsContext } from '@/context/FitsContext';
import { IFit } from '@/types/fits.type';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const LaterListButton = ({fit}: {fit: IFit}) => {

    const {laterlist, setLaterFits} = useContext(FitsContext)

    // console.log(fitsProvider, "fitsProvider");

    const handleAddToLaterList = () => {

        console.log('later list fit btn triggered', fit);

        setLaterFits([...laterlist, fit])
        toast.success(`You have added"${fit.name}" save of later`)
    }

    return (
        <button className="rounded-xl border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/5" onClick={() => handleAddToLaterList()}>
                            🔖 Save for later
                        </button>
    );
};

export default LaterListButton;