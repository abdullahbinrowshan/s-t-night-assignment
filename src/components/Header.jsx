import React from 'react'
import './Header.css';


const Header = () => {
    return (
        <div id='header'>
            <div className='bg-slate-700 flex flex-col justify-center text-center space-y-4 bg-opacity-70  h-[75vh] mt-1 lg:p-28 p-2'>
                <h1 className=' text-white font-bold text-4xl md:text-6xl'>Welcome to <span className='text-yellow-200'>QuizzyBee</span></h1>

                <p className='font-semibold mx-auto w-11/12 text-slate-300'>
                    QuizzyBee is your one-stop shop for web development quizzes. Whether you're a beginner or a seasoned pro, QuizzyBee has something for everyone. Take our quizzes to test your knowledge and skills. Join our community of web developers today and let's grow together!
                </p>
            </div>
        </div>
    )
}

export default Header