"use client";

import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { IFit } from '@/types/fits.type';

interface IFitsContext {
    todayFits: IFit[];
    setTodayFits: Dispatch<SetStateAction<IFit[]>>;
    laterlist: IFit[];
    setLaterFits: Dispatch<SetStateAction<IFit[]>>;
}

export const FitsContext = createContext<IFitsContext>({
    todayFits: [],
    setTodayFits: () => {},
    laterlist: [],
    setLaterFits: () => {},
});

const FitsProvider = ({ children }: { children: ReactNode }) => {
    const [todayFits, setTodayFits] = useState<IFit[]>([]);
    const [laterlist, setLaterFits] = useState<IFit[]>([]);

    const sharedData: IFitsContext = {
        todayFits,
        setTodayFits,
        laterlist,
        setLaterFits,
    };

    return <FitsContext.Provider value={sharedData}>{children}</FitsContext.Provider>;
};

export default FitsProvider;