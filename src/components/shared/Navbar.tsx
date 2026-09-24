
import Image from 'next/image';
import React from 'react';
import logo from '@/assets/logo.png'



const Navbar = () => {
    return (

        <nav className='bg-base-200 shadow-sm'>
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
                        <Image src={logo} />
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
                    <button className="btn">Plan</button>
                    <button className="btn">Saved</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;