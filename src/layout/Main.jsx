import React from 'react'
// import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
// import Footer from '../components/Footer'

const Main = () => {
    return (
        <>
            <h2>hello world!!!</h2>
            {/* <Navbar /> */}
            <Outlet />
            {/* <Footer /> */}
        </>
    )
}

export default Main