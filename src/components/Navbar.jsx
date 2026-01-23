import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    return (
        <header className="py-6 bg-white border-b border-[#f0f0f0]">
            <div className="container-custom flex items-center justify-between">
                <Link to="/" className="font-display text-2xl font-bold text-primary tracking-tighter decoration-0">
                    Brinqo<span className="text-accent">.</span>
                </Link>

                <nav className="hidden md:flex gap-12 items-center">
                    {location.pathname !== '/' && (
                        <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Home</NavLink>
                    )}
                    <NavLink to="/build" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Build</NavLink>
                    <NavLink to="/brand" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Brand</NavLink>
                    <NavLink to="/bridge" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>Bridge</NavLink>
                    <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>About</NavLink>
                </nav>

                <div className="hidden md:flex gap-4 items-center">

                    <a href="tel:+19803226955" className="flex items-center gap-2.5 px-4 py-2 rounded-[8px] bg-white border border-black shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-primary font-bold text-sm tracking-wide transition-all duration-300 hover:border-accent hover:text-accent hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)] hover:-translate-y-0.5 group">
                        <div className="w-7 h-7 rounded-[5px] bg-[#F5F5F7] flex items-center justify-center text-secondary group-hover:bg-accent group-hover:text-white transition-all duration-300">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        +1 (980) 322-6955
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
