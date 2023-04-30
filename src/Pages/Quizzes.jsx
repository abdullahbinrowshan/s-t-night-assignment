import React from 'react'
import { useLoaderData } from 'react-router'
import Card from '../components/Card';

const Quizzes = () => {
    const { data } = useLoaderData();

    const { name, questions } = data;

    console.log(questions);
    return (
        <div className='mb-20'>
            <h2 className='text-4xl text-center font-bold text-yellow-100 my-14'>Quiz of {name}</h2>
            {
                questions.map((quiz) => <Card quiz={quiz} key={quiz.id} />)
            }
        </div>
    )
}

export default Quizzes