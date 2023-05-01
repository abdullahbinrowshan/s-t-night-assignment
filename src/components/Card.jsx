import React from 'react';
import { FaEye } from "@react-icons/all-files/fa/FaEye";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Card = ({ quiz, setCorrect, correct, wrong, setWrong }) => {
    const { options, correctAnswer, question } = quiz;

    const handleQuizAnswer = (answer) => {
        if (correctAnswer !== answer) {
            setWrong(wrong + 1)
            toast.error("😢 Wrong!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } else {
            setCorrect(correct + 1);
            toast.success("😀 Awesome you're correct!", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        }
    };

    const handleShowAnswer = () => {
        toast(`${correctAnswer}`, {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }

    return (
        <div className='text-center shadow-lg bg-yellow-50 mb-12 w-11/12 md:w-3/4 p-6 mx-auto rounded-md'>
            <div className='relative'>
                <h4 className='text-2xl font-semibold text-yellow-500 mr-3 mt-2'>Quiz: {question}</h4>
                <button onClick={handleShowAnswer} className='text-2xl text-yellow-400 opacity-75 hover:opacity-100  absolute -top-4 -right-2'><FaEye /> </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6">
                {
                    options.map((option, index) => (
                        <button key={index} onClick={() => handleQuizAnswer(option)} className='p-7 rounded text-yellow-500 hover:border-yellow-500 hover:bg-yellow-100 border-yellow-400 border'>
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