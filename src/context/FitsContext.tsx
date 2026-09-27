"use client";

import React, { createContext, ReactNode, useState } from 'react';


export  const FitsContext = createContext({})

const FitsProvider = ({children}: {children: ReactNode}) => {
    const [todayFits, setTodayFits] = useState([])
    const [laterlist, setLaterFits] = useState([])

    const sharedData = {
        todayFits,
        setTodayFits,
        laterlist,
        setLaterFits,
    };

    return <FitsContext.Provider value={sharedData}>{children}</FitsContext.Provider>;
};

export default FitsProvider;