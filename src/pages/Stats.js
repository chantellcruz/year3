import React from 'react';
import '../styles/Stats.css';

function Stats() {
  return (
    <div id="stats">
      <h1>Our relationship by the numbers</h1>
      <h3>This feels so very type A of me - I'm sorry.</h3>
      <div className="flex-container">
  <div id="column">
    <h1>3</h1>
    <p>years dating</p>
    </div>
  <div id="column">
    <h1>5</h1>
    <p>national parks visited</p>
    </div>
  <div id="column">
    <h1>13</h1>
    <p>shows watched</p>
    </div>
</div>
<div className="flex-container">
  <div id="column">
    <h1>10</h1>
    <p>states visited</p>
    </div>
  <div id="column">
    <h1>4</h1>
    <p>halo events</p>
    </div>
  <div id="column">
    <h1>69</h1>
    <p>hours of video games played together, probably</p>
    </div>
</div>
    </div>
    
  )
}

export default Stats;
