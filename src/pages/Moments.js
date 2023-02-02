import React from 'react';
import '../styles/Moments.css';
import Rainier from '../assets/rainier.png';
import Rainier2 from '../assets/rainier2.png';
import Batuu from '../assets/batuu.png';
import CrazyEyes from '../assets/crazy-eyes.png';
import Lego  from '../assets/lego.png';
import Apples from '../assets/apples.png';

function Moments() {
  return (
    <div id="moments">
      <h1>A few of my favorite moments together</h1>
      <div className="flex-container">
        <div id="column">
          <img src={Rainier} />
          <h2>Hiking at rainier</h2>
          <p>the first time, where we could actually see her and when we really started becoming friends</p>
        </div>
        <div id="column">
          <img src={CrazyEyes} />
          <h2>1st baseball game</h2>
          <p>comerica park is so nice - bonus points for the crazy eyes carousel</p>
        </div>
        <div id="column">
          <img src={Batuu} />
          <h2>visiting batuu</h2>
          <p>i really enjoyed you enjoying all the star wars things and being at disney finally :-{')'}</p>
        </div>
        <div id="column">
        <img src={Lego} />
          <h2>Lego building date</h2>
          <p>it was really fun building different sets, but, together</p>
        </div>
        <div id="column">
          <img src={Rainier2} />
          <h2>Hiking at rainier pt. 2</h2>
          <p>where i thought we were going to die from "exposure to the elements" (but didn't)</p>
        </div>
        <div id="column">
          <img src={Apples} />
          <h2>Apple picking</h2>
          <p>i've never seen apples on a tree before that day, plus that cider & donuts were *chefs kiss*</p>
        </div>
      </div>
    </div>
  )
}

export default Moments;