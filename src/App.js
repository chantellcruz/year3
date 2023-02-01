import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Banner from "./components/Banner";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Stats from './pages/Stats';
import Moments from './pages/Moments';
import Pictures from './pages/Pictures';
import Note from './pages/Note';
import ComingSoon from './pages/ComingSoon';

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
        </Router>
        </div>
      );
    }

export default App;