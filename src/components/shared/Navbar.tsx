
"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import logo from '@/assets/logo.png'



const Navbar = () => {
    const [plan, setPlan] = useState(0);
    const [saved, setSaved] = useState(0);

    return (

        <nav className='bg-[#090a0c] border-b border-[#252830] shadow-sm'>
            <div className="navbar container mx-auto py-5 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Workouts</a></li>
                            <li><a>My Plan</a></li>
                        </ul>
                    </div>
                    <div className="flex gap-2 items-center">
                        <Image
                         src={logo}
                         alt='logoImage' />
                        <h2 className='text-[18px] font-bold'>FITLOG</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><a className='bg-[#1d2a16] text-lime-400 px-4 py-2 rounded-full text-sm font-medium'>Workouts</a></li>
                        <li><a className='text-[16px]'>My Plan</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <button
                     onClick={() => setPlan(plan+1)}
                     
                     className="btn "
                     > Plan <span className="bg-lime-400 w-7 h-7 rounded-full flex items-center justify-center text-black font-bold text-[14px] ">{plan}</span>  

                     </button>

                    <button
                     onClick={() => setSaved(saved+1)}
                     
                     className="btn"
                     > Saved <span className="bg-black w-7 h-7 rounded-full flex items-center justify-center text-white font-bold text-[14px] border border-[#252830]">{plan}</span>
                     
                     </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;