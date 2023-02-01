import React from 'react';
import '../styles/Stats.css';
import CountUp, { useCountUp } from 'react-countup';

function Stats() {
  useCountUp({
    ref: 'counter',
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });

  return (
    <div id="stats">
      <h1>Our relationship by the numbers</h1>
      <h3>This feels so very type A of me - I'm sorry.</h3>

      <div className="flex-container">
        <div id="column">
          <CountUp end={49} duration={2.45} enableScrollSpy
            style={{
              fontSize: '80px',
              letterSpacing: '-2px',
              color: '#e6a28b',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600
            }} />
          <p>months of being friends</p>
        </div>
        <div id="column">
          <CountUp end={36} duration={1.8} enableScrollSpy
            style={{
              fontSize: '80px',
              letterSpacing: '-2px',
              color: '#e6a28b',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600
            }} />
          <p>months of dating</p>
        </div>
        <div id="column">
          <CountUp end={8} duration={1} enableScrollSpy
            style={{
              fontSize: '80px',
              letterSpacing: '-2px',
              color: '#e6a28b',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600
            }} />
          <p>national parks visited</p>
        </div>
        <div id="column">
          <CountUp end={1038} duration={4} enableScrollSpy
            style={{
              fontSize: '80px',
              letterSpacing: '-2px',
              color: '#e6a28b',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600
            }} />
          <p>miles apart from each other</p>
        </div>
      </div>

      <div className="flex-container">
        <div id="column">
          <CountUp end={6} duration={1} enableScrollSpy
            style={{
              fontSize: '80px',
              letterSpacing: '-2px',
              color: '#e6a28b',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600
            }} />
          <p>halo campaigns completed</p>
        </div>
        <div id="column">
          <CountUp end={13} duration={2} enableScrollSpy
            style={{
              fontSize: '80px',
              letterSpacing: '-2px',
              color: '#e6a28b',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600
            }} />
          <p>in-person baseball games</p>
        </div>
        <div id="column">
          <CountUp end={15} duration={2} enableScrollSpy
            style={{
              fontSize: '80px',
              letterSpacing: '-2px',
              color: '#e6a28b',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600
            }} />
          <p>states visited</p>
        </div>
        <div id="column">
          <CountUp end={8} duration={1} enableScrollSpy
            style={{
              fontSize: '80px',
              letterSpacing: '-2px',
              color: '#e6a28b',
              fontFamily: 'poppins, sans-serif',
              fontWeight: 600
            }} />
          <p>gaming events</p>
        </div>
      </div>
    </div>

  )
}

export default Stats;