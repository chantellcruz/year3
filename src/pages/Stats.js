import React from 'react';
import '../styles/Stats.css';

function Stats() {
  
  return (
    <div id="stats">
      <h1>Our relationship by the numbers</h1>
      <h3>This feels so very type A of me - I'm sorry.</h3>
      <div className="flex-container">
      <div id="column">
  <span class="num" data-val="49"><h1>0</h1></span>
    <p>months as friends</p>
    </div>
  <div id="column">
  <span class="num" data-val="36"><h1>0</h1></span>
    <p>months of dating</p>
    </div>
  <div id="column">
  <span class="num" data-val="8"><h1>0</h1></span>
    <p>national parks visited</p>
    </div>
  
</div>
<div className="flex-container">
<div id="column">
  <span class="num" data-val="6"><h1>0</h1></span>
    <p>halo campaigns played together</p>
    </div>
  <div id="column">
  <span class="num" data-val="15"><h1>0</h1></span>
    <p>states visited</p>
    </div>
  <div id="column">
  <span class="num" data-val="8"><h1>0</h1></span>
    <p>gaming events</p>
    </div>
</div>
    </div>
    
  )
}

export default Stats;
