import React from 'react';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Lego from '../assets/lego-heart-white.png';

function Footer() {
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

    const scrollToHome = () => {
        const element = document.getElementById('home');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="footer">
            <h2>Happy 3 year anniversary</h2>

            <div id="content">
                <div className="footer-1">
                    <img src={Lego} height="150px" />
                </div>

                <div className="footer-2">
                    <h3>Menu</h3>
                    <div className="linkies">
                        <Router>
                            <Link onClick={scrollToHome}>Home</Link>
                            <Link onClick={scrollToStats}>Stats</Link>
                            <Link onClick={scrollToMoments}>Moments</Link>
                            <Link onClick={scrollToPictures}>Pictures</Link>
                            <Link onClick={scrollToNote}>Note</Link>
                        </Router>
                    </div>
                </div>

                <div className="footer-3">
                    <h3>Sign up for notifications</h3>
                    Don't actually sign up for notifications because I don't have this functioning lol.
                    <div id="sub">
                        <input></input>
                        <button>ilysm! {'>'}:{'('}</button>
                    </div>
                </div>
            </div>
            <tinyfooter>coded with &hearts; by chantell</tinyfooter>
        </div >
    )
}

export default Footer;