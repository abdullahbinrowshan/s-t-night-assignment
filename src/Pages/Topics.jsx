import React from 'react'
import Header from '../components/Header'
import CategoryCard from '../components/CategoryCard'
import { useLoaderData } from 'react-router'

const Topics = () => {
    const { data } = useLoaderData()
    return (
        <>
            <Header />

            <div className='my-20 container mx-auto'>
                <h2 className='md:text-4xl text-3xl md:ml-7 text-center md:text-left font-bold mb-14' >Explore Our Quiz <span className='text-yellow-200'>Topics!</span></h2>
                <div className='flex flex-wrap justify-center items-center gap-5 mx-2 '>
                    {
                        data.map(category => <CategoryCard key={category.id} category={category} />)
                    }
                </div>
            </div>
        </>
    )
}

export default Topics