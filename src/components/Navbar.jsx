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

                    <a href="tel:+19803226955" className="btn-primary">
                        Talk to an Expert
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
