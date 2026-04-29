import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './landing_page/home/Navbar';
import Footer from './Footer';

function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

export default Layout;