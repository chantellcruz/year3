import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Moments from "./pages/Moments";
import Pictures from "./pages/Pictures";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Banner from "./components/Banner";
import {useRef} from 'react';

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
        <Switch>

            </Switch>
        </Router>
        </div>
      );
    }

export default App;