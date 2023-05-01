import React, { useState } from 'react'
import { useLoaderData } from 'react-router'
import Card from '../components/Card';

const Quizzes = () => {
    const { data } = useLoaderData();
    const { name, questions } = data;
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);

    return (
        <div className='mb-20 relative'>
            <h2 className='text-4xl text-center font-bold text-yellow-100 my-14'>Quiz of {name}</h2>
            <div className='p-2 bg-gray-900 max-w-sm space-y-3 mx-auto shadow-2xl text-yellow-50 text-center rounded-md mb-10 sticky top-0 z-50'>
                <h4>Correct Answer: {correct} </h4>
                <h4>Wrong Answer: {wrong} </h4>
            </div>
            {
                questions.map((quiz) => <Card
                    correct={correct}
                    setCorrect={setCorrect}
                    wrong={wrong}
                    setWrong={setWrong}
                    quiz={quiz}
                    key={quiz.id}
                />)
            }
        </div >
    )
}

export default Quizzes