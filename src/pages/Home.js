import React from 'react';
import '../styles/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Lego from '../assets/lego-heart.gif';
import { useRef } from 'react';



export default function Home() {
  const handleClickScroll = () => {
    const element = document.getElementById('stats');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToStats = () => {
    const element = document.getElementById('stats');
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div className="home">
      <Container>
        <img src={Lego} width="800px" />
        <h1>Yay we made it 3 years</h1>
        <p>wowowowow. look at us.</p>
        <button className="btn-scroll" onClick={scrollToStats}>Let's see some stats</button>
      </Container>
    </div>
  );
}
