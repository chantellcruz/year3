import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
    const scrollToStats = () => {
        const element = document.getElementById('stats');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToMoments = () => {
        const element = document.getElementById('moments');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToPictures = () => {
        const element = document.getElementById('pictures');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToNote = () => {
        const element = document.getElementById('note');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToComingSoon = () => {
        const element = document.getElementById('coming-soon');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="navbar">
            <div className="linkies">
                <Link to="/">Home</Link>
                <Link onClick={scrollToStats}>Stats</Link>
                <Link onClick={scrollToMoments}>Moments</Link>
                <Link onClick={scrollToPictures}>Pictures</Link>
                <Link onClick={scrollToNote}>Note</Link>
                <Link onClick={scrollToComingSoon}>???</Link>
            </div>
        </div>
    );
}

export default Navbar;