import React from 'react'
import Header from '../components/Header'
import QuizCard from '../components/QuizCard'
import { useLoaderData } from 'react-router'

const Topics = () => {
    const { data } = useLoaderData()
    return (
        <>
            <Header />

            <div className='my-20 container mx-auto'>
                <h2 className='md:text-4xl text-2xl ml-3 font-semibold mb-6' >Explore Our Quiz <span className='text-yellow-300'>Topics!</span></h2>
                <div className='grid grid-cols-1 justify-center items-center gap-5 mx-2 md:grid-cols-2'>
                    {
                        data.map(quiz => <QuizCard key={quiz.id} quiz={quiz} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Topics