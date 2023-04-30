import React from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="border-gray-200 bg-yellow-500 drop-shadow-2xl ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href='#top' className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="h-8 mr-3" alt="Logo" />
                        <span className="self-center text-2xl font-bold whitespace-nowrap ">QuizzyBee</span>
                    </a>
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-800 sm:mb-0 ">
                        <li>
                            <Link to={'/'} className={`mr-4 hover:underline md:mr-6 `}>Topics</Link>
                        </li>
                        <li>
                            <Link to={'statistics'} className="mr-4 hover:underline md:mr-6">Statistics</Link>
                        </li>
                        <li>
                            <Link to={'/blog'} className="mr-4 hover:underline md:mr-6 ">Blog</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto " />
                <span className="block text-sm text-gray-800 sm:text-center ">© 2023 <a href="https://flowbite.com/" className="hover:underline">QuizzyBee™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    )
}

export default Footer