"use client";
import { FitsContext } from '@/context/FitsContext';
import React, { useContext } from 'react';

const ListedFits = () => {
    const {todayFits, laterlist} = useContext(FitsContext)
    console.log(todayFits,laterlist ,"todayFits", "laterlist");
    return (
        <div>
            Listed Fits
        </div>
    );
};

export default ListedFits;