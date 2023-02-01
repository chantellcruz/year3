import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Banner from "./components/Banner";
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Moments from './pages/Moments';
import Pictures from './pages/Pictures';
import Note from './pages/Note';
import ComingSoon from './pages/ComingSoon';
import ScrollButton from './components/ScrollButton';

function App() {			

		return (
			<div className='App' >
        <Router>
        <Banner />
        <Navbar />
        <Home />
        <Stats />
        <Moments />
        <Pictures />
        <Note />
        <ComingSoon />
        <ScrollButton />
        </Router>
        <Footer />
        </div>
      );
    }

export default App;