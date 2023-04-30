import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const CategoryCard = ({ category }) => {
    const { name, logo, id } = category;
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(`quiz-card/${id}`)
    }

    return (
        <div className="max-w-sm mx-auto bg-white border border-gray-300 rounded-lg shadow-md">
            <img className="rounded-t-lg bg-yellow-100 bg-opacity-50" src={logo} alt="" />
            <div className="p-5 flex justify-between">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{name}</h5>
                <button onClick={handleNavigate} className="inline-flex items-center px-3 py-2 text-sm font-bold text-center text-black bg-yellow-300 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-100">
                    Read more
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}

export default CategoryCard