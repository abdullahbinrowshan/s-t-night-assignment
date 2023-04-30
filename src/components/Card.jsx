import React from 'react'

const Card = ({ quiz }) => {
    const { options, id, correctAnswer, question } = quiz;
    return (
        <div className='text-center w-11/12 md:w-3/4 p-4 mx-auto space-y-12'>
            <h4 className='text-4xl'>Quiz: {question}</h4>
            <div className="">

            </div>
        </div>
    )
}

export default Card