import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const Main = () => {
    return (
        <div className='bg-yellow-50 bg-opacity-60'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Main