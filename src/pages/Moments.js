import React from 'react';
import '../styles/Moments.css';
import Rainier from '../assets/rainier.png';
import Rainier2 from '../assets/rainier2.png';
import Batuu from '../assets/batuu.png';

function Moments() {
  return (
    <div id="moments">
      <h1>A few of my favorite moments together</h1>
      <div class="flex-container">
  <div id="column">
  <img src={Rainier} width="450px" />
    <h2>Hiking at rainier</h2>
    <p>the first time, where we could actually see her and when we really started becoming friends</p>
    </div>
  <div id="column">
  <img src={Rainier2} width="450px" />
  <h2>Hiking at rainier pt. 2</h2>
    <p>where i thought we were going to die from "Exposure to the elements"</p>
    </div>
  <div id="column">
  <img src={Batuu} width="450px" />
    <h2>visiting batuu</h2>
    <p>i really enjoyed you enjoying all the star wars things and being at disney finally :-)</p>
    </div>
</div>
    </div>
  )
}

export default Moments
