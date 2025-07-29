import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    const location = useLocation();
    const Navbarn_Footer = ['/log-in', '/sign-up'];

    const hideNavbar_Footer = Navbarn_Footer.includes(location.pathname);

    return (
        <div>
            {!hideNavbar_Footer && <Navbar />}
            <Outlet />
            {!hideNavbar_Footer && <Footer />}
        </div>
    );
};

export default MainLayout;
