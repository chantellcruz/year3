import React from 'react';
import Popup from '../assets/coming-soon.png';

function ComingSoon() {
  return (
    <div id="coming-soon" style={{ paddingTop: '10vh' }}>
      <img src={Popup} width="600px" />
      <h1>Coming soon!</h1>
      <div className="paragraph">
        <p>
          A <vday>Valentines Day</vday> update is set to launch on 2/14/2023!
          Be sure to check back here to see what it could beeeee. :D
        </p>
      </div>
    </div>
  )
}

export default ComingSoon;