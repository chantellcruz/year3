import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {

    const [openLinks, setOpenLinks] = useState(false);

    const toggleNavbar = () => {
        setOpenLinks(!openLinks);
    };

    const scrollToStats = () => {
        const element = document.getElementById('stats');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToMoments = () => {
        const element = document.getElementById('moments');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToPictures = () => {
        const element = document.getElementById('pictures');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToNote = () => {
        const element = document.getElementById('note');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      const scrollToComingSoon = () => {
        const element = document.getElementById('coming-soon');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

    return (
        <div className="navbar">
            <div className="hiddenLinks" id={openLinks ? "open" : "close"}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            <div className="linkies">
                <Link to="/">Home</Link>
                <Link onClick={scrollToStats}>Stats</Link>
                <Link onClick={scrollToMoments}>Moments</Link>
                <Link onClick={scrollToPictures}>Pictures</Link>
                <Link onClick={scrollToNote}>Note</Link>
                <Link onClick={scrollToComingSoon}>???</Link>
                <button onClick={toggleNavbar}>
                    <MenuIcon />
                </button>
            </div>
        </div>
    );
}

export default Navbar;
