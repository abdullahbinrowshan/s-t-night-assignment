import React from 'react';
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="border-gray-200  shadow-md shadow-yellow-100  sticky w-full top-0 bg-gray-50">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a className="flex items-center">
                        <img src={Logo} className="h-8 mr-3" alt="Logo" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap">QuizzyBee</span>
                    </a>
                    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-solid-bg" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
                        <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
                            <li className=" block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:hover:text-blue-700 md:p-0">
                                <NavLink to={'/'} className={({ isActive }) =>
                                    isActive ? "underline-offset-4 underline decoration-yellow-300 decoration-4 font-bold" : undefined} aria-current="page">Topics</NavLink>
                            </li>
                            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                <NavLink to={'statistics'} className={({ isActive }) =>
                                    isActive ? "underline-offset-4 underline decoration-yellow-300 decoration-4 font-bold" : undefined}>Statistics</NavLink>
                            </li>
                            <li className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">
                                <NavLink to={'/blog'} className={({ isActive }) =>
                                    isActive ? "underline-offset-4 underline decoration-yellow-300 decoration-4 font-bold" : undefined}>Blog</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
        </div >
    )
}

export default Navbar