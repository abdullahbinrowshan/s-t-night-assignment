import React from 'react';
import { FaEye } from "@react-icons/all-files/fa/FaEye";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ quiz }) => {
    const { options, id, correctAnswer, question } = quiz;

    const handleQuizAnswer = (answer) => {
        if (correctAnswer !== answer) {
            toast.error("Wrong", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            toast.success("Awesome that's right", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    }

    return (
        <div className='text-center shadow-lg bg-yellow-50 mb-12 w-11/12 md:w-3/4 p-6 mx-auto rounded-md'>
            <div className='relative'>
                <h4 className='text-2xl font-semibold text-yellow-500 mr-3 mt-2'>Quiz: {question}</h4>
                <button className='text-2xl text-yellow-400 opacity-75 hover:opacity-100  absolute -top-4 -right-2'><FaEye /> </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                {
                    options.map((option, index) => (
                        <button key={index} onClick={(e) => handleQuizAnswer(option)} className='p-7 hover:text-yellow-500 hover:border-yellow-500 hover:bg-yellow-100 text-yellow-400 border-yellow-400 border'>
                            <li className='list-outside list-[circle]'>
                                {option}
                            </li>
                        </button>
                    ))
                }
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    )
}

export default Card