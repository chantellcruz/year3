import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Rainier from '../assets/rainier.png';
import Rainier2 from '../assets/rainier2.png';
import Batuu from '../assets/batuu.png';

function Pictures() {
    
  return (
    <Carousel>
    <div>
        <img src={Rainier} />
        <p className="legend">Legend 1</p>
    </div>
    <div>
        <img src={Rainier2} />
        <p className="legend">Legend 2</p>
    </div>
    <div>
        <img src={Batuu} />
        <p className="legend">Legend 3</p>
    </div>
</Carousel>
  )
}

export default Pictures;
