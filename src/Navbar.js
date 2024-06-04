import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        // Add the event listener
        window.addEventListener("scroll", onScroll);

        return () => {
            // Clean up the event listener
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scroll ? 'scrolled' : ''}`}>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;
